"use client";

import Image from "next/image";
import { Brain, Layers } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const GRID_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80",
    alt: "Neural network mesh visualization",
  },
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80",
    alt: "AI brain illustration",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80",
    alt: "Modern enterprise building",
  },
  {
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80",
    alt: "Abstract data visualization",
  },
];

export function BridgingAI() {
  return (
    <section className="py-section-lg bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 2×2 image grid */}
          <Reveal direction="left">
            <div className="grid grid-cols-2 gap-4">
              {GRID_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-card-soft group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 45vw, 22vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: copy */}
          <Reveal direction="right" delay={0.1}>
            <div>
              <h2 className="font-display text-display-md font-bold text-navy text-balance mb-6">
                Bridging Global AI with{" "}
                <span className="gradient-text">African Potential</span>
              </h2>
              <p className="text-[17px] text-slate leading-[1.7] mb-10">
                Luminyx Advisory is a specialized consultancy dedicated to
                navigating the complexities of the digital era. We provide the
                strategic bridge between advanced AI technology and its practical
                application in African markets.
              </p>

              <div className="space-y-7">
                {/* AI Consulting */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light transition-colors">
                    <Brain className="w-5 h-5 text-primary-brand" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy mb-1.5">
                      AI Consulting
                    </h4>
                    <p className="text-slate text-[14px] leading-relaxed">
                      Strategic roadmaps for implementing generative and
                      predictive AI at scale.
                    </p>
                  </div>
                </div>

                {/* Digital Transformation */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-purple/15 transition-colors">
                    <Layers className="w-5 h-5 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy mb-1.5">
                      Digital Transformation
                    </h4>
                    <p className="text-slate text-[14px] leading-relaxed">
                      Modernizing legacy infrastructure for the cloud-native,
                      AI-first economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
