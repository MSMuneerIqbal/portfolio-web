"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: Award,
    title: "2+ Years Experience",
    description: "In Ai Development",
  },
  {
    icon: Briefcase,
    title: "20+ Projects",
    description: "Completed successfully",
  },
  {
    icon: GraduationCap,
    title: "Bachelor Degree",
    description: "Artificial Intelligence",
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
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">
            Dedicated AI developer focused on crafting innovative, scalable, and high-performance solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Hello! I'm Muhammad MUNEER IQBAL, a passionate AI Developer with
               over 1 years of experience in creating robust and
              scalable Ai applications. My journey in the world of programming
              started when I was in University, and since then, I've been
              constantly learning and evolving with the ever-changing landscape
              of Ai technologies.
              My academic journey and hands-on projects have provided me with a strong 
              foundation in Machine Learning (ML), Deep Learning (DL), Generative AI, and Exploratory Data Analysis (EDA).
            </p>
            <p className="text-lg leading-relaxed">
            "As a graduate in Artificial Intelligence, I am passionate about applied Generative AI, 
            Retrieval-Augmented Generation (RAG), LangChain, and Agentic AI. I specialize in developing 
            intelligent solutions that bridge the gap between research and real-world applications."
            Currently, I am deeply engaged in Generative AI engineering, Retrieval-Augmented Generation (RAG), LangChain, 
            and Agentic AI, exploring their real-world applications. My recent work focuses on building intelligent, interactive 
            AI-driven solutions that bridge the gap between research and practical implementation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <achievement.icon className="h-12 w-12 mb-4 text-primary" />
                      <h3 className="font-semibold text-xl mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
