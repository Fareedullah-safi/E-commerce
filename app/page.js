import React from 'react'
<<<<<<< HEAD
import NavBar from './pages/NavBar'
import HeroSection from './pages/HeroSection'
import Card from './pages/Card'
import EndCard from './pages/EndCard'
import GamingHeroSection from './pages/GamingProducts'
=======
import Card from '@/app/(Frontend)/pages/Card'
import HeroSection from '@/app/(Frontend)/pages/HeroSection'
import EndCard from '@/app/(Frontend)/pages/EndCard'
import GamingHeroSection from '@/app/(Frontend)/pages/GamingProducts'
>>>>>>> 7b728f6 (Initial commit)
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