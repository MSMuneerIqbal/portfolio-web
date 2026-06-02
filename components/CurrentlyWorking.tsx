"use client";

import { motion } from "framer-motion";
import { Cpu, Building2, ExternalLink } from "lucide-react";

const companies = [
  {
    name: "WebotechStudio",
    role: "Co-Founder & AI Engineer",
    period: "2026 – Present",
    description:
      "Building a large-scale OLX-type marketplace platform for the Saudi market. Leading full-stack development with Next.js, TypeScript, and AI-powered features for a seamless classifieds experience.",
    color: "from-violet-500 to-purple-600",
    icon: "🏢",
  },
  {
    name: "Semantechs.com",
    role: "Agentic AI Engineer",
    period: "2026 – Present",
    description:
      "Developing advanced agentic AI systems and AI assistants. Architecting multi-agent orchestration pipelines and intelligent automation solutions for enterprise clients.",
    color: "from-blue-500 to-cyan-600",
    icon: "🤖",
  },
  {
    name: "7Star Laptops",
    role: "Full-Stack Developer",
    period: "2026 – Present",
    description:
      "Developed complete POS (Point of Sale) software suite and built the e-commerce platform 7starbattery.pk. Handling inventory management, sales tracking, and online retail operations.",
    color: "from-emerald-500 to-teal-600",
    icon: "💻",
  },
  {
    name: "Optifyserve.com",
    role: "SaaS Developer",
    period: "2026 – Present",
    description:
      "Building a SaaS application for the UAE market focused on business optimization and automation. Full-stack development with Next.js, Python FastAPI, and PostgreSQL.",
    color: "from-orange-500 to-red-500",
    icon: "☁️",
  },
];

export default function CurrentlyWorking() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/4 rounded-full blur-[100px]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-emerald-400 mb-6"
          >
            <Building2 className="h-3.5 w-3.5" />
            Currently Engaged
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Where I&apos;m{" "}
            <span className="gradient-text">Working</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Collaborating with multiple companies across agentic AI, SaaS, and e-commerce
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 group relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${company.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className="flex items-start gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                  {company.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-base">{company.name}</h3>
                    <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                      {company.period}
                    </span>
                  </div>
                  <p className="text-sm text-purple-400 font-medium mb-2">{company.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {company.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto text-center"
        >
          <div className="glass-card rounded-2xl p-5 inline-flex items-center gap-3">
            <Cpu className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-muted-foreground">
              Also continuing advanced Agentic AI education at{" "}
              <span className="text-purple-400 font-medium">
                PIAIC (Presidential Initiative for AI & Computing)
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
