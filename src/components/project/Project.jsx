import React from 'react'
import Cards from './Cards'
import Footer from './Footer'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Project = () => {
  useGSAP(()=>{
    gsap.from(".top",{
      y:-80,
      opacity:0,
      ease:"power3.out",
      duration:0.7,
      stagger:0.4
    })
  })
  return (
    <div>
        <h2 className='top font-[Font2] text-[190px] uppercase mt-80 -mb-20'>Projects<sup className='text-3xl'>16</sup></h2>
        <div className='top flex flex-col gap-15'>
            <Cards />
             <Footer />
        </div>
       
    </div>
  )
}

export default Project