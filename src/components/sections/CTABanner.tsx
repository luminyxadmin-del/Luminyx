"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CTABanner() {
  return (
    <section className="py-section-lg">
      <div className="container-xl">
        <Reveal>
          <div className="relative rounded-3xl bg-primary-dark overflow-hidden px-8 md:px-16 py-20 text-center">
            {/* Glow blobs */}
            <div className="absolute -top-24 left-1/4 w-72 h-72 bg-primary-brand/30 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 right-1/4 w-72 h-72 bg-accent-purple/25 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-primary-brand/10 rounded-full blur-[60px]" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold text-white text-balance leading-[1.08] tracking-tight mb-6">
                Ready to lead the
                <br />
                AI revolution in Africa?
              </h2>
              <p className="text-white/70 text-[16px] max-w-md mx-auto mb-10 leading-relaxed">
                Our advisory team is ready to help you define your strategic
                edge. Let&apos;s build the future together.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-navy font-semibold text-sm hover:bg-primary-light transition-all duration-300 active:scale-95 group"
              >
                Launch Luminyx Advisory
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <p className="mt-6 text-white/40 text-xs tracking-wide">
                Limited consultation slots available for Q4 2024
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
