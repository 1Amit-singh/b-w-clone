import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Edit3 } from 'lucide-react'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(() => {
    const textSplit1 = SplitText.create(".line-1", {
      type: "words, lines",
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
        yoyo: true,
        scrub: 1,
      }
    });
    tl.from(textSplit1.lines, {
      y: 200,
      stagger: 0.05,
      opacity: 0,
      duration: 0.2
    });
  })

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden about">
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
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Fixed Edit Button - Bottom Right */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-primary-red rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
          <Edit3 className="text-primary-white" size={20} />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen px-6 lg:px-12 py-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Side - About Label and Description */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-red rounded-full"></div>
              <span className="text-gray-light text-sm tracking-wider font-medium">ABOUT</span>
            </div>

            <div className="space-y-6">
              <p className="text-primary-white text-lg leading-relaxed">
                WITH A DECADE OF EXPERIENCE UNDER OUR BELTS, BUZZWORTHY HAS BECOME A WORLD - RENOWNED STUDIO
              </p>
            </div>
          </div>

          {/* Right Side - Main Heading */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-semibold leading-tight text-primary-white line-1">
              DELIVERING INNOVATIVE DESIGN AND DEVELOPMENT WITH IMPACTFUL DIGITAL MARKETING CAMPAIGNS THAT CATAPULT BRANDS FORWARD.
            </h1>
          </div>
        </div>
      </main>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/3 top-1/4 w-96 h-96 border border-primary-red rounded-full transform rotate-45"></div>
        <div className="absolute right-1/4 bottom-1/3 w-64 h-64 border border-primary-red rounded-lg transform -rotate-12"></div>
      </div>

      {/* Subtle geometric patterns */}
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary-red rounded-full opacity-60 hidden lg:block"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-red rounded-full opacity-40 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-red rounded-full opacity-50 hidden lg:block"></div>
    </div>
  )
}

export default About