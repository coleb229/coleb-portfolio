'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Terminal, Globe, Zap, Triangle } from "lucide-react"

export default function HeroSection() {
  const [typedText, setTypedText] = useState('')
  const fullText = "const fullStackEngineer = 'Cole Brant';"
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 500)
      return () => clearInterval(timeout)
    }
  }, [typedText])

  const technologies = [
    { name: 'React', icon: <Zap className="h-6 w-6" /> },
    { name: 'Node.js', icon: <Terminal className="h-6 w-6" /> },
    { name: 'Next.js', icon: <Triangle className="h-6 w-6" /> },
    { name: 'MongoDB', icon: <Globe className="h-6 w-6" /> },
    /*
    { name: 'Prisma', icon: <Pyramid className="h-6 w-6" /> },
    { name: 'TypeScript', icon: <Frame className="h-6 w-6" /> },
    { name: 'Python', icon: <Cpu className="h-6 w-6" /> },
    { name: 'Tailwind CSS', icon: <Wind className="h-6 w-6" /> },
     */
  ]

  const handleScroll = (index:number) => {
    const section = document.getElementById(`section-${index}`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full snap-start h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl w-full space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 transform skew-y-3 rounded-3xl"></div>
          <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Full-Stack Innovator
            </h1>
            <div className="font-mono text-lg md:text-xl mb-6 h-7 text-gray-800">
              <span>{typedText}</span>
              {showCursor && <span className="animate-pulse">|</span>}
            </div>
            <p className="text-gray-600 max-w-2xl mb-8">
              Crafting digital experiences from concept to deployment. Bridging creativity with technical expertise to build the web of tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 hover:text-black">
                <span onClick={() => handleScroll(1)} className="relative z-10">Explore My Work</span>
                <span className="absolute inset-0 bg-secondary transform translate-y-full transition-transform group-hover:translate-y-0"></span>
              </Button>
              <Button onClick={() => handleScroll(2)} variant="outline" className="group border-primary text-primary hover:bg-primary/10">
                <span>Let{"'"}s Connect</span>
                <Zap className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-md flex items-center justify-center flex-col space-y-2 group hover:bg-white transition-colors">
              <div className="text-primary">{tech.icon}</div>
              <span className="text-sm font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="relative h-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-around animate-marquee">
            {Array(20).fill('').map((_, i) => (
              <div key={i} className="w-3 h-3 bg-primary rounded-full mx-2"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}