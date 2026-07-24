import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
    title: "Services — JHBC Design and Build",
    description: "Explore our design, construction, and interior services for high-end projects.",
};

const serviceItems = [
    {
        title: "Architecture & master planning",
        description: "From feasibility and concept to technical documentation, we design spaces that work beautifully for people and operations.",
    },
    {
        title: "Construction management",
        description: "Our team delivers experienced site supervision, cost control, permitting, and quality assurance for reliable execution.",
    },
    {
        title: "Interior design",
        description: "We craft luxurious interiors, material palettes, furniture strategies, and finishes for memorable living and working spaces.",
    },
    {
        title: "Sustainability advisory",
        description: "We help clients choose sustainable systems, efficient layouts, and materials that support long-term performance.",
    },
    {
        title: "Lumion & visualization",
        description: "High-fidelity visualizations and video presentations help clients understand the final design before construction begins.",
    },
    {
        title: "Project advisory",
        description: "Our leadership works closely with owners and stakeholders to ensure a clear, confident decision-making process.",
    },
];

export default function ServicesPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <AnimatedSection className="space-y-12">
                <div className="max-w-3xl space-y-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Services</p>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                        A full-service offering for modern development and premium interiors.
                    </h1>
                    <p className="text-lg leading-8 text-slate-600">
                        We support clients with complete design-build services, from initial strategy through final project delivery.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {serviceItems.map((service) => (
                        <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
                            <h2 className="text-xl font-semibold text-slate-950">{service.title}</h2>
                            <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                        </article>
                    ))}
                </div>
            </AnimatedSection>
        </main>
    );
}
