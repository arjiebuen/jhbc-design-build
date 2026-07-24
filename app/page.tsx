"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
    "/Messenger_creation_1E2CD134-D60D-4BD9-AA8E-943015D3C03B.jpeg",
    "/Messenger_creation_C60A7B07-7C53-40E1-A707-DED85C783695.jpeg",
    "/Messenger_creation_C68299B0-9C8C-4B8F-A7F8-755E35985FEE.jpeg",
    "/Messenger_creation_F49592A4-4435-4941-A701-46F6ACB76E80.jpeg",
    "/Messenger_creation_FD400520-2714-4F9B-9F06-FB9DF0A03044.jpeg",
];

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % heroImages.length);
        }, 8000);

        return () => window.clearInterval(interval);
    }, []);
    return (
        <>
            <section className="relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={heroImages[activeSlide]}
                            src={heroImages[activeSlide]}
                            alt={`Hero slide ${activeSlide + 1}`}
                            className="absolute inset-0 h-full w-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.8, ease: "easeOut" }}
                        />
                    </AnimatePresence>
                </div>
                <div className="absolute inset-0 bg-slate-950/55" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),transparent_35%)]" />
                <AnimatedSection className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <span className="inline-flex rounded-full bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
                                International design-build studio
                            </span>
                            <div className="space-y-6">
                                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                                    Built to impress,
                                    <br />
                                    engineered to perform.
                                </h1>
                                <p className="max-w-2xl text-lg leading-8 text-slate-100/90">
                                    JHBC Design and Build shapes spaces that bring luxury, resilience, and operational efficiency together for global clients.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-slate-100">
                                    Request a proposal
                                </Link>
                                <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/15">
                                    Explore portfolio
                                </Link>
                            </div>
                            <div className="flex flex-wrap gap-3 text-sm text-slate-100/80">
                                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 shadow-sm">Luxury residential</span>
                                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 shadow-sm">Commercial interiors</span>
                                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 shadow-sm">Global delivery</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl">
                                <div className="rounded-[1.6rem] border border-white/15 bg-slate-950/70 p-6 text-white">
                                    <div className="relative overflow-hidden rounded-[1.3rem] border border-white/15 bg-slate-900/40 p-6">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.24),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.18),_transparent_30%)]" />
                                        <div className="relative flex min-h-[340px] flex-col justify-between text-white">
                                            <div className="space-y-4">
                                                <p className="text-sm uppercase tracking-[0.24em] text-orange-300">Featured project</p>
                                                <h2 className="text-3xl font-semibold tracking-tight text-white">
                                                    Selected project photography
                                                </h2>
                                                <p className="max-w-md text-sm leading-6 text-slate-300">
                                                    A dramatic hero panel layered over a signature project image to give your homepage depth and luxury.
                                                </p>
                                            </div>
                                            <div className="grid gap-3 sm:grid-cols-2">
                                                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                                                    <p className="text-2xl font-semibold">12+</p>
                                                    <p className="mt-1 text-sm text-slate-300">Global projects</p>
                                                </div>
                                                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                                                    <p className="text-2xl font-semibold">98%</p>
                                                    <p className="mt-1 text-sm text-slate-300">On-time delivery</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </AnimatedSection>
            </section>

            <AnimatedSection className="bg-slate-950 text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {[
                            {
                                title: "Strategic architecture",
                                description: "Design that reflects your brand, supports your program, and elevates everyday experience.",
                            },
                            {
                                title: "Precision construction",
                                description: "Robust delivery methods and local partner coordination that reduce risk and protect quality.",
                            },
                            {
                                title: "Luxury interiors",
                                description: "Curated finishes, refined textures, and functional styling that appeal to discerning clients.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                <p className="mt-4 text-slate-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}