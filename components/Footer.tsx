"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/MSMuneerIqbal", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/muneeriqbal729", label: "LinkedIn" },
  { icon: Mail, href: "mailto:muneeriqbal729@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/4 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold gradient-text mb-3">Muneer Iqbal</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-driven Agentic AI Engineer building autonomous systems with Generative AI and Full-Stack Development.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              Connect
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-purple-500/30 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4 text-muted-foreground hover:text-purple-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              Let&apos;s Build
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to collaborate on AI projects?
            </p>
            <Link href="mailto:muneeriqbal729@gmail.com">
              <Button className="w-full gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm rounded-xl">
                <Mail className="h-3.5 w-3.5" />
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} Muneer Iqbal. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            </motion.div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-400 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
