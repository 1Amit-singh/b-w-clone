import React from 'react'
import { ArrowRight } from 'lucide-react';

const Footer = () => {
   const services = [
    'WEBSITE DESIGN',
    'MOTION DESIGN',
    'FRONT-END DEVELOPMENT',
    'BACK-END DEVELOPMENT',
    'SHOPIFY DEVELOPMENT',
    'WEBSITE SUPPORT',
    'PAID SEARCH ADVERTISING',
    'SOCIAL MEDIA ADVERTISING',
    'EMAIL MARKETING',
    'SEO'
  ];

  const socialLinks = [
    'Linkedin',
    'Instagram',
    'Twitter',
    'Behance',
    'Dribbble'
  ];

  return (
    <footer className="bg-primary py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Fixed Logo - Top Left */}
      <div className="fixed top-6 left-6 lg:left-12 z-50">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
            <span className="text-primary-white font-bold text-xl">b</span>
          </div>
          <span className="text-primary-white text-sm font-medium tracking-wider hidden md:block">
            BUZZWORTHY STUDIO
          </span>
        </div>
      </div>

      {/* Fixed Settings Icon - Top Right */}
      <div className="fixed top-6 right-6 lg:right-12 z-50">
        <div className="text-primary-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="2"/>
            <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
            <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary-white leading-none">
            LET'S TALK
            <span className="inline-block w-4 h-4 bg-primary-red rounded-full ml-4 mb-8"></span>
          </h1>
        </div>

        {/* Decorative Line */}
        <div className="relative mb-16 lg:mb-20">
          <div className="h-px bg-gray-light/30 w-full"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border border-gray-light/50 rounded-full bg-primary"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border border-gray-light/50 rounded-full bg-primary"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 lg:mb-20">
          
          {/* Studio Section */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-white mb-8 leading-tight">
              STUDIO
              <span className="inline-block w-3 h-3 bg-primary-red rounded-full ml-3 mb-2"></span>
            </h2>
            <div className="text-gray-light text-sm leading-relaxed space-y-1">
              <p>81 PROSPECT ST, SUITE 9069,</p>
              <p>BROOKLYN, NY 11201</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <div className="text-right mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-white leading-tight">
                SERVICES
                <span className="inline-block w-3 h-3 bg-primary-red rounded-full ml-3 mb-2"></span>
              </h2>
            </div>
            
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-gray-light text-sm font-medium tracking-wide hover:text-primary-white transition-colors duration-300 cursor-pointer">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Empty column for spacing on desktop */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Work Section */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary-white leading-none text-center">
            WORK
            <span className="inline-block w-4 h-4 bg-primary-red rounded-full ml-4 mb-8"></span>
          </h2>
        </div>

        {/* Decorative Line */}
        <div className="relative mb-12 lg:mb-16">
          <div className="h-px bg-gray-light/30 w-full"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border border-gray-light/50 rounded-full bg-primary"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border border-gray-light/50 rounded-full bg-primary"></div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-end">
          
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-gray-light text-xs tracking-wider font-medium">NEWSLETTER</span>
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-transparent border-b border-gray-light/30 pb-3 text-gray-light placeholder-gray-light/60 focus:outline-none focus:border-primary-red transition-colors duration-300"
              />
              <button className="absolute right-0 bottom-3 text-gray-light hover:text-primary-red transition-colors duration-300">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <p className="text-gray-light text-sm">©2025 Buzzworthy Studio</p>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-light text-sm hover:text-primary-white transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/3 w-96 h-96 border border-primary-red rounded-full transform rotate-45"></div>
        <div className="absolute right-1/4 bottom-1/3 w-64 h-64 border border-primary-red rounded-lg transform -rotate-12"></div>
      </div>
    </footer>
  );
}

export default Footer