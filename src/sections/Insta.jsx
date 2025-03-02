import React, { useEffect } from 'react'
import insta1 from '../assets/insta1.png'
import insta2 from '../assets/insta2.png'
import insta3 from '../assets/insta3.png'
import insta4 from '../assets/insta4.png'
import insta5 from '../assets/insta5.png'
import insta6 from '../assets/insta6.png'
import AOS from "aos";
import "aos/dist/aos.css";


const Insta = () => {
   useEffect(() => {
      AOS.init({
        offset : 100,
        duration : 500,
        easing : "ease-in-out"
      });
      AOS.refresh();
    }, [])

  return (
    <div className='w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-Blue text-xl font-semibold capitalize'>Our Instagram Shop</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black font-semibold text-5xl leading-[50px] text-center capitalize'>Follow On Instagram</h1>
      <div data-aos="zoom-in" data-aos-delay="300" className='w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-6 mt-8'>
        <img src={insta1} alt="" className='rounded-lg border-4 border-black-500'/>
        <img src={insta2} alt="" className='rounded-lg border-4 border-black-500'/> 
        <img src={insta3} alt="" className='rounded-lg border-4 border-black-500'/>
        <img src={insta4} alt="" className='rounded-lg border-4 border-black-500'/>
        <img src={insta5} alt="" className='rounded-lg border-4 border-black-500'/>
        <img src={insta6} alt="" className='rounded-lg border-4 border-black-500'/>
      </div>
      <button data-aos="zoom-in" data-aos-delay="400" className='bg-Blue hover:bg-Black text-white hover:text-White font-semibold px-8 py-3 rounded-lg mt-12 uppercase'>#ExpandingExpress</button>
    </div>
  )
}

export default Insta