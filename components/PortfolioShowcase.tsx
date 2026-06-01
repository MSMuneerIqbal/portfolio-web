'use client';

import React, { useState } from 'react';
import portfolioData from '@/data/portfolio-data.json';
import { Github, ExternalLink, Lock, Star } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  status?: string;
  liveUrl?: string;
  type?: string;
}

interface Category {
  icon: string;
  description: string;
  projects: Project[];
}

export function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = portfolioData.projectCategories as Record<string, Category>;
  const skills = portfolioData.skills;
  const stats = portfolioData.stats;

  const filteredCategories = selectedCategory
    ? { [selectedCategory]: categories[selectedCategory] }
    : categories;

  const allProjects = Object.values(filteredCategories).flatMap((cat: Category) => cat.projects);
  const filteredProjects = allProjects.filter(
    (proj: Project) =>
      proj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.tech.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black text-white">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {portfolioData.profile.name}
          </h1>
          <p className="text-2xl text-purple-400 mb-6">{portfolioData.profile.title}</p>
          <p className="text-gray-300 text-lg max-w-3xl mb-8">{portfolioData.profile.bio}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
              <p className="text-3xl font-bold text-purple-400">{stats.totalProjects}</p>
              <p className="text-gray-300 text-sm">Total Projects</p>
            </div>
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
              <p className="text-3xl font-bold text-blue-400">{stats.publicProjects}</p>
              <p className="text-gray-300 text-sm">Public Projects</p>
            </div>
            <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-4">
              <p className="text-3xl font-bold text-indigo-400">{stats.privateProjects}</p>
              <p className="text-gray-300 text-sm">Private Projects</p>
            </div>
            <div className="bg-pink-900/30 border border-pink-500/30 rounded-lg p-4">
              <p className="text-3xl font-bold text-pink-400">{Object.keys(skills).length}</p>
              <p className="text-gray-300 text-sm">Skill Categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Core Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-300 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {(skillList as string[]).map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-500/20 border border-purple-400/30 rounded-full px-3 py-1 text-sm text-purple-200 hover:bg-purple-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects & Portfolio</h2>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <input
              type="text"
              placeholder="Search projects by name, description, or tech..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === null
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                All Categories
              </button>
              {Object.entries(categories).map(([category, data]) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <span>{(data as Category).icon}</span>
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {Object.entries(filteredCategories).map(([categoryName, categoryData]) => {
              const category = categoryData as Category;
              const categoryProjects = category.projects.filter((proj: Project) =>
                proj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                proj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                proj.tech.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
              );

              return (
                <div key={categoryName}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300">{categoryName}</h3>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryProjects.map((project: Project) => (
                      <div
                        key={project.name}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all group"
                      >
                        {/* Featured Badge */}
                        {project.type === 'Featured' && (
                          <div className="mb-3 flex items-center gap-1 text-yellow-400 text-sm">
                            <Star size={16} className="fill-current" />
                            Featured Project
                          </div>
                        )}

                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors flex-1 break-words">
                            {project.name}
                          </h4>
                          {project.status === 'Private' && (
                            <Lock size={16} className="text-red-400 ml-2 flex-shrink-0" />
                          )}
                        </div>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="bg-blue-900/40 border border-blue-500/30 rounded px-2 py-1 text-xs text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-2 pt-4 border-t border-slate-700/50">
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm flex-1"
                            >
                              <Github size={16} />
                              Repository
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm flex-1"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="px-4 py-16 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.highlights.achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="flex gap-4">
                  <div className="text-3xl">✨</div>
                  <p className="text-gray-200">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-300 text-lg mb-8">Interested in collaborating on AI projects or discussing your next big idea?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/MSMuneerIqbal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Github size={20} />
              Visit GitHub
            </a>
            <a
              href="mailto:muneeriqbal@example.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
