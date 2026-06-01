"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Zap, Code2, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: Award,
    title: "89+ Projects",
    description: "Full-stack AI & web applications",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Briefcase,
    title: "2+ Years Experience",
    description: "In AI Development",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: GraduationCap,
    title: "AI Graduate",
    description: "Pakistan Institute of AI (PIAIC)",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Zap,
    title: "15+ AI Apps",
    description: "LLMs & Agentic AI Systems",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "Python, TypeScript, Next.js",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Target,
    title: "9 Skill Categories",
    description: "AI, ML, DL, Web, DevOps & More",
    color: "from-orange-500 to-orange-600"
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              Generative AI specialist and full-stack developer passionate about building intelligent solutions that bridge research and real-world applications.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 space-y-6">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">🤖 My Expertise</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a **Generative AI specialist** with deep expertise in building **Agentic AI systems**, implementing **RAG (Retrieval-Augmented Generation)** pipelines, and developing full-stack applications. My passion lies in creating intelligent, scalable solutions that leverage cutting-edge AI technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 2 years in AI development and a background in Artificial Intelligence, I've successfully delivered 89+ projects across multiple domains including chatbots, machine learning models, enterprise solutions, and educational platforms. I'm constantly exploring new AI research and best practices to stay at the forefront of innovation.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">🎯 What I Do</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Agentic AI Systems:</strong> Multi-agent orchestration, autonomous workflows, and intelligent automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Generative AI:</strong> LLM integration (OpenAI, Claude, Gemini, Groq), RAG systems, and document intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Machine Learning:</strong> Predictive models, deep learning, NLP, and computer vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Full-Stack Development:</strong> Modern web apps, APIs, databases, and cloud deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Enterprise Solutions:</strong> SaaS platforms, inventory management, and business automation</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group h-full hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${achievement.color}`}></div>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
