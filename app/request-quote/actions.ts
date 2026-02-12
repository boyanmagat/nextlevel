"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const quoteSchema = z.object({
    name: z.string().min(1, "Name is required"),
    company: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    services: z.array(z.string()).min(1, "Please select at least one service"),
    description: z.string().min(1, "Project description is required"),
    projectType: z.string().optional(),
    clarity: z.string().optional(),
    budget: z.string().optional(),
    consent: z.boolean(),
    token: z.string().optional(),
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
        return data.success && data.score > 0.5;
    } catch (error) {
        console.error("reCAPTCHA Verification Error:", error);
        return false;
    }
}

export async function sendQuoteRequest(prevState: any, formData: FormData) {
    try {
        const rawData = {
            name: formData.get("name"),
            company: formData.get("company"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            services: formData.getAll("services"),
            description: formData.get("description"),
            projectType: formData.get("projectType"),
            clarity: formData.get("clarity"),
            budget: formData.get("budget"),
            consent: formData.get("consent") === "on" || formData.get("consent") === "true",
            token: formData.get("token"),
        };

        const validatedFields = quoteSchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const { name, company, email, phone, services, description, projectType, clarity, budget, token } = validatedFields.data;

        const isHuman = await verifyRecaptcha(token);
        if (!isHuman) {
            return { success: false, message: "reCAPTCHA verification failed. Are you a robot?" };
        }

        const { data, error } = await resend.emails.send({
            from: "NextLevel Quote <onboarding@resend.dev>",
            to: ["info@nextleveldigital.ca"],
            subject: `New Quote Request from ${name} at ${company || "Unknown Company"}`,
            html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Services:</strong> ${services.join(", ")}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Clarity:</strong> ${clarity}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, message: `Failed to send request: ${error.message}` };
        }

        return { success: true, message: "Request sent successfully!" };
    } catch (err) {
        console.error("Server Action Error:", err);
        return { success: false, message: "An unexpected error occurred." };
    }
}
