"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  ClipboardList,
  Link2,
  UserCheck,
  Brain,
  Target,
  Globe,
  TrendingUp,
  BarChart2,
  LayoutDashboard,
  CheckCircle2,
  Users,
} from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";
import { NumberedCard } from "@/components/NumberedCard";
import { ProcessStepper } from "@/components/ProcessStepper";

const CHECKLIST = [
  "Executive and senior-management search across emerging markets",
  "Cross-border regulatory compliance for international hires",
  "Employer-of-record services in 14 countries",
  "Candidate pipeline development for hard-to-fill roles",
  "AI-powered skills assessment and cultural alignment scoring",
  "Compensation benchmarking across regional markets",
  "Onboarding advisory for expatriate professionals",
  "Talent market intelligence reports for strategic workforce planning",
  "Retained search for confidential and board-level mandates",
];

const AI_PLATFORM = [
  {
    icon: Brain,
    title: "Candidate Intelligence Engine",
    description:
      "Continuous market scanning that identifies qualified candidates 30–60 days before they become actively available in the market.",
  },
  {
    icon: Target,
    title: "Role-Fit Scoring",
    description:
      "Multi-dimensional assessment combining skills, experience, cultural alignment, and cross-border adaptability into a single fit score.",
  },
  {
    icon: Globe,
    title: "Cross-Border Compliance Mapper",
    description:
      "Automated mapping of work permit requirements, tax implications, and visa pathways for every placement corridor we operate.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Retention Model",
    description:
      "ML model trained on 850+ placements that forecasts 12-month retention risk and flags pre-emptive intervention signals for clients.",
  },
  {
    icon: BarChart2,
    title: "Compensation Intelligence",
    description:
      "Real-time compensation benchmarking across 14 countries, updated monthly from live placement data and primary market research.",
  },
  {
    icon: LayoutDashboard,
    title: "Pipeline Analytics Dashboard",
    description:
      "Client-facing dashboard showing live candidate pipeline status, interview velocity, time-to-fill forecasting, and 90-day retention tracking.",
  },
];

const CANDIDATE_JOURNEY = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Candidates are identified through proactive intelligence — not reactive job-board responses or inbound applications.",
  },
  {
    icon: ClipboardList,
    title: "Assess",
    description:
      "A structured assessment covers technical capability, market alignment, cross-border adaptability, and cultural fit.",
  },
  {
    icon: Link2,
    title: "Match",
    description:
      "Candidates are matched to specific client briefs using our Role-Fit Score — not broad keyword matching or gut instinct.",
  },
  {
    icon: UserCheck,
    title: "Onboard",
    description:
      "We remain embedded through the first 90 days, providing structured support to both candidate and hiring team.",
  },
];

const INDUSTRIES = [
  "Financial Services",
  "Government & Public Policy",
  "Technology & AI",
  "Healthcare & Life Sciences",
  "Energy & Infrastructure",
  "Education",
  "Logistics & Supply Chain",
  "Agriculture",
  "Professional Services",
  "Media & Communications",
  "Real Estate",
  "NGO & Development",
];

const WHY_US = [
  {
    number: "01",
    title: "Market Depth",
    description:
      "Networks built over 18 years that no new entrant can replicate quickly — ground-level intelligence across East Africa, MENA, and the GCC.",
  },
  {
    number: "02",
    title: "Speed Without Compromise",
    description:
      "Average 4.1-week fill time on senior roles with 91% 12-month retention. We don't sacrifice quality for speed.",
  },
  {
    number: "03",
    title: "Cross-Border Native",
    description:
      "We operate IN the markets we recruit FROM, not remotely. Local presence enables local intelligence.",
  },
  {
    number: "04",
    title: "AI + Human Judgment",
    description:
      "Technology surfaces the right candidates; experienced search consultants close the brief with judgment and relationship.",
  },
  {
    number: "05",
    title: "Full Compliance Coverage",
    description:
      "Work permits, visa coordination, and employer-of-record services are included in every cross-border placement.",
  },
  {
    number: "06",
    title: "Trusted Legacy",
    description:
      "Backed by Veridian Partners, 18 years of executive search in MENA and East Africa — reliability you can name a reference.",
  },
];

