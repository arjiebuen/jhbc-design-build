import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inquiries — JHBC Design and Build",
    description: "View and manage contact inquiries from the admin panel.",
};

export default function AdminInquiriesPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
            <div className="space-y-8">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-900/5">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
                        Admin Portal
                    </p>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                        Contact Inquiries
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        View and manage all contact submissions from your website visitors.
                    </p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
                    <p className="text-slate-600">
                        Inquiries will appear here once they are submitted through the contact form.
                    </p>
                </div>
            </div>
        </main>
    );
}
