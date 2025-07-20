import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import CardBox from './components/CardBox'
import CardGrid from './components/CardGrid'
import Footer from './components/Footer'
import ReactLenis from 'lenis/react'
import LenisProvider from './components/LenisProvider'
import Attitude from './components/Attitude'

const App = () => {

  return (<>
  <LenisProvider>
    <section>
      <Hero />
    </section>
    <section>
      <About />
    </section>
      <Attitude />
    <div>
      <CardGrid />
    </div>
    <footer>
      <Footer />
    </footer>
  </LenisProvider>
  </>
  )
}

export default App