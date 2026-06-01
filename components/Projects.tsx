"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, Github, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const allProjects = [
  {
    category: "🤖 Agentic AI Systems",
    projects: [
      {
        title: "Weather Agent with Chainlit",
        description: "Real-time weather forecasting with conversational AI interface",
        image: "/project1.png",
        tags: ["Python", "Chainlit", "OpenAI SDK"],
        demo: "https://github.com/MSMuneerIqbal/Weather-Agent-with-Chainlit-OpenAI-Agent-SDK",
        featured: true
      },
      {
        title: "Market Trends Analyst Agent",
        description: "Autonomous market analysis and forecasting system",
        image: "/project2.jpg",
        tags: ["Python", "CrewAI", "Data Analysis"],
        demo: "https://github.com/MSMuneerIqbal/Market_Trends_Analyst_Agent",
        featured: true
      },
      {
        title: "Hospital AI Assistant",
        description: "Healthcare operations automation platform",
        image: "/project3.jpg",
        tags: ["Python", "LLMs", "FastAPI"],
        demo: "https://github.com/MSMuneerIqbal/Hospital-Ai-Assistant"
      }
    ]
  },
  {
    category: "📚 Generative AI & RAG",
    projects: [
      {
        title: "Document Query Assistant",
        description: "Gemini-powered document intelligence and analysis",
        image: "/project4.png",
        tags: ["Python", "Gemini", "Streamlit", "RAG"],
        demo: "https://github.com/MSMuneerIqbal/Document-QueryAssistant-groundx-gemini-streamlit",
        featured: true
      },
      {
        title: "Chat with Your Documents",
        description: "Interactive document analysis with LangChain",
        image: "/project5.png",
        tags: ["Python", "LangChain", "LLMs"],
        demo: "https://github.com/MSMuneerIqbal/chat-with-your-documents"
      },
      {
        title: "Multi-Search RAG Tool",
        description: "Multi-source web search with RAG integration",
        image: "/project1.png",
        tags: ["Python", "RAG", "Web APIs"],
        demo: "https://github.com/MSMuneerIqbal/MultiSearch-Tool-RAG-WEB"
      }
    ]
  },
  {
    category: "🧠 Machine Learning & Data Science",
    projects: [
      {
        title: "Heart Disease Classification",
        description: "Medical prediction system with Streamlit interface",
        image: "/project2.jpg",
        tags: ["Python", "Scikit-learn", "Streamlit"],
        demo: "https://ai-powerd-heart.streamlit.app/",
        featured: true
      },
      {
        title: "English Learning Bot",
        description: "AI-powered language practice (GenAI Hackathon)",
        image: "/project3.jpg",
        tags: ["Python", "NLP", "GenAI"],
        demo: "https://huggingface.co/spaces/Muneer-Iqbal/buddy-speaking",
        featured: true
      },
      {
        title: "Image Restoration",
        description: "Deep learning image enhancement with autoencoders",
        image: "/project4.png",
        tags: ["Python", "TensorFlow", "Deep Learning"],
        demo: "https://github.com/MSMuneerIqbal/Image-Restoration-DL_Autoencoders"
      }
    ]
  },
  {
    category: "💻 Web Applications",
    projects: [
      {
        title: "Professional Portfolio",
        description: "Modern portfolio website with project showcase",
        image: "/project5.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        demo: "https://muneer-iqbal.vercel.app",
        featured: true
      },
      {
        title: "DeFi Dashboard",
        description: "Cryptocurrency tracking and analysis platform",
        image: "/project1.png",
        tags: ["TypeScript", "React", "Finance APIs"],
        demo: "https://github.com/MSMuneerIqbal/ginox-defi-dashboard-main"
      },
      {
        title: "Kashibaba.pk",
        description: "E-commerce marketplace platform",
        image: "/project2.jpg",
        tags: ["Next.js", "TypeScript", "Database"],
        demo: "https://github.com/MSMuneerIqbal/kashibaba.pk"
      }
    ]
  },
  {
    category: "🏢 Business Applications",
    projects: [
      {
        title: "Inventory Management System",
        description: "Real-time stock tracking for retail",
        image: "/project3.jpg",
        tags: ["Python", "Database", "Management"],
        demo: "https://github.com/MSMuneerIqbal/7star-shop-inventory"
      },
      {
        title: "POS System",
        description: "Point of Sale system for computer shop",
        image: "/project4.png",
        tags: ["TypeScript", "Database", "Business"],
        demo: "https://github.com/MSMuneerIqbal/7star-computer-shop-pos"
      },
      {
        title: "OptifySoft SaaS",
        description: "Business optimization and automation platform",
        image: "/project5.png",
        tags: ["Next.js", "Python", "FastAPI"],
        demo: "https://github.com/MSMuneerIqbal/optifyserve-frontend-backend",
        featured: true
      }
    ]
  }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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

  const displayedProjects = selectedCategory 
    ? allProjects.filter(cat => cat.category === selectedCategory)
    : allProjects

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg mt-6">
              Explore my portfolio of 89+ projects across AI, ML, Web Development, and Enterprise Solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center mb-12">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Projects
            </Button>
            {allProjects.map(cat => (
              <Button
                key={cat.category}
                variant={selectedCategory === cat.category ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.category)}
                className="rounded-full"
              >
                {cat.category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          {displayedProjects.map((categoryGroup) => (
            <motion.div key={categoryGroup.category} variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span>{categoryGroup.category}</span>
                <span className="text-sm text-muted-foreground font-normal">({categoryGroup.projects.length})</span>
              </h3>
              
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {categoryGroup.projects.map((project, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card border-border hover:border-primary/50">
                      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                        {project.featured && (
                          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            <Star size={12} className="fill-current" />
                            Featured
                          </div>
                        )}
                        <Image
                          width={500}
                          height={300}
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-6 flex flex-col h-[calc(100%-56.25%)]">
                        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2 pt-4 border-t border-border">
                          <Button asChild className="flex-1 gap-2 h-8" size="sm">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={14} />
                              <span>View</span>
                            </a>
                          </Button>
                          <Button variant="outline" className="flex-1 gap-2 h-8" size="sm">
                            <Github size={14} />
                            <span>Code</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Want to explore more projects?</p>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl">
              <a href="https://github.com/MSMuneerIqbal" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" />
                Visit My GitHub Profile
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
