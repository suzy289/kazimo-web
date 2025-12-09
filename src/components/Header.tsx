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
      <div className="section flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Kazimo.png"
            alt="Kazimo Logo"
            width={380}
            height={130}
            className="h-28 w-auto sm:h-32"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 text-lg font-semibold text-slate-800 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-shape transition hover:text-[#1f5fff] ${
                  active ? "text-[#1f5fff]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
              className="ml-5 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-base font-semibold text-slate-900 transition hover:bg-[#1f5fff] hover:text-white hover:border-[#1f5fff]"
          >
            Demander une démo
          </Link>
        </nav>

        <button
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section flex flex-col gap-3 py-5 text-lg font-semibold text-slate-800">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-shape py-2 hover:text-[#1f5fff] ${
                  pathname === item.href ? "text-[#1f5fff]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-center text-slate-900 transition hover:bg-[#1f5fff] hover:text-white hover:border-[#1f5fff]"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

