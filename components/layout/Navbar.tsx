"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/process", label: "Process" },
    { href: "/lumion", label: "Video Gallery" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
                aria-label="Primary navigation"
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-950">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-black text-white">JH</span>
                    JHBC Design & Build
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="transition hover:text-orange-500">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden items-center gap-3 lg:flex">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                    >
                        Request a Quote
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="flex flex-col gap-1.5 p-2 lg:hidden"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-slate-950 transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-slate-950 transition-all ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-slate-950 transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-slate-200 bg-white px-6 pb-6 lg:hidden">
                    <div className="flex flex-col gap-4 pt-4 text-sm font-medium text-slate-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="transition hover:text-orange-500"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="mt-2 inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                            onClick={() => setMenuOpen(false)}
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
