"use client"

import { useState, useEffect } from 'react'
import { motion, useInView } from '@/lib/motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FileText, Github, Linkedin, Mail } from 'lucide-react'

export default function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-blue-500 dark:text-yellow-400">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden aspect-[4/5] max-w-md mx-auto md:mx-0"
          >
            <Image 
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg"
              alt="Portrait photo" 
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm <span className="text-primary">Naveen</span></h3>
            <p className="mb-4 text-muted-foreground">
              With over 5 years of experience in web development, I specialize in creating beautiful, 
              functional, and responsive web applications using modern technologies like React, 
              Next.js, and Tailwind CSS.
            </p>
            <p className="mb-6 text-muted-foreground">
              My approach combines technical expertise with an eye for design, ensuring that the 
              projects I work on not only function flawlessly but also deliver exceptional user 
              experiences. I'm passionate about clean code, accessibility, and performance optimization.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-medium mb-2">Location</h4>
                <p className="text-muted-foreground">Chennai, Tamil Nadu</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Email</h4>
                <p className="text-muted-foreground">rknaveenkarthik@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Availability</h4>
                <p className="text-muted-foreground">Freelance / Full-time</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button size="lg" className="rounded-full gap-2 h-14 px-10 py-5 text-lg" asChild>
                <a 
                  href="https://drive.google.com/file/d/1tsizKDi3g9vt92d1z4B5Qu9VstCt3zuJ/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}