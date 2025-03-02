import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider3 from "../assets/Slider3.png"
import Slider1 from "../assets/Slider1.png"
import Slider2 from "../assets/Slider2.png"
import AOS from "aos";
import "aos/dist/aos.css";


const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL : false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      offset : 100,
      duration : 500,
      easing : "ease-in-out"
    });
    AOS.refresh();
  }, [])

  return (
    <div id="hero" className='w-full flex justify-center mt-20 items-center lg:h-[600px] h-[500px]'>
      <Slider className='w-full' {...settings}>
        <div>
          <div className='w-full lg:px-20 px-5 lg:h-[600px] h-[500px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${Slider1})`}}>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get Upto 80% Off</h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>DSLR 360<br />Camera</h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white twxt-2xl'>100% Trusted <span className='text-themeyellow font-semibold'>Electronics Gadgets</span></h1>
            <button data-aos="zoom-in" data-aos-delay="100" className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>ONLNE COLLECTION</button> */}
          </div>
        </div>

        <div>
          <div className='w-full lg:px-20 px-5 lg:h-[600px] h-[500px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${Slider2})`}}>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get Upto 80% Off</h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>Wireless<br />Earbuds</h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white twxt-2xl'>100% Trusted <span className='text-themeyellow font-semibold'>Electronics Gadgets</span></h1>
            <button data-aos="zoom-in" data-aos-delay="100" className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>ONLNE COLLECTION</button> */}
          </div>
        </div>

        <div>
          <div className='w-full lg:px-20 px-5 lg:h-[600px] h-[500px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${Slider3})`}}>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get Upto 80% Off</h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>Headset<br /></h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white twxt-2xl'>100% Trusted <span className='text-themeyellow font-semibold'>Electronics Gadgets</span></h1>
            <button data-aos="zoom-in" data-aos-delay="100" className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>ONLNE COLLECTION</button> */}
          </div>
        </div>

      </Slider>
    </div>
  ) 
}

export default Hero