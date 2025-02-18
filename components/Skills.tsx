"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const skills = {
  "Language & Libraries": [
    { name: "Python", level: 90 },
    { name: "Pandas+ other ML Libraries", level: 85 },
    { name: "scikit-learn", level: 85 },
    { name: "TensorFlow + Keras", level: 80 }
  ],
  "Generative & Agentic AI": [
    { name: "RAG", level: 90 },
    { name: "Langchain & Langgraph", level: 85 },
    { name: "Crewai", level: 75 },
    { name: "Vector Databases", level: 75 }
  ],
  "Tools & Others": [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "streamlit", level: 65 },
    { name: "Hugging Face", level: 65 }
  ]
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
              across different technologies and tools.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {Object.entries(skills).map(([category, categorySkills]) => (
              <motion.div key={category} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">{category}</h3>
                    <div className="space-y-6">
                      {categorySkills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}