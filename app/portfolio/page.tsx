import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const portfolioItems = [
    {
        title: "Documentation & Detailing",
        summary: "Detailed construction-ready drawings and documentation packages.",
        slug: "construction-documentation",
    },
    {
        title: "Architectural Visualization",
        summary: "High-quality 3D architectural visualizations that bring design concepts to life through realistic renderings, lighting, materials, and immersive perspectives for residential, commercial, and mixed-use developments.",
        slug: "architectural-visualization",
    },
    {
        title: "Facade Design",
        summary:
            "Contemporary façade designs that enhance architectural character through balanced proportions, premium materials, and photorealistic visualizations.",
        slug: "facade",
    },
    {
        title: "Interior Design",
        summary:
            "Functional and elegant interior spaces designed to maximize comfort, aesthetics, and everyday usability for residential and commercial projects.",
        slug: "interior",
    },
    {
        title: "Space Planning",
        summary:
            "Efficient spatial layouts that optimize circulation, functionality, and user experience for residential and commercial environments.",
        slug: "space-planning",
    },
];

export const metadata = {
    title: "Portfolio — JHBC Design and Build",
    description: "View our portfolio of premium architecture, commercial, and residential design-build projects.",
};

export default function PortfolioPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <AnimatedSection className="space-y-12">
                <div className="max-w-3xl space-y-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Portfolio</p>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                        Projects that combine visual richness with strong technical delivery.
                    </h1>
                    <p className="text-lg leading-8 text-slate-600">
                        Each portfolio project is built to inspire, support daily use, and deliver a lasting sense of quality.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {portfolioItems.map((project) => (
                        <article key={project.slug} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="p-8">
                                <p className="text-sm uppercase tracking-[0.22em] text-orange-500">Featured</p>
                                <h2 className="mt-4 text-2xl font-semibold text-slate-950">{project.title}</h2>
                                <p className="mt-4 text-slate-600">{project.summary}</p>
                                <Link href={`/project/${project.slug}`} className="mt-8 inline-flex text-sm font-semibold text-orange-500 transition group-hover:text-orange-600">
                                    View project →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </AnimatedSection>
        </main>
    );
}
