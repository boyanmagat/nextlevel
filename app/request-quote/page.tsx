"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useActionState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { sendQuoteRequest } from "./actions";

type FormData = {
    name: string;
    company: string;
    email: string;
    phone: string;
    services: string[];
    description: string;
    projectType: string;
    clarity: string;
    budget: string;
    consent: boolean;
};

const SERVICES = ["Website", "Ecommerce", "App", "Migration", "Custom System", "Not sure"];
const PROJECT_TYPES = ["Not sure", "Standard", "Custom", "Complex"];
const CLARITY_LEVELS = ["Not sure", "Somewhat defined", "Very well defined"];
const BUDGET_RANGES = ["Not sure", "Exploring options", "Budget defined", "Budget flexible"];

function QuoteForm() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [state, formAction, isPending] = useActionState(sendQuoteRequest, { success: false, message: "" });
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        company: "",
        email: "",
        phone: "",
        services: [],
        description: "",
        projectType: "",
        clarity: "",
        budget: "",
        consent: false,
    });
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const updateField = (field: keyof FormData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const toggleService = (service: string) => {
        setFormData((prev) => {
            const services = prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service];
            return { ...prev, services };
        });
        if (errors.services) {
            setErrors((prev) => ({ ...prev, services: undefined }));
        }
    };

    const validateStep1 = () => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
        if (formData.services.length === 0) newErrors.services = "Please select at least one service";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        if (!formData.description.trim()) newErrors.description = "Project description is required";
        if (!formData.consent) newErrors.consent = "You must agree to the terms";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (step === 1) {
            if (validateStep1()) {
                setStep(2);
            }
        }
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateStep2()) {
            if (!executeRecaptcha) {
                console.log("Execute recaptcha not yet available");
                return;
            }

            const token = await executeRecaptcha("quote_submit");

            const payload = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach(v => payload.append(key, v));
                } else if (typeof value === 'boolean') {
                    // Send "true" or "on"
                    if (value) payload.append(key, "true");
                } else {
                    payload.append(key, value.toString());
                }
            });
            payload.append("token", token);

            // Execute server action
            formAction(payload);
        }
    };

    return (
        <div className="max-w-4xl mx-auto w-full mb-24">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                    START YOUR <span className="text-pink-500">PROJECT</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Tell us about your goals and we&apos;ll help you build something extraordinary.
                    Fill out the form below to get started.
                </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-full bg-white/10 h-1 mb-12 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: step === 1 ? "50%" : "100%" }}
                    className="h-full bg-pink-500"
                    transition={{ duration: 0.5 }}
                />
            </div>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10"
                noValidate
            >
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                        Name <span className="text-pink-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`w-full bg-black/50 border rounded-lg p-4 focus:outline-none transition-colors text-white ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-pink-500'}`}
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => updateField("name", e.target.value)}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-pink-500 focus:outline-none transition-colors text-white"
                                        placeholder="Acme Inc."
                                        value={formData.company}
                                        onChange={(e) => updateField("company", e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                        Email <span className="text-pink-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className={`w-full bg-black/50 border rounded-lg p-4 focus:outline-none transition-colors text-white ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-pink-500'}`}
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => updateField("email", e.target.value)}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-pink-500 focus:outline-none transition-colors text-white"
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={(e) => updateField("phone", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                    Service Needed <span className="text-pink-500">*</span>
                                </label>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {SERVICES.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => toggleService(service)}
                                            className={`px-4 py-2 rounded-full border transition-all font-medium text-sm ${formData.services.includes(service)
                                                ? "bg-pink-500 text-white border-pink-500"
                                                : "bg-black/30 text-gray-400 border-white/10 hover:border-white/30"
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                                {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="bg-white text-black font-bold text-lg px-8 py-3 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
                                >
                                    Next Step →
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-8"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                    Project Description <span className="text-pink-500">*</span>
                                </label>
                                <textarea
                                    className={`w-full h-32 bg-black/50 border rounded-lg p-4 focus:outline-none transition-colors text-white ${errors.description ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-pink-500'}`}
                                    placeholder="Describe your project, goals, and requirements..."
                                    value={formData.description}
                                    onChange={(e) => updateField("description", e.target.value)}
                                />
                                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                        Project Type
                                    </label>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {PROJECT_TYPES.map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => updateField("projectType", type)}
                                                className={`px-4 py-2 rounded-full border transition-all font-medium text-sm ${formData.projectType === type
                                                    ? "bg-pink-500 text-white border-pink-500"
                                                    : "bg-black/30 text-gray-400 border-white/10 hover:border-white/30"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                        Project Clarity
                                    </label>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {CLARITY_LEVELS.map((level) => (
                                            <button
                                                key={level}
                                                type="button"
                                                onClick={() => updateField("clarity", level)}
                                                className={`px-4 py-2 rounded-full border transition-all font-medium text-sm ${formData.clarity === level
                                                    ? "bg-pink-500 text-white border-pink-500"
                                                    : "bg-black/30 text-gray-400 border-white/10 hover:border-white/30"
                                                    }`}
                                            >
                                                {level}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                    Project Budget
                                </label>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {BUDGET_RANGES.map((range) => (
                                        <button
                                            key={range}
                                            type="button"
                                            onClick={() => updateField("budget", range)}
                                            className={`px-4 py-2 rounded-full border transition-all font-medium text-sm ${formData.budget === range
                                                ? "bg-pink-500 text-white border-pink-500"
                                                : "bg-black/30 text-gray-400 border-white/10 hover:border-white/30"
                                                }`}
                                        >
                                            {range}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-white/20 bg-black/50 transition-all checked:border-pink-500 checked:bg-pink-500 hover:border-pink-500/50"
                                            checked={formData.consent}
                                            onChange={(e) => updateField("consent", e.target.checked)}
                                        />
                                        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className={`text-sm transition-colors ${errors.consent ? 'text-red-500' : 'text-gray-400 group-hover:text-gray-300'}`}>
                                        I agree to be contacted by email and/or phone about this project. <span className="text-pink-500">*</span>
                                    </span>
                                </label>
                                {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
                            </div>

                            <div className="pt-4 flex justify-between items-center">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="text-gray-400 hover:text-white font-medium px-4 py-2 transition-colors"
                                >
                                    ← Back
                                </button>
                                <button
                                    disabled={isPending}
                                    type="submit"
                                    className="bg-white text-black font-bold text-lg px-8 py-3 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
                                >
                                    {isPending ? "Sending..." : "Submit Request"}
                                </button>
                            </div>
                            {state?.message && (
                                <p className={`text-center mt-4 ${state.success ? 'text-green-500' : 'text-red-500'}`}>
                                    {state.message}
                                </p>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.form>
            <div className="mt-8 text-center text-xs text-gray-600">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </div>
        </div>
    );
}

export default function RequestQuotePage() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}>
            <div className="flex flex-col min-h-screen pt-24 px-4 bg-black text-white">
                <QuoteForm />
            </div>
        </GoogleReCaptchaProvider>
    );
}
