import React from 'react'
import Filters from '@/screens/shop/widgets/Filters'
import Products from '@/screens/shop/widgets/Products'

const Shop = () => {
  return (
    <section className='flex mt-12  px-2'>
        <Filters/>
        <Products/>
    </section>
  )
}

export default Shop
