"use client"

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#section-0' },
  { name: 'About Me', href: '#section-1' },
  { name: 'Projects', href: '#section-2' },
  { name: 'Contact', href: '#section-3' },
]

interface NavbarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const currentSection = navItems.find(item => item.href === `#${sectionId}`)
          if (currentSection) {
            setActiveSection(currentSection.name.toLowerCase())
          }
        }
      })
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    })

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary/80 text-secondary rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`fixed md:left-0 top-0 bottom-0 z-40 w-64 md:w-24 bg-primary/80 backdrop-blur-sm flex items-center transition-transform hover:scale-105 hover:bg-primary duration-300 ease-in-out ${isOpen ? 'left-0' : '-left-64 md:left-0'}`}>
        <div className="w-full">
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative w-full text-left">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(item.href)
                  }}
                  className="inline-block p-2 text-secondary hover:text-secondary-foreground transition-colors duration-300"
                >
                  {item.name}
                </a>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}