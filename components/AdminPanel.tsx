"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-browser";
import type { User } from "@supabase/supabase-js";

export default function AdminPanel() {
    const [user, setUser] = useState<User | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        void supabaseBrowser.auth.getSession().then(({ data }) => {
            setUser(data.session?.user ?? null);
        });

        const {
            data: { subscription },
        } = supabaseBrowser.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    async function signIn() {
        const { error } = await supabaseBrowser.auth.signInWithOAuth({
            provider: "google",
        });

        if (error) {
            setMessage(error.message);
        }
    }

    async function signOut() {
        const { error } = await supabaseBrowser.auth.signOut();

        if (error) {
            setMessage(error.message);
            return;
        }

        setMessage("Signed out successfully.");
    }

    const displayName =
        user?.user_metadata?.full_name ??
        user?.email ??
        "Administrator";

    return (
        <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 md:p-10">
            <div className="grid gap-3">
                <h2 className="text-3xl font-semibold text-slate-950">
                    Admin Dashboard
                </h2>

                <p className="text-sm leading-6 text-slate-600">
                    Sign in to monitor project requests, contact submissions,
                    and secure API activity.
                </p>
            </div>

            {user ? (
                <div className="space-y-6 rounded-3xl bg-slate-950 p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-orange-300">
                        Signed in as
                    </p>

                    <div className="rounded-3xl bg-slate-900 p-5">
                        <p className="font-semibold">{displayName}</p>
                        <p className="mt-2 text-sm text-slate-400">
                            {user.email}
                        </p>
                    </div>

                    <button
                        onClick={signOut}
                        className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm text-slate-600">
                        Use your Supabase account to access the admin portal.
                    </p>

                    <button
                        onClick={signIn}
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Sign in with Google
                    </button>
                </div>
            )}

            {message && (
                <p className="text-sm text-rose-600">
                    {message}
                </p>
            )}
        </div>
    );
}