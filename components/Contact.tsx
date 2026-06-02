"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MessageSquare, Send, Sparkles, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/MSMuneerIqbal", color: "hover:text-purple-400", desc: "Check out my repos" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muneeriqbal729/", color: "hover:text-blue-400", desc: "Let's connect" },
    { icon: Mail, label: "Email", href: "mailto:muneeriqbal729@gmail.com", color: "hover:text-emerald-400", desc: "muneeriqbal729@gmail.com" },
    { icon: Phone, label: "WhatsApp", href: "https://wa.me/923045820729", color: "hover:text-green-400", desc: "+92 304 5820729" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/4 rounded-full blur-[120px]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            <MessageSquare className="h-3.5 w-3.5" />
            Get in Touch
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Let&apos;s{" "}
            <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-3"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl glass-card ${link.color} transition-all group`}
              >
                <div className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${link.color}`}>
                  <link.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">{link.label}</p>
                  <p className="text-xs text-muted-foreground">{link.desc}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              action="https://formspree.io/f/mdkayoav"
              method="POST"
              className="glass-card rounded-2xl p-6 space-y-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">Send a message</span>
              </div>

              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-white/5 border-white/10 focus:border-purple-500/50 rounded-xl h-11"
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="bg-white/5 border-white/10 focus:border-purple-500/50 rounded-xl h-11"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="min-h-[140px] bg-white/5 border-white/10 focus:border-purple-500/50 rounded-xl resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/15 rounded-xl h-11"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
