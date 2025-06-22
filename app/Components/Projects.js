"use client"
import { useEffect, useState } from "react"

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and analytics dashboard. Built with modern React patterns and scalable backend architecture.",
      image: "🛍️",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
      category: "fullstack",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true,
      status: "completed"
    },
    {
      id: 2,
      title: "AI Chat Assistant",
      description: "An AI-powered chat assistant that helps users with common queries and tasks using natural language processing. Integrated with multiple AI models for enhanced responses.",
      image: "🤖",
      tech: ["Python", "TensorFlow", "FastAPI", "React", "Docker", "OpenAI"],
      category: "ai",
      github: "https://github.com/yourusername/ai-chat",
      live: "https://ai-chat-demo.com",
      featured: true,
      status: "completed"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking. Features drag-and-drop interface and advanced filtering.",
      image: "📋",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      category: "web",
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com",
      featured: true,
      status: "in-progress"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with beautiful visualizations, forecasts, and location-based weather data from multiple APIs.",
      image: "🌤️",
      tech: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      category: "web",
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://weather-demo.com",
      featured: false,
      status: "completed"
    },
    {
      id: 5,
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support, transaction history, and portfolio tracking.",
      image: "₿",
      tech: ["React", "Web3.js", "Ethereum", "Node.js", "MongoDB"],
      category: "blockchain",
      github: "https://github.com/yourusername/crypto-wallet",
      live: "https://wallet-demo.com",
      featured: false,
      status: "completed"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Smart recipe search application with ingredient-based filtering, nutrition facts, and meal planning features.",
      image: "🍳",
      tech: ["Vue.js", "Node.js", "MongoDB", "Spoonacular API"],
      category: "web",
      github: "https://github.com/yourusername/recipe-finder",
      live: "https://recipe-demo.com",
      featured: false,
      status: "completed"
    }
  ]

  const filters = [
    { key: "all", label: "All Projects", icon: "🎯" },
    { key: "fullstack", label: "Full Stack", icon: "🏗️" },
    { key: "web", label: "Web Apps", icon: "🌐" },
    { key: "ai", label: "AI/ML", icon: "🧠" },
    { key: "blockchain", label: "Blockchain", icon: "⛓️" }
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--primary) 0%, transparent 50%)`
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-4 sm:mb-6 relative px-4 animate-glow-pulse">
            <span className="relative inline-block">
              Featured Projects
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-transparent rounded-lg blur-sm animate-pulse-slow" />
            </span>
          </h2>
          
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full w-16 sm:w-20 md:w-24 lg:w-32 animate-expand" />
          
          <p className="text-[var(--text)]/80 mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg font-mono max-w-2xl mx-auto px-4 animate-fade-in-delayed">
            &gt; A collection of projects showcasing my development expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {filters.map((filter, index) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`
                px-3 sm:px-4 py-2 rounded-full font-mono text-xs sm:text-sm transition-all duration-300 border relative overflow-hidden group hover:scale-105 active:scale-95
                ${activeFilter === filter.key 
                  ? 'bg-primary text-black border-primary shadow-lg' 
                  : 'bg-white/5 text-primary border-primary/30 hover:border-primary/60 backdrop-blur-sm'
                }
              `}
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                <span className="text-sm sm:text-base">{filter.icon}</span>
                <span className="hidden xs:inline sm:inline">{filter.label}</span>
                <span className="xs:hidden sm:hidden">{filter.label.split(' ')[0]}</span>
              </span>
              {activeFilter !== filter.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                backdrop-blur-md bg-white/5 rounded-xl border border-[var(--primary)]/20 
                hover:border-[var(--primary)]/50 transition-all duration-300 overflow-hidden
                group relative w-full hover:-translate-y-2 hover:scale-102 animate-fade-in-up
                ${project.featured ? 'ring-2 ring-primary/20' : ''}
              `}
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              {/* Project Status Badge */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                <span className={`
                  px-2 py-1 rounded-full text-xs font-mono font-bold
                  ${project.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                    project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-blue-500/20 text-blue-400 border border-blue-500/30'}
                `}>
                  {project.status === 'completed' ? '✓ Live' : 
                   project.status === 'in-progress' ? '⚡ WIP' : '🔄 Beta'}
                </span>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                  <span className="px-2 sm:px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold border border-primary/30 backdrop-blur-sm">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-4 sm:p-6 relative z-10">
                {/* Project Icon */}
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-[var(--text)]/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20 font-mono hover:bg-primary/20 transition-colors animate-fade-in"
                      style={{ animationDelay: `${1 + index * 0.1 + techIndex * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-3 sm:px-4 bg-[var(--secondary)]/50 text-[var(--text)] rounded-lg hover:bg-primary/20 transition-all text-sm font-mono border border-primary/20 hover:border-primary/40 hover:scale-105 active:scale-95"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      <span className="hidden xs:inline">Code</span>
                      <span className="xs:hidden">GitHub</span>
                    </span>
                  </a>
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-3 sm:px-4 bg-primary text-black rounded-lg hover:bg-primary/80 transition-all text-sm font-mono font-bold relative overflow-hidden group hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="hidden xs:inline">Live Demo</span>
                      <span className="xs:hidden">Demo</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Terminal Summary */}
        <div className="mt-8 sm:mt-12 lg:mt-16 backdrop-blur-md bg-black/20 rounded-xl p-4 sm:p-6 border border-[var(--primary)]/30 font-mono text-sm animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-[var(--text)]/60 ml-2 text-xs sm:text-sm">~/projects/stats</span>
          </div>
          
          <div className="text-[var(--text)]">
            <p className="text-primary text-sm sm:text-base">$ project --stats</p>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm text-[var(--text)]/80">
              <div>
                <span className="text-green-400">Total:</span> {projects.length} projects
              </div>
              <div>
                <span className="text-blue-400">Featured:</span> {projects.filter(p => p.featured).length} projects
              </div>
              <div>
                <span className="text-yellow-400">Live:</span> {projects.filter(p => p.status === 'completed').length} projects
              </div>
              <div>
                <span className="text-primary">Technologies:</span> 15+ stacks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
