"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";
import { resend } from "@/lib/resend";

function getFormValue(formData: FormData, key: string): string {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
}

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
        const { error: databaseError } = await supabaseAdmin
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

        // Send notification email
        const { error: emailError } = await resend.emails.send({
            from: "JHBC Website <onboarding@resend.dev>",
            to: process.env.EMAIL_TO ?? "arjiebuen101@gmail.com",
            replyTo: email,
            subject: `New JHBC Inquiry: ${subject}`,
            html: `
                <h2>New Website Inquiry</h2>
                <table cellpadding="8" cellspacing="0" border="0">
                    <tr>
                        <td><strong>Name</strong></td>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <td><strong>Phone</strong></td>
                        <td>${phone || "Not provided"}</td>
                    </tr>
                    <tr>
                        <td><strong>Subject</strong></td>
                        <td>${subject}</td>
                    </tr>
                </table>
                <hr>
                <h3>Message</h3>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
        });

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
