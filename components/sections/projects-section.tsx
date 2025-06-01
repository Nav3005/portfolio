"use client"

import { useState, useRef } from 'react'
import { motion, useInView } from '@/lib/motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and customer insights.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Mobile-responsive application to track workouts, nutrition, and progress with personalized recommendations.",
    image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg",
    tags: ["React", "TypeScript", "Firebase", "Charts.js"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Social Media Platform",
    description: "A community platform with real-time chat, content sharing, and personalized feeds.",
    image: "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Task Management Tool",
    description: "Collaborative task management with Kanban boards, timelines, and team assignments.",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
  },
]

const categories = ["All", "React", "Next.js", "TypeScript", "Firebase", "Node.js"]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeCategory))

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-blue-500 dark:text-yellow-400">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across various domains and technologies.
            Each project demonstrates my approach to solving problems and creating engaging user experiences.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + (index * 0.1), 
                ease: "easeOut" 
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="rounded-full">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-lg border-border">
      <div className="relative h-56 overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-primary/90 text-primary-foreground hover:bg-primary">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="outline" className="bg-muted">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          <Button variant="outline" size="sm" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github className="h-4 w-4" /> Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" /> Demo
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}