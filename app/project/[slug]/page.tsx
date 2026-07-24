import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import type { Project, ProjectParams } from "@/lib/types";

const projects: (Project & { images: string[] })[] = [
    {
        slug: "construction-documentation",
        title: "Documentation & Detailing",
        description: "Detailed construction-ready drawings and documentation packages.",
        images: [
            "/projects/06_A_Staff-building-images-0.jpg",
            "/projects/06_A_Staff-building-images-1.jpg",
            "/projects/06_A_Staff-building-images-2.jpg",
            "/projects/06_A_Staff-building-images-3.jpg",
            "/projects/06_A_Staff-building-images-4.jpg",
            "/projects/06_A_Staff-building-images-5.jpg",
            "/projects/06_A_Staff-building-images-6.jpg",
            "/projects/06_A_Staff-building-images-7.jpg",
            "/projects/06_A_Staff-building-images-8.jpg",
            "/projects/06_A_Staff-building-images-9.jpg",
            "/projects/06_A_Staff-building-images-10.jpg",
            "/projects/06_A_Staff-building-images-11.jpg",
        ],

        highlights: [
            "Precision drafting",
            "Comprehensive specifications",
            "Seamless coordination",
        ],
    },
    {
        slug: "architectural-visualization",
        title: "Architectural Visualization",
        description:
            "High-quality 3D architectural visualizations that bring design concepts to life through realistic renderings, lighting, materials, and immersive perspectives for residential, commercial, and mixed-use developments.",
        images: [
            "/projects/AVIA Evora 210 Hamptons LH 3D Render MASTER_01.jpg",
            "/projects/BLACKWOOD.jpg",
            "/projects/BOLWARA.jpg",
            "/projects/LOT338_1.jpg",
            "/projects/LOT338_2.jpg",
            "/projects/LOT338_3.jpg",
            "/projects/Marlowe LA Catalog1.jpg",
            "/projects/poros1 REMODELED1.jpg",
            "/projects/redgum unit1.jpg",
            "/projects/redgum unit2.jpg",
        ],
        highlights: [
            "Photorealistic Exterior & Interior Renders",
            "Realistic Lighting & Material Visualization",
            "High-Resolution Marketing Presentations",
        ],
    },
    {
        slug: "facade",
        title: "Facade Design",
        description:
            "Architectural façade designs that enhance building identity through balanced proportions, material selection, and contemporary aesthetics.",
        images: [
            "/projects/facade/1 (1).jpg",
            "/projects/facade/1.jpg",
            "/projects/facade/2.jpg",
            "/projects/facade/3.jpg",
            "/projects/facade/121E.jpg",
            "/projects/facade/alice_LA_CATALOG.jpg",
            "/projects/facade/CasitaBlanca_LA.jpg",
            "/projects/facade/corner 101.jpg",
            "/projects/facade/f1.jpg",
            "/projects/facade/f2.jpg",
            "/projects/facade/fa.jpg",
            "/projects/facade/FB_IMG_1733920213734.jpg",
            "/projects/facade/FB_IMG_1740402237480.jpg",
            "/projects/facade/FB_IMG_1740402269185.jpg",
            "/projects/facade/FB_IMG_1744898075941.jpg",
            "/projects/facade/FB_IMG_1775463323208.jpg",
            "/projects/facade/FB_IMG_1775463332367.jpg",
            "/projects/facade/FORTY.jpg",
            "/projects/facade/front copy.jpg",
            "/projects/facade/GATE VIEW.jpg",
            "/projects/facade/HERE NA.jpg",
            "/projects/facade/perspective copy.jpg",
            "/projects/facade/PERSPECTIVE2.jpg",
            "/projects/facade/PERSPECTIVE3c.jpg",
            "/projects/facade/pic1.jpg",
            "/projects/facade/pic2.jpg",
            "/projects/facade/pic3.jpg",
            "/projects/facade/pic11.jpg",
            "/projects/facade/pic13.jpg",
            "/projects/facade/resto 107.jpg",
            "/projects/facade/resto 108.jpg",
            "/projects/facade/resto 109.jpg",
            "/projects/facade/rigth side copy.jpg",
            "/projects/facade/souls.jpg",
            "/projects/facade/sp 4.jpg",
            "/projects/facade/taboc 2.jpg",
            "/projects/facade/top copy.jpg",
            "/projects/facade/unit zion.jpg",
            "/projects/facade/wq.jpg",
        ],
        highlights: [
            "Residential & Commercial Facades",
            "Contemporary Architectural Design",
            "Photorealistic 3D Visualization",
        ],
    },
    {
        slug: "interior",
        title: "Interior Design",
        description:
            "Thoughtfully designed interior spaces that combine functionality, comfort, and refined aesthetics for residential and commercial environments.",
        images: [
            "/projects/interior/TB1_1.jpg",
            "/projects/interior/ref1.jpg",
            "/projects/interior/TB2_2.jpg",
            "/projects/interior/6.jpg",
            "/projects/interior/pic7.jpg",
            "/projects/interior/resto 106we.jpg",
            "/projects/interior/pic6.jpg",
            "/projects/interior/building D 4th scene 101.jpg",
            "/projects/interior/TB1_2.jpg",
            "/projects/interior/ref2.jpg",
            "/projects/interior/FB_IMG_1640428563186 (1).jpg",
            "/projects/interior/FB_IMG_1740402257639.jpg",
            "/projects/interior/br1_3.jpg",
            "/projects/interior/resto 1061.jpg",
            "/projects/interior/kit2.jpg",
            "/projects/interior/HALL WAY (2ND FLOOR).jpg",
            "/projects/interior/br1_1.jpg",
            "/projects/interior/FB_IMG_1637319149464.jpg",
            "/projects/interior/TB2_3.jpg",
            "/projects/interior/nice1.jpg",
            "/projects/interior/kit1.jpg",
            "/projects/interior/ROOM 104.jpg",
            "/projects/interior/12.jpg",
            "/projects/interior/pic4.jpg",
            "/projects/interior/nice2.jpg",
            "/projects/interior/building D 4th scene 104.jpg",
            "/projects/interior/FB_IMG_1637319142955.jpg",
            "/projects/interior/building D 4th scene 102.jpg",
            "/projects/interior/TB2_1.jpg",
            "/projects/interior/FB_IMG_1640428582060 (1).jpg",
            "/projects/interior/FB_IMG_1640428582060.jpg",
            "/projects/interior/front lobby.jpg",
            "/projects/interior/kit3.jpg",
            "/projects/interior/resto 103.jpg",
            "/projects/interior/TB1_3.jpg",
            "/projects/interior/HALL WAY.jpg",
            "/projects/interior/br1_2.jpg",
        ],
        highlights: [
            "Residential & Commercial Interiors",
            "Space Planning & Layout Optimization",
            "Material & Finish Selection",
            "Kitchen, Bathroom & Living Spaces",
            "Photorealistic Interior Visualization",
            "Construction-Ready Interior Documentation",
        ],
    },
    {
        slug: "space-planning",
        title: "Space Planning",
        description:
            "Strategic space planning solutions that maximize functionality, circulation, and user experience for residential, commercial, and hospitality projects.",
        images: [
            "/projects/space-planning/office shot 1.jpg",
            "/projects/space-planning/office shot 2.jpg",
            "/projects/space-planning/office shot 3.jpg",
            "/projects/space-planning/office shot 4.jpg",
            "/projects/space-planning/office shot 5.jpg",
            "/projects/space-planning/spatial_coffee_shop_1.jpg",
            "/projects/space-planning/spatial_coffee_shop_2.jpg",
            "/projects/space-planning/spatial_coffee_shop_3.jpg",
            "/projects/space-planning/spatial_coffee_shop_4.jpg",
            "/projects/space-planning/spatial_coffee_shop_5.jpg",
        ],
        highlights: [
            "Office Space Planning",
            "Commercial Space Layouts",
            "Hospitality Planning",
            "Efficient Circulation Design",
            "Furniture & Equipment Layout",
            "3D Space Planning Visualization",
        ],
    },
];

export function generateStaticParams(): ProjectParams[] {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type ProjectDetailPageProps = {
    params: Promise<ProjectParams>;
};

export async function generateMetadata({
    params,
}: ProjectDetailPageProps): Promise<Metadata> {
    const { slug } = await params;

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | JHBC Design and Build`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { slug } = await params;

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
            <AnimatedSection className="space-y-12">
                <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                            Project Details
                        </p>

                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                            {project.title}
                        </h1>

                        <p className="mt-6 text-xl leading-8 text-slate-600">
                            {project.description}
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                            Highlights
                        </p>

                        <ul className="mt-6 space-y-4 text-slate-700">
                            {project.highlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Project Images */}
                <div className="grid gap-6 md:grid-cols-2">
                    {project.images.map((image) => (
                        <Image
                            key={image}
                            src={image}
                            alt={project.title}
                            width={1400}
                            height={900}
                            className="h-auto w-full rounded-3xl object-cover shadow-lg"
                        />
                    ))}
                </div>
            </AnimatedSection>
        </div>
    );
}