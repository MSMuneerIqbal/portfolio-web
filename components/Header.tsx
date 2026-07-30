"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Sparkles, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? "glass-strong shadow-lg shadow-purple-500/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative">
                <Image
                  src="/logo.svg"
                  alt="Muneer Iqbal logo"
                  width={36}
                  height={36}
                  className="rounded-lg group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all"
                  priority
                />
              </div>
              <span className="text-xl font-bold gradient-text">Muneer</span>
            </motion.button>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-3/4 transition-all duration-300 rounded" />
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-purple-500/30 transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4 text-yellow-400" />
                  ) : (
                    <Moon className="h-4 w-4 text-purple-400" />
                  )}
                </motion.button>
              )}

              <button
                onClick={() => scrollTo("#contact")}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-purple-500/15"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Get in Touch
              </button>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 rounded-lg glass-card flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-strong border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-1">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => scrollTo(item.href)}
                      className="w-full text-left px-4 py-3 rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
