"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const roles = [
  "Full-Stack AI/ML Developer",
  "Generative AI Engineer",
  "Agentic AI Specialist",
  "Machine Learning Engineer",
  "Data Science Expert",
  "RAG Systems Developer"
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const role = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen pt-20 mt-20 sm:pt-0 px-4">
      <div className="container mx-auto px-4 h-[calc(100vh-80px)] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-primary font-semibold text-lg">👋 Welcome to my portfolio</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Muneer Iqbal</span>
            </h1>
            <div className="h-14 mb-8 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg p-3 flex items-center">
              <span className="text-2xl md:text-3xl font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Building intelligent, scalable AI solutions with expertise in Generative AI, Agentic AI Systems, Machine Learning, and Full-Stack Development. 
            </p>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Specializing in RAG systems, LLM integration, and turning cutting-edge AI research into real-world applications.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" onClick={scrollToProjects} className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                View My Work
              </Button>
              <Link href="https://github.com/MSMuneerIqbal" target="_blank">
                <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                  GitHub Profile
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">89+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">9</div>
                <div className="text-sm text-muted-foreground">Skill Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years AI Dev</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-3xl blur-3xl" />
                <Image
                  width={500}
                  height={500}
                  src="/image.png"
                  alt="Profile"
                  className="rounded-3xl shadow-2xl w-full max-w-md mx-auto relative z-10 border-2 border-primary/20"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
