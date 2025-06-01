"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from '@/lib/motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:rknaveenkarthik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Naveen,\n\nI am ${name}.\n\n${message}\n\nBest regards,\n${name}\n${email}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section 
      id="contact" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-blue-500 dark:text-yellow-400">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. 
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 space-y-6"
          >
            <Card className="p-6 border-border">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 7397315409</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-border">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">rknaveenkarthik@gmail.com</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-border">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">Chennai, TN, India</p>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="p-6 md:p-8 border-border">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-input"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Project Inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-input min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto rounded-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}