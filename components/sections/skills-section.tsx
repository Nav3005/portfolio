"use client"

import { useRef } from 'react'
import { motion, useInView } from '@/lib/motion'
import { Progress } from '@/components/ui/progress'
import { Card } from '@/components/ui/card'
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  LineChart, 
  LayoutGrid 
} from 'lucide-react'

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "GraphQL", level: 75 },
  { name: "AWS", level: 70 },
]

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern JavaScript frameworks",
    icon: <Code className="h-8 w-8" />
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user experiences with a focus on usability",
    icon: <Palette className="h-8 w-8" />
  },
  {
    title: "Backend Integration",
    description: "Connecting frontend applications with powerful backend services and APIs",
    icon: <Database className="h-8 w-8" />
  },
  {
    title: "Performance Optimization",
    description: "Improving website speed and performance for better user experience and SEO",
    icon: <LineChart className="h-8 w-8" />
  },
  {
    title: "Responsive Web Design",
    description: "Ensuring websites look and function perfectly across all devices and screen sizes",
    icon: <LayoutGrid className="h-8 w-8" />
  },
  {
    title: "Internationalization",
    description: "Implementing multi-language support to reach global audiences",
    icon: <Globe className="h-8 w-8" />
  },
]

export default function SkillsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-blue-500 dark:text-yellow-400">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and the professional services I offer to clients.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress 
                    value={0} 
                    max={100}
                    className="h-2 rounded-full"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                    className="h-2 bg-primary rounded-full relative -mt-2"
                  />
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <h3 className="text-2xl font-semibold mb-4 sm:col-span-2">Education & Experience</h3>
            
            <Card className="p-6 border-border">
              <div className="text-sm text-muted-foreground mb-1">2019 - Present</div>
              <h4 className="text-lg font-medium mb-1">Senior Frontend Developer</h4>
              <p className="text-muted-foreground">Tech Innovations Inc.</p>
            </Card>
            
            <Card className="p-6 border-border">
              <div className="text-sm text-muted-foreground mb-1">2017 - 2019</div>
              <h4 className="text-lg font-medium mb-1">Web Developer</h4>
              <p className="text-muted-foreground">Digital Solutions Ltd.</p>
            </Card>
            
            <Card className="p-6 border-border">
              <div className="text-sm text-muted-foreground mb-1">2013 - 2017</div>
              <h4 className="text-lg font-medium mb-1">BS Computer Science</h4>
              <p className="text-muted-foreground">University of Technology</p>
            </Card>
            
            <Card className="p-6 border-border">
              <div className="text-sm text-muted-foreground mb-1">2020</div>
              <h4 className="text-lg font-medium mb-1">UX Design Certification</h4>
              <p className="text-muted-foreground">Design Academy</p>
            </Card>
          </motion.div>
        </div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          Services I Offer
        </motion.h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            >
              <Card className="p-6 h-full flex flex-col border-border hover:shadow-md transition-shadow">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  {service.icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}