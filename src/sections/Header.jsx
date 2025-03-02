import React, { useEffect, useState } from 'react';
import { IoPerson } from 'react-icons/io5';
import { FaXmark, FaBars } from 'react-icons/fa6';
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'Summit', path: '/summit' },
    { link: 'Franchise', path: '/franchise' },
    { link: 'StartUp', path: '/startup' },
    { link: 'About Us', path: '/aboutus' },
  ];

  return (
    <>
      <nav className="fixed w-full bg-gray-100 flex justify-between items-center gap-1 lg:px-16 px-6 py-5 top-0 z-50">
        <img src={logo} alt="Logo" style={{ width: "200px" }} />
        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-Blue hover:text-white"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>

        <div id="header-icons" className="lg:flex hidden justify-center items-center gap-6 text-black">
          <Link to="/profile"><IoPerson className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-Blue" /></Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggleMenu}>
          {isMenuOpen ? <FaXmark className="text-Black text-3xl cursor-pointer" /> : <FaBars className="text-Black text-3xl cursor-pointer" />}
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-[#f3f4f6]  p-4 absolute top-[80px] left-0 z-50`} onClick={closeMenu}>
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                className="text-Black uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-Blue hover:text-black w-full text-center"
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
