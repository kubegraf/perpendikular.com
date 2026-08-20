"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "For Teams", href: "#teams" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav aria-label="Main" className="container-page">
        <div className="flex h-14 items-center justify-between gap-6 sm:h-16">
          <a href="#top" className="rounded-md" aria-label="Perpendikular — home">
            <Logo markClassName="h-6 w-6 sm:h-7 sm:w-7" />
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.8125rem] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <ThemeToggle />
              <ButtonLink href="#pricing" variant="ghost" size="sm">
                Sign in
              </ButtonLink>
              <ButtonLink href="#cta" size="sm">
                Get started
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-[0.9375rem] text-foreground/90 transition-colors hover:bg-subtle"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-3 border-t border-border pt-4">
            <ButtonLink href="#cta" size="md" className="flex-1" onClick={() => setOpen(false)}>
              Get started
            </ButtonLink>
            <ButtonLink
              href="#pricing"
              variant="secondary"
              size="md"
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              Sign in
            </ButtonLink>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
