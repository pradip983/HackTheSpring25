import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaArrowUp , FaHeart } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.png"
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
        AOS.init({
          offset : 100,
          duration : 500,
          easing : "ease-in-out"
        });
        AOS.refresh();
      }, [])

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  };

  return (
    <div id='contact' className='w-full flex flex-col justify-center items-center'>
      <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[auto,auto] grid-cols-1 justify-between items-start lg:gap-3 gap-10'>
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-start gap-10 grow' >
          <div className='flex flex-col justify-center items-start gap-2'>
            <img src={logo} alt="Logo" style={{ width: "200px" }}/>
            <p className='text-Black text-justify'>Address : A-707 , Gift Tower-1 , Gift City , Gujarat.</p>
            <p className='text-Black text-justify'>Contact Number : +91 97979 79797</p>
            <div className='flex text-black text-justify gap-2 mt-2'>
              <a href="https://www.x.com" target='_blank' className='hover:text-Blue'><BsTwitterX  size='30px'/></a> 
              <a href="https://www.instagram.com" target='_blank' className='hover:text-Blue'><AiFillInstagram size='30px'/></a>
              <a href="https://www.facebook.com" target='_blank' className='hover:text-Blue'><FaFacebook size='30px'/></a>
              <a href="https://www.linkedin.com" target='_blank' className='hover:text-Blue'><FaLinkedin size='30px'/></a>
            </div>
            <div className='flex justify-center items-center gap-2 mt-2'>
              Made With<FaHeart style={{ color: 'red' }}/>In India
            </div>
            <div className='text-Black mt-3'>All Rights Reserved &copy; Expanding-Express</div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 className='text-Black text-xl font-semibold capitalize'>Useful Links</h1>
          <ul className='mt-8 flex flex-col justify-center items-center gap-2'>
            <li className='text-Black cursor-pointer hover:text-Blue'>Home</li>
            <li className='text-Black cursor-pointer hover:text-Blue'>Business</li>
            <li className='text-Black cursor-pointer hover:text-Blue'>Franchise</li>
            <li className='text-Black cursor-pointer hover:text-Blue'>Startup</li>
            <li className='text-Black cursor-pointer hover:text-Blue'>About Us</li>
            <li id='contact' className='text-Black cursor-pointer hover:text-Blue'>
              <Link to="banner" spy={true} offset={-100} smooth={true}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id='icon-box' className='bg-Blue text-white p-3 rounded-full hover:text-black cursor-pointer fixed lg:bottom-6 right-6' onClick={handleScroll}>
          <FaArrowUp className='w-[35px] h-[35px]'/>
      </div>
    </div>
  )
}

export default Footer