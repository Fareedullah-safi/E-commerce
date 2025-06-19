import React from 'react'
import NavBar from './pages/NavBar'
import HeroSection from './pages/HeroSection'
import Card from './pages/Card'
import EndCard from './pages/EndCard'
import GamingHeroSection from './pages/GamingProducts'
import Footer from './pages/Footer'
const page = () => {
  return (
    <main>
      <HeroSection />
      <Card />
      <EndCard />
      <GamingHeroSection />
    </main>
  )
}

export default page;