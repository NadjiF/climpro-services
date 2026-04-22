'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Pourquoi nous', href: '#pourquoi-nous' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      {/* Pill principal */}
      <div
        className={`rounded-full backdrop-blur-md border transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 border-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]'
            : 'bg-white/70 border-white/60 shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
        }`}
      >
        <div className="flex items-center justify-between pl-6 pr-2 py-2">

          {/* Logo */}
          <Link
            href="/"
            className="font-display text-lg font-bold text-slate-900 tracking-tight"
          >
            ClimPro Services
          </Link>

          {/* Liens desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#8FBFE0] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center text-sm bg-[#8FBFE0] hover:bg-[#7DB0D6] text-slate-900 font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5"
          >
            Devis gratuit
          </a>

          {/* Burger mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-slate-900 transition-all ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-900 transition-all ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-900 transition-all ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full mt-2 transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border border-white rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] p-3">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-full px-4 py-3 transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 text-sm bg-[#8FBFE0] hover:bg-[#7DB0D6] text-slate-900 font-semibold px-5 py-3 rounded-full text-center transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Devis gratuit
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
