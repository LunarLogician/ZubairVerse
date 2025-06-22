"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  const [typedText, setTypedText] = useState("")
  const terminalText = "> sudo hire zubair"

  useEffect(() => {
    if (!mounted) return
    let i = 0
    const timer = setInterval(() => {
      if (i < terminalText.length) {
        setTypedText(terminalText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [mounted])

  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
      initial={{
        x: Math.random() * window?.innerWidth || 0,
        y: window?.innerHeight || 0,
        opacity: 0
      }}
      animate={{
        y: -100,
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: "easeOut"
      }}
    />
  ))

  if (!mounted) return null

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 relative z-10 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && particles}
      </div>
      {/* Main content */}
      <div className=" z-10 max-w-4xl mx-auto">

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary drop-shadow-lg relative -top-20 md:-top-30">
            <span className="relative inline-block">
              ZubairVerse
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Terminal Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-12 md:mb-16 relative"
        >
          <p className="terminal-line text-base md:text-lg lg:text-xl font-mono">
            {typedText}
            <span className="animate-pulse">█</span>
          </p>

          {/* Terminal dots */}
          <div className="absolute -top-60 md:-top-70 left-4 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full opacity-60" />
          <div className="absolute -top-60 md:-top-70 -left-6 md:-left-8 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full opacity-60" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 justify-center items-center mt-8 md:mt-12 "
        >
          {/* View Resume Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="https://zubairmirza2970.hackerresume.io/8a22ab72-4e71-4071-8d42-c53d354dc32d" target="_blank" rel="noopener noreferrer">
              <button className="btn-glass group relative overflow-hidden top-10 md:top-14 text-sm md:text-base px-6 md:px-8 py-3 md:py-4 mb-7">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Resume
                </span>
              </button>
            </a>
          </motion.div>

          {/* View Projects Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#projects">
              <button className="btn-glass relative group top-10 md:top-14 text-sm md:text-base px-6 md:px-8 py-3 md:py-4 mb-7">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Projects
                </span>
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-20 md:bottom-32 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-primary/60"
          >
            <span className="text-xs md:text-sm mb-2 font-mono -top-8 md:-top-12">scroll down</span>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
