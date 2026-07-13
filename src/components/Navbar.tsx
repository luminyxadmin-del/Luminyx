"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  GraduationCap,
  Users,
  Plane,
  BrainCircuit,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ecosystemLinks = [
  { label: "AI Advisory", description: "Strategy & institutional intelligence", href: "/ecosystem/advisory", icon: BrainCircuit },
  { label: "Education Advisory", description: "Connecting institutions to employment", href: "/ecosystem/education", icon: GraduationCap },
  { label: "Talent", description: "Precision hiring for growth markets", href: "/ecosystem/talent", icon: Users },
  { label: "Travel", description: "UAE · GCC · Africa travel corridors", href: "/ecosystem/travel", icon: Plane },
  { label: "Technology", description: "AI platform powering all divisions", href: "/ecosystem/technology", icon: Cpu },
];

const TOP_LINKS = [
  { label: "Africa", href: "/africa" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [mobilEcosystemOpen, setMobileEcosystemOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setEcosystemOpen(false);
    setMobileEcosystemOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <div
        className="flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300"
        style={{
          height: "60px",
          background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.15)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
          border: scrolled ? "1px solid rgba(109,40,217,0.08)" : "1px solid rgba(255,255,255,0.1)",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.1)" : "0 8px 32px rgba(0,0,0,0.12)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <Image
            src="https://res.cloudinary.com/dtg3lepr4/image/upload/v1783954050/Luminyx_ventures_Final_dark_colour_logo_dnaccc.png"
            alt="Luminyx Ventures"
            width={628}
            height={200}
            priority
            quality={100}
            className="object-contain"
            style={{ height: "120px", width: "auto", filter: "none", opacity: 1 }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Ecosystem Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setEcosystemOpen(true)}
            onMouseLeave={() => setEcosystemOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all",
                scrolled
                  ? isActive("/ecosystem")
                    ? "text-[#111827]"
                    : "text-[#374151] hover:text-[#6D28D9]"
                  : isActive("/ecosystem")
                    ? "text-white"
                    : "text-white/80 hover:text-white"
              )}
            >
              Ecosystem
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  ecosystemOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {ecosystemOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 mt-3 rounded-2xl p-3"
                  style={{
                    width: "480px",
                    background: "rgba(15, 10, 40, 0.90)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 24px 48px -12px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {ecosystemLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.08] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary-brand/25 border border-primary-brand/30 flex items-center justify-center shrink-0 group-hover:bg-primary-brand/50 transition-all">
                          <item.icon className="w-4 h-4 text-accent-purple" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-accent-purple transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-white/40 leading-tight mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {TOP_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all",
                scrolled
                  ? isActive(item.href)
                    ? "text-[#111827]"
                    : "text-[#374151] hover:text-[#6D28D9]"
                  : isActive(item.href)
                    ? "text-white"
                    : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 group">
            Partner With Us
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            scrolled
              ? "text-[#374151] hover:text-[#6D28D9] hover:bg-bg-subtle"
              : "text-white/80 hover:text-white hover:bg-white/10"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/90 backdrop-blur-xl mt-2 rounded-2xl border border-white/30 shadow-elevated"
          >
            <div className="container-xl py-6 flex flex-col gap-1">
              {/* Ecosystem */}
              <div>
                <button
                  onClick={() => setMobileEcosystemOpen(!mobilEcosystemOpen)}
                  className="w-full flex items-center justify-between py-3 text-base font-medium text-navy"
                >
                  Ecosystem
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-ink-faint transition-transform",
                      mobilEcosystemOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobilEcosystemOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-4 border-l border-light-gray"
                    >
                      {ecosystemLinks.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block py-2.5 text-sm text-slate hover:text-primary-brand transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {TOP_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block py-3 text-base font-medium",
                    isActive(item.href) ? "text-primary-brand" : "text-navy"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-light-gray flex flex-col gap-3">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Partner With Us
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
