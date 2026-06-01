"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const roles = [
  "🤖 Full-Stack AI/ML Developer",
  "🧠 Generative AI Engineer",
  "🔮 Agentic AI Specialist",
  "⚙️ LLM Integration Expert",
  "📊 RAG Systems Architect",
  "🚀 AI Solutions Builder"
]

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{ duration: 18, repeat: Infinity }}
        style={{ top: '50%', right: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{ bottom: '10%', left: '50%' }}
      />
    </div>
  )
}

const MatrixRain = () => {
  const characters = '01アイエオウ█▀▄▌▐▓▒░'
  const columns = 15
  const [raindrops, setRaindrops] = useState<string[]>([])

  useEffect(() => {
    const drops = Array(columns).fill(0).map(() => 
      characters[Math.floor(Math.random() * characters.length)]
    )
    setRaindrops(drops)
  }, [])

  return (
    <div className="absolute inset-0 opacity-5 overflow-hidden">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {raindrops.map((char, i) => (
          <motion.div
            key={i}
            className="text-green-500 text-sm font-bold"
            animate={{ y: [0, 500] }}
            transition={{ duration: 8 + Math.random() * 4, repeat: Infinity }}
          >
            {char}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

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
          setTimeout(() => setIsDeleting(true), 2500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 30 : 80)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen pt-32 px-4 relative overflow-hidden flex items-center">
      <AnimatedBackground />
      <MatrixRain />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="gradient-border rounded-full px-4 py-2 inline-block">
                <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  🌟 Welcome to My AI Portfolio
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold leading-tight mb-4"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Muneer Iqbal</span>
              </motion.h1>
              
              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="gradient-border rounded-2xl p-6 mt-6 min-h-24 flex items-center"
              >
                <div className="text-2xl md:text-3xl font-semibold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">
                    {displayText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-purple-400 ml-2"
                  >
                    ▮
                  </motion.span>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 leading-relaxed max-w-lg"
            >
              Building intelligent solutions through <span className="text-purple-400 font-semibold">Generative AI</span>, <span className="text-blue-400 font-semibold">Agentic Systems</span>, and <span className="text-green-400 font-semibold">Full-Stack Development</span>. Specializing in LLMs, RAG systems, and transforming cutting-edge AI research into real-world applications.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 py-6 border-t border-b border-purple-500/20"
            >
              {[
                { value: '89+', label: 'AI Projects' },
                { value: '2+', label: 'Years Experience' },
                { value: '9', label: 'Expertise Areas' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <motion.div
                    className="text-3xl font-bold gradient-text"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 flex-wrap"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 glow"
              >
                <span className="mr-2">🚀</span> Explore My Work
              </Button>
              <Link href="https://github.com/MSMuneerIqbal" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <span className="mr-2">💻</span> GitHub
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/muneeriqbal729" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <span className="mr-2">💼</span> LinkedIn
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - AI Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-full"
          >
            <div className="absolute inset-0 gradient-border rounded-3xl p-8 flex items-center justify-center overflow-hidden group">
              {/* AI Neural Network Visualization */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Center Node */}
                <motion.div
                  className="absolute w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full shadow-xl glow flex items-center justify-center text-3xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🧠
                </motion.div>

                {/* Orbiting Nodes */}
                {[
                  { icon: '🤖', angle: 0, label: 'AI' },
                  { icon: '🔮', angle: 60, label: 'LLM' },
                  { icon: '📊', angle: 120, label: 'RAG' },
                  { icon: '⚡', angle: 180, label: 'Speed' },
                  { icon: '🎯', angle: 240, label: 'Precision' },
                  { icon: '🚀', angle: 300, label: 'Scale' }
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    animate={{
                      x: Math.cos((node.angle * Math.PI) / 180) * 100,
                      y: Math.sin((node.angle * Math.PI) / 180) * 100,
                    }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, type: 'tween' }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full shadow-lg flex items-center justify-center text-xl glow"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, linear: true }}
                    >
                      {node.icon}
                    </motion.div>
                  </motion.div>
                ))}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))' }}>
                  {[
                    { angle: 0 },
                    { angle: 60 },
                    { angle: 120 },
                    { angle: 180 },
                    { angle: 240 },
                    { angle: 300 }
                  ].map((node, i) => {
                    const x1 = 50 + 20 * Math.cos((node.angle * Math.PI) / 180)
                    const y1 = 50 + 20 * Math.sin((node.angle * Math.PI) / 180)
                    const x2 = 50 + 40 * Math.cos((node.angle * Math.PI) / 180)
                    const y2 = 50 + 40 * Math.sin((node.angle * Math.PI) / 180)
                    return (
                      <motion.line
                        key={i}
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        opacity="0.5"
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                      />
                    )
                  })}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(168, 85, 247)" />
                      <stop offset="100%" stopColor="rgb(59, 130, 246)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
