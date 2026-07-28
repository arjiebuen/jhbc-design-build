"use client";

import { useState } from "react";

interface ContactFormProps {
    action: (formData: FormData) => Promise<{
        success: boolean;
        error?: string;
        message?: string;
    }>;
}

const projectTypes = [
    "Custom Home",
    "House Renovation",
    "House Extension",
    "Interior Fit-Out",
    "Office Building",
    "Retail Store",
    "Warehouse",
    "Industrial Facility",
    "Architectural Design",
    "3D Visualization",
    "Other",
];

const budgetRanges = [
    "Under PHP 500,000",
    "PHP 500,000 – 1,000,000",
    "PHP 1,000,000 – 5,000,000",
    "PHP 5,000,000 – 10,000,000",
    "PHP 10,000,000 – 50,000,000",
    "Over PHP 50,000,000",
    "Prefer not to say",
];

export default function ContactForm({ action }: ContactFormProps) {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("sending");
        setMessage("");

        const formData = new FormData(event.currentTarget);

        try {
            const result = await action(formData);

            if (!result.success) {
                throw new Error(result.error ?? "Unable to submit inquiry.");
            }

            setStatus("success");
            setMessage(result.message ?? "Thank you! Your inquiry has been sent successfully.");
            event.currentTarget.reset();
        } catch (error) {
            setStatus("error");
            setMessage(error instanceof Error ? error.message : "Something went wrong.");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl"
        >
            <div>
                <h3 className="text-2xl font-bold text-slate-950">Request a Quote</h3>
                <p className="mt-2 text-sm text-slate-500">Fill in the details below and we&apos;ll get back to you within 24 hours.</p>
            </div>

            {/* Honeypot */}
            <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" />

            {/* Name + Company */}
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                    <input
                        name="name"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        placeholder="Your full name"
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold text-slate-700">Company</label>
                    <input
                        name="company"
                        className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        placeholder="Company name (optional)"
                    />
                </div>
            </div>

            {/* Email + Phone */}
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        placeholder="+63 9XX XXX XXXX"
                    />
                </div>
            </div>

            {/* Project Type */}
            <div>
                <label className="text-sm font-semibold text-slate-700">Project Type *</label>
                <select
                    name="subject"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            {/* Location + Budget */}
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="text-sm font-semibold text-slate-700">Project Location</label>
                    <input
                        name="location"
                        className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        placeholder="City, Country"
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold text-slate-700">Budget Range</label>
                    <select
                        name="budget"
                        className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Timeline */}
            <div>
                <label className="text-sm font-semibold text-slate-700">Desired Timeline</label>
                <input
                    name="timeline"
                    className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    placeholder="e.g. Start in 3 months, complete within 1 year"
                />
            </div>

            {/* Message */}
            <div>
                <label className="text-sm font-semibold text-slate-700">Project Description *</label>
                <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    placeholder="Tell us about your project, requirements, and any specific details..."
                />
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-600 disabled:opacity-50"
            >
                {status === "sending" ? "Sending..." : "Send Inquiry"}
            </button>

            {message && (
                <p className={`rounded-xl p-4 text-sm font-medium ${status === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    {message}
                </p>
            )}
        </form>
    );
}
