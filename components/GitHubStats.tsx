"use client";

import { motion } from "framer-motion";
import { Github, GitFork, Star, Code, GitCommit } from "lucide-react";

const stats = [
  { icon: Star, label: "Total Projects", value: "89", suffix: "", color: "text-purple-400", bgColor: "from-purple-500/10 to-violet-500/10" },
  { icon: Code, label: "Public Repos", value: "58", suffix: "", color: "text-blue-400", bgColor: "from-blue-500/10 to-cyan-500/10" },
  { icon: GitFork, label: "Private Projects", value: "31", suffix: "", color: "text-amber-400", bgColor: "from-amber-500/10 to-orange-500/10" },
  { icon: GitCommit, label: "Skill Categories", value: "9", suffix: "", color: "text-emerald-400", bgColor: "from-emerald-500/10 to-teal-500/10" },
];

const languages = [
  { name: "Python", pct: 52, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { name: "TypeScript", pct: 15, color: "bg-gradient-to-r from-sky-500 to-blue-600" },
  { name: "JavaScript", pct: 8, color: "bg-gradient-to-r from-yellow-400 to-amber-500" },
  { name: "Jupyter Notebook", pct: 9, color: "bg-gradient-to-r from-orange-400 to-orange-600" },
  { name: "HTML/CSS", pct: 5, color: "bg-gradient-to-r from-red-400 to-pink-500" },
];

export default function GitHubStats() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-600/3 rounded-full blur-[120px]" />
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-purple-400 mb-6"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub Overview
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Open Source{" "}
            <span className="gradient-text">Footprint</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            My public contributions and repository statistics
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 text-center group hover:border-purple-500/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.bgColor} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}{stat.suffix}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Language Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Code className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold">Language Distribution</h3>
                <p className="text-xs text-muted-foreground">Across 89 repositories</p>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((lang, i) => (
                <div key={i} className="group/lang">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-muted-foreground">{lang.name}</span>
                    <span className="text-sm font-semibold text-muted-foreground/70">{lang.pct}%</span>
                  </div>
                  <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${lang.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <a
              href="https://github.com/MSMuneerIqbal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card hover:border-purple-500/30 text-sm font-medium transition-all group"
            >
              <Github className="h-4 w-4" />
              View GitHub Profile
              <Star className="h-3.5 w-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
