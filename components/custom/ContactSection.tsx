'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaGithub, FaInstagram, FaTwitter, FaPaperPlane } from 'react-icons/fa'
import { sendMessage } from '@/lib/db'

export default function BlurredContactSection() {
  const [typedText, setTypedText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const text = "Let's Connect!"
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 100)
  
    return () => clearInterval(typingEffect)
  }, [])

  const handleSubmit = async (formData:FormData) => {
    setIsSubmitting(true);
    await sendMessage(formData);
    setIsSubmitting(false);
  }

/*
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
  
    const formData = {
      name: event.currentTarget.nameOfSender.value,
      email: event.currentTarget.email.value,
      message: event.currentTarget.message.value,
    };
  
    try {
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.success) {
        console.log('Message sent successfully');
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    setIsSubmitting(false);
  };
*/
  return (
    <section className="h-screen snap-start flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/[0.05] bg-[size:20px_20px]"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      <div className="container mx-auto px-4 relative z-20 py-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          {typedText}<span className="animate-blink">|</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 items-stretch max-w-4xl mx-auto">
          <div className="lg:w-1/3 bg-white/95 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-black">Reach Out</h3>
            <div className="flex flex-col space-y-4 mb-6">
              <a href="https://github.com/coleb229" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center space-x-3 p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300">
                <FaGithub size={24} className="text-primary" />
                <span className="text-black font-medium">GitHub</span>
              </a>
              <a href="https://www.instagram.com/cbrant31" target="_blank" rel="noopener noreferrer"
                 className="flex items-center space-x-3 p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300">
                <FaInstagram size={24} className="text-primary" />
                <span className="text-black font-medium">Instagram</span>
              </a>
              <a href="https://x.com/BrantCole52810" target="_blank" rel="noopener noreferrer"
                 className="flex items-center space-x-3 p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300">
                <FaTwitter size={24} className="text-primary" />
                <span className="text-black font-medium">Twitter</span>
              </a>
            </div>
            <p className="text-black/80 text-sm">Let{"'"}s create something amazing together!</p>
          </div>
          <div className="lg:w-2/3 bg-white/95 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <form action={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Input type="text" id="name" name="name" required className="peer border border-primary/80 focus:border-primary bg-transparent text-black/60" placeholder=" " />
                  <label htmlFor="name" className="absolute cursor-text left-2 -top-3.5 text-primary/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/40 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary/60 peer-focus:text-xs">Name</label>
                </div>
                <div className="relative">
                  <Input type="email" id="email" name="email" required className="peer border border-primary/20 focus:border-primary bg-transparent text-black" placeholder=" " />
                  <label htmlFor="email" className="absolute cursor-text left-2 -top-3.5 text-primary/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/40 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary/60 peer-focus:text-xs">Email</label>
                </div>
              </div>
              <div className="relative">
                <Textarea id="message" name="message" required className="peer border border-primary/20 focus:border-primary bg-transparent text-black h-32" placeholder=" " />
                <label htmlFor="message" className="absolute cursor-text left-2 -top-3.5 text-primary/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/40 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary/60 peer-focus:text-xs">Message</label>
              </div>
              <Button type="submit" className="w-full group bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <span className="flex items-center justify-center group-hover:hidden">
                      Send Message
                    </span>
                    <span className="items-center justify-center hidden group-hover:flex group-hover:animate-fly-1">
                      <FaPaperPlane className="mr-2" /> Whoosh!
                    </span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}