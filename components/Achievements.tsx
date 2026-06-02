"use client";

import { motion } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";

const achievements = [
  "Built 15+ AI-powered applications using LLMs and intelligent agents",
  "Developed multiple SaaS products for business automation and optimization",
  "Created comprehensive educational resources in Generative AI and modern Python",
  "Specialized in RAG systems for document intelligence and data analysis",
  "Expert in CrewAI, LangChain, and OpenAI SDKs for agent development",
  "Built enterprise inventory systems for retail businesses",
  "GenAI Hackathon participant — Pak Angels",
  "PIAIC Graduate — Pakistan Institute of Artificial Intelligence & Cloud Computing",
  "58 public repositories with 31 private projects across 9 categories",
  "Full-stack expertise spanning AI/ML, backend, frontend, and DevOps",
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-600/4 rounded-full blur-[100px]" />
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-amber-400 mb-6"
          >
            <Trophy className="h-3.5 w-3.5" />
            Achievements & Highlights
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Milestones &{" "}
            <span className="gradient-text-warm">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Key accomplishments in my AI and development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card rounded-xl p-5 flex items-start gap-4 group hover:border-purple-500/30 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="h-4 w-4 text-amber-400" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
