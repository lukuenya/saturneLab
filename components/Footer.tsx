import React from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import Image component with SSR disabled to prevent hydration errors
const Image = dynamic(() => import('next/image'), { ssr: false })

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Replace with your logo - update the path to match your actual logo file */}
              <div className="relative w-16 h-16">
                <Image 
                  src="/images/saturne_lab_logo.png" 
                  alt="Saturne Lab Logo" 
                  width={64} 
                  height={64} 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-white">SATURNE LAB</span>
            </div>
            <p className="text-sm text-neutral-400">
              Empowering data-driven growth in Africa, particularly in the Democratic Republic of the Congo through 
              innovative analytics, strategic insights, and capacity building.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  Nous Lire Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-neutral-400">Data Collection</span>
              </li>
              <li>
                <span className="text-sm text-neutral-400">Strategic Insights</span>
              </li>
              <li>
                <span className="text-sm text-neutral-400">Capacity Building</span>
              </li>
              <li>
                <span className="text-sm text-neutral-400">Knowledge Sharing</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-neutral-400">
                  Kinshasa, Democratic Republic of Congo
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:contact@saturnelab.cd"
                  className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                >
                  contact@saturnelab.cd
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-neutral-400">
                  +243 XXX XXX XXX
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400">
              © {currentYear} Saturne Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
