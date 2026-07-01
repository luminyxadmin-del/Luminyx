"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation props — only applied after hydration so SSR HTML stays visible.
  const leftAnim = mounted
    ? { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    : {};
  const rightAnim = mounted
    ? { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const } }
    : {};
  const cardAnim = mounted
    ? { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] as const } }
    : {};

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden pt-12 pb-24">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern-bg opacity-40 -z-10" />
      <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-primary-brand/[0.08] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-purple/[0.06] blur-[100px] rounded-full -z-10" />

      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div {...leftAnim}>
            <div className="chip mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              Strategic Intelligence
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-[68px] font-bold tracking-[-0.03em] leading-[1.04] text-navy text-balance mb-6">
              AI Advisory for East{" "}
              <span className="gradient-text">Africa&apos;s</span>{" "}
              Growth
            </h1>

            <p className="text-[18px] text-slate max-w-[500px] mb-10 leading-[1.65]">
              Empowering enterprise leaders and government institutions with
              world-class AI strategy, digital transformation, and sovereign
              intelligence systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary group">
                Schedule Consultation
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/ecosystem/advisory"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary-light text-navy font-medium text-sm tracking-wide transition-all duration-300 hover:bg-primary-light active:scale-95"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div className="relative" {...rightAnim}>
            {/* Portrait image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80"
                alt="AI technology professional with holographic dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </div>

            {/* Floating glass card */}
            <motion.div
              className="absolute -bottom-5 -left-6 max-w-[285px] glass rounded-2xl p-4 shadow-elevated"
              {...cardAnim}
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary-brand flex items-center justify-center flex-shrink-0 shadow-card-soft">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="font-display font-semibold text-navy text-sm">
                  Predictive Growth
                </span>
              </div>
              <p className="text-xs text-slate leading-relaxed">
                AI-driven forecasting for the EAC region shows a{" "}
                <strong className="text-primary-brand font-semibold">
                  52% increase
                </strong>{" "}
                in digital efficiency by 2028.
              </p>
            </motion.div>

            {/* Top-right accent blob */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-primary-brand opacity-[0.12] blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