export default function TalentPage() {
  return (
    <div>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-primary-dark pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative container-xl">
          <div className="text-xs text-white/30 mb-6">
            Luminyx Group / <span className="text-white/50">Ecosystem</span> / <span className="text-accent-purple">Talent</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/10 mb-6">
            <Users className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">TALENT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                AI-Powered Talent for the{" "}
                <span className="text-accent-purple">World&apos;s Fastest-Growing Markets</span>
              </h1>
              <p className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl">
                Two decades of specialist recruitment expertise, now enhanced by the Luminyx AI Platform — delivering smarter candidate matching, faster hiring cycles, and deeper market intelligence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Find Talent <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/ecosystem" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/[0.08] transition-colors text-sm font-medium">
                  View All Divisions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { value: "85%", label: "Placement Success" },
                { value: "40%", label: "Faster Hiring" },
                { value: "3M+", label: "Profiles Indexed" },
                { value: "28", label: "Active Countries" },
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

      {/* OUR PRACTICE */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="chip mb-5 inline-flex">Our Practice</div>
              <h2 className="font-display text-4xl font-bold text-navy tracking-tight leading-[1.1] mb-5">
                What We Do
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-4">
                Luminyx Talent is a specialist search firm built for the complexity
                of cross-border hiring in Africa, India, and the GCC. We cover
                executive, senior-management, and professional levels across 27
                sectors.
              </p>
              <p className="text-ink-muted leading-relaxed">
                Unlike generalist recruiters, we understand the regulatory, cultural,
                and compensation dynamics that determine whether a cross-border
                placement succeeds in the long term — not just at the point of
                contract signing.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              style={{ opacity: 1 }}
              className="rounded-2xl p-7 bg-white border border-light-gray"
            >
              <div className="text-xs font-mono text-primary-brand font-bold tracking-widest mb-5 uppercase">
                Service Scope
              </div>
              <ul className="space-y-3">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-snug" style={{ color: "#4B5563" }}>
                    <CheckCircle2 className="w-4 h-4 text-primary-brand/70 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI PLATFORM */}
      <section className="py-section-lg bg-bg-subtle">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Platform</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                Intelligence-First Talent Delivery
              </h2>
              <p className="text-ink-muted max-w-xl text-lg leading-relaxed">
                Our technology platform gives clients an unfair advantage in
                competitive talent markets.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AI_PLATFORM.map((cap, i) => (
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

      {/* CANDIDATE JOURNEY */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="chip mb-4 inline-flex">Candidate Experience</div>
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1] mb-4">
                The Candidate Journey
              </h2>
              <p className="text-slate max-w-xl mx-auto text-lg leading-relaxed">
                Every professional who enters the Luminyx network moves through a
                structured journey designed for precision, speed, and long-term
                success.
              </p>
            </motion.div>
          </div>
          <ProcessStepper steps={CANDIDATE_JOURNEY} />
        </div>
      </section>

      {/* INDUSTRIES + APPROACH */}
      <section className="py-section-lg bg-bg-subtle">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="chip mb-5 inline-flex">Our Approach</div>
                <h2 className="font-display text-3xl font-bold text-navy tracking-tight leading-[1.1] mb-5">
                  Relationship-Driven. Intelligence-Backed.
                </h2>
                <p className="text-slate leading-relaxed mb-4">
                  Our search methodology starts with intelligence, not databases. We
                  actively map the market for your specific brief — identifying
                  candidates who are both qualified and likely to succeed in your
                  cultural and operational context.
                </p>
                <p className="text-ink-muted leading-relaxed">
                  Every search is led by a dedicated consultant with sector-specific
                  experience and in-country network depth. Our AI platform surfaces
                  the universe; our consultants build the relationship that closes
                  the brief.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="chip mb-5 inline-flex">Sectors</div>
                <h2 className="font-display text-3xl font-bold text-navy tracking-tight leading-[1.1] mb-5">
                  Industries We Cover
                </h2>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRIES.map((ind) => (
                    <span
                      key={ind}
                      className="px-3 py-1.5 rounded-full bg-white border border-light-gray text-xs text-slate font-medium"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-section-lg bg-white">
        <div className="container-xl">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-4xl md:text-[44px] font-bold text-navy tracking-tight leading-[1.1]">
                Why Choose Luminyx Talent
              </h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map((card, i) => (
              <NumberedCard
                key={card.number}
                number={card.number}
                title={card.title}
                description={card.description}
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VERIDIAN PARTNERS — dark trust section */}
      <section className="py-section-lg relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-brand/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-brand/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="container-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-mono text-accent-purple font-bold tracking-widest mb-4 uppercase">
                Backed by Legacy
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                18 Years of Executive Search
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Luminyx Talent is built on the foundation of Veridian Partners,
                established in 2006 as a boutique executive search firm
                specialising in MENA and East Africa senior placements.
              </p>
              <p className="text-white/60 leading-relaxed">
                The legacy of 850+ successful senior placements, deep
                employer relationships, and sector intelligence built over 18
                years underpins every brief we take on today.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
              <blockquote className="italic text-white/90 text-base leading-relaxed mb-4">
                &ldquo;The best search firms don&apos;t fill roles — they change
                the trajectory of organisations by placing the right leaders
                at the right inflection points.&rdquo;
              </blockquote>
              <div className="text-sm font-semibold text-white">Veridian Partners</div>
              <div className="text-xs text-white/50">Est. 2006 · MENA & East Africa</div>
            </div>
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
              Ready to Build Your Next{" "}
              <span className="text-accent-purple">High-Performing Team?</span>
            </h2>
            <p className="mt-5 text-white/60 max-w-2xl mx-auto leading-relaxed">
              Share your brief with us today. We will have an initial long-list ready within five business days and a shortlist within three weeks.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-semibold hover:scale-105 transition-transform shadow-elevated">
                Start Hiring <ArrowUpRight className="w-4 h-4" />
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
