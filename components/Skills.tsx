"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skillCategories = [
  {
    icon: "🧠",
    title: "AI & Generative AI",
    color: "from-violet-500 to-purple-600",
    barColor: "bg-gradient-to-r from-violet-500 to-purple-500",
    skills: [
      { name: "LLMs & Generative AI", pct: 95 },
      { name: "RAG Systems", pct: 95 },
      { name: "CrewAI Framework", pct: 90 },
      { name: "LangChain & LangGraph", pct: 90 },
      { name: "OpenAI SDK", pct: 90 },
      { name: "Anthropic Claude", pct: 85 },
      { name: "Google Gemini", pct: 85 },
      { name: "Groq LLMs", pct: 80 },
    ],
  },
  {
    icon: "📊",
    title: "Machine Learning & Data Science",
    color: "from-blue-500 to-cyan-600",
    barColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    skills: [
      { name: "Machine Learning", pct: 90 },
      { name: "Scikit-learn", pct: 90 },
      { name: "Pandas & NumPy", pct: 90 },
      { name: "NLP", pct: 88 },
      { name: "TensorFlow & PyTorch", pct: 85 },
      { name: "Deep Learning", pct: 85 },
      { name: "Time Series Analysis", pct: 82 },
      { name: "Computer Vision", pct: 80 },
    ],
  },
  {
    icon: "💻",
    title: "Backend & DevOps",
    color: "from-emerald-500 to-teal-600",
    barColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
    skills: [
      { name: "Python", pct: 95 },
      { name: "FastAPI", pct: 90 },
      { name: "RESTful APIs", pct: 90 },
      { name: "Django", pct: 85 },
      { name: "Docker", pct: 85 },
      { name: "PostgreSQL", pct: 85 },
      { name: "Vector Databases", pct: 85 },
      { name: "MongoDB", pct: 80 },
    ],
  },
  {
    icon: "🎨",
    title: "Frontend Development",
    color: "from-orange-500 to-red-500",
    barColor: "bg-gradient-to-r from-orange-500 to-red-400",
    skills: [
      { name: "Tailwind CSS", pct: 95 },
      { name: "Responsive Design", pct: 95 },
      { name: "React", pct: 92 },
      { name: "JavaScript", pct: 92 },
      { name: "TypeScript", pct: 90 },
      { name: "Next.js", pct: 90 },
      { name: "UI/UX Implementation", pct: 88 },
      { name: "Framer Motion", pct: 85 },
    ],
  },
  {
    icon: "🛠️",
    title: "AI Tools & Frameworks",
    color: "from-amber-500 to-yellow-600",
    barColor: "bg-gradient-to-r from-amber-500 to-yellow-500",
    skills: [
      { name: "Jupyter Notebooks", pct: 90 },
      { name: "Streamlit", pct: 88 },
      { name: "Chainlit", pct: 85 },
      { name: "HuggingFace", pct: 85 },
      { name: "LiteLLM", pct: 85 },
      { name: "Pinecone", pct: 80 },
      { name: "n8n", pct: 80 },
      { name: "MCP Servers", pct: 80 },
    ],
  },
];

function SkillBar({ name, pct, barColor }: { name: string; pct: number; barColor: string }) {
  return (
    <div className="group/skill">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-semibold text-muted-foreground/60 tabular-nums">
          {pct}%
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/4 rounded-full blur-[120px]" />
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-blue-400 mb-6"
          >
            <Code2 className="h-3.5 w-3.5" />
            Technical Skills
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Expertise &{" "}
            <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit across AI/ML, full-stack development, and cloud technologies
          </p>
        </motion.div>

        {/* Skill grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} bg-opacity-10 flex items-center justify-center text-lg`}>
                  {cat.icon}
                </div>
                <h3 className="font-semibold">{cat.title}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    pct={skill.pct}
                    barColor={cat.barColor}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "5+", label: "Languages" },
              { value: "15+", label: "Frameworks" },
              { value: "30+", label: "Libraries" },
              { value: "20+", label: "Tools" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
