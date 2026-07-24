import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { sendInquiry } from "@/app/actions/contact";

export const metadata = {
    title: "Contact — JHBC Design and Build",
    description:
        "Get in touch with JHBC Design and Build for international design-build projects.",
};


export default function ContactPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

            <AnimatedSection className="grid gap-12 lg:grid-cols-[0.9fr_0.9fr] lg:items-start">

                <div className="space-y-6">

                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
                        Contact
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                        Connect with our team to begin your next project.
                    </h1>

                    <p className="text-lg leading-8 text-slate-600">
                        Share your brief, timeline, and vision. We support clients with global delivery, refined documentation, and streamlined construction management.
                    </p>


                    <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-8">

                        <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                            Email
                        </p>

                        <p className="text-sm text-slate-700">
                            info@jhbcdesignbuild.com
                        </p>


                        <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                            Locations
                        </p>

                        <p className="text-sm text-slate-700">
                            Serving clients across the Americas, Europe, and Asia.
                        </p>

                    </div>

                </div>


                <ContactForm action={sendInquiry} />

            </AnimatedSection>

        </main>
    );
}