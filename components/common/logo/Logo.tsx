import React from "react"
import Image from "next/image"
import LogoImage from "@/public/logo.png"
const Logo =()=>{
    return (
        <div className="font-bold text-xl flex items-center">
          <Image priority src={LogoImage} className="w-10 aspect-square" alt="Logo" />
          <span className="-ml-2">OutFit</span>
        </div>
    )
}

export default Logo
