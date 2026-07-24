import AdminPanel from "@/components/AdminPanel";

export const metadata = {
    title: "Admin — JHBC Design and Build",
    description: "Secure admin portal for managing project leads and authenticated workspace access.",
};

export default function AdminPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
            <div className="space-y-8">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-900/5">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Admin portal</p>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Secure access for internal team members.</h1>
                    <p className="mt-4 text-lg leading-8 text-slate-600">
                        Authenticate with your Supabase account to review leads, manage project requests, and inspect admin-level data securely.
                    </p>
                </div>
                <AdminPanel />
            </div>
        </main>
    );
}
