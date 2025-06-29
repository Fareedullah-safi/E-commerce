import React from 'react'
import Card from '@/app/(Frontend)/pages/Card'
import HeroSection from '@/app/(Frontend)/pages/HeroSection'
import EndCard from '@/app/(Frontend)/pages/EndCard'
import GamingHeroSection from '@/app/(Frontend)/pages/GamingProducts'
import { Toaster } from 'react-hot-toast'

const page = () => {
  return (
    <main>
      <Toaster position='top-center' />
      <HeroSection />
      <Card />
      <EndCard />
      <GamingHeroSection />
    </main>
  )
}

export default page;