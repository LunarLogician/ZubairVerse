"use client"


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Skills', id: 'skills' },
  { label: 'FAQ', id: 'faq' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--primary)]/10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="font-bold text-primary text-xl tracking-wide">ZV</div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 lg:gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="btn-glass border-none text-sm px-4 py-2 hover:scale-105 transition-all duration-200"
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="btn-glass p-2 flex items-center justify-center"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--bg)]/95 backdrop-blur-md border-t border-[var(--primary)]/10 shadow-lg animate-fade-in-up">
          <div className="flex flex-col gap-2 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className="btn-glass border-none text-base py-3 px-4 w-full text-left mb-1"
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 