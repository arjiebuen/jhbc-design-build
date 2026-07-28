import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services — JHBC Design and Build",
    description: "Explore our full range of design, construction, and engineering services for residential, commercial, and industrial projects.",
};

const serviceCategories = [
    {
        category: "Residential Construction",
        icon: "🏠",
        services: [
            { title: "Custom Homes", description: "Bespoke residential homes designed and built to your exact specifications and lifestyle." },
            { title: "House Renovation", description: "Complete renovation and remodeling services that breathe new life into existing spaces." },
            { title: "House Extension", description: "Seamless extensions that expand your living space while maintaining architectural harmony." },
            { title: "Interior Fit-Out", description: "Premium interior fit-outs with curated finishes, fixtures, and furnishings." },
        ],
    },
    {
        category: "Commercial Construction",
        icon: "🏢",
        services: [
            { title: "Office Buildings", description: "Modern, functional office spaces designed to boost productivity and reflect your brand." },
            { title: "Retail Stores", description: "Engaging retail environments that attract customers and drive sales." },
            { title: "Warehouses", description: "Efficient, durable warehouse facilities built for operational excellence." },
            { title: "Mixed-Use Buildings", description: "Versatile developments combining residential, commercial, and retail spaces." },
        ],
    },
    {
        category: "Industrial Construction",
        icon: "🏗️",
        services: [
            { title: "Factories", description: "Purpose-built factory facilities designed for maximum operational efficiency." },
            { title: "Manufacturing Facilities", description: "Specialized manufacturing environments with precision engineering." },
            { title: "Structural Steel Works", description: "Heavy-duty structural steel fabrication and installation." },
        ],
    },
    {
        category: "Engineering Services",
        icon: "📐",
        services: [
            { title: "Structural Design", description: "Comprehensive structural engineering design and analysis." },
            { title: "Architectural Design", description: "Creative and functional architectural design from concept to documentation." },
            { title: "Electrical Design", description: "Complete electrical system design and specifications." },
            { title: "Plumbing Design", description: "Efficient plumbing and sanitation system design." },
            { title: "Mechanical Design", description: "HVAC and mechanical systems design for optimal comfort and efficiency." },
            { title: "Quantity Surveying", description: "Accurate cost estimation and bill of quantities preparation." },
        ],
    },
    {
        category: "Construction Management",
        icon: "📋",
        services: [
            { title: "Project Management", description: "End-to-end project management ensuring on-time, on-budget delivery." },
            { title: "Site Supervision", description: "Experienced site supervisors ensuring quality and safety at every stage." },
            { title: "Quality Assurance", description: "Rigorous quality control processes and inspections throughout construction." },
            { title: "Safety Management", description: "Comprehensive safety programs, risk assessments, and compliance management." },
            { title: "Scheduling", description: "Detailed project scheduling and progress monitoring." },
            { title: "Procurement", description: "Strategic procurement of materials and subcontractors for best value." },
        ],
    },
    {
        category: "3D Visualization",
        icon: "🖥️",
        services: [
            { title: "Architectural Renders", description: "Photorealistic exterior and interior renders that bring designs to life." },
            { title: "Lumion Animations", description: "Cinematic walkthroughs and flythrough animations for presentations." },
            { title: "Virtual Tours", description: "Immersive virtual tours that let clients experience spaces before construction." },
        ],
    },
];

export default function ServicesPage() {
    return (
        <main>
            {/* ── HERO ── */}
            <section className="bg-slate-950 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Services</p>
                        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                            A Full-Service Offering for Modern Development.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            We support clients with complete design-build services, from initial strategy through final project delivery.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── SERVICE CATEGORIES ── */}
            {serviceCategories.map((category, i) => (
                <section key={category.category} className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mb-10 flex items-center gap-4">
                            <span className="text-4xl">{category.icon}</span>
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-950">{category.category}</h2>
                            </div>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {category.services.map((service) => (
                                <div
                                    key={service.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
                                >
                                    <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
                                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* ── CTA ── */}
            <section className="bg-orange-500 py-20">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
                    <h2 className="text-4xl font-bold text-white">Need a Custom Solution?</h2>
                    <p className="mt-4 text-lg text-orange-100">
                        Contact us to discuss your specific project requirements and get a tailored proposal.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-orange-500 transition hover:bg-orange-50"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </main>
    );
}
