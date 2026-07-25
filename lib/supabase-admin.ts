import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let adminClient: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
    if (adminClient !== null) {
        return adminClient;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl === undefined || supabaseUrl === "") {
        throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL environment variable");
    }

    if (serviceRoleKey === undefined || serviceRoleKey === "") {
        throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable");
    }

    adminClient = createClient(supabaseUrl, serviceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });

    return adminClient;
}
