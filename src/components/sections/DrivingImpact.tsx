"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const CASE_STUDIES = [
  {
    tag: "LOGISTICS",
    title: "Port Authority Optimization",
    body: "How we reduced turnaround times by 24% using predictive AI modeling for Kenya's primary sea-ports.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&auto=format&fit=crop&q=80",
    alt: "Port at sunset with containers",
    tagColor: "bg-indigo-accent/20 text-indigo-accent",
  },
  {
    tag: "FINTECH",
    title: "Nationwide Credit Scoring",
    body: "Developing a sovereign credit model that increased loan approval rates for SMEs by 40% in Rwanda.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80",
    alt: "Modern office interior with team",
    tagColor: "bg-accent-purple/20 text-accent-purple",
  },
];

export function DrivingImpact() {
  return (
    <section className="py-section-lg">
      <div className="container-xl">
        {/* Header row */}
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <h2 className="font-display text-display-md font-bold text-navy text-balance mb-3">
                Driving Impact
              </h2>
              <p className="text-[16px] text-slate leading-relaxed">
                Case studies from our regional partners in finance, logistics,
                and government.
              </p>
            </div>
            <Link
              href="/ecosystem/advisory"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-primary-brand transition-colors flex-shrink-0"
            >
              View All Stories
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.title} delay={i * 0.1}>
              <div className="group card card-hover overflow-hidden h-full">
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />

                  {/* Tag chip on image */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase backdrop-blur-sm ${study.tagColor}`}
                    >
                      {study.tag}
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-primary-brand transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate text-[14px] leading-relaxed mb-5">
                    {study.body}
                  </p>
                  <Link
                    href="/ecosystem/advisory"
                    className="inline-flex items-center gap-1.5 text-primary-brand font-medium text-sm hover:gap-2.5 transition-all"
                  >
                    Read Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile view all link */}
        <Reveal delay={0.2}>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/ecosystem/advisory"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-primary-brand transition-colors"
            >
              View All Stories
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
