"use client";

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/auth-helpers-nextjs";
import type { SupabaseClient, User } from "@supabase/supabase-js";

export default function AdminPanel() {
    const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        if (url == null || key == null) {
            return;
        }

        const client = createBrowserClient(url, key);
        setSupabase(client);
        void client.auth.getSession().then(({ data }) => {
            setUser(data.session?.user ?? null);
        });
    }, []);

    async function signIn() {
        if (supabase === null) {
            setMessage("Supabase is not initialized yet.");
            return;
        }

        const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
        if (error) setMessage(error.message);
    }

    async function signOut() {
        if (supabase === null) return;
        await supabase.auth.signOut();
        setUser(null);
        setMessage("Signed out successfully.");
    }

    const displayName = user?.email ?? (user?.user_metadata && typeof (user.user_metadata as Record<string, unknown>).full_name === 'string' ? (user.user_metadata as Record<string, unknown>).full_name as string : undefined) ?? "";

    return (
        <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 md:p-10">
            <div className="grid gap-3">
                <h2 className="text-3xl font-semibold text-slate-950">Admin dashboard</h2>
                <p className="text-sm leading-6 text-slate-600">
                    Sign in to monitor project requests, contact submissions, and secure API activity.
                </p>
            </div>
            {user !== null ? (
                <div className="space-y-6 rounded-3xl bg-slate-950 p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-orange-300">Signed in as</p>
                    <div className="rounded-3xl bg-slate-900 p-5">
                        <p className="font-semibold">{displayName}</p>
                        <p className="mt-2 text-sm text-slate-400">{user.id}</p>
                    </div>
                    <button onClick={signOut} className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                        Sign out
                    </button>
                </div>
            ) : (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm text-slate-600">Use your Supabase account to access the admin portal.</p>
                    <button onClick={signIn} className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Sign in with Google
                    </button>
                </div>
            )}
            {message !== null ? <p className="text-sm text-rose-600">{message}</p> : null}
        </div>
    );
}
