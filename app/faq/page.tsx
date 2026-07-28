"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        question: "How long will my project take?",
        answer: "Project timelines vary depending on scope and complexity. A custom home typically takes 8–18 months, commercial projects 6–24 months, and renovations 1–6 months. We provide a detailed schedule during the planning phase.",
    },
    {
        question: "How do I request a quotation?",
        answer: "Simply fill out our contact form or call us directly. We'll schedule a free consultation to discuss your project, then prepare a detailed cost estimate and proposal within 5–7 business days.",
    },
    {
        question: "Are building permits included in your service?",
        answer: "Yes. We handle all necessary building permits, regulatory submissions, and authority approvals as part of our construction management service. Permit fees are included in the project cost estimate.",
    },
    {
        question: "Do you provide warranties?",
        answer: "Yes. We provide a 12-month defects warranty on all completed projects, covering structural, mechanical, electrical, and finishing works. Extended warranties are available for specific components.",
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept bank transfers, checks, and online payments. Projects are typically billed on a progress payment schedule tied to construction milestones, ensuring transparency and accountability.",
    },
    {
        question: "Can you handle both design and construction?",
        answer: "Absolutely. We are a full-service design-build firm, meaning we handle everything from architectural design, engineering, permits, construction, and interior fit-out under one roof.",
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes. We serve clients across the Americas, Europe, Asia, and the Pacific. We have experience managing international projects remotely with regular video updates, detailed reports, and on-site supervision.",
    },
    {
        question: "What is your minimum project budget?",
        answer: "We work with a wide range of budgets. Our minimum project engagement is typically PHP 500,000 or equivalent for renovations, and PHP 2,000,000+ for new construction. Contact us to discuss your specific budget.",
    },
    {
        question: "Can I make changes during construction?",
        answer: "Yes, changes can be accommodated during construction. We use a formal variation order process to document any changes, their cost impact, and timeline implications before proceeding.",
    },
    {
        question: "Do you offer 3D visualization before construction?",
        answer: "Yes. We provide photorealistic 3D renders and Lumion animations so you can see exactly how your project will look before a single brick is laid. This is included in our design service.",
    },
    {
        question: "How do you ensure quality on site?",
        answer: "We have a dedicated quality assurance team that conducts regular inspections at every construction stage. We follow ISO 9001 quality management standards and maintain detailed inspection records.",
    },
    {
        question: "What safety standards do you follow?",
        answer: "Safety is our top priority. We comply with OSHA standards, conduct daily toolbox meetings, require full PPE compliance, perform regular risk assessments, and maintain a comprehensive emergency response plan.",
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <button
                className="flex w-full items-center justify-between px-8 py-6 text-left"
                onClick={() => setOpen((v) => !v)}
            >
                <span className="text-base font-semibold text-slate-950">{question}</span>
                <span className={`ml-4 flex-shrink-0 text-orange-500 transition-transform ${open ? "rotate-45" : ""}`}>
                    ✚
                </span>
            </button>
            {open && (
                <div className="border-t border-slate-100 px-8 py-6">
                    <p className="leading-7 text-slate-600">{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function FAQPage() {
    return (
        <main>
            {/* ── HERO ── */}
            <section className="bg-slate-950 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">FAQ</p>
                        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                            Frequently Asked Questions
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Everything you need to know about working with JHBC Design and Build.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── FAQ LIST ── */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-950">Still Have Questions?</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Our team is happy to answer any questions about your project.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
