import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <p className="text-muted-foreground max-w-xs">
              Crafting beautiful digital experiences with a focus on user-centered design and performance.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="mailto:contact@example.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}