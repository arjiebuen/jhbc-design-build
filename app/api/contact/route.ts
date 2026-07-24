import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/types";
import { isValidEmail } from "@/lib/utils";

export async function POST(request: Request) {
    try {
        const body: unknown = await request.json().catch(() => null);

        if (body === null || typeof body !== "object") {
            return NextResponse.json(
                { error: "Invalid request payload." },
                { status: 400 }
            );
        }

        const parseResult = contactSchema.safeParse(body);

        if (!parseResult.success) {
            return NextResponse.json(
                { error: "Invalid contact payload." },
                { status: 400 }
            );
        }

        const { email } = parseResult.data;

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Contact request received." },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
