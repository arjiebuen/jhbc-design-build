import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
    title: "Lumion Video Gallery — JHBC Design and Build",
    description:
        "Explore our Lumion visualization gallery with immersive project videos.",
};

const videos = [
    {
        title: "Residential Villa Animation",
        type: "local",
        url: "/projects/lumion/rv.mp4",
    },
    {
        title: "Senso Residence - Exterior Walkthrough",
        type: "local",
        url: "/projects/lumion/Senso_12.mp4",
    },
    {
        title: "Senso Residence - Interior Animation",
        type: "local",
        url: "/projects/lumion/Senso_13.mp4",
    },
    {
        title: "Architectural Flythrough",
        type: "local",
        url: "/projects/lumion/0224.mp4",
    },
    {
        title: "Commercial Project Animation",
        type: "local",
        url: "/projects/lumion/sds.mp4",
    },
    {
        title: "Tito Boyet & Tita Helen Residence",
        type: "local",
        url: "/projects/lumion/tito boyet and tita helen project.mp4",
    },
    {
        title: "Exterior Visualization",
        type: "local",
        url: "/projects/lumion/0802.mp4",
    },
];

export default function LumionPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <AnimatedSection className="space-y-12">

                <div className="max-w-3xl space-y-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
                        Lumion Gallery
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                        Visual Storytelling for Every Project Phase
                    </h1>

                    <p className="text-lg leading-8 text-slate-600">
                        Experience our architectural visualizations through
                        high-quality Lumion animations, cinematic walkthroughs,
                        and project presentations.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video) => (
                        <div
                            key={video.title}
                            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-xl shadow-slate-900/10"
                        >
                            <div className="aspect-video bg-black">

                                {video.type === "youtube" ? (
                                    <iframe
                                        className="h-full w-full"
                                        src={video.url}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <video
                                        className="h-full w-full object-cover"
                                        controls
                                        preload="metadata"
                                    >
                                        <source
                                            src={video.url}
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video tag.
                                    </video>
                                )}

                            </div>

                            <div className="p-6 text-white">
                                <h2 className="text-lg font-semibold">
                                    {video.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>

            </AnimatedSection>
        </main>
    );
}