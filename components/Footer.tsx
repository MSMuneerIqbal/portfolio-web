"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Sparkles, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MSMuneerIqbal', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://linkedin.com/in/muneeriqbal729', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:muneeriqbal729@gmail.com', label: 'Email', color: 'hover:text-red-400' },
  ]

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gradient-to-b from-background to-black border-t border-purple-500/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ bottom: '-50%', left: '-10%' }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Muneer Iqbal</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI Engineer crafting intelligent solutions through Generative AI and Full-Stack Development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-400" />
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors group text-sm"
                  >
                    <Icon className={`h-4 w-4 ${link.color} transition-colors`} />
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-green-400" />
              Let's Build
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Ready to collaborate on AI projects?
            </p>
            <Link href="mailto:muneeriqbal729@gmail.com">
              <Button className="w-full gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 glow">
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-between flex-col sm:flex-row gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© {new Date().getFullYear()} Muneer Iqbal. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>and</span>
            <Sparkles className="h-4 w-4 text-purple-400" />
          </div>
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm group"
          >
            <span>Back to Top</span>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
              <ArrowUp className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
