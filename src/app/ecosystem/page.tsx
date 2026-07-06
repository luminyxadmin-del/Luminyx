"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Car,
  GraduationCap,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

const VERTICALS = [
  {
    href: "/ecosystem/talent",
    icon: Users,
    title: "Talent",
    subtitle: "Connecting Opportunity",
    desc: "Bridging East African professionals with the world's leading enterprises through AI-driven matching.",
    accent: "bg-gradient-to-br from-primary-brand to-accent-purple",
    stat: { value: "25K+", label: "Vetted Talent" },
  },
  {
    href: "/ecosystem/mobility",
    icon: Car,
    title: "Mobility",
    subtitle: "Explore East Africa",
    desc: "Premium travel and mobility solutions curated for those who demand excellence and luxury experience.",
    accent: "bg-gradient-to-br from-amber-500 to-orange-500",
    stat: { value: "24/7", label: "Concierge" },
  },
  {
    href: "/ecosystem/education",
    icon: GraduationCap,
    title: "Education",
    subtitle: "Empowering the Future",
    desc: "AI-driven curriculums, scholarships, and digital-first learning ecosystems for the next generation of leaders.",
    accent: "bg-gradient-to-br from-emerald-500 to-teal-500",
    stat: { value: "15K+", label: "Active Scholars" },
  },
];

export default function EcosystemPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-bg opacity-50 -z-10" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-brand/10 blur-3xl rounded-full -z-10" />

        <div className="container-xl">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="chip mb-6 mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              The Luminyx Ecosystem
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-navy text-balance">
              Three verticals.{" "}
              <span className="gradient-text">One integrated platform.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed">
              Each vertical is engineered to amplify the others. Together, they
              form the most comprehensive enterprise ecosystem on the continent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="pb-section-lg">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {VERTICALS.map((v, i) => {
              const isLarge = i === 0;
              return (
                <Reveal
                  key={v.href}
                  delay={i * 0.08}
                  className={isLarge ? "lg:col-span-2" : ""}
                >
                  <Link
                    href={v.href}
                    className="group block h-full card card-hover p-8 md:p-12 relative overflow-hidden"
                  >
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
                      <div className="flex-1">
                        <div
                          className={`inline-flex w-14 h-14 rounded-2xl ${v.accent} items-center justify-center mb-6 shadow-card-soft`}
                        >
                          <v.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="font-mono text-xs text-primary-brand font-bold tracking-widest uppercase mb-2">
                          {v.subtitle}
                        </div>
                        <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                          {v.title}
                        </h3>
                        <p className="text-slate max-w-md leading-relaxed">
                          {v.desc}
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 text-primary-brand font-medium text-sm">
                          Explore {v.title}
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>

                      <div className="md:text-right">
                        <div className="font-display text-5xl md:text-6xl font-bold gradient-text">
                          {v.stat.value}
                        </div>
                        <div className="text-xs uppercase tracking-widest text-slate mt-1">
                          {v.stat.label}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`absolute -right-20 -bottom-20 w-64 h-64 ${v.accent} opacity-[0.06] rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}
                    />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        description="Talk to our strategy team and we'll map your goals to the right verticals across the ecosystem."
        primaryCta={{ label: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Become a Partner", href: "/partners" }}
      />
    </>
  );
}
