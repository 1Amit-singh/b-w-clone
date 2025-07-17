import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import CardBox from './components/CardBox'
import CardGrid from './components/CardGrid'
import Footer from './components/Footer'

const App = () => {

  return (<div>
    <section>
      <Hero />
    </section>
    <section>
      <About />
    </section>
    <div>
      <CardGrid />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}

export default App