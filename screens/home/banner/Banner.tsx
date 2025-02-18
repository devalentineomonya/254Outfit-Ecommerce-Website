import React from 'react'
import BannerCard from '../components/BannerCard'

const Banner = () => {
  return (
    <section className='my-14 w-full min-h-52 max-h-64 grid grid-cols-12 gap-5'>
        <BannerCard/>
        <BannerCard/>
    </section>
  )
}

export default Banner