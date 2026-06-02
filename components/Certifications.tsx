"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, ExternalLink, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Agentic AI Development",
    org: "Presidential Initiative for AI & Computing (PIAIC)",
    year: "2025 – Present",
    icon: "🤖",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Generative AI Engineering",
    org: "Pakistan Institute of AI & Cloud Computing (PIAIC)",
    year: "2024",
    icon: "🎖️",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Applied Generative AI Fundamentals",
    org: "Pak Angels",
    year: "2024",
    icon: "📜",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Cloud-Native Modern Python Development",
    org: "PIAIC",
    year: "2024",
    icon: "☁️",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "AI Engineering Graduate",
    org: "Pakistan Institute of Artificial Intelligence",
    year: "2024",
    icon: "🧠",
    color: "from-orange-500 to-red-500",
  },
];

const experience = [
  {
    role: "AI Engineer Intern",
    company: "Innovidio.com",
    period: "2025 (3 months)",
    desc: "Explored agentic AI automation systems and contributed to Qyra AI development.",
  },
  {
    role: "AI Developer",
    company: "Ai World",
    period: "2024 – Present",
    desc: "Led enterprise AI application development and mentored junior developers.",
  },
];

const education = [
  {
    degree: "Agentic AI & MCP Development",
    institution: "PIAIC — Presidential Initiative for AI & Computing",
    period: "2025 – Present",
    desc: "Advanced agentic AI systems, MCP server development, prompt & context engineering, and AI-driven development.",
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
    <section id="certifications" className="relative py-24 md:py-32 overflow-hidden">
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
          className="text-center mb-16"
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
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`glass-card rounded-xl p-5 group relative overflow-hidden`}
                  >
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cert.color}`} />
                    <div className="flex items-start gap-3 pl-1">
                      <span className="text-2xl">{cert.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{cert.org}</p>
                        <span className="text-xs font-medium text-blue-400 mt-1 inline-block">{cert.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold">Work Experience</h3>
              </div>
              <div className="space-y-3">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="glass-card rounded-xl p-5 group"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-sm">{exp.role}</h4>
                      <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{exp.period}</span>
                    </div>
                    <p className="text-xs text-emerald-400 mb-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{exp.desc}</p>
                  </motion.div>
                ))}
              </div>
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
                href="https://drive.google.com/file/d/1-P8tWUAzVaUTRjL-JLC9foBHte-XxMTV/view?usp=drive_link"
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
      </div>
    </section>
  );
}
