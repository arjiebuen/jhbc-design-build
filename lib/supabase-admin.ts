console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("NEXT_PUBLIC_SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log(
    "SERVICE KEY EXISTS:",
    !(process.env.SUPABASE_SERVICE_ROLE_KEY == null)
);


import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    }
);