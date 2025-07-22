import React from 'react'
import { Settings, ArrowRight, Edit3 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText)

const Hero = () => {

  useGSAP(() => {
    const textSplit1 = SplitText.create(".heading-1", {
      type: "chars"
    })
    const tl = gsap.timeline();

    tl.from(textSplit1.chars, {
      rotate: 70,
      scale: 7,
      x: "100vw",
      y: 500,
      opacity: 0,
      stagger: 0.05,
      ease: "power2.out",
      duration: 0.5 // Adjust duration as needed
    });
  })

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/3 w-96 h-96 border border-primary-red rounded-full transform rotate-12"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 border border-primary-red rounded-lg transform -rotate-12"></div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center px-6 lg:px-12 py-6 relative z-10">
        <div></div>
        <div className="flex items-center space-x-2 text-primary-white text-sm font-medium">
          <span>WE</span>
          <span className="text-primary-red">•</span>
          <span className="hidden md:block">ARE A GATEWAY TO SUCCESS</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 lg:px-12 py-12 lg:py-24 relative z-10 w-full">
        <div className="text-center w-[60%] min-w-[250px]">
          <h1 className="text-primary-white text-6xl sm:text-7xl md:text-8xl lg:text-[12vw] font-black leading-none mb-4 heading-1 font-tunnels-black">
            <div className='flex items-center justify-between md:gap-10'>
              <span>CREATIVE</span>
              <span className='text-primary-red'>WEB</span>
            </div>
            <div className="text-right w-full">
              STUDIO
            </div>
          </h1>
        </div>

        {/* Latest Project Section */}
        <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
          <div className="flex items-center space-x-4 mb-8 lg:mb-0">
            <span className="text-gray-light text-sm tracking-wider">LATEST PROJECT</span>
            <ArrowRight className="text-primary-red" size={20} />
            <span className="text-primary-white text-sm font-medium">SLING SHOT</span>
          </div>

          <div className="text-right max-w-md">
            <p className="text-gray-light text-sm leading-relaxed mb-4">
              WE SPECIALIZE IN CREATING MEANINGFUL DIGITAL EXPERIENCES INFUSED WITH EMOTION, DRIVEN BY INNOVATION, EVOKING A SENSE OF AWE AND WONDER.
            </p>
            <div className="flex items-center justify-end space-x-2">
              <span className="text-gray-light text-xs">( SCROLL )</span>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-20">
        <button className="w-14 h-14 bg-primary-red rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
          <Edit3 className="text-primary-white" size={20} />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary-red rounded-full opacity-60 hidden lg:block"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-red rounded-full opacity-40 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-red rounded-full opacity-50 hidden lg:block"></div>
    </div>
  )
}

export default Hero