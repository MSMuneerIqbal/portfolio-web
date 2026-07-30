"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Github, Linkedin, ArrowDown, Brain } from "lucide-react";
import Link from "next/link";

const roles = [
  "AI-Driven Agentic AI Engineer",
  "Multi-Agent Systems Architect",
  "Generative AI Engineer",
  "MCP Server Developer",
  "RAG Systems Architect",
  "Full-Stack AI Developer",
];

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
          top: "5%",
          left: "-10%",
        }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          top: "40%",
          right: "-8%",
        }}
        animate={{ x: [0, -50, 40, 0], y: [0, 50, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          bottom: "10%",
          left: "40%",
        }}
        animate={{ x: [0, 30, -50, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function NeuralRing() {
  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-purple-500/15"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {/* Middle ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-blue-500/10"
        animate={{ rotate: -360, scale: [1, 0.95, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      {/* Center brain */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-600/10 border border-purple-500/20 flex items-center justify-center"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain className="h-12 w-12 text-purple-400/80" />
        </motion.div>
      </div>
      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-purple-400/60 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          style={{
            top: "50%",
            left: "50%",
            marginLeft: -6,
            marginTop: -6,
          }}
          animate={{
            x: Math.cos((angle * Math.PI) / 180) * 130,
            y: Math.sin((angle * Math.PI) / 180) * 130,
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 25 : 70
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="scan-beam" />
      <FloatingOrbs />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium"
            >
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span className="text-muted-foreground">Welcome to my portfolio</span>
            </motion.div>

            {/* Name */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-muted-foreground text-lg mb-2"
              >
                Hi, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none"
              >
                <span className="gradient-text">Muneer Iqbal</span>
              </motion.h1>
            </div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl px-5 py-4 inline-flex items-center min-h-[52px]"
            >
              <span className="text-xl md:text-2xl font-semibold gradient-text-cool">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="text-2xl font-light text-purple-400 ml-1"
              >
                |
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              AI-driven{" "}
              <span className="text-purple-400 font-medium">Agentic AI Engineer</span>{" "}
              building autonomous multi-agent systems,{" "}
              <span className="text-blue-400 font-medium">Generative AI</span> solutions, and{" "}
              <span className="text-emerald-400 font-medium">Full-Stack Applications</span>.
              Specializing in LLMs, RAG, CrewAI, and deploying intelligent systems to production.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 text-base px-7"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Link href="https://github.com/MSMuneerIqbal" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 text-base"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/muneeriqbal729" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 text-base"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 pt-6 border-t border-white/5"
            >
              {[
                { value: "89+", label: "Projects" },
                { value: "2+", label: "Years Exp." },
                { value: "9", label: "Expertise Areas" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <NeuralRing />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground/50 hover:text-purple-400 transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
