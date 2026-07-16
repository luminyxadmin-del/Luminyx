"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, X } from "lucide-react";

interface Leader {
  name: string;
  role: string;
  image: string | null;
  bio: string[];
  expertise: string[];
  linkedin?: string;
}

const LEADERS: Leader[] = [
  {
    name: "Shamitha Shetty",
    role: "Founder and Director",
    image:
      "https://res.cloudinary.com/dtg3lepr4/image/upload/v1784187632/Shamitha_Shetty_Portrait_nhacmp.png",
    bio: [
      "With over two decades of leadership experience, Shamitha Shetty specializes in executive search, talent strategy, and business transformation across international markets. She has successfully partnered with organizations to build leadership teams, scale businesses, and drive sustainable growth across Africa, India, and the Middle East.",
      "Her expertise spans executive hiring, organizational development, commercial strategy, and leadership advisory. Recognized for her collaborative leadership style and strategic mindset, Shamitha is committed to helping organizations unlock growth by building exceptional teams and fostering cultures of excellence.",
    ],
    expertise: ["Executive Search", "Talent Strategy", "Business Transformation", "Leadership Advisory"],
  },
  {
    name: "Abhijith Sooda",
    role: "Country Head",
    image:
      "https://res.cloudinary.com/dtg3lepr4/image/upload/v1784187723/Abhijith_Sooda_o0bqpj.png",
    bio: [
      "With over 20 years of experience, Abhijith Sooda specializes in enterprise technology, digital transformation, and AI-driven customer experience solutions across Africa. He has successfully partnered with organizations across banking, telecommunications, government, and private sectors to deliver innovative business solutions, drive commercial growth, and lead complex transformation initiatives.",
      "Recognized for his strategic mindset and customer-centric approach, Abhijith is passionate about helping organizations leverage technology to improve operational excellence and create meaningful business impact.",
    ],
    expertise: ["Enterprise Technology", "Digital Transformation", "AI-Driven CX", "Commercial Growth"],
  },
  {
    name: "Mayank Mohan",
    role: "Director",
    image:
      "https://res.cloudinary.com/dtg3lepr4/image/upload/v1784187812/Mayank_ocjsl3.jpg",
    bio: [
      "Mayank Mohan is a business growth leader with a proven track record of scaling organisations through strategic partnerships, commercial innovation, and market expansion. With leadership experience spanning Africa and Asia, he has successfully driven large-scale business transformation, built high-performing teams, and developed growth strategies that have accelerated revenue and strengthened market presence.",
      "His expertise lies in forging strategic partnerships, unlocking new business opportunities, and aligning commercial strategy with long-term organisational goals. Recognised for his data-driven approach and execution-focused leadership, Mayank works closely with enterprises, institutions, and key stakeholders to build sustainable partnerships that create lasting value.",
      "At Luminyx, he is focused on building an ecosystem of strategic partnerships that accelerates innovation, expands market reach, and delivers transformative value to customers and stakeholders worldwide.",
    ],
    expertise: ["Strategic Partnerships", "Market Expansion", "Commercial Strategy", "Business Growth"],
  },
  {
    name: "Ruhi Dongaonkar",
    role: "Director",
    image:
      "https://res.cloudinary.com/dtg3lepr4/image/upload/v1784187914/Ruhi_Dongaonkar_uliulw.jpg",
    bio: [
      "Ruhi Dongaonkar is a strategic operations leader with a proven track record of transforming business operations into engines of sustainable growth. With more than a decade of leadership experience, she specializes in operational excellence, customer success, process optimization, and organizational scalability, helping businesses build efficient systems that deliver exceptional customer experiences.",
      "Throughout her career, Ruhi has led large-scale operational functions, built high-performing cross-functional teams, and implemented customer-centric processes that have significantly improved service delivery, revenue performance, and operational efficiency. Her collaborative leadership style, data-driven decision-making, and focus on continuous improvement have enabled organizations to scale while maintaining operational excellence.",
      "At Luminyx, she is responsible for driving operational strategy, strengthening customer success, and enabling business growth through streamlined processes, innovation, and execution excellence.",
    ],
    expertise: ["Operational Excellence", "Customer Success", "Process Optimization", "Scalability"],
  },
  {
    name: "Moksh Galhotra",
    role: "Director",
    image:
      "https://res.cloudinary.com/dtg3lepr4/image/upload/v1784188021/Moksh_Galhotra_wyx0qa.png",
    bio: [
      "Moksh Galhotra is a partnership strategist dedicated to building collaborative business ecosystems that drive innovation and long-term value. He specializes in establishing strategic alliances, cultivating executive relationships, and connecting organizations with opportunities that accelerate growth and strengthen market presence.",
      "Known for his consultative approach and ability to bring together diverse stakeholders, Moksh focuses on creating partnerships founded on trust, shared vision, and measurable outcomes. His expertise in relationship management and business collaboration enables organizations to expand their reach while delivering sustainable value to clients and partners alike.",
      "At Luminyx, he is responsible for developing strategic alliances, expanding the partner ecosystem, and fostering collaborations that support the company's global growth ambitions.",
    ],
    expertise: ["Strategic Alliances", "Relationship Management", "Business Collaboration", "Ecosystem Growth"],
  },
  {
    name: "Mitali Dixit",
    role: "Director",
    image:
      "https://res.cloudinary.com/dtg3lepr4/image/upload/v1784205374/wmremove-transformed_qdaelo.jpg",
    bio: [
      "For Mitali, travel is more than visiting destinations — it's about creating experiences that inspire, connect, and leave lasting memories. With more than 22 years in the travel industry, she specializes in curating bespoke journeys, building trusted global partnerships, and delivering exceptional service for travelers seeking meaningful experiences.",
      "Her expertise spans luxury travel, destination management, personalized itinerary design, and relationship management. Driven by a deep passion for exploration and an unwavering commitment to customer satisfaction, Mitali combines global destination knowledge with meticulous planning to ensure every journey is seamless from start to finish.",
      "At Luminyx, she oversees the company's luxury travel portfolio, collaborating with global partners to craft distinctive travel experiences that reflect the highest standards of quality, authenticity, and personalized service.",
    ],
    expertise: ["Luxury Travel", "Destination Management", "Itinerary Design", "Relationship Management"],
  },
  {
    name: "Nisha Panicker",
    role: "Director",
    image:
      "https://res.cloudinary.com/dtg3lepr4/image/upload/v1784188266/Nisha_Panicker_u0k3op.jpg",
    bio: [
      "Nisha Panicker is an accomplished executive search and talent advisory leader with more than 20 years of experience connecting organizations with exceptional leadership talent. She specializes in building long-term client partnerships, understanding complex business needs, and delivering leadership solutions that enable sustainable organizational growth.",
      "Her expertise lies in executive hiring, leadership consulting, talent strategy, and workforce planning. Known for her insight-driven and relationship-focused approach, Nisha partners with organizations to identify leaders who not only meet business objectives but also strengthen culture and long-term capability.",
      "At Luminyx, she is responsible for leading executive search and talent advisory services, helping organizations build future-ready leadership teams that create lasting business impact.",
    ],
    expertise: ["Executive Search", "Talent Advisory", "Leadership Consulting", "Workforce Planning"],
  },
  {
    name: "Saurabh Siddharth",
    role: "Director",
    image:
      "https://res.cloudinary.com/dtg3lepr4/image/upload/v1784188335/Saurabh_Siddharth_qadaaf.png",
    bio: [
      "Saurabh Siddharth is an accomplished business leader dedicated to helping organizations unlock growth through strategy, innovation, and execution excellence. He specializes in aligning business objectives with operational capabilities, enabling clients to navigate change, optimize performance, and create lasting value.",
      "Known for his analytical mindset and collaborative leadership style, Saurabh partners with organizations to design practical solutions that improve efficiency, strengthen stakeholder relationships, and accelerate business transformation. At Luminyx, he is responsible for driving strategic initiatives that deliver measurable impact for clients and support the company's vision for sustainable growth.",
    ],
    expertise: ["Business Strategy", "Execution Excellence", "Stakeholder Management", "Transformation"],
  },
];

