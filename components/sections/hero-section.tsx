"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from '@/lib/motion'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { ExternalLink } from 'lucide-react'
import StreamlitIcon from '@/components/icons/StreamlitIcon'
import GitHubIcon from '@/components/icons/GitHubIcon'
import LinkedInIcon from '@/components/icons/LinkedInIcon'

export default function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
  }, [])

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05] z-0"></div>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 flex flex-col md:flex-row items-center md:items-stretch gap-12">
        {/* Left: Headline, subheadline, CTA, socials */}
        <div className="flex-1 flex flex-col justify-center md:justify-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight md:leading-[1.1] mb-8 text-foreground"
          >
            Transforming <span className="text-blue-500 dark:text-yellow-400">Ideas</span><br />into Visual<br />Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
          >
            Let's bring your brand's story to life with custom designs that capture attention and inspire action.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Button size="lg" className="rounded-full px-8 py-4 text-lg font-semibold" onClick={scrollToContact}>Let's Talk</Button>
          </motion.div>
          <div className="flex items-center gap-4 mt-auto">
            <span className="text-muted-foreground text-base">Find me at:</span>
            {/* GitHub Link */}
            <a href="https://github.com/Nav3005" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <GitHubIcon className="h-6 w-6" />
            </a>
            {/* Streamlit Link (using ExternalLink as a placeholder) */}
            <a href="https://share.streamlit.io/user/nav3005" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80"><StreamlitIcon className="h-6 w-6" /></a>
            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/naveen-karthik/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        {/* Right: Image with ellipse and skill tags (slightly left of center) */}
        <div className="flex-1 flex items-center justify-center relative min-h-[400px] pb-20">
          {/* Ellipse background with image inside, slightly left, with border */}
          <div className="absolute left-1/2 -translate-x-[60%] w-64 h-96 bg-primary rounded-full z-0 overflow-hidden flex items-center justify-center border-4 border-blue-500 dark:border-yellow-400" style={{ filter: 'blur(0px)' }}>
            <Image 
              src="/profile.jpeg"
              alt="Portrait photo"
              fill
              style={{ objectFit: "cover" }}
              className=""
              priority
            />
          </div>
          {/* Floating skill tags - inside the image, overlapping at screenshot spots */}
          {/* UI/UX Design - top right, inside image */}
          <div className="absolute top-[10%] right-[2%] z-20">
            <span className="inline-block px-4 py-2 bg-blue-500 text-white dark:bg-yellow-400 dark:text-black rounded-full shadow text-sm font-semibold whitespace-nowrap border-2 border-blue-500 dark:border-transparent">Software Developer</span>
          </div>
          {/* Social Media Video Content - center right, inside image */}
          <div className="absolute top-1/2 right-[5%] -translate-y-1/2 z-20">
            <span className="inline-block px-4 py-2 bg-blue-500 text-white dark:bg-yellow-400 dark:text-black rounded-full shadow text-sm font-semibold whitespace-nowrap border-2 border-blue-500 dark:border-transparent">Machnine Learning Engineer</span>
          </div>
          {/* Icon Design - left, inside image */}
          <div className="absolute bottom-[20%] right-[75%] z-20">
            <span className="inline-block px-4 py-2 bg-blue-500 text-white dark:bg-yellow-400 dark:text-black rounded-full shadow text-sm font-semibold whitespace-nowrap border-2 border-blue-500 dark:border-transparent">Web Developer</span>
          </div>
          {/* Graphic Design - bottom right, inside image */}
          <div className="absolute bottom-[6%] right-[10%] z-20">
            <span className="inline-block px-4 py-2 bg-blue-500 text-white dark:bg-yellow-400 dark:text-black rounded-full shadow text-sm font-semibold whitespace-nowrap border-2 border-blue-500 dark:border-transparent">Competitive Coder</span>
          </div>
          
          {/* New floating skill tags - left of the oval */}
          {/* Project Management - above the image/oval */}
          <div className="absolute left-1/2 z-20" style={{ top: 'calc(10% - 100px)', transform: 'translateX(-160%) translateX(-10px)' }}>
            <span className="inline-block px-4 py-2 bg-blue-500 text-white dark:bg-yellow-400 dark:text-black rounded-full shadow text-sm font-semibold whitespace-nowrap border-2 border-blue-500 dark:border-transparent">DL Enthusiast</span>
          </div>
          {/* Data Analysis - center left, inside image */}
          <div className="absolute top-1/1.5 right-[65%] -translate-y-1/2 z-20">
            <span className="inline-block px-4 py-2 bg-blue-500 text-white dark:bg-yellow-400 dark:text-black rounded-full shadow text-sm font-semibold whitespace-nowrap border-2 border-blue-500 dark:border-transparent">Data Analyst</span>
          </div>
        </div>
        {/* Downward arrow to next section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <Button variant="ghost" size="icon" onClick={scrollToNextSection} aria-label="Scroll to next section">
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  )
}