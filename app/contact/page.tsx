"use client";

import { motion } from "framer-motion";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { sendContactEmail } from "./actions";

const initialState = {
    message: "",
    success: false,
};

function ContactForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
    const router = useRouter();

    useEffect(() => {
        if (state?.success) {
            router.push("/thank-you");
        }
    }, [state, router]);

    const handleSubmit = async (formData: FormData) => {
        if (!executeRecaptcha) {
            console.log("Execute recaptcha not yet available");
            return;
        }

        const token = await executeRecaptcha("contact_submit");
        formData.append("token", token);
        formAction(formData);
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            action={handleSubmit}
            className="space-y-8 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Name</label>
                    <input name="name" type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-pink-500 focus:outline-none transition-colors text-white" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email</label>
                    <input name="email" type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-pink-500 focus:outline-none transition-colors text-white" placeholder="john@example.com" required />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">What are you interested in?</label>
                <div className="flex flex-wrap gap-4">
                    {["Next.js Migration", "Headless CMS", "Mobile App", "Design System", "Other"].map(opt => (
                        <label key={opt} className="cursor-pointer group">
                            <input type="checkbox" name="interests" value={opt} className="hidden peer" />
                            <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-black/30 peer-checked:bg-pink-500 peer-checked:text-white peer-checked:border-pink-500 transition-all font-medium text-sm text-gray-400 group-hover:border-white/30">
                                {opt}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Message</label>
                <textarea name="message" className="w-full h-40 bg-black/50 border border-white/10 rounded-lg p-4 focus:border-pink-500 focus:outline-none transition-colors text-white" placeholder="Tell us about your project..."></textarea>
            </div>

            <button disabled={isPending} type="submit" className="w-full bg-white text-black font-bold text-xl py-4 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100">
                {isPending ? "Sending..." : "Send Inquiry"}
            </button>
            {state?.message && (
                <p className={`text-center mt-4 ${state.success ? 'text-green-500' : 'text-red-500'}`}>
                    {state.message}
                </p>
            )}
        </motion.form>
    );
}

export default function ContactPage() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}>
            <div className="flex flex-col min-h-screen pt-24 px-4">
                <div className="max-w-4xl mx-auto w-full">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-black mb-12 tracking-tighter text-center"
                    >
                        LET'S <span className="text-pink-500">TALK</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-center text-gray-400 mb-16"
                    >
                        Ready to build something extraordinary? Tell us about your project.
                    </motion.p>

                    <ContactForm />

                    {/* Contact Details */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div>
                            <h3 className="font-bold text-white mb-2">EMAIL</h3>
                            <p className="text-gray-400">create@nextlevelagency.ca</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2">STUDIO</h3>
                            <p className="text-gray-400">Vancouver, British Columbia, Canada</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2">SOCIAL</h3>
                            <div className="flex gap-4 justify-center md:justify-start text-gray-400">
                                <a href="#" className="hover:text-white">Twitter</a>
                                <a href="#" className="hover:text-white">LinkedIn</a>
                                <a href="#" className="hover:text-white">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GoogleReCaptchaProvider>
    );
}
