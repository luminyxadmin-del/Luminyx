"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
}

export function ProcessStepper({ steps }: Props) {
  return (
    <div className="relative">
      {/* connector line */}
      <div className="absolute top-[22px] left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-px hidden md:block">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-primary-brand/60 via-accent-purple/60 to-primary-brand/60 origin-left"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-11 h-11 rounded-full bg-gradient-primary-brand flex items-center justify-center mb-5 shadow-[0_0_24px_rgba(109,40,217,0.4)]">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-display text-sm font-bold text-navy mb-2">{step.title}</h4>
              <p className="text-xs text-slate leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
