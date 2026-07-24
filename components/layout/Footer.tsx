import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200/70 bg-white py-12 text-slate-700">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                <div className="max-w-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">JHBC Design & Build</p>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                        Building premium residential and commercial spaces with precision, beautiful details, and world-class service.
                    </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:gap-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Contact</p>
                        <p className="mt-3 text-sm text-slate-600">hello@jhbcdesignbuild.com</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Navigate</p>
                        <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                            <Link href="/about" className="transition hover:text-slate-950">About</Link>
                            <Link href="/portfolio" className="transition hover:text-slate-950">Portfolio</Link>
                            <Link href="/contact" className="transition hover:text-slate-950">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 border-t border-slate-200/70 pt-6 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} JHBC Design & Build. Designed for international clients.
            </div>
        </footer>
    );
}
