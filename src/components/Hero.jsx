import React, { Suspense } from 'react'
import { Settings, ArrowRight, Edit3 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Mashroom from './Mashroom';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, OrbitControls } from '@react-three/drei';

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
      <div className="flex flex-col items-center justify-center px-6 relative z-10 w-full">
        <div className="text-center w-[80%] min-w-[250px]">
          <div className="text-primary-white text-6xl sm:text-7xl md:text-8xl lg:text-[12vw] xl:text-[14vw] font-black leading-none mb-1 heading-1 font-tunnels-black">
            <div className='flex items-center justify-between md:gap-10'>
              <span>CREATIVE</span>
              <span className='text-primary-red'>WEB</span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-4 text-right w-full -mt-6">
            <div className='w-full md:h-[500px] h-[280px]'>
              <Canvas className="w-full h-full">
                <Suspense fallback={null}>
                  <Float speed={1.5} rotationIntensity={1} >
                    <Mashroom scale={window.innerWidth > 1440 ? 1.1 : 1} />
                  </Float>
                  <Environment preset="lobby" />
                  <OrbitControls enableZoom={false} />
                </Suspense>
              </Canvas>
              </div>
              <div>
              <span className='text-nowrap text-primary-white text-6xl sm:text-7xl md:text-8xl lg:text-[12vw] xl:text-[14vw] font-black leading-none mb-4 heading-1 font-tunnels-black'>STUDIO</span>
  {/* Latest Project Section */}
        <div className="mt-16 lg:mt-24 flex flex-col w-full">
          <div className="flex items-center justify-between space-x-4 mb-8 lg:mb-0 border-[1px] rounded-2xl border-white/30 px-6 py-4">
            <span className="text-gray-light text-sm tracking-wider">LATEST PROJECT</span>
            <ArrowRight className="text-primary-red" size={20} />
            <span className="text-primary-white text-sm font-medium">SLING SHOT</span>
          </div>

          <div className="flex justify-between items-center md:flex-row flex-col-reverse text-right max-w-md mt-10">
            <div className="">
              <span className="text-gray-light text-xs text-nowrap">[ SCROLL ]</span>
            </div>
            <p className="text-gray-light text-sm leading-relaxed mb-4">
              WE SPECIALIZE IN CREATING MEANINGFUL DIGITAL EXPERIENCES INFUSED WITH EMOTION, DRIVEN BY INNOVATION, EVOKING A SENSE OF AWE AND WONDER.
            </p>
          </div>
        </div>
              </div>
            </div>
        </div>


      
      </div>

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