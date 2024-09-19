'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

export default function AboutMe() {
  const controls = useAnimation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [controls])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="w-full h-screen bg-black text-white overflow-hidden flex items-center snap-start"
    >
      <div className="container mx-auto px-4 py-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <motion.h2
            variants={variants}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-orange-500"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-full shadow-lg"
          >
            <Image
              src="/images/me2.jpg?height=160&width=160"
              alt="Professional headshot"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        </div>
        <motion.div
          variants={variants}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800 pr-4"
        >
          <div className="space-y-4">
            <p className="text-lg">
              I'm a self-taught web developer based in Wisconsin with a dirve to create engaging and user-friendly web applications. My journey in tech began with a curiosity for how things work, leading me to explore various programming languages and frameworks.
            </p>
            <p className="text-lg">
              As a passionate web developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences.  I have always been fascinated by technology and its ability to connect people and ideas.
            </p>
            <p className="text-lg">
              My journey in web development has equipped me with a diverse skill set, allowing me to tackle complex challenges and deliver innovative solutions. I thrive in collaborative environments and am always eager to learn and adapt to new technologies.
            </p>
            <motion.div
              variants={variants}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-orange-400">Core Skills</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Full-Stack Development (MERN Stack)</li>
                <li>Responsive Web Design</li>
                <li>API Development and Integration</li>
                <li>Database Management (SQL & NoSQL)</li>
                <li>Cloud Services (AWS)</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}