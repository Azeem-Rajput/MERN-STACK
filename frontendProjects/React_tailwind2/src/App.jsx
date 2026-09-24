import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './section/HeroSection'
import About from './section/About'
import Stats from './section/Stats'
import Dishes from './section/Dishes'
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
    </>
  )
}

export default App
