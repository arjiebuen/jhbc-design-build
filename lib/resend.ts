import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResend(): Resend {
    if (resendClient !== null) {
        return resendClient;
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey === undefined || resendApiKey === "") {
        throw new Error("Missing RESEND_API_KEY environment variable");
    }

    resendClient = new Resend(resendApiKey);

    return resendClient;
}
