import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from '../constants/image';
import { navData } from '../constants/navData';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { VscClose } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false);
  const [ navbar, setNavbar ] = useState(false);

  const changePosition = () => {
    if(window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changePosition);

  const activeLink = "font-[600] text-[#0b0106] text-[16px] leading-[19px]";
  const normalLink = "font-[600] text-[#0b0106] text-[16px] leading-[19px] opacity-[0.5] hover:opacity-[1]";

  return (
    <div className='relative w-full h-auto' id='hero'>
      <div className={navbar ? 'navbar active' : 'navbar'}>
        <div className="w-[100%] max-w-[1280px] m-[0_auto] p-[0_20px] flex items-center justify-between">
            <Link to='/' className='flex items-center gap-[6px]'>
              <img src={image.logo} alt="logo" className='h-[28px] object-cover sm:w-[90px] sm:h-auto' />
            </Link>
            <div className='flex items-center gap-[40px]'>
              <nav className='flex items-center gap-[40px] lg:hidden'>
                {navData.map((items, index) => {
                  return (
                    <li key={index} className='list-none'>
                      <NavLink to={items.url} className={({ isActive }) => (isActive ? activeLink : normalLink)}>{items.title}</NavLink>
                    </li>
                  )
                })}
              </nav>
              <div className='flex items-center gap-[15px]'>
                <Link to="/donation" className='md:hidden'>
                  <button className='global-btn'>Donate</button>
                </Link>
                <div className='lg:block hidden cursor-pointer'>
                  {toggle ? <VscClose fontSize={28} onClick={() => setToggle(false)} /> : <HiOutlineMenuAlt1 fontSize={28} onClick={() => setToggle(true)} />}
                </div>
              </div>
            </div>
        </div>
        {toggle && (
          <motion.div initial={{ y: '80px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='mobile-menu'>
            <div className='menu-wrap'>
              <div className='flex flex-col items-end gap-[10px] sm:items-start'>
                {navData.map((items, index) => {
                  return (
                    <li key={index} className='list-none'>
                      <NavLink to={items.url} className={({ isActive }) => (isActive ? `${activeLink} text-[20px] leading-[24px]` : `${normalLink} text-[20px] leading-[24px]`)}>{items.title}</NavLink>
                    </li>
                  )
                })}
                <Link to="/donation" className='md:block lg:hidden'>
                  <button className='global-btn'>Donate</button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;