import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us — JHBC Design and Build",
    description: "Learn about JHBC Design and Build — our history, mission, vision, values, and expert team.",
};

const values = [
    { icon: "🏆", title: "Excellence", description: "We pursue the highest standards in design, construction, and client service." },
    { icon: "🤝", title: "Integrity", description: "Transparent communication and honest dealings on every project." },
    { icon: "💡", title: "Innovation", description: "We embrace modern technology and creative solutions to deliver better outcomes." },
    { icon: "🛡️", title: "Safety", description: "The safety of our team, clients, and communities is always our top priority." },
    { icon: "🌍", title: "Sustainability", description: "We design and build with environmental responsibility in mind." },
    { icon: "👥", title: "Collaboration", description: "We work closely with clients, consultants, and contractors as one team." },
];

const milestones = [
    { year: "2014", title: "Company Founded", description: "JHBC Design and Build was established with a vision to deliver premium construction services." },
    { year: "2016", title: "First Commercial Project", description: "Completed our first major commercial office building project." },
    { year: "2018", title: "International Expansion", description: "Expanded services to international clients across Asia and the Pacific." },
    { year: "2020", title: "100+ Projects Milestone", description: "Reached 100 successfully completed projects across all sectors." },
    { year: "2022", title: "ISO Certification", description: "Achieved ISO 9001 quality management certification." },
    { year: "2024", title: "250+ Projects", description: "Surpassed 250 completed projects with a 98% client satisfaction rate." },
];

const team = [
    { name: "Arjie Buen", role: "CEO & Principal Architect", description: "15+ years of experience in design-build and construction management." },
    { name: "Project Manager", role: "Senior Project Manager", description: "Expert in construction scheduling, cost control, and quality assurance." },
    { name: "Lead Engineer", role: "Structural Engineer", description: "Specialist in structural design and engineering documentation." },
    { name: "Interior Lead", role: "Interior Design Director", description: "Award-winning interior designer with a passion for luxury spaces." },
];

export default function AboutPage() {
    return (
        <main>
            {/* ── HERO ── */}
            <section className="bg-slate-950 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">About Us</p>
                        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                            Building Distinctive Spaces with Strategic Clarity.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            JHBC Design and Build is a premium design-build studio focused on architecture, interiors, and construction. We create thoughtful projects for clients who expect quality, transparent delivery, and sophisticated detail.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── MISSION / VISION ── */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Our Mission</p>
                            <h2 className="mt-4 text-2xl font-bold text-slate-950">Delivering Excellence</h2>
                            <p className="mt-4 leading-7 text-slate-600">
                                To deliver premium design-build services that exceed client expectations through innovation, precision, and unwavering commitment to quality.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Our Vision</p>
                            <h2 className="mt-4 text-2xl font-bold text-slate-950">Global Leadership</h2>
                            <p className="mt-4 leading-7 text-slate-600">
                                To be the most trusted international design-build studio, recognized for transforming spaces that inspire, perform, and endure.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Our Promise</p>
                            <h2 className="mt-4 text-2xl font-bold text-slate-950">Lasting Value</h2>
                            <p className="mt-4 leading-7 text-slate-600">
                                Reliable delivery, proactive communication, and lasting value in every square foot we design and build.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CORE VALUES ── */}
            <section className="bg-slate-950 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Core Values</p>
                        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">What We Stand For</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                                <span className="text-3xl">{value.icon}</span>
                                <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MILESTONES ── */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Our Journey</p>
                        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Company Milestones</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-6 top-0 h-full w-0.5 bg-orange-200 lg:left-1/2" />
                        <div className="space-y-10">
                            {milestones.map((milestone, i) => (
                                <div
                                    key={milestone.year}
                                    className={`relative flex gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                >
                                    <div className="flex-1 pl-14 lg:pl-0">
                                        <div className={`rounded-3xl border border-slate-200 bg-slate-50 p-6 ${i % 2 === 0 ? "lg:mr-12" : "lg:ml-12"}`}>
                                            <span className="text-sm font-bold text-orange-500">{milestone.year}</span>
                                            <h3 className="mt-2 text-xl font-semibold text-slate-950">{milestone.title}</h3>
                                            <p className="mt-2 text-slate-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-4 top-6 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 ring-4 ring-white lg:left-1/2 lg:-translate-x-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TEAM ── */}
            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Our Team</p>
                        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Meet the Experts</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Our multidisciplinary team brings together the best in architecture, engineering, and construction management.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {team.map((member) => (
                            <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-3xl">
                                    👤
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-slate-950">{member.name}</h3>
                                <p className="mt-1 text-sm font-medium text-orange-500">{member.role}</p>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
