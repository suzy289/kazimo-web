"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Pour qui ?", href: "/pour-qui" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition ${
        scrolled ? "border-b border-slate-200/60" : ""
      }`}
    >
      <div className="section flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Kazimo.png"
            alt="Kazimo Logo"
            width={180}
            height={60}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-slate-900 ${
                  active ? "text-slate-900" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
          >
            Demander une démo
          </Link>
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section flex flex-col gap-3 py-4 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 ${
                  pathname === item.href ? "text-slate-900" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-center text-slate-900"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

