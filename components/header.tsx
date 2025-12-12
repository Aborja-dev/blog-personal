"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-sm font-bold text-accent-foreground">GH</span>
            </div>
            <span className="text-xl font-bold text-foreground">GrowthHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            <Link href="#" className="text-foreground/70 hover:text-foreground transition">
              Inicio
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-foreground transition">
              Artículos
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-foreground transition">
              Categorías
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-foreground transition">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="mt-4 space-y-3 md:hidden">
            <Link href="#" className="block text-foreground/70 hover:text-foreground transition">
              Inicio
            </Link>
            <Link href="#" className="block text-foreground/70 hover:text-foreground transition">
              Artículos
            </Link>
            <Link href="#" className="block text-foreground/70 hover:text-foreground transition">
              Categorías
            </Link>
            <Link href="#" className="block text-foreground/70 hover:text-foreground transition">
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
