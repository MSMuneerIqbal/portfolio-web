"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, FileText, ExternalLink } from "lucide-react";

const experience = [
  {
    title: "AI Developer",
    company: "Ai World",
    period: "2024 – Present",
    desc: "Led development of enterprise AI applications, mentored junior developers, and implemented best practices across the stack.",
  },
  {
    title: "Applied GenAI Engineer",
    company: "PIAIC Lahore",
    period: "2024 – Present",
    desc: "Advanced training in Applied Generative AI and Agentic AI systems with hands-on industry projects.",
  },
  {
    title: "Network Engineer",
    company: "The Islamia University of Bahawalpur",
    period: "2023 – 2024",
    desc: "Gained comprehensive knowledge of networking infrastructure and cybersecurity fundamentals.",
  },
];

const education = [
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

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/4 rounded-full blur-[120px]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-purple-400 mb-6"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Experience &{" "}
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-6">
            My professional journey and academic background
          </p>
          <motion.a
            href="https://drive.google.com/file/d/1-P8tWUAzVaUTRjL-JLC9foBHte-XxMTV/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card hover:border-purple-500/30 text-sm font-medium transition-all"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View Full CV
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-4">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-5 group"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold">{item.title}</h4>
                    <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{item.period}</span>
                  </div>
                  <p className="text-sm text-purple-400 mb-2">{item.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-5 group"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold">{item.degree}</h4>
                    <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{item.period}</span>
                  </div>
                  <p className="text-sm text-blue-400 mb-2">{item.institution}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
