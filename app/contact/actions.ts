"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    interests: z.array(z.string()).optional(),
    message: z.string().optional(),
    token: z.string().optional(), // reCAPTCHA token
});

async function verifyRecaptcha(token: string | undefined): Promise<boolean> {
    if (!token) return false;

    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        });

        const data = await response.json();
        return data.success && data.score > 0.5; // Ensure score is good enough
    } catch (error) {
        console.error("reCAPTCHA Verification Error:", error);
        return false;
    }
}

export async function sendContactEmail(prevState: any, formData: FormData) {
    try {
        const rawData = {
            name: formData.get("name"),
            email: formData.get("email"),
            interests: formData.getAll("interests"), // Expecting multiple checkboxes with name="interests"
            message: formData.get("message"),
            token: formData.get("token"),
        };

        // Since FormData.getAll returns strings, we don't need to transform much for interests if inputs have same name
        // But in the UI they might not have name="interests". I need to ensure the UI inputs have names.
        // The previous `page.tsx` didn't have names on inputs! I must add them.

        const validatedFields = contactSchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const { name, email, interests, message, token } = validatedFields.data;

        const isHuman = await verifyRecaptcha(token);
        if (!isHuman) {
            return { success: false, message: "reCAPTCHA verification failed. Are you a robot?" };
        }

        const { data, error } = await resend.emails.send({
            from: "NextLevel Contact <info@nextleveldigital.ca>",
            to: ["info@nextleveldigital.ca"],
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interests:</strong> ${interests?.join(", ") || "None selected"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, message: `Failed to send email: ${error.message}` };
        }

        return { success: true, message: "Message sent successfully!" };
    } catch (err) {
        console.error("Server Action Error:", err);
        return { success: false, message: "An unexpected error occurred." };
    }
}
