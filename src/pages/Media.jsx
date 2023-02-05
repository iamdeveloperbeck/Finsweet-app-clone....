import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { VscClose } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';
import Events from '../components/Events';
import Footer from '../components/Footer';
import News from '../components/News';
import image from '../constants/image';
import { navData } from '../constants/navData';

export const Media = () => {
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

  return (
    <>
        <div className='relative w-full h-auto' id='hero'>
          <div className={navbar ? 'navbar active' : 'navbar second'}>
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
                <div className='w-[300px] h-auto bg-[#EFF7F2] p-[30px] rounded-[8px] shadow-lg shadow-[#ffffff27] sm:w-[100%] sm:rounded-none'>
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
        <div className={hero ? 'relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] mb-[96px] bg-[#EFF7F2] margin-top sm:mb-0' : 'relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] mb-[96px] bg-[#EFF7F2] sm:mb-0'}>
          <div className='main-container'>
            <div className='w-full flex items-start gap-[96px] lg:flex-col lg:gap-[40px]'>
              <div>
                <div className='flex items-center gap-[24px] sm:gap-[14px]'>
                  <div className="subheading-line"></div>
                  <div className="global-subheading">Top news</div>
                </div>
                <div className='flex items-start flex-col gap-[16px] ml-[96px] mt-[32px] lg:ml-0'>
                  <div className='text-[56px] flex-1 text-[#1d2130] leading-[67px] font-[700] md:text-[46px] md:leading-[57px]'>Our goal is to make water available for everyone</div>
                  <div className='flex items-start flex-1 flex-col gap-[16px]'>
                    <p className='text-[16px] text-[#1d2130] opacity-[0.7] leading-[26px] font-[400]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  </div>
                  <Link to='/about' className='global-btn thrid'>Read more</Link>
                </div>
              </div>
              <div className='w-full h-auto p-[24px] bg-[#fff] flex flex-col items-start gap-[24px] rounded-[12px]'>
                <div className='flex items-center gap-[24px] sm:flex-col'>
                  <img src={image.news1} alt="news" className='w-[192px] h-[160px] object-cover rounded-[8px]' />
                  <div className='flex flex-col items-start gap-[8px] sm:text-center'>
                    <div className='text-[20px] font-[700] leading-[30px] text-[#1d2130]'>Don't destroy greenery and don't spoil scenery.</div>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                  </div>
                </div>
                <div className='flex items-center gap-[24px] sm:flex-col'>
                  <img src={image.content1} alt="news" className='w-[192px] h-[160px] object-cover rounded-[8px]' />
                  <div className='flex flex-col items-start gap-[8px] sm:text-center'>
                    <div className='text-[20px] font-[700] leading-[30px] text-[#1d2130]'>Why saving wildlife is extremely important.</div>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                  </div>
                </div>
                <div className='flex items-center gap-[24px] sm:flex-col'>
                  <img src={image.content2} alt="news" className='w-[192px] h-[160px] object-cover rounded-[8px]' />
                  <div className='flex flex-col items-start gap-[8px] sm:text-center'>
                    <div className='text-[20px] font-[700] leading-[30px] text-[#1d2130]'>Caring for the present is caring for the future.</div>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <News />
        <Events />
        <Footer />
    </>
  );
};