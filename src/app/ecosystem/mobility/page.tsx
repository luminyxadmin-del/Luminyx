"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  FileText,
  Package,
  HeartPulse,
  RotateCcw,
  Shield,
  Briefcase,
  Users,
  Laptop,
  TrendingUp,
  GraduationCap,
  Plane,
  Calendar,
  Globe,
  Building,
  Star,
} from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";
import { StatusBadge } from "@/components/StatusBadge";

const STATS = [
  { value: "14", label: "Active Corridors" },
  { value: "2,400+", label: "Relocations Managed" },
  { value: "98.2%", label: "Visa Success Rate" },
  { value: "24 hr", label: "Documentation SLA" },
];

const INFRASTRUCTURE = [
  {
    icon: ShieldCheck,
    title: "Visa Intelligence",
    description:
      "AI-assisted visa pathway analysis covering work permits, business visas, and long-term residency across all 14 active corridors.",
  },
  {
    icon: MapPin,
    title: "Relocation Logistics",
    description:
      "End-to-end relocation coordination including housing, schooling, banking, and settlement support for professionals and their dependants.",
  },
  {
    icon: FileText,
    title: "Immigration Compliance",
    description:
      "Continuous monitoring of immigration policy changes across 14 jurisdictions, with automated compliance alerts for all active cases.",
  },
  {
    icon: Package,
    title: "Document Orchestration",
    description:
      "Digital document collection, verification, and submission workflows with 24-hour processing SLAs for standard applications.",
  },
  {
    icon: HeartPulse,
    title: "Benefits Coordination",
    description:
      "Advisory on healthcare, pension portability, and compensation structuring for cross-border employment packages.",
  },
  {
    icon: RotateCcw,
    title: "Re-entry Planning",
    description:
      "Structured support for professionals returning to home markets, including tax advisory and career transition services.",
  },
];

const ROUTES = [
  {
    name: "East Africa â†’ UAE",
    status: "Active" as const,
    note: "High-volume professional corridor, all visa types supported",
  },
  {
    name: "India â†’ GCC",
    status: "Active" as const,
    note: "Engineering, finance and healthcare dominant flow",
  },
  {
    name: "UK â†’ East Africa",
    status: "Active" as const,
    note: "Senior management and development sector placements",
  },
  {
    name: "North Africa â†’ Europe",
    status: "Active" as const,
    note: "Skilled trades, engineering and IT professionals",
  },
  {
    name: "West Africa â†’ UAE",
    status: "Launching" as const,
    note: "Growing corridor, select visa categories supported",
  },
  {
    name: "India â†’ UK",
    status: "Launching" as const,
    note: "Pending bilateral agreement, pre-registration open",
  },
];

const COMPLIANCE_TILES = [
  {
    icon: Shield,
    title: "Work Permits",
    note: "Standard and specialised work authorisation across all 14 corridors",
  },
  {
    icon: Briefcase,
    title: "Business Visas",
    note: "Short-term and long-stay business entry for executives and consultants",
  },
  {
    icon: Users,
    title: "Family Sponsorship",
    note: "Dependent visa processing and family unit relocation coordination",
  },
  {
    icon: Laptop,
    title: "Digital Nomad Visas",
    note: "Remote work authorisations in applicable jurisdictions",
  },
  {
    icon: TrendingUp,
    title: "Investor Pathways",
    note: "Golden visa and investor residency programmes in GCC and Europe",
  },
  {
    icon: GraduationCap,
    title: "Education Visas",
    note: "Student and research visa processing for institution-linked placements",
  },
];

const TRAVEL_PORTFOLIO = [
  {
    icon: Plane,
    title: "Executive Travel Management",
    description:
      "Business class coordination, lounge access, and itinerary optimisation for senior professionals on active engagements.",
  },
  {
    icon: Globe,
    title: "Institutional Delegation Planning",
    description:
      "End-to-end coordination for government and university delegations â€” logistics, protocol support, and documentation.",
  },
  {
    icon: MapPin,
    title: "Site Visit Programmes",
    description:
      "Curated visits to benchmark organisations, innovation hubs, and government agencies globally for institutional clients.",
  },
  {
    icon: Star,
    title: "Partner Retreat Coordination",
    description:
      "Multi-day leadership retreats with AV, hospitality, cultural programming, and full logistics managed by Meridian Journeys.",
  },
  {
    icon: Calendar,
    title: "Conference & Event Travel",
    description:
      "Group travel management for teams attending sector summits, international forums, and bilateral engagement events.",
  },
  {
    icon: Building,
    title: "VIP Relocation Packages",
    description:
      "White-glove relocation service for C-suite hires, including residence search, schooling, and family settlement coordination.",
  },
];

export default function MobilityPage() {
  return (
    <div>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative container-xl">
          <div className="text-xs text-white/30 mb-6">
            Luminyx Group / <span className="text-white/50">Ecosystem</span> / <span className="text-accent-purple">Mobility</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <Plane className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">MOBILITY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Moving Talent Across Borders{" "}
                <span className="text-accent-purple">Intelligently</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                We build the infrastructure that makes cross-border talent movement seamless â€” from opportunity identification to visa processing, relocation, and integration.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Explore Mobility <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/ecosystem" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors text-sm font-medium">
                  View All Divisions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "40+", label: "Destination Countries" },
                { value: "72hr", label: "Avg Visa Processing" },
                { value: "94%", label: "Successful Placements" },
                { value: "6", label: "Active Corridors" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="font-display text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE CAPABILITIES */}
      <section className="py-section-lg">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Infrastructure</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Six Infrastructure Capabilities
              </h2>
              <p className="text-ink-muted max-w-xl text-lg leading-relaxed">
                We handle every component of the movement lifecycle â€” nothing falls
                through the cracks between service providers.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INFRASTRUCTURE.map((cap, i) => (
              <CapabilityCard
                key={cap.title}
                icon={cap.icon}
                title={cap.title}
                description={cap.description}
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ ACTIVE CORRIDORS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-section-lg bg-bg-subtle">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Corridors</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1]">
                Active Corridors
              </h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ROUTES.map((route, i) => (
              <motion.div
                key={route.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-between p-5 rounded-2xl bg-white border border-light-gray"
              >
                <div>
                  <div className="font-display text-sm font-semibold text-navy mb-1">{route.name}</div>
                  <div className="text-xs text-ink-faint">{route.note}</div>
                </div>
                <StatusBadge status={route.status} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ COMPLIANCE & DOCUMENTATION COVERAGE (NEW SECTION) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-section-lg">
        <div className="container-xl">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Coverage</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Compliance & Documentation Coverage
              </h2>
              <p className="text-ink-muted max-w-xl mx-auto text-lg leading-relaxed">
                We handle the regulatory complexity so your professionals can focus
                on impact, not paperwork.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPLIANCE_TILES.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <motion.div
                  key={tile.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-light-gray"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-brand/10 border border-primary-brand/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-navy mb-1.5">{tile.title}</h3>
                    <p className="text-xs text-ink-muted leading-relaxed">{tile.note}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ MERIDIAN JOURNEYS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-section-lg relative overflow-hidden bg-bg-tint">
        <div className="container-xl">
          {/* Brand header */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-bold tracking-widest uppercase mb-5">
                Travel Sub-Brand
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Meridian Journeys
              </h2>
              <p className="text-slate max-w-xl mx-auto text-lg italic">
                Premium travel management for Luminyx professionals and their
                institutions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-slate text-lg leading-relaxed mb-4">
                Meridian Journeys is the travel management arm of Luminyx Mobility,
                providing white-glove corporate travel, institutional delegation
                logistics, and executive relocation packages for clients across our
                14 active corridors.
              </p>
              <p className="text-ink-muted leading-relaxed">
                Every journey is managed end-to-end â€” from flight and hotel
                coordination to visa documentation, protocol support for government
                delegations, and culturally tailored itineraries for leadership
                retreats and site visits.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary group">
                Explore Meridian Journeys
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TRAVEL_PORTFOLIO.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl p-6 bg-white border border-light-gray"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-brand/10 border border-primary-brand/20 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-accent-purple" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 grid-pattern-bg opacity-[0.03] pointer-events-none" />

          <div className="relative container-xl py-20 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to Move Talent{" "}
              <span className="text-accent-purple">Across Borders?</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re planning a single executive relocation or a multi-cohort corridor programme, we have the infrastructure to deliver it at any scale.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Get Started <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/ecosystem" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors">
                Explore Other Divisions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

