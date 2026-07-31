"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, ExternalLink, GraduationCap } from "lucide-react";

// Verified at https://panaversity.org/p/muneeriqbal729-lf7k
const CREDENTIAL_URL = "https://panaversity.org/p/muneeriqbal729-lf7k";

const certifications = [
  {
    title: "Agent Factory Fundamentals: Building Digital FTEs",
    org: "Panaversity / PIAIC · L1:P1-AGFF",
    year: "Feb 2026 · Scored 78%",
    icon: "🏭",
    color: "from-violet-500 to-purple-600",
    url: CREDENTIAL_URL,
  },
  {
    title: "Model Context Protocol (MCP) Level 2 Certification",
    org: "Panaversity / PIAIC · L2:P2-MCP",
    year: "Nov 2025 · Scored 73%",
    icon: "🔌",
    color: "from-blue-500 to-cyan-600",
    url: CREDENTIAL_URL,
  },
  {
    title: "Prompt & Context Engineering",
    org: "Panaversity / PIAIC · L1:P0-PTE",
    year: "Sep 2025 · Scored 73%",
    icon: "✍️",
    color: "from-sky-500 to-blue-600",
    url: CREDENTIAL_URL,
  },
  {
    title: "Level 2 Fundamentals of Agentic AI Professional",
    org: "Panaversity / PIAIC · L2:P1-PAI",
    year: "Jul 2025 · Scored 70%",
    icon: "🤖",
    color: "from-purple-500 to-violet-600",
    url: CREDENTIAL_URL,
  },
  {
    title: "Fundamentals of Agentic AI Exam",
    org: "Panaversity / PIAIC · L1:P4-FAI",
    year: "Jun 2025 · Scored 78%",
    icon: "🎖️",
    color: "from-emerald-500 to-teal-600",
    url: CREDENTIAL_URL,
  },
  {
    title: "Applied Generative AI Fundamentals",
    org: "Pak Angels",
    year: "2024",
    icon: "📜",
    color: "from-orange-500 to-red-500",
  },
];

const experience = [
  {
    role: "Lead AI Engineer",
    company: "WeboTech Studio",
    period: "Sep 2025 – Present",
    desc: "Leading the AI and automation division — ML models, AI agents, chatbots, and custom integrations.",
  },
  {
    role: "Agentic AI Engineer",
    company: "Semantechs",
    period: "Jan 2026 – Present",
    desc: "Agentic AI systems for enterprise clients — multi-agent orchestration, MCP servers, and AI assistants.",
  },
  {
    role: "Senior Software Engineer",
    company: "7Star Laptop Battery Station",
    period: "Jan 2026 – Present",
    desc: "POS suite, warehouse stock applications, and the 7starbattery.pk e-commerce platform.",
  },
  {
    role: "SaaS Application Developer",
    company: "OptifyServe · Dubai, UAE",
    period: "Feb – Jun 2026",
    desc: "Full-stack development of a UAE-based business optimisation and automation SaaS platform.",
  },
  {
    role: "AI Engineer Intern",
    company: "Innovidio",
    period: "Mar – Jul 2025",
    desc: "Contributed to agentic AI automation systems and the Qyra AI research platform.",
  },
];

const education = [
  {
    degree: "Certified Cloud Applied Generative AI Engineer",
    institution: "PIAIC — Presidential Initiative for AI & Computing",
    period: "Jul 2024 – Dec 2025",
    desc: "Agentic AI systems, MCP server development, prompt & context engineering, and cloud-native AI deployment.",
    url: CREDENTIAL_URL,
  },
  {
    degree: "BS ADP Artificial Intelligence",
    institution: "The Islamia University of Bahawalpur",
    period: "2022 – 2024",
    desc: "Machine Learning, Deep Learning, and Natural Language Processing foundations.",
  },
  {
    degree: "BCS (Computer Science)",
    institution: "Govt. Degree College, Dunyapur",
    period: "2019 – 2022",
    desc: "Bachelor's with focus on Computer Science and Mathematics.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/4 rounded-full blur-[100px]" />
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-blue-400 mb-6"
          >
            <Award className="h-3.5 w-3.5" />
            Education & Certifications
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Credentials &{" "}
            <span className="gradient-text-cool">Learning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Certifications + Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => {
                  const Wrapper = cert.url ? motion.a : motion.div;
                  return (
                    <Wrapper
                      key={i}
                      {...(cert.url
                        ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className={`glass-card rounded-xl p-5 group relative overflow-hidden ${
                        cert.url ? "block hover:border-blue-500/30" : ""
                      }`}
                    >
                      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cert.color}`} />
                      <div className="flex items-start gap-3 pl-1">
                        <span className="text-2xl">{cert.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm group-hover:text-blue-400 transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{cert.org}</p>
                          <span className="text-xs font-medium text-blue-400 mt-1 inline-block">{cert.year}</span>
                        </div>
                        {cert.url && (
                          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                        )}
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <a
                href={CREDENTIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 flex items-center justify-between group hover:border-blue-500/30 transition-all mt-3"
              >
                <div>
                  <p className="text-sm font-medium">Verify all credentials</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    5 exams passed · 74% average · Panaversity
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-400 transition-colors" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-5 group"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-sm">{edu.degree}</h4>
                    <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{edu.period}</span>
                  </div>
                  <p className="text-xs text-purple-400 mb-1">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{edu.desc}</p>
                </motion.div>
              ))}

              {/* CV Link */}
              <motion.a
                href="https://drive.google.com/file/d/1CgiCAF7Vu6qtKUCbAJJVfiSftsMqvjx1/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="glass-card rounded-xl p-4 flex items-center justify-between group hover:border-purple-500/30 transition-all mt-3"
              >
                <span className="text-sm font-medium">View Full CV</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-purple-400 transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Work Experience — full width so the cards fill the row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mt-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-xl p-4 group"
              >
                <h4 className="font-semibold text-sm">{exp.role}</h4>
                <p className="text-xs text-emerald-400 mt-0.5">{exp.company}</p>
                <p className="text-[11px] text-muted-foreground/70 mt-0.5">{exp.period}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
