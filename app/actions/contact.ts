"use server";

import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { getResend } from "@/lib/resend";

function getFormValue(formData: FormData, key: string): string {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

const FROM_ADDRESS = process.env.EMAIL_FROM ?? "JHBC Website <onboarding@resend.dev>";

export async function sendInquiry(formData: FormData) {
    const name = getFormValue(formData, "name");
    const email = getFormValue(formData, "email");
    const phone = getFormValue(formData, "phone");
    const subject = getFormValue(formData, "subject");
    const message = getFormValue(formData, "message");

    // Validate required fields
    if (!name || !email || !subject || !message) {
        return {
            success: false,
            error: "Please complete all required fields.",
        };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            success: false,
            error: "Please provide a valid email address.",
        };
    }

    try {
        // Save inquiry to Supabase
        const { error: databaseError } = await getSupabaseAdmin()
            .from("inquiries")
            .insert({
                name,
                email,
                phone,
                subject,
                message,
            });

        if (databaseError) {
            console.error("Supabase error:", databaseError);
            return {
                success: false,
                error: "Failed to save inquiry. Please try again.",
            };
        }

        const adminEmail = process.env.EMAIL_TO ?? "arjiebuen101@gmail.com";

        // Notify the studio
        const { error: emailError } = await getResend().emails.send({
            from: FROM_ADDRESS,
            to: adminEmail,
            replyTo: email,
            subject: `New JHBC Inquiry: ${subject}`,
            html: `
                <h2>New Website Inquiry</h2>
                <table cellpadding="8" cellspacing="0" border="0">
                    <tr>
                        <td><strong>Name</strong></td>
                        <td>${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td>${escapeHtml(email)}</td>
                    </tr>
                    <tr>
                        <td><strong>Phone</strong></td>
                        <td>${phone === "" ? "Not provided" : escapeHtml(phone)}</td>
                    </tr>
                    <tr>
                        <td><strong>Subject</strong></td>
                        <td>${escapeHtml(subject)}</td>
                    </tr>
                </table>
                <hr>
                <h3>Message</h3>
                <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
            `,
        });

        // Auto-reply to the client
        const { error: replyError } = await getResend().emails.send({
            from: FROM_ADDRESS,
            to: email,
            replyTo: adminEmail,
            subject: `We received your inquiry: ${subject}`,
            html: `
                <p>Hi ${escapeHtml(name)},</p>
                <p>
                    Thank you for contacting JHBC Design and Build. We have received your
                    inquiry and a member of our team will reply shortly.
                </p>
                <h3>Your message</h3>
                <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
                <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
                <hr>
                <p>JHBC Design and Build<br>${escapeHtml(adminEmail)}</p>
            `,
        });

        if (replyError) {
            console.error("Resend auto-reply error:", replyError);
        }

        if (emailError) {
            console.error("Resend error:", emailError);
            // Inquiry is already saved, so don't fail the submission
            return {
                success: true,
                message:
                    "Your inquiry has been saved, but the email notification could not be sent.",
            };
        }

        return {
            success: true,
            message: "Thank you! Your inquiry has been submitted successfully.",
        };
    } catch (error) {
        console.error("Unexpected error in sendInquiry:", error);
        return {
            success: false,
            error: "An unexpected error occurred. Please try again later.",
        };
    }
}
