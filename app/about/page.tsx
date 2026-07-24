import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
    title: "About — JHBC Design and Build",
    description: "Learn about our global design-build studio and how we deliver premium projects for international clients.",
};

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <AnimatedSection className="space-y-12">
                <div className="max-w-3xl space-y-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">About us</p>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                        Building distinctive spaces with strategic clarity and craft.
                    </h1>
                    <p className="text-lg leading-8 text-slate-600">
                        JHBC Design and Build is a premium design-build studio focused on architecture, interiors, and construction. We create thoughtful projects for clients who expect quality, transparent delivery, and sophisticated detail.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {[
                        {
                            title: "Our vision",
                            content: "A seamless project experience for international clients, powered by design intelligence, technical rigor, and elegant finishes.",
                        },
                        {
                            title: "Our approach",
                            content: "We align aesthetics and performance early, so each design is beautiful, buildable, and cost-conscious.",
                        },
                        {
                            title: "Our promise",
                            content: "Reliable delivery, proactive communication, and lasting value in every square foot.",
                        },
                    ].map((item) => (
                        <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
                            <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                            <p className="mt-4 leading-7 text-slate-600">{item.content}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </main>
    );
}
