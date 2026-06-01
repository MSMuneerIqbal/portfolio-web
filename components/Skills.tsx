"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillsData = {
  "🤖 AI & Generative AI": {
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "LLMs & Generative AI", level: 95 },
      { name: "CrewAI Framework", level: 90 },
      { name: "LangChain & LanGraph", level: 90 },
      { name: "RAG Systems", level: 95 },
      { name: "OpenAI SDK", level: 90 },
      { name: "Anthropic Claude", level: 85 },
      { name: "Google Gemini", level: 85 },
      { name: "Groq LLMs", level: 80 },
    ]
  },
  "🧠 Machine Learning & Data Science": {
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "TensorFlow & PyTorch", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "Pandas & NumPy", level: 90 },
      { name: "Natural Language Processing", level: 88 },
      { name: "Computer Vision", level: 80 },
      { name: "Time Series Analysis", level: 82 },
    ]
  },
  "💻 Backend Development": {
    color: "from-green-500 to-green-600",
    skills: [
      { name: "Python", level: 95 },
      { name: "FastAPI", level: 90 },
      { name: "Django", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "RESTful APIs", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Vector Databases", level: 85 },
    ]
  },
  "🎨 Frontend Development": {
    color: "from-pink-500 to-pink-600",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Implementation", level: 88 },
      { name: "Framer Motion", level: 85 },
    ]
  },
  "🚀 DevOps & Cloud": {
    color: "from-orange-500 to-orange-600",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "Supabase", level: 80 },
      { name: "Server Deployment", level: 85 },
      { name: "Database Management", level: 85 },
    ]
  },
  "🛠️ AI Tools & Frameworks": {
    color: "from-yellow-500 to-yellow-600",
    skills: [
      { name: "Streamlit", level: 88 },
      { name: "Chainlit", level: 85 },
      { name: "HuggingFace", level: 85 },
      { name: "Pinecone", level: 80 },
      { name: "n8n", level: 80 },
      { name: "Jupyter Notebooks", level: 90 },
      { name: "LiteLLM", level: 85 },
      { name: "MCP Servers", level: 80 },
    ]
  },
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills & Expertise</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg mt-6">
              Proficiency across AI/ML, Web Development, and Cloud Technologies
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {Object.entries(skillsData).map(([category, data]) => {
              const { color, skills } = data as { color: string; skills: Array<{ name: string; level: number }> };
              return (
                <motion.div key={category} variants={itemVariants}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className={`h-1 bg-gradient-to-r ${color}`}></div>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <h3 className="text-xl font-bold">{category}</h3>
                      </div>
                      <div className="space-y-5">
                        {skills.map((skill, index) => (
                          <div key={index} className="group/skill">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium text-sm">{skill.name}</span>
                              <span className="text-xs text-muted-foreground font-semibold">{skill.level}%</span>
                            </div>
                            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${color} rounded-full shadow-lg`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: index * 0.05, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Languages", value: "5+" },
              { label: "Frameworks", value: "15+" },
              { label: "Libraries", value: "30+" },
              { label: "Tools", value: "20+" },
            ].map((stat, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
