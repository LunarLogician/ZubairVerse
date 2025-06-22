"use client"
import { useEffect, useState } from "react"

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const skills = [
    { name: "JavaScript", level: 90, icon: "⚡", category: "Frontend" },
    { name: "React", level: 85, icon: "⚛️", category: "Frontend" },
    { name: "TypeScript", level: 75, icon: "📘", category: "Frontend" },
    { name: "Next.js", level: 85, icon: "▲", category: "Frontend" },
    { name: "Node.js", level: 80, icon: "🟢", category: "Backend" },
    { name: "MongoDB", level: 70, icon: "🍃", category: "Database" },
    { name: "SQL", level: 75, icon: "🗄️", category: "Database" },
    { name: "Git", level: 85, icon: "📦", category: "Tools" },
    { name: "Docker", level: 65, icon: "🐳", category: "DevOps" },
    { name: "AWS", level: 70, icon: "☁️", category: "Cloud" }
  ]

  const categories = ["Frontend", "Backend", "Database", "Tools", "DevOps", "Cloud"]

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
    <section className="min-h-screen flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
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
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--primary) 0%, transparent 50%)`
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-4 sm:mb-6 relative px-4 animate-glow-pulse">
            <span className="relative inline-block">
              Technical Skills
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-transparent rounded-lg blur-sm animate-pulse-slow" />
            </span>
          </h2>
          
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full w-16 sm:w-20 md:w-24 lg:w-32 animate-expand" />
          
          <p className="text-[var(--text)]/80 mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg font-mono animate-fade-in-delayed">
            &gt; Technologies I work with daily
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className="backdrop-blur-md bg-white/5 rounded-xl p-4 sm:p-6 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 relative overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  {category}
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {skills.filter(skill => skill.category === category).map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group/skill animate-slide-in-left"
                      style={{ animationDelay: `${categoryIndex * 0.1 + index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center gap-2 sm:gap-3 text-[var(--text)] font-medium text-sm sm:text-base">
                          <span className="text-lg sm:text-2xl">{skill.icon}</span>
                          <span className="font-mono">{skill.name}</span>
                        </span>
                        <span className="text-primary font-bold font-mono text-xs sm:text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-[var(--secondary)]/50 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/60 rounded-full relative animate-progress-bar"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${categoryIndex * 0.1 + index * 0.1 + 0.3}s`
                            }}
                          >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-primary rounded-full opacity-50 blur-sm animate-glow-pulse" />
                          </div>
                        </div>
                        
                        {/* Skill level indicator */}
                        <div
                          className="absolute top-0 h-2 w-1 bg-primary/80 rounded-full animate-progress-indicator"
                          style={{ 
                            left: `${skill.level}%`,
                            transform: 'translateX(-50%)',
                            animationDelay: `${categoryIndex * 0.1 + index * 0.1 + 0.3}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal-style summary */}
        <div className="mt-8 sm:mt-12 lg:mt-16 backdrop-blur-md bg-black/20 rounded-xl p-4 sm:p-6 border border-[var(--primary)]/30 font-mono text-sm animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-[var(--text)]/60 ml-2 text-xs sm:text-sm">~/skills/summary</span>
          </div>
          
          <div className="text-[var(--text)]">
            <p className="text-primary text-sm sm:text-base">$ skills --summary</p>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text)]/80">
              <span className="text-green-400">✓</span> 10 core technologies mastered<br/>
              <span className="text-green-400">✓</span> Full-stack development expertise<br/>
              <span className="text-green-400">✓</span> Modern development practices<br/>
              <span className="text-primary">→</span> Ready for your next project
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
