import Image from 'next/image'
import React from 'react'
import articleimage from "@/public/products/image3.png"
const ArticleCard = () => {
  return (
<div className='p-3 bg-white'>
    <Image src={articleimage} alt="Article Image"/>
</div>
  )
}

export default ArticleCard
