import React from 'react'
import BannerCard from '../components/BannerCard'

const Banner = () => {
  return (
    <section className='my-14 w-full  grid md:grid-cols-2 gap-5'>
        <BannerCard/>
        <BannerCard/>
    </section>
  )
}

export default Banner
