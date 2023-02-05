import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { VscClose } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import image from '../constants/image';
import { navData } from '../constants/navData';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

export const Contact = () => {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [ toggle, setToggle ] = useState(false);
  const [ navbar, setNavbar ] = useState(false);
  const [ hero, setHero ] = useState(false);

  const changePosition = () => {
    if(window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changePosition);

  const marginTop = () => {
    if(window.scrollY >= 20) {
      setHero(true);
    } else {
      setHero(false);
    }
  }

  window.addEventListener('scroll', marginTop);

  const activeLink = "font-[600] text-[#0b0106] text-[16px] leading-[19px]";
  const normalLink = "font-[600] text-[#0b0106] text-[16px] leading-[19px] opacity-[0.5] hover:opacity-[1]";

  if (!isLoaded) {
    return <div className='absolute top-0 left-0 w-full h-screen bg-[#333] flex items-center justify-center text-[38px] text-[#fff]'>Loading...</div>
  }

  return (
    <>
        <div className='relative w-full h-auto' id='hero'>
          <div className={navbar ? 'navbar active' : 'navbar third'}>
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
              <motion.div initial={{ y: '80px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='absolute top-[100px] right-[20px] w-full shadow-bottom flex items-end justify-end z-50 sm:right-auto sm:top-[70px] sm:left-0'>
                <div className='w-[300px] h-auto bg-[#EBF0F9] p-[30px] rounded-[8px] shadow-lg shadow-[#ffffff27] sm:w-[100%] sm:rounded-none'>
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
        <div className={hero ? 'relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] bg-[#EBF0F9] margin-top sm:mb-0' : 'relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] bg-[#EBF0F9] sm:mb-0'}>
          <div className='main-container'>
            <div className='w-full flex items-start gap-[96px] lg:flex-col lg:gap-[40px]'>
              <div className='flex-1'>
                <div className='flex items-center gap-[24px] sm:gap-[14px]'>
                  <div className="subheading-line"></div>
                  <div className="global-subheading">Contact us</div>
                </div>
                <div className='flex items-start flex-col gap-[16px] ml-[96px] mt-[32px] lg:ml-0'>
                  <div className='text-[56px] flex-1 text-[#1d2130] leading-[67px] font-[700] md:text-[46px] md:leading-[57px]'>We`d love to hear from you</div>
                  <div className='flex items-start flex-1 flex-col gap-[16px]'>
                    <p className='text-[16px] text-[#1d2130] opacity-[0.7] leading-[26px] font-[400]'>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
                  </div>
                </div>
              </div>
              <div className='w-full h-auto flex flex-1 flex-col items-start gap-[32px]'>
                <div className='flex flex-col items-start gap-[10px] pb-[16px] border-b-[1px] border-[#e5e5e5]'>
                  <div className='text-[24px] font-[700] leading-[38px] text-[#1d2130]'>Let's talk!</div>
                  <div className='flex items-center gap-[32px]'>
                    <p className='text-[16px] text-[#1d2130] font-[400] leading-[28px]'>+1 23 456 789</p>
                    <p className='text-[16px] text-[#1d2130] font-[400] leading-[28px]'>hello@finsweet.com</p>
                  </div>
                </div>
                <div className='flex flex-col items-start gap-[8px]'>
                  <div className='text-[20px] font-[700] leading-[32px] text-[#1d2130]'>Headoffice</div>
                  <div className='flex items-center gap-[32px]'>
                    <p className='text-[16px] text-[#1d2130] font-[400] leading-[28px]'>8 Brewery Drive, Hudson, NH 03051 <br className='lg:hidden' /> USA</p>
                  </div>
                </div>
                <div className='flex flex-col items-start gap-[8px]'>
                  <div className='text-[20px] font-[700] leading-[32px] text-[#1d2130]'>Branch Office</div>
                  <div className='flex items-center gap-[32px]'>
                    <p className='text-[16px] text-[#1d2130] font-[400] leading-[28px]'>178 Marconi St., Venice, 34293 <br className='lg:hidden' /> Italy</p>
                  </div>
                </div>
                <div className='flex items-center gap-[20px]'>
                  <a href="#">
                    <BsFacebook fontSize={20} color="#1d2130" />
                  </a>
                  <a href="#">
                    <BsTwitter fontSize={20} color="#1d2130" />
                  </a>
                  <a href="#">
                    <FaLinkedin fontSize={20} color="#1d2130" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative p-[96px_0_96px_0] md:p-[64px_0_64px_0]'>
          <div className="main-container">
            <div className='w-full max-w-[768px] m-[0_auto] flex flex-col items-start'>
              <div className='w-full flex flex-col items-center gap-[32px] mt-[32px] md:gap-[22px] md:mt-[26px]'>
                  <form className='w-full flex items-center gap-[32px] md:flex-col md:gap-[22px]'>
                      <div className='w-full flex flex-col items-start gap-[8px]'>
                          <label className='text-[12px] font-[700] leading-[19px] text-[#1d2130] opacity-[0.6]'>First Name</label>
                          <input type="text" className='w-full border-b-[1px] border-[#e5e5e5] outline-none p-[4px_0_4px_0] hover:border-[#1d2130]' required />
                      </div>
                      <div className='w-full flex flex-col items-start gap-[8px]'>
                          <label className='text-[12px] font-[700] leading-[19px] text-[#1d2130] opacity-[0.6]'>Last Name</label>
                          <input type="text" className='w-full border-b-[1px] border-[#e5e5e5] outline-none p-[4px_0_4px_0] hover:border-[#1d2130]' required />
                      </div>
                  </form>
                  <form className='w-full flex items-center gap-[32px] md:flex-col md:gap-[22px]'>
                    <div className='w-full flex flex-col items-start gap-[8px]'>
                      <label className='text-[12px] font-[700] leading-[19px] text-[#1d2130] opacity-[0.6]'>Email Id</label>
                      <input type="text" className='w-full border-b-[1px] border-[#e5e5e5] outline-none p-[4px_0_4px_0] hover:border-[#1d2130]' required />
                    </div>
                    <div className='w-full flex flex-col items-start gap-[8px]'>
                      <label className='text-[12px] font-[700] leading-[19px] text-[#1d2130] opacity-[0.6]'>Subject</label>
                      <input type="text" className='w-full border-b-[1px] border-[#e5e5e5] outline-none p-[4px_0_4px_0] hover:border-[#1d2130]' required />
                    </div>
                  </form>
                  <form className='w-full flex items-start flex-col gap-[8px]'>
                      <label className='text-[12px] font-[700] leading-[19px] text-[#1d2130] opacity-[0.6]'>Message</label>
                      <textarea placeholder='Type your Messege' className='w-full h-[156px] border border-[#e5e5e5] p-[20px] rounded-[4px] resize-none outline-none hover:border-[#1d2130] md:p-[15px] md:h-[136px]'></textarea>
                  </form>
                  <input type="submit" value="Send message" className='global-btn thrid cursor-pointer' required />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[448px] overflow-hidden'>
          <GoogleMap center={{ lat: 38.274936, lng: 67.896259 }} zoom={10} mapContainerClassName='map-container'>
            <Marker position={{ lat: 38.274936, lng: 67.896259 }} />
          </GoogleMap>
        </div>
        <Footer />
    </>
  )
}



