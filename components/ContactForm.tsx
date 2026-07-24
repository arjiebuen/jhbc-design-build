"use client";

import { useState } from "react";

interface ContactFormProps {
    action: (
        formData: FormData
    ) => Promise<{
        success: boolean;
        error?: string;
        message?: string;
    }>;
}

export default function ContactForm({
    action,
}: ContactFormProps) {

    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");

    const [message, setMessage] = useState("");


    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setStatus("sending");
        setMessage("");


        const formData = new FormData(
            event.currentTarget
        );


        try {

            const result = await action(formData);


            if (!result.success) {
                throw new Error(
                    result.error ??
                    "Unable to submit inquiry."
                );
            }


            setStatus("success");

            setMessage(
                result.message ??
                "Thank you! Your inquiry has been sent successfully."
            );


            event.currentTarget.reset();


        } catch (error) {

            setStatus("error");

            setMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong."
            );

        }
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl"
        >

            {/* Honeypot */}
            <input
                type="text"
                name="website"
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
            />


            {/* Name */}
            <div>
                <label className="font-semibold">
                    Name
                </label>

                <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border p-3"
                    placeholder="Your name"
                />
            </div>


            {/* Email */}
            <div>
                <label className="font-semibold">
                    Email
                </label>

                <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-xl border p-3"
                    placeholder="your@email.com"
                />
            </div>


            {/* Phone */}
            <div>
                <label className="font-semibold">
                    Phone
                </label>

                <input
                    type="tel"
                    name="phone"
                    placeholder="+63 9XX XXX XXXX"
                    className="mt-2 w-full rounded-xl border p-3"
                />
            </div>


            {/* Subject */}
            <div>
                <label className="font-semibold">
                    Subject
                </label>

                <input
                    name="subject"
                    required
                    className="mt-2 w-full rounded-xl border p-3"
                    placeholder="House design inquiry"
                />
            </div>


            {/* Message */}
            <div>
                <label className="font-semibold">
                    Message
                </label>

                <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full rounded-xl border p-3"
                    placeholder="Tell us about your project..."
                />
            </div>


            <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-black px-6 py-3 text-white disabled:opacity-50"
            >
                {status === "sending"
                    ? "Sending..."
                    : "Send Inquiry"}
            </button>


            {message && (
                <p
                    className={
                        status === "success"
                            ? "text-green-600"
                            : "text-red-600"
                    }
                >
                    {message}
                </p>
            )}

        </form>
    );
}