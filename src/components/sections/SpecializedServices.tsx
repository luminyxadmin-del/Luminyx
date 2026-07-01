"use client";

import Link from "next/link";
import { Briefcase, Building2, Settings, Cloud, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function SpecializedServices() {
  return (
    <section className="py-section-lg">
      <div className="container-xl">
        {/* Section heading */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-display-md font-bold text-navy text-balance mb-4">
              Specialized AI Services
            </h2>
            <p className="text-[17px] text-slate leading-relaxed">
              Tailored intelligence solutions designed for the unique challenges
              of the African enterprise landscape.
            </p>
          </div>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 1: Enterprise Strategy — LARGE, dark navy, full width */}
          <Reveal className="md:col-span-2" delay={0.05}>
            <div className="relative bg-primary-dark rounded-3xl p-10 md:p-12 overflow-hidden group card-hover shadow-elevated flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              {/* Background glow */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary-brand/20 rounded-full blur-3xl group-hover:bg-primary-brand/30 transition-colors" />
              <div className="absolute -bottom-10 left-1/3 w-48 h-48 bg-accent-purple/15 rounded-full blur-2xl" />

              <div className="relative z-10 flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-medium tracking-wider uppercase mb-6">
                  For Executives
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Enterprise Strategy
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed max-w-lg">
                  Comprehensive AI adoption frameworks, board-level technology
                  briefings, and multi-year digital transformation roadmaps
                  designed for African enterprise at scale.
                </p>
              </div>

              <div className="relative z-10 md:self-end">
                <Link
                  href="/ecosystem/advisory"
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-navy font-medium text-sm",
                    "hover:bg-primary-light transition-all duration-300 hover:shadow-card-soft active:scale-95"
                  )}
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* 2: Government Consulting — small light */}
          <Reveal delay={0.1}>
            <div className="card card-hover p-8 h-full group">
              <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary-light transition-colors">
                <Building2 className="w-5 h-5 text-primary-brand" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                Government Consulting
              </h3>
              <p className="text-slate text-[14px] leading-relaxed mb-6">
                Policy advisory, e-government strategy, and sovereign AI
                deployment for public sector institutions across East Africa.
              </p>
              <Link
                href="/ecosystem/advisory"
                className="inline-flex items-center gap-1.5 text-primary-brand font-medium text-sm hover:gap-2.5 transition-all"
              >
                Case Studies
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          {/* 3: Automation — small light */}
          <Reveal delay={0.15}>
            <div className="card card-hover p-8 h-full group">
              <div className="w-11 h-11 rounded-xl bg-indigo-accent/10 flex items-center justify-center mb-6 group-hover:bg-indigo-accent/15 transition-colors">
                <Settings className="w-5 h-5 text-indigo-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                Automation
              </h3>
              <p className="text-slate text-[14px] leading-relaxed mb-6">
                Intelligent process automation, robotic workflow design, and
                AI-driven operational efficiency programs for enterprise teams.
              </p>
              <Link
                href="/ecosystem/technology"
                className="inline-flex items-center gap-1.5 text-indigo-accent font-medium text-sm hover:gap-2.5 transition-all"
              >
                Technical Specs
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          {/* 4: Sovereign Cloud AI — LARGE, blue/indigo, full width */}
          <Reveal className="md:col-span-2" delay={0.2}>
            <div className="relative rounded-3xl p-10 md:p-12 overflow-hidden group card-hover shadow-elevated bg-gradient-to-br from-primary-dark via-primary-brand to-primary-dark flex flex-col md:flex-row gap-8 items-start">
              {/* Background decoration */}
              <div className="absolute -top-10 right-24 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/2 w-56 h-56 bg-indigo-accent/10 rounded-full blur-2xl" />

              {/* Large decorative cloud icon */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.08] hidden md:block">
                <Cloud className="w-48 h-48 text-white" />
              </div>

              <div className="relative z-10 flex-1">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Sovereign Cloud AI
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed max-w-lg">
                  Fully sovereign AI infrastructure deployed within African
                  jurisdictions — ensuring data residency compliance, national
                  security alignment, and low-latency access for critical
                  government and enterprise workloads.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
