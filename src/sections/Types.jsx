import React, { useEffect } from 'react'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import type1 from '../assets/type1.jpg';
import type2 from '../assets/type2.jpg';
import type3 from '../assets/type3.jpg';

const Types = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out"
    });
    AOS.refresh();
  }, [])

  return (
    <div className='w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10'>
      <div data-aos="zoom-in" data-aos-delay="100" className='lg:h-[250px] h-[200px] flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{ backgroundImage: `url(${type1})` }}>

      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className='lg:h-[250px] h-[200px] flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{ backgroundImage: `url(${type2})` }}>

      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className='lg:h-[250px] h-[200px] flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{ backgroundImage: `url(${type3})` }}>

      </div>
    </div>
  )
}

export default Types