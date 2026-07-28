import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { sendInquiry } from "@/app/actions/contact";

export const metadata: Metadata = {
    title: "Contact Us — JHBC Design and Build",
    description: "Get in touch with JHBC Design and Build for a free consultation and project quote.",
};

const contactInfo = [
    { icon: "📧", label: "Email", value: "info@jhbcdesignbuild.com" },
    { icon: "📞", label: "Phone", value: "+63 9XX XXX XXXX" },
    { icon: "📍", label: "Locations", value: "Serving clients across the Americas, Europe, and Asia." },
    { icon: "🕐", label: "Business Hours", value: "Monday – Friday, 8:00 AM – 6:00 PM" },
];

export default function ContactPage() {
    return (
        <main>
            {/* ── HERO ── */}
            <section className="bg-slate-950 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Contact Us</p>
                        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                            Let&apos;s Build Something Great Together.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Share your brief, timeline, and vision. We&apos;ll get back to you within 24 hours with a tailored response.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CONTACT CONTENT ── */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-950">Get in Touch</h2>
                                <p className="mt-4 leading-7 text-slate-600">
                                    Whether you have a project in mind or just want to explore possibilities, our team is ready to help.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactInfo.map((info) => (
                                    <div key={info.label} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                                        <span className="text-2xl">{info.icon}</span>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{info.label}</p>
                                            <p className="mt-1 text-sm text-slate-700">{info.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Follow Us</p>
                                <div className="mt-4 flex gap-4">
                                    {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((social) => (
                                        <span
                                            key={social}
                                            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-orange-300 hover:text-orange-500 cursor-pointer"
                                        >
                                            {social}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm action={sendInquiry} />
                    </div>
                </div>
            </section>
        </main>
    );
}
