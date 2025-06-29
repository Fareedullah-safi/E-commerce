import React from 'react'
import Card from '@/app/(Frontend)/pages/Card'
import HeroSection from '@/app/(Frontend)/pages/HeroSection'
import EndCard from '@/app/(Frontend)/pages/EndCard'
import GamingHeroSection from '@/app/(Frontend)/pages/GamingProducts'
<<<<<<< HEAD
import { Toaster } from 'react-hot-toast'

const page = () => {
  return (
    <main>
      <Toaster position='top-center' />
=======
const page = () => {
  return (
    <main>
>>>>>>> 7b728f6ff62b35013b076f83e30b67153cd125ef
      <HeroSection />
      <Card />
      <EndCard />
      <GamingHeroSection />
    </main>
  )
}

export default page;