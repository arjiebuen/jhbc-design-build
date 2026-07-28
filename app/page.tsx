"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const heroImages = [
    "/Messenger_creation_1E2CD134-D60D-4BD9-AA8E-943015D3C03B.jpeg",
    "/Messenger_creation_C60A7B07-7C53-40E1-A707-DED85C783695.jpeg",
    "/Messenger_creation_C68299B0-9C8C-4B8F-A7F8-755E35985FEE.jpeg",
    "/Messenger_creation_F49592A4-4435-4941-A701-46F6ACB76E80.jpeg",
    "/Messenger_creation_FD400520-2714-4F9B-9F06-FB9DF0A03044.jpeg",
];

const stats = [
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 250, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "Expert Team Members" },
];

const services = [
    {
        icon: "🏠",
        title: "Residential Construction",
        description: "Custom homes, renovations, extensions, and luxury interior fit-outs tailored to your lifestyle.",
    },
    {
        icon: "🏢",
        title: "Commercial Construction",
        description: "Office buildings, retail stores, warehouses, and mixed-use developments built to perform.",
    },
    {
        icon: "🏗️",
        title: "Architectural Design",
        description: "Structural, architectural, electrical, and mechanical design with precision documentation.",
    },
    {
        icon: "📐",
        title: "Construction Management",
        description: "Full project management, site supervision, quality assurance, and safety management.",
    },
    {
        icon: "🎨",
        title: "Interior Design",
        description: "Curated finishes, refined textures, and functional styling for discerning clients.",
    },
    {
        icon: "🖥️",
        title: "3D Visualization",
        description: "Photorealistic Lumion renders and walkthroughs that bring your vision to life before construction.",
    },
];

const whyUs = [
    { icon: "🏆", title: "10+ Years Experience", description: "Proven track record across residential, commercial, and industrial projects." },
    { icon: "✅", title: "Licensed Engineers", description: "Fully licensed and certified team of engineers, architects, and specialists." },
    { icon: "⏱️", title: "On-Time Delivery", description: "98% of our projects are delivered on schedule and within budget." },
    { icon: "🛡️", title: "Safety First", description: "Strict PPE compliance, daily toolbox meetings, and risk assessments on every site." },
    { icon: "💰", title: "Competitive Pricing", description: "Transparent cost estimation with no hidden fees or surprises." },
    { icon: "🌍", title: "Global Delivery", description: "Serving clients across the Americas, Europe, Asia, and the Pacific." },
];

const process = [
    { step: "01", title: "Consultation", description: "We discuss your vision, requirements, and project goals." },
    { step: "02", title: "Site Inspection", description: "Our team conducts a thorough site assessment and survey." },
    { step: "03", title: "Design & Planning", description: "Architectural and engineering designs are developed and refined." },
    { step: "04", title: "Estimation", description: "Detailed cost estimation and project timeline are prepared." },
    { step: "05", title: "Construction", description: "Precision construction with quality assurance at every stage." },
    { step: "06", title: "Project Turnover", description: "Final inspection, handover, and warranty support provided." },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const duration = 1800;
                    const step = Math.ceil(value / (duration / 16));
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(start);
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <span ref={ref} className="text-4xl font-bold text-white">
            {count}{suffix}
        </span>
    );
}

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % heroImages.length);
        }, 6000);
        return () => window.clearInterval(interval);
    }, []);

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative min-h-[92vh] overflow-hidden bg-slate-950">
                <div className="absolute inset-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={heroImages[activeSlide]}
                            src={heroImages[activeSlide]}
                            alt={`Hero slide ${activeSlide + 1}`}
                            className="absolute inset-0 h-full w-full object-cover"
                            initial={{ opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.8, ease: "easeOut" }}
                        />
                    </AnimatePresence>
                </div>
                <div className="absolute inset-0 bg-slate-950/60" />

                <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-3xl space-y-8"
                    >
                        <span className="inline-flex rounded-full bg-orange-500/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
                            International Design-Build Studio
                        </span>
                        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Built to Impress,<br />
                            <span className="text-orange-400">Engineered</span> to Perform.
                        </h1>
                        <p className="max-w-xl text-lg leading-8 text-slate-200">
                            JHBC Design and Build delivers premium residential, commercial, and industrial construction with precision, luxury, and global reach.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
                            >
                                Request a Quote
                            </Link>
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
                            >
                                View Our Projects
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                            {["Luxury Residential", "Commercial Interiors", "Industrial Construction", "Global Delivery"].map((tag) => (
                                <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Slide indicators */}
                    <div className="absolute bottom-10 left-6 flex gap-2 lg:left-8">
                        {heroImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveSlide(i)}
                                className={`h-1.5 rounded-full transition-all ${i === activeSlide ? "w-8 bg-orange-500" : "w-3 bg-white/40"}`}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="bg-orange-500 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                <p className="mt-2 text-sm font-medium text-orange-100">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">What We Do</p>
                        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
                            Full-Service Design & Construction
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            From concept to completion, we deliver every phase of your project with precision and care.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-lg"
                            >
                                <span className="text-4xl">{service.icon}</span>
                                <h3 className="mt-4 text-xl font-semibold text-slate-950">{service.title}</h3>
                                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:border-orange-500 hover:text-orange-500"
                        >
                            View All Services →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="bg-slate-950 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Why Choose Us</p>
                        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">
                            The JHBC Difference
                        </h2>
                        <p className="mt-4 text-lg text-slate-400">
                            We combine technical expertise, creative design, and reliable delivery to exceed expectations on every project.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {whyUs.map((item) => (
                            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                                <span className="text-3xl">{item.icon}</span>
                                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">How We Work</p>
                        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
                            Our Construction Process
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            A clear, structured process that keeps you informed and in control at every stage.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {process.map((item) => (
                            <div key={item.step} className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8">
                                <span className="text-5xl font-black text-orange-500/20">{item.step}</span>
                                <h3 className="mt-2 text-xl font-semibold text-slate-950">{item.title}</h3>
                                <p className="mt-3 text-slate-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            href="/process"
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:border-orange-500 hover:text-orange-500"
                        >
                            See Full Process →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="bg-orange-500 py-20">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Ready to Start Your Project?
                    </h2>
                    <p className="mt-6 text-lg text-orange-100">
                        Contact our team today for a free consultation and detailed project estimate.
                    </p>
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-orange-500 transition hover:bg-orange-50"
                        >
                            Request a Free Quote
                        </Link>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
