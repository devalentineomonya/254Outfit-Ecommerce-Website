import React from 'react'
import Hero from '@/features/home/hero/Hero'
import Collections from '@/features/home/collections/Collections'

const Home = () => {
  return (
    <main className='w-full h-fit p-2 lg:p-0'>
      <Hero/>
      <Collections/>
    </main>
  )
}

export default Home