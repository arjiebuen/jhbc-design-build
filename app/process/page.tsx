import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Process — JHBC Design and Build",
    description: "Discover our step-by-step construction process from consultation to project turnover.",
};

const steps = [
    {
        step: "01",
        title: "Initial Consultation",
        description: "We begin with a detailed discussion of your vision, goals, budget, and timeline. This helps us understand your needs and determine the best approach for your project.",
        details: ["Project brief review", "Budget discussion", "Timeline planning", "Site assessment scheduling"],
    },
    {
        step: "02",
        title: "Site Inspection",
        description: "Our team conducts a thorough on-site assessment to evaluate existing conditions, constraints, and opportunities that will inform the design and construction plan.",
        details: ["Topographic survey", "Soil investigation", "Utility mapping", "Zoning compliance check"],
    },
    {
        step: "03",
        title: "Design & Planning",
        description: "Our architects and engineers develop comprehensive design documents, from concept sketches to detailed construction drawings, incorporating your feedback at every stage.",
        details: ["Concept design", "3D visualization", "Structural engineering", "MEP design"],
    },
    {
        step: "04",
        title: "Cost Estimation",
        description: "We prepare a detailed bill of quantities and cost estimate, ensuring full transparency on all project costs before any work begins.",
        details: ["Bill of quantities", "Material costing", "Labor estimation", "Contingency planning"],
    },
    {
        step: "05",
        title: "Contract Signing",
        description: "Once the design and costs are approved, we formalize the agreement with a clear contract outlining scope, timeline, payment schedule, and warranties.",
        details: ["Contract preparation", "Scope finalization", "Payment schedule", "Warranty terms"],
    },
    {
        step: "06",
        title: "Permitting",
        description: "We handle all necessary building permits, regulatory approvals, and compliance documentation on your behalf.",
        details: ["Building permit application", "Regulatory submissions", "Authority approvals", "Compliance documentation"],
    },
    {
        step: "07",
        title: "Construction",
        description: "Our experienced construction team executes the project with precision, maintaining strict quality control, safety standards, and regular progress updates.",
        details: ["Site mobilization", "Foundation works", "Structural construction", "MEP installation", "Finishing works"],
    },
    {
        step: "08",
        title: "Quality Inspection",
        description: "Before handover, we conduct comprehensive quality inspections to ensure every aspect of the project meets our high standards and your expectations.",
        details: ["Structural inspection", "MEP testing", "Finishing review", "Defect rectification"],
    },
    {
        step: "09",
        title: "Project Turnover",
        description: "We formally hand over the completed project with all documentation, warranties, and a thorough walkthrough to ensure your complete satisfaction.",
        details: ["Final walkthrough", "Documentation handover", "As-built drawings", "Warranty certificates"],
    },
    {
        step: "10",
        title: "Warranty Support",
        description: "Our commitment doesn't end at handover. We provide ongoing warranty support and maintenance assistance to protect your investment.",
        details: ["12-month defects warranty", "Maintenance guidance", "Emergency support", "Post-completion review"],
    },
];

export default function ProcessPage() {
    return (
        <main>
            {/* ── HERO ── */}
            <section className="bg-slate-950 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">How We Work</p>
                        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                            Our Construction Process
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            A clear, structured process that keeps you informed, in control, and confident at every stage of your project.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── STEPS ── */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <div className="space-y-12">
                        {steps.map((item, i) => (
                            <div key={item.step} className="relative flex gap-8">
                                {/* Line */}
                                {i < steps.length - 1 && (
                                    <div className="absolute left-7 top-16 h-full w-0.5 bg-orange-100" />
                                )}
                                {/* Step number */}
                                <div className="flex-shrink-0">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/30">
                                        {item.step}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 p-8">
                                    <h2 className="text-2xl font-bold text-slate-950">{item.title}</h2>
                                    <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                                        {item.details.map((detail) => (
                                            <li key={detail} className="flex items-center gap-2 text-sm text-slate-700">
                                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-orange-500 py-20">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
                    <h2 className="text-4xl font-bold text-white">Ready to Begin?</h2>
                    <p className="mt-4 text-lg text-orange-100">
                        Start with a free consultation and let us guide you through every step.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-orange-500 transition hover:bg-orange-50"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
