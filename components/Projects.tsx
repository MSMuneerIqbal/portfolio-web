"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Lock } from "lucide-react";
import { useState } from "react";

const projectCategories = [
  {
    icon: "🤖",
    category: "Agentic AI Systems",
    desc: "Autonomous AI agents for complex task automation",
    color: "from-violet-500 to-purple-600",
    projects: [
      {
        title: "Weather Agent",
        description: "Real-time weather forecasting with conversational AI interface using Chainlit & OpenAI SDK",
        image: "/project1.png",
        tags: ["Python", "Chainlit", "OpenAI SDK", "FastAPI"],
        demo: "https://github.com/MSMuneerIqbal/Weather-Agent-with-Chainlit-OpenAI-Agent-SDK",
        featured: true,
      },
      {
        title: "Market Trends Analyst Agent",
        description: "Autonomous market analysis and forecasting system with data-driven insights",
        image: "/project2.jpg",
        tags: ["Python", "CrewAI", "Data Analysis"],
        demo: "https://github.com/MSMuneerIqbal/Market_Trends_Analyst_Agent",
        featured: true,
      },
      {
        title: "Hospital AI Assistant",
        description: "Healthcare operations automation platform with intelligent workflow management",
        image: "/project3.jpg",
        tags: ["Python", "LLMs", "FastAPI", "Database"],
        isPrivate: true,
      },
      {
        title: "Upwork Proposal Agent",
        description: "Intelligent agent for generating personalized Upwork proposals",
        image: "/project4.png",
        tags: ["Python", "LLMs", "Automation"],
        isPrivate: true,
      },
      {
        title: "OBS Agentic AI Assistant",
        description: "Full-stack agentic AI assistant with agentic search, frontend and backend services",
        image: "/project5.png",
        tags: ["Python", "TypeScript", "FastAPI", "LLMs"],
        isPrivate: true,
        featured: true,
      },
    ],
  },
  {
    icon: "📚",
    category: "Generative AI & RAG",
    desc: "RAG systems and document understanding with LLMs",
    color: "from-blue-500 to-cyan-600",
    projects: [
      {
        title: "Document Query Assistant",
        description: "Gemini-powered document intelligence and analysis with Streamlit interface",
        image: "/project4.png",
        tags: ["Python", "Gemini", "Streamlit", "RAG"],
        demo: "https://github.com/MSMuneerIqbal/Document-QueryAssistant-groundx-gemini-streamlit",
        featured: true,
      },
      {
        title: "Chat with Your Documents",
        description: "Interactive document analysis and conversation using LangChain",
        image: "/project5.png",
        tags: ["Python", "LangChain", "LLMs"],
        demo: "https://github.com/MSMuneerIqbal/chat-with-your-documents",
      },
      {
        title: "Multi-Search RAG Tool",
        description: "Multi-source web search with RAG for comprehensive information retrieval",
        image: "/project1.png",
        tags: ["Python", "RAG", "Web APIs"],
        demo: "https://github.com/MSMuneerIqbal/MultiSearch-Tool-RAG-WEB",
      },
      {
        title: "RAG with Streamlit & Groq",
        description: "RAG system using Groq LLMs and local embeddings for fast inference",
        image: "/project2.jpg",
        tags: ["Python", "Streamlit", "Groq", "RAG"],
        demo: "https://github.com/MSMuneerIqbal/Rag-streamlit-groq-Embed-localhf",
      },
      {
        title: "Islamic Inheritance Calculator",
        description: "PDF report generator for Islamic inheritance calculations via MCP Server",
        image: "/project3.jpg",
        tags: ["Python", "MCP", "PDF Generation"],
        demo: "https://github.com/MSMuneerIqbal/Islamic-Inheritance-pdf-report-generator-MCP-Server",
      },
      {
        title: "Document Ingestion Agent",
        description: "Intelligent document ingestion and processing system",
        image: "/project4.png",
        tags: ["Python", "LLMs", "Document Processing"],
        isPrivate: true,
      },
    ],
  },
  {
    icon: "🧠",
    category: "Machine Learning & Data Science",
    desc: "ML/DL models, data analysis, and predictive systems",
    color: "from-emerald-500 to-teal-600",
    projects: [
      {
        title: "Heart Disease Classification",
        description: "Medical prediction system with Streamlit interface and ML classification models",
        image: "/project2.jpg",
        tags: ["Python", "Scikit-learn", "Streamlit", "ML"],
        demo: "https://github.com/MSMuneerIqbal/streamlit_heart_disease-classification-project",
        featured: true,
      },
      {
        title: "English Learning Bot",
        description: "AI-powered language practice platform — GenAI Hackathon project",
        image: "/project3.jpg",
        tags: ["Python", "NLP", "GenAI"],
        demo: "https://github.com/MSMuneerIqbal/Ai-Based-English-Learning-Bot-GenAi-Hackathon-prject",
        featured: true,
      },
      {
        title: "Image Restoration",
        description: "Deep learning image enhancement using autoencoders",
        image: "/project4.png",
        tags: ["Python", "TensorFlow", "Deep Learning"],
        demo: "https://github.com/MSMuneerIqbal/Image-Restoration-DL_Autoencoders",
      },
      {
        title: "Sentiment Analysis",
        description: "NLP sentiment analysis on Daraz e-commerce product reviews",
        image: "/project5.png",
        tags: ["Python", "NLP", "Sentiment Analysis"],
        demo: "https://github.com/MSMuneerIqbal/Sentiments-Analysis-NoteBooks-Daraz-productData",
      },
      {
        title: "Hand-Tracked Snake Game",
        description: "Computer vision game with real-time hand tracking",
        image: "/project1.png",
        tags: ["Python", "OpenCV", "AI"],
        demo: "https://github.com/MSMuneerIqbal/HandTracked-CV-AI-SnakeGame",
      },
      {
        title: "Multilingual Translator",
        description: "AI-powered multilingual translation system",
        image: "/project2.jpg",
        tags: ["Python", "NLP", "Translation"],
        demo: "https://github.com/MSMuneerIqbal/Multilingual_Translator_Project-main",
      },
    ],
  },
  {
    icon: "🌐",
    category: "Web Applications",
    desc: "Full-stack modern web apps with cutting-edge frameworks",
    color: "from-orange-500 to-red-500",
    projects: [
      {
        title: "Professional Portfolio",
        description: "Modern AI-themed portfolio website with project showcase",
        image: "/project5.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        demo: "https://github.com/MSMuneerIqbal/portfolio-web",
        featured: true,
      },
      {
        title: "Kashibaba.pk",
        description: "E-commerce marketplace platform for product listing and sales",
        image: "/project2.jpg",
        tags: ["Next.js", "TypeScript", "Database"],
        demo: "https://github.com/MSMuneerIqbal/kashibaba.pk",
      },
      {
        title: "DeFi Dashboard",
        description: "Cryptocurrency tracking and analysis platform",
        image: "/project1.png",
        tags: ["TypeScript", "React", "Finance APIs"],
        demo: "https://github.com/MSMuneerIqbal/ginox-defi-dashboard-main",
      },
      {
        title: "Agentic AI Tutor",
        description: "AI-powered tutoring platform with adaptive learning capabilities",
        image: "/project3.jpg",
        tags: ["TypeScript", "Next.js", "LLMs"],
        isPrivate: true,
      },
    ],
  },
  {
    icon: "💼",
    category: "Business Applications",
    desc: "Enterprise solutions for inventory, POS, and operations",
    color: "from-amber-500 to-yellow-600",
    projects: [
      {
        title: "OptifyServe SaaS",
        description: "UAE-based business optimization and automation SaaS platform",
        image: "/project5.png",
        tags: ["Next.js", "TypeScript", "Python", "FastAPI"],
        isPrivate: true,
        featured: true,
      },
      {
        title: "POS System",
        description: "Point of Sale system for 7-Star Computer Shop",
        image: "/project4.png",
        tags: ["TypeScript", "Database", "Business Logic"],
        isPrivate: true,
      },
      {
        title: "Inventory Management",
        description: "Real-time stock tracking and inventory management system",
        image: "/project3.jpg",
        tags: ["Python", "Database", "Management"],
        demo: "https://github.com/MSMuneerIqbal/7star-shop-inventory",
      },
      {
        title: "Warehouse Ready Stock",
        description: "Warehouse stock tracking and management application",
        image: "/project1.png",
        tags: ["Python", "Stock Management"],
        isPrivate: true,
      },
      {
        title: "Bookshop Inventory",
        description: "Inventory management system for bookshop operations",
        image: "/project2.jpg",
        tags: ["HTML", "CSS", "Database"],
        demo: "https://github.com/MSMuneerIqbal/Inventry-management-Bookshop",
      },
    ],
  },
  {
    icon: "💬",
    category: "Chatbots & Conversational AI",
    desc: "Interactive chatbots and conversational interfaces",
    color: "from-pink-500 to-rose-600",
    projects: [
      {
        title: "Chainlit LiteLLM Bot",
        description: "Chatbot using Chainlit UI with LiteLLM for multi-model support",
        image: "/project4.png",
        tags: ["Python", "Chainlit", "LiteLLM"],
        demo: "https://github.com/MSMuneerIqbal/chainlit-litellm-bot",
      },
      {
        title: "Web Search Chat Bot",
        description: "Chatbot with integrated web search capabilities",
        image: "/project5.png",
        tags: ["Python", "LLMs", "Web Search"],
        demo: "https://github.com/MSMuneerIqbal/websearch-chat-Bot",
      },
      {
        title: "Chainlit UI Implementations",
        description: "Custom Chainlit UI implementations and experiments",
        image: "/project1.png",
        tags: ["Python", "Chainlit"],
        demo: "https://github.com/MSMuneerIqbal/chainlit-ui",
      },
      {
        title: "ApnaBot - Multi-language",
        description: "Multi-language chatbot built with HuggingFace and Gemini",
        image: "/project2.jpg",
        tags: ["Python", "HuggingFace", "NLP"],
        isPrivate: true,
      },
    ],
  },
  {
    icon: "📖",
    category: "Educational Resources",
    desc: "Comprehensive learning materials and courses",
    color: "from-sky-500 to-indigo-600",
    projects: [
      {
        title: "Learn Generative AI",
        description: "Comprehensive GenAI engineering course covering multiple LLMs and frameworks",
        image: "/project3.jpg",
        tags: ["OpenAI", "Gemini", "LangChain", "Next.js"],
        demo: "https://github.com/MSMuneerIqbal/learn-generative-ai",
      },
      {
        title: "Learn Modern Python",
        description: "Learn Python 3.12+ with Type Hints and modern best practices",
        image: "/project4.png",
        tags: ["Python", "Type Hints", "Modern Python"],
        demo: "https://github.com/MSMuneerIqbal/learn-modern-python",
      },
      {
        title: "Learn Cloud-Native Python",
        description: "Cloud-native Python development with Docker containers",
        image: "/project5.png",
        tags: ["Python", "Docker", "Cloud"],
        demo: "https://github.com/MSMuneerIqbal/learn-cloud-native-modern-python",
      },
      {
        title: "Learn Fine-Tuning LLMs",
        description: "Complete guide to fine-tuning Large Language Models",
        image: "/project1.png",
        tags: ["Python", "LLMs", "Fine-tuning"],
        demo: "https://github.com/MSMuneerIqbal/learn-fine-tuning-llms",
      },
      {
        title: "Low-Code Agentic AI",
        description: "Low-code agentic AI development with n8n and MCP",
        image: "/project2.jpg",
        tags: ["n8n", "Supabase", "MCP"],
        demo: "https://github.com/MSMuneerIqbal/learn-low-code-agentic-ai",
      },
      {
        title: "CrewAI Learnings",
        description: "CrewAI multi-agent framework hands-on learning",
        image: "/project3.jpg",
        tags: ["Python", "CrewAI", "Agents"],
        demo: "https://github.com/MSMuneerIqbal/crewai-learnings-Agnets",
      },
    ],
  },
  {
    icon: "🛠️",
    category: "Developer Tools & Utilities",
    desc: "Helpful tools and utilities for developers",
    color: "from-gray-500 to-slate-600",
    projects: [
      {
        title: "FastAPI Learnings",
        description: "FastAPI backend development learning and examples",
        image: "/project4.png",
        tags: ["Python", "FastAPI"],
        demo: "https://github.com/MSMuneerIqbal/fastapi-learnings",
      },
      {
        title: "Docker Containers Python",
        description: "Docker containerization best practices for Python apps",
        image: "/project5.png",
        tags: ["Python", "Docker"],
        demo: "https://github.com/MSMuneerIqbal/docker-containers-python",
      },
      {
        title: "CLAUDE Master Guide",
        description: "Comprehensive Claude API master guide and reference",
        image: "/project1.png",
        tags: ["Claude", "LLMs", "Guide"],
        demo: "https://github.com/MSMuneerIqbal/CLAUDE-MASTER-GUIDE",
      },
      {
        title: "CLI Agents Installation Guide",
        description: "CLI agents installation and setup guide",
        image: "/project2.jpg",
        tags: ["CLI", "Setup", "Guide"],
        demo: "https://github.com/MSMuneerIqbal/Cli-Agents-Installation-Guide",
      },
    ],
  },
  {
    icon: "📈",
    category: "Data Processing & Analysis",
    desc: "Data handling, processing and visualization tools",
    color: "from-lime-500 to-green-600",
    projects: [
      {
        title: "CSV/XLSX Data Processor",
        description: "Streamlit app for CSV and Excel data processing and analysis",
        image: "/project3.jpg",
        tags: ["Python", "Streamlit", "Pandas"],
        demo: "https://github.com/MSMuneerIqbal/Handling_csv.xlsx_data_streamlitApp",
      },
      {
        title: "ML, DL & NLP Collection",
        description: "Comprehensive collection of ML, DL and NLP projects",
        image: "/project4.png",
        tags: ["Python", "ML", "DL", "NLP"],
        demo: "https://github.com/MSMuneerIqbal/All-projects-ML-DL-and-NLP",
      },
      {
        title: "Donation Prediction Bot",
        description: "ML bot for predicting donation amounts and trends",
        image: "/project5.png",
        tags: ["Python", "ML", "Prediction"],
        demo: "https://github.com/MSMuneerIqbal/Donation_prediction_Bot",
      },
      {
        title: "Low-Code RAG Assistant",
        description: "Low-code RAG and research assistant system",
        image: "/project1.png",
        tags: ["Python", "RAG", "Low-code"],
        demo: "https://github.com/MSMuneerIqbal/low-code-Agentic-RAG-And-Research-Assistant",
      },
    ],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCategories = selectedCategory
    ? projectCategories.filter((cat) => cat.category === selectedCategory)
    : showAll
    ? projectCategories
    : projectCategories.slice(0, 5);

  const totalProjects = projectCategories.reduce((sum, cat) => sum + cat.projects.length, 0);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/4 rounded-full blur-[120px]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-emerald-400 mb-6"
          >
            <Star className="h-3.5 w-3.5" />
            {totalProjects}+ Projects & Portfolio
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            My{" "}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated selection from {totalProjects}+ projects across 9 categories — AI, ML, full-stack development, and enterprise solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          <button
            onClick={() => { setSelectedCategory(null); setShowAll(false); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === null && !showAll
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                : "glass-card text-muted-foreground hover:text-white hover:border-purple-500/30"
            }`}
          >
            Highlights
          </button>
          {projectCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => { setSelectedCategory(cat.category); setShowAll(false); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "glass-card text-muted-foreground hover:text-white hover:border-purple-500/30"
              }`}
            >
              {cat.icon} {cat.category}
            </button>
          ))}
          <button
            onClick={() => setShowAll(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              showAll
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                : "glass-card text-muted-foreground hover:text-white hover:border-purple-500/30"
            }`}
          >
            View All Categories
          </button>
        </motion.div>

        {/* Project Categories */}
        {displayedCategories.map((catGroup) => (
          <motion.div
            key={catGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{catGroup.icon}</span>
              <div>
                <h3 className="text-xl font-semibold">{catGroup.category}</h3>
                <p className="text-sm text-muted-foreground">
                  {catGroup.desc} <span className="text-purple-400">({catGroup.projects.length} projects)</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {catGroup.projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-card rounded-2xl p-5 group flex flex-col"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    {project.isPrivate && (
                      <span className="flex-shrink-0 inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        <Lock size={9} />
                        Private
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/5 border border-white/5 rounded-full px-2.5 py-1 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white/5 hover:bg-purple-500/10 text-sm font-medium text-muted-foreground hover:text-purple-400 border border-white/5 hover:border-purple-500/30 transition-all"
                    >
                      <Github size={14} />
                      View Repository
                      <ExternalLink size={12} className="opacity-40" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white/5 text-sm text-muted-foreground/50 border border-white/5 cursor-not-allowed">
                      <Lock size={14} />
                      Private Repository
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground mb-4">
            {totalProjects}+ projects across 9 categories — and counting
          </p>
          <a
            href="https://github.com/MSMuneerIqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card hover:border-purple-500/30 text-sm font-medium transition-all group"
          >
            <Github className="h-4 w-4" />
            Explore All Repositories on GitHub
            <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
