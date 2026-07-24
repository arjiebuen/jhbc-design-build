import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required."),
    email: z.string().trim().email("Invalid email address."),
    message: z.string().trim().min(1, "Message is required."),
});

export type ContactRequest = z.infer<typeof contactSchema>;

export type Project = {
    slug: string;
    title: string;
    description: string;
    highlights: string[];
};

export type ProjectParams = {
    slug: string;
};

export type AdminStats = {
    projects: number;
    clients: number;
    contacts: number;
    returns: string;
};
