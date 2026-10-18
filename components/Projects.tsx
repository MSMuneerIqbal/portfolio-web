"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Globe, Lock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories, getCategory, projects, projectsInCategory, type CategoryId, type Project } from "@/lib/projects";

const visibilityBadge: Record<Project["visibility"], string | null> = {
  public: null,
  private: "Private",
  client: "Client work",
  fork: "Course fork",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const category = getCategory(project.category);
  const thumb = project.cover ?? project.screenshots?.[0]?.src;
  const badge = visibilityBadge[project.visibility];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06 }}
      className="relative glass-card rounded-2xl overflow-hidden group flex flex-col"
    >
      {/* Visual */}
      <div className="relative h-40 overflow-hidden">
        {thumb ? (
          <Image
            src={thumb}
            alt=""
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 flex items-center justify-center`}>
            <span className="text-5xl drop-shadow-lg">{category.icon}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {project.live && (
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 backdrop-blur border border-emerald-400/30 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
          )}
          {badge && (
            <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur border border-amber-400/30 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
              <Lock size={9} />
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors">
          {/* Stretched link: the whole card opens the project page */}
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </h4>

        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">{project.summary}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-xs bg-white/5 border border-white/5 rounded-full px-2.5 py-1 text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-purple-500/10 text-sm font-medium text-purple-300 border border-purple-500/20 group-hover:bg-purple-500/20 transition-all">
            View details
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="relative z-10 w-9 h-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-purple-400 hover:border-purple-500/30 transition-all"
            >
              <Github size={15} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="relative z-10 w-9 h-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
            >
              <Globe size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}

export default function Projects() {
  // "highlights" shows featured work, "all" shows every category, otherwise one category.
  const [view, setView] = useState<"highlights" | "all" | CategoryId>("highlights");

  const totalProjects = projects.length;
  const featured = projects.filter((p) => p.featured);
  const groups = view === "all" ? categories : view === "highlights" ? [] : categories.filter((c) => c.id === view);

  const pill = (active: boolean) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active
        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
        : "glass-card text-muted-foreground hover:text-white hover:border-purple-500/30"
    }`;

  return (
    <section id="projects" className="relative py-12 md:py-16">
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
          className="text-center mb-9"
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
            My <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Click any project to see the problem it solves, how it was built, its benefits and screenshots
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          <button onClick={() => setView("highlights")} className={pill(view === "highlights")}>
            ⭐ Highlights
          </button>
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setView(cat.id)} className={pill(view === cat.id)}>
              {cat.icon} {cat.name}
            </button>
          ))}
          <button onClick={() => setView("all")} className={pill(view === "all")}>
            View All
          </button>
        </motion.div>

        {view === "highlights" ? (
          <ProjectGrid items={featured} />
        ) : (
          groups.map((cat) => {
            const items = projectsInCategory(cat.id);
            return (
              <div key={cat.id} className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cat.desc} <span className="text-purple-400">({items.length} projects)</span>
                    </p>
                  </div>
                </div>
                <ProjectGrid items={items} />
              </div>
            );
          })
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          {view === "highlights" && (
            <button
              onClick={() => setView("all")}
              className="inline-flex items-center gap-2 px-6 py-3 mb-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium transition-all"
            >
              See all {totalProjects} projects
              <ArrowRight size={14} />
            </button>
          )}
          <div>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
