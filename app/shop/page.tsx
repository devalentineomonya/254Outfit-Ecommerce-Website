import React from 'react'
import Filters from '@/screens/shop/widgets/Filters'
import Products from '@/screens/shop/widgets/Products'
import MobileFilter from '@/screens/shop/widgets/MobileFilter'

const Shop = () => {
  return (

 <section className='flex mt-12  px-2'>

        <Filters/>
        <Products/>
        <MobileFilter/>
    </section>
  )
}

export default Shop
