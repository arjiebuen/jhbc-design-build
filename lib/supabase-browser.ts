"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;

export function getSupabaseBrowser(): SupabaseClient {
    if (browserClient !== null) {
        return browserClient;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (supabaseUrl === undefined || supabaseUrl === "") {
        throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
    }

    if (supabaseAnonKey === undefined || supabaseAnonKey === "") {
        throw new Error("Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");
    }

    browserClient = createBrowserClient(supabaseUrl, supabaseAnonKey);

    return browserClient;
}
