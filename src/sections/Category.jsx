import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Category1 from "../assets/Category1.png"
import Category2 from "../assets/Category2.png"
import Category3 from "../assets/Category3.png"
import Category4 from "../assets/Category4.png"
import AOS from "aos";
import "aos/dist/aos.css";


const Category = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out"
    });
    AOS.refresh();
  }, [])

  return (
    <div id='category' className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20'>
      <div data-aos="zoom-in" data-aos-delay="50" className='lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]'>
        <h1 className='text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center'>Popular Category</h1>
      </div>
      <div className='lg:w-[85%] w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-20'>
        <Link to="/summit"> <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6'>
          <img src="\Category2.png" alt="" className='rounded-full h-[35vh] lg:h-full cursor-pointer' />
          <h1 className='text-black text-3xl font-semibold hover:text-Blue cursor-pointer'>Summit</h1>
        </div>
        </Link>
        <Link to="/franchise"> <div data-aos="zoom-in" data-aos-delay="300" className='flex flex-col justify-center items-center gap-6'>
          <img src={Category3} alt="" className='rounded-full h-[35vh] lg:h-full cursor-pointer' />
          <h1 className='text-black text-3xl font-semibold hover:text-Blue cursor-pointer'>Franchise</h1>
        </div>
        </Link>
        <Link to="/startup"> <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-center gap-6'>
          <img src={Category4} alt="" className='rounded-full h-[35vh] lg:h-full cursor-pointer' />
          <h1 className='text-black text-3xl font-semibold hover:text-Blue cursor-pointer'>StartUp</h1>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Category
