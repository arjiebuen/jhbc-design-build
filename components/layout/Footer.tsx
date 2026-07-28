import Link from "next/link";

const services = [
    { href: "/services", label: "Residential Construction" },
    { href: "/services", label: "Commercial Construction" },
    { href: "/services", label: "Engineering Services" },
    { href: "/services", label: "Construction Management" },
    { href: "/services", label: "3D Visualization" },
    { href: "/services", label: "Interior Design" },
];

const company = [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/process", label: "Our Process" },
    { href: "/lumion", label: "Video Gallery" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-black text-white">JH</span>
                            JHBC Design & Build
                        </Link>
                        <p className="text-sm leading-7 text-slate-400">
                            A premium international design-build studio delivering luxury residential, commercial, and industrial projects with precision and care.
                        </p>
                        <div className="flex gap-3">
                            {["FB", "IG", "LI", "YT"].map((social) => (
                                <span
                                    key={social}
                                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-xs font-bold text-slate-400 transition hover:border-orange-500 hover:text-orange-500"
                                >
                                    {social}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Services</p>
                        <ul className="mt-4 space-y-3">
                            {services.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm transition hover:text-orange-400">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Company</p>
                        <ul className="mt-4 space-y-3">
                            {company.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm transition hover:text-orange-400">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</p>
                        <ul className="mt-4 space-y-4 text-sm">
                            <li>
                                <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
                                <p className="mt-1 text-slate-300">info@jhbcdesignbuild.com</p>
                            </li>
                            <li>
                                <p className="text-xs uppercase tracking-wider text-slate-500">Phone</p>
                                <p className="mt-1 text-slate-300">+63 9XX XXX XXXX</p>
                            </li>
                            <li>
                                <p className="text-xs uppercase tracking-wider text-slate-500">Hours</p>
                                <p className="mt-1 text-slate-300">Mon–Fri, 8AM–6PM</p>
                            </li>
                            <li>
                                <p className="text-xs uppercase tracking-wider text-slate-500">Locations</p>
                                <p className="mt-1 text-slate-300">Americas · Europe · Asia · Pacific</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-500 sm:flex-row lg:px-8">
                    <p>© {new Date().getFullYear()} JHBC Design & Build. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/contact" className="transition hover:text-orange-400">Privacy Policy</Link>
                        <Link href="/contact" className="transition hover:text-orange-400">Terms & Conditions</Link>
                        <Link href="/admin" className="transition hover:text-orange-400">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
