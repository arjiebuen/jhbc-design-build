import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Primary navigation">
                <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
                    JHBC Design & Build
                </Link>
                <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
                    <Link href="/about" className="transition hover:text-slate-950">
                        About
                    </Link>
                    <Link href="/services" className="transition hover:text-slate-950">
                        Services
                    </Link>
                    <Link href="/portfolio" className="transition hover:text-slate-950">
                        Portfolio
                    </Link>
                    <Link href="/lumion" className="transition hover:text-slate-950">
                        Video Gallery
                    </Link>
                    <Link href="/contact" className="transition hover:text-slate-950">
                        Contact
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <Link href="/admin" className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:border-slate-300 md:inline-flex">
                        Admin
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Get started
                    </Link>
                </div>
            </nav>
        </header>
    );
}
