import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "JHBC Design and Build",
    description: "Premium international design-build services for residential, commercial, and hospitality clients.",
    metadataBase: new URL("https://jhbcdesignbuild.com"),
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-950 antialiased`}>
                <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_25%)]">
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
