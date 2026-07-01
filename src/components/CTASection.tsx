import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type CTASectionProps = {
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({
  title,
  description,
  primaryCta = { label: "Get Started", href: "/contact" },
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="py-section">
      <div className="container-xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-dark p-12 md:p-20 text-center">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-brand/25 via-transparent to-violet/25" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-primary-brand/20 blur-3xl rounded-full" />
            <div className="absolute inset-0 grid-pattern-bg opacity-[0.03]" />

            <div className="relative max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white text-balance leading-[1.1]">
                {title}
              </h2>
              <p className="mt-5 text-lg text-white/70 text-balance">{description}</p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={primaryCta.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-navy font-medium hover:scale-105 active:scale-95 transition-transform shadow-elevated"
                >
                  {primaryCta.label}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