function Avatar({ leader, className }: { leader: Leader; className?: string }) {
  if (leader.image) {
    return (
      <Image
        src={leader.image}
        alt={leader.name}
        fill
        className={className}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    );
  }
  const initials = leader.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div
      className={`flex items-center justify-center w-full h-full ${className ?? ""}`}
      style={{ background: "linear-gradient(135deg, #EDE9FE, #F5F3FF)" }}
    >
      <span className="font-display text-4xl font-bold text-primary-brand">{initials}</span>
    </div>
  );
}

export function LeadershipSection() {
  const [active, setActive] = useState<Leader | null>(null);

  return (
    <section className="py-16 container-xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light border border-primary-brand/20 mb-4">
          <span className="text-xs font-medium text-primary-brand uppercase tracking-wider">Our Leadership</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          Meet the <span className="text-primary-brand">People Behind Luminyx</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {LEADERS.map((leader, i) => (
          <motion.button
            key={leader.name}
            type="button"
            onClick={() => setActive(leader)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="group text-left rounded-3xl bg-white border border-primary-brand/10 shadow-sm hover:shadow-elevated transition-shadow overflow-hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Avatar leader={leader} className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {leader.linkedin && (
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-ink leading-tight">{leader.name}</h3>
              <div className="text-xs font-medium text-primary-brand uppercase tracking-wider mt-1 mb-3">
                {leader.role}
              </div>
              <p className="text-sm text-ink-muted leading-relaxed line-clamp-4">{leader.bio[0]}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(17,24,39,0.6)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white shadow-elevated"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-primary-brand/10 flex items-center justify-center hover:bg-primary-light transition-colors"
              >
                <X className="w-4 h-4 text-ink" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-5">
                <div className="sm:col-span-2 relative aspect-square sm:aspect-auto sm:h-full min-h-[220px]">
                  <Avatar leader={active} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent sm:hidden" />
                </div>
                <div className="sm:col-span-3 p-8">
                  {active.linkedin && (
                    <a
                      href={active.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mb-4 w-9 h-9 rounded-full bg-primary-light items-center justify-center hover:bg-primary-brand group"
                    >
                      <Linkedin className="w-4 h-4 text-primary-brand group-hover:text-white transition-colors" />
                    </a>
                  )}
                  <h3 className="font-display text-2xl font-bold text-ink leading-tight">{active.name}</h3>
                  <div className="text-xs font-medium text-primary-brand uppercase tracking-wider mt-1.5 mb-5">
                    {active.role}
                  </div>

                  <div className="space-y-3">
                    {active.bio.map((para, idx) => (
                      <p key={idx} className="text-sm text-ink-muted leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  {active.expertise.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-primary-brand/10">
                      <div className="text-[11px] font-semibold text-ink-faint uppercase tracking-widest mb-3">
                        Expertise
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {active.expertise.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-primary-brand bg-primary-light px-3 py-1.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
