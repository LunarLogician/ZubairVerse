
"use client"

import { useState, useEffect } from 'react';
import Hero from './Components/Hero';
import AboutSection from './Components/About';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null; // Don't render until on client

  return (
    <div className="relative">
      {/* Global Background Layers */}
      <div className="fixed inset-0 -z-50 bg-[var(--bg)]" />
      
      {/* Animated Glow */}
      <div 
        className="fixed inset-0 -z-40 opacity-20 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--primary) 0%, transparent 70%)`
        }}
      />

      {/* Grid Pattern */}
      <div className="fixed inset-0 -z-30 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Particles (optional) */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {/* Add your particles implementation here if needed */}
      </div>

      {/* Page Content */}
      <main>
        <Hero />
        <AboutSection />
        {/* Other sections */}
      </main>
    </div>
  );
}