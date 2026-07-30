"use client";

import { motion } from "framer-motion";
import { Cpu, Building2 } from "lucide-react";

const companies = [
  {
    name: "WeboTech Studio",
    role: "Lead AI Engineer",
    period: "Jan 2026 – Present",
    description:
      "Leading the AI and automation division — machine learning models, AI agents, chatbots, and custom integrations that streamline operations and support decision-making.",
    color: "from-sky-500 to-blue-600",
    icon: "🧠",
    url: "https://webotechstudio.com/team/muneer-iqbal",
  },
  {
    name: "Semantechs",
    role: "AI Agent Engineer",
    period: "Jan 2026 – Present",
    description:
      "Designing and shipping agentic AI systems for enterprise clients — multi-agent orchestration pipelines, AI assistants, and intelligent automation built on LLMs, MCP servers, and tool-calling architectures.",
    color: "from-violet-500 to-purple-600",
    icon: "🤖",
  },
  {
    name: "7Star Laptop Battery Station",
    role: "Software Engineer",
    period: "Jan 2026 – Present",
    description:
      "Engineered the complete POS software suite, warehouse stock applications, and inventory systems powering retail operations — from raw-stock intake to point-of-sale and reporting.",
    color: "from-emerald-500 to-teal-600",
    icon: "💻",
  },
  {
    name: "OptifyServe",
    role: "SaaS Application Developer",
    period: "Jan 2026 – Present",
    description:
      "Building a UAE-based SaaS platform for business optimization and automation — full-stack development across Next.js, TypeScript, Python FastAPI, and PostgreSQL.",
    color: "from-orange-500 to-red-500",
    icon: "☁️",
  },
];

export default function CurrentlyWorking() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
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
          className="text-center mb-9"
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
            Working across agentic AI, retail software, and SaaS platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {companies.map((company, i) => {
            const Card = company.url ? motion.a : motion.div;
            return (
            <Card
              key={i}
              {...(company.url
                ? { href: company.url, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 group relative overflow-hidden ${
                company.url ? "block hover:border-sky-500/30" : ""
              }`}
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
            </Card>
            );
          })}
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
