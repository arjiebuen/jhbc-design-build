import { NextResponse } from "next/server";
import type { AdminStats } from "@/lib/types";

export function GET(request: Request) {
    const apiKey = request.headers.get("x-api-key");
    if (apiKey === null || apiKey !== process.env.ADMIN_API_KEY) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const stats: AdminStats = {
        projects: 27,
        clients: 16,
        contacts: 48,
        returns: "19%",
    };

    return NextResponse.json(stats);
}
