import Filters from '@/screens/shop/widgets/Filters'
import Products from '@/screens/shop/widgets/Products'
import React from 'react'

const Shop = () => {
  return (
    <section className='flex mt-12 px-2'>
        <Filters/>
        <Products/>
    </section>
  )
}

export default Shop
