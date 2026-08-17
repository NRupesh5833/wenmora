import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { business, navLinks } from "@/config/site";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      <nav className="container-x flex h-16 items-center justify-between gap-4 lg:h-20" aria-label="Main">
        <Link to="/" className="flex items-center gap-2.5 font-display text-sm font-semibold tracking-tight sm:text-base">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
            <span aria-hidden="true" className="font-display text-sm font-bold">
              /
            </span>
          </span>
          <span className="max-w-[9rem] truncate sm:max-w-none">{business.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact" onClick={() => track("cta_click", { location: "navbar", label: "Start a Project" })}>
              Start a Project
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="container-x flex flex-col py-3">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="block rounded-lg px-2 py-3 text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 pb-4">
            <Button asChild className="w-full">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
