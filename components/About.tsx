"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Cpu,
  Sparkles,
  ArrowRight,
  Code2,
  Database,
  Bot,
  Clock,
  MapPin,
} from "lucide-react";

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  return <Counter end={value} suffix={suffix} label={label} />;
}

const expertiseAreas = [
  {
    icon: Bot,
    title: "Agentic AI",
    description: "Multi-agent orchestration with CrewAI, autonomous workflows, intelligent automation",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-500/10 to-purple-600/5",
  },
  {
    icon: Brain,
    title: "Generative AI",
    description: "LLM integration (OpenAI, Claude, Gemini, Groq), RAG pipelines, document intelligence",
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-500/10 to-cyan-600/5",
  },
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "Next.js, TypeScript, Python, FastAPI — end-to-end application development",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-600/5",
  },
  {
    icon: Database,
    title: "Data & ML",
    description: "Predictive models, deep learning, NLP, computer vision, vector databases",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/5",
  },
];

const journey = [
  {
    year: "2026",
    title: "AI Engineer @ Semantechs & WebotechStudio",
    desc: "Building agentic AI systems, AI assistants, and a large-scale OLX-type Saudi marketplace. Co-founder of WebotechStudio.",
  },
  {
    year: "2026",
    title: "Full-Stack Dev @ 7Star Laptops & Optifyserve",
    desc: "Developed POS software, e-commerce store 7starbattery.pk, and SaaS platform optifyserve.com for UAE market.",
  },
  {
    year: "2025",
    title: "AI Engineer Intern @ Innovidio.com",
    desc: "Explored agentic AI automation systems and contributed to Qyra AI development.",
  },
  {
    year: "2025",
    title: "Agentic AI Development @ PIAIC",
    desc: "Learned MCP server development, prompt & context engineering, and AI-driven development at Presidential Initiative for AI & Computing.",
  },
  {
    year: "2024",
    title: "AI Developer @ Ai World",
    desc: "Led enterprise AI application development and mentored junior developers.",
  },
  {
    year: "2024",
    title: "GenAI Engineer @ PIAIC",
    desc: "Applied Generative AI and Agentic AI engineering fundamentals.",
  },
  {
    year: "2022",
    title: "BS Artificial Intelligence @ IUB",
    desc: "Machine Learning, Deep Learning, and NLP foundations.",
  },
  {
    year: "2019",
    title: "BCS @ Govt. Degree College Dunyapur",
    desc: "Computer Science and Mathematics.",
  },
];

const techMarquee = [
  "Python", "TypeScript", "Next.js", "React", "FastAPI", "LangChain", "CrewAI",
  "OpenAI", "Claude", "Gemini", "Groq", "MCP Servers", "Docker", "PostgreSQL",
  "MongoDB", "TensorFlow", "PyTorch", "Streamlit", "Chainlit", "Pinecone",
  "Tailwind CSS", "n8n", "Agentic AI", "RAG Systems",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="dot-pattern absolute inset-0 opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-purple-400 mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            About Me
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Crafting the{" "}
            <span className="gradient-text">Future of AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I&apos;m an AI-driven Agentic AI Engineer building intelligent, autonomous
            systems that bridge cutting-edge research with real-world impact.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Intro Card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Cpu className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Muneer Iqbal</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Pakistan
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                AI-driven <span className="text-purple-400 font-semibold">Agentic AI Engineer</span> with{" "}
                <span className="text-purple-400 font-semibold">2+ years</span> of
                experience architecting autonomous multi-agent systems, RAG pipelines, and full-stack AI applications.
                I&apos;ve delivered <span className="text-purple-400 font-semibold">89+ projects</span> across
                agentic AI, generative AI, machine learning, enterprise automation, and educational platforms —
                pushing the boundaries of what intelligent systems can achieve.
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-center"
          >
            <AnimatedCounter value={89} suffix="+" label="Projects Built" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-center"
          >
            <AnimatedCounter value={15} suffix="+" label="AI Applications" />
          </motion.div>

          {/* Expertise cards - 2 cols each */}
          {expertiseAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="lg:col-span-2 glass-card rounded-2xl p-6 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.bgGradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <area.icon className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg">My Journey</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
              {journey.map((item, i) => (
                <div key={i} className="relative pl-6 border-l border-purple-500/20 hover:border-purple-500/50 transition-colors group">
                  <div className="absolute left-0 top-0 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-purple-500/30 border border-purple-500/50 group-hover:bg-purple-500 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all" />
                  <span className="text-xs font-semibold text-purple-400 tracking-wide">{item.year}</span>
                  <h4 className="font-medium text-sm mt-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <p className="text-center text-sm text-muted-foreground mb-4">Technologies I work with</p>
          <div className="relative overflow-hidden glass-card rounded-2xl py-5">
            <motion.div
              className="flex gap-6 px-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...techMarquee, ...techMarquee].map((tech, i) => (
                <span
                  key={i}
                  className="text-sm font-medium text-muted-foreground hover:text-purple-400 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a14] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a14] to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
