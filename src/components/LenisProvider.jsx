import ReactLenis from 'lenis/react';
import React from 'react'

const LenisProvider = ({children}) => {

    const lenisOptions = {
    duration: 1.2, // Duration of the scroll animation (in seconds)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing function
    smoothWheel: true, // Enable smooth scrolling for mouse wheel
    smoothTouch: true, // Enable smooth scrolling for touch devices
    syncTouch: false, // Disables touch sync (can be unstable on iOS < 16)
    lerp: 0.1, // Linear interpolation intensity (between 0 and 1). Lower value = smoother.
    // Add more Lenis options here as needed:
    // orientation: 'vertical',
    // gestureOrientation: 'vertical',
    // wrapper: null, // Default to window
    // content: null, // Default to document.documentElement
  };


  return (
     <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  )
}

export default LenisProvider