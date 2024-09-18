'use client'

import { useState } from 'react'
import HeroSection from "@/components/custom/HeroSection"
import ProjectShowcase from "@/components/custom/ProjectsSection"
import ContactSection from "@/components/custom/ContactSection"
import Navbar from "@/components/custom/Navbar"

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="flex flex-col md:flex-row">
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <div className="flex-1 md:ml-24">
        <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll">
          <section id="section-0" className="snap-start">
            <HeroSection />
          </section>
          <section id="section-1" className="snap-start">
            <ProjectShowcase />
          </section>
          <section id="section-2" className="snap-start">
            <ContactSection />
          </section>
        </div>
      </div>
    </div>
  )
}