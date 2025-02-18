"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "Heart Disease Prediction",
    description: "This project is an AI-powered application designed to predict heart disease severity based on key medical features provided by the user. The model classifies heart disease into five distinct stages:",
    image: "/project1.png",
    demo: "https://ai-powerd-heart.streamlit.app/"
  },
  {
    title: "AI Based English Speaking Practice Bot",
    description: "AI-Based English Speaking Practice Bot The AI-Based English Speaking Practice Bot is designed to assist non-native English speakers in improving their language skills. The bot provides a user-friendly platform for practicing conversations, learning pronunciation, and expanding vocabulary, all with real-time feedback and support in Urdu.",
    image: "/project2.jpg",
    demo: "https://huggingface.co/spaces/Muneer-Iqbal/buddy-speaking"
  },
  {
    title: "Web & Document Searching Bot",
    description: "The Multi-Search Tool a chatbot with PDF document interaction and a web search feature. The chatbot allows users to upload PDF files, index the content, and then ask questions. The web search feature enables users to perform searches on the web using the Tavily API, retrieving the top 3 relevant results.",
    image: "/project3.jpg",
    demo: "https://multi-search-aibot.streamlit.app/"
  },
  {
    title: "Chat with your PDF",
    description: "This project implements a PDF chatbot using Streamlit, LangChain, and Google's Gemini large language model. It allows users to upload a PDF document and then ask questions about its content. The chatbot uses embeddings and vector databases to efficiently find relevant information within the PDF and then uses Gemini to generate answers. It also features streaming responses for a more interactive user experience.",
    image: "/project4.png",
    demo: "https://document-gpt2.streamlit.app/"
  },
  {
    title: "Multilingual Ai Translator",
    description: "A powerful web application built with Streamlit that allows users to translate text and PDF documents into multiple languages using Google's Gemini AI model.",
    image: "/project5.png",
    demo: "https://huggingface.co/spaces/Muneer-Iqbal/multilingual-translator-bot"
  },
  // {
  //   title: "Multilingual Ai Translator",
  //   description: "",
  //   image: "/project6.png",
  //   demo: "https://mfahadjbr-ai-trip-plan-website-srcproject1main-0b1pil.streamlit.app/"
  // }
]

export default function Projects() {
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore a selection of my recent work showcasing innovative solutions
              and technical expertise.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 bg-card">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex flex-col h-[calc(100%-56.25%)]">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="mt-auto text-center">
                      <Button
                        className="w-full sm:w-auto transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
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