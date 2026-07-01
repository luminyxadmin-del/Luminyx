"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  imageAlt: string;
  badge?: { label: string; value: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  badge,
}: PageHeroProps) {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern-bg opacity-40 -z-10" />
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary-brand/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -z-10" />

      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {eyebrow && (
              <div className="chip mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                {eyebrow}
              </div>
            )}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.05] text-balance">
              {title}
            </h1>
            <p className="mt-6 text-lg text-slate max-w-xl leading-relaxed">
              {description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] lg:aspect-square rounded-[2.5rem] overflow-hidden border border-light-gray shadow-elevated">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 via-transparent to-transparent" />
              {badge && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="glass rounded-2xl p-4">
                    <div className="text-xs text-slate uppercase tracking-wider mb-1">
                      {badge.label}
                    </div>
                    <div className="font-display text-2xl font-bold text-navy">
                      {badge.value}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-3xl bg-gradient-primary-brand blur-2xl opacity-40 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
