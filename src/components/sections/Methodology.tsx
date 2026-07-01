"use client";

import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Comprehensive audit of existing tech and culture.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Custom roadmap development with clear KPIs.",
  },
  {
    number: "03",
    title: "Design",
    description: "Architecting the AI and data infrastructure.",
  },
  {
    number: "04",
    title: "Implement",
    description: "Seamless deployment with zero downtime.",
  },
  {
    number: "05",
    title: "Support",
    description: "Ongoing optimization and adaptive learning.",
  },
];

export function Methodology() {
  return (
    <section className="py-section-lg bg-primary-light">
      <div className="container-xl">
        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-display-md font-bold text-navy text-balance mb-4">
              Our Methodology
            </h2>
            <p className="text-[17px] text-slate leading-relaxed">
              A rigorous 5-step approach to ensuring sustainable innovation.
            </p>
          </div>
        </Reveal>

        {/* 5 step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.07}>
              <div className="card card-hover p-7 h-full flex flex-col gap-5 group">
                {/* Numbered badge */}
                <div className="w-11 h-11 rounded-full bg-primary-brand flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-xs font-bold text-white tracking-widest">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h4 className="font-display font-semibold text-navy text-lg mb-2 group-hover:text-primary-brand transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate text-[13px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
