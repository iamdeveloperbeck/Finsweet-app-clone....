import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { VscClose } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Joinus from '../components/Joinus';
import image from '../constants/image';
import { navData } from '../constants/navData';

export const Donation = () => {
  const [ toggle, setToggle ] = useState(false);
  const [ navbar, setNavbar ] = useState(false);
  const [ hero, setHero ] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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

  const activeLink = "font-bold text-[#0b0106] text-[16px] leading-[19px]";
  const normalLink = "font-normal text-[#606470] text-[16px] leading-[19px] opacity-[0.7]";

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
        <div className={hero ? 'relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] bg-[#EFF7F2] margin-top sm:mb-0' : 'relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] bg-[#EFF7F2] sm:mb-0'}>
          <div className='main-container'>
            <div className='w-full flex items-start gap-[76px] lg:flex-col lg:gap-[40px]'>
              <div>
                <div className='flex items-center gap-[24px] sm:gap-[14px]'>
                  <div className="subheading-line"></div>
                  <div className="global-subheading">Donate</div>
                </div>
                <div className='flex items-start flex-col gap-[16px] ml-[96px] mt-[32px] lg:ml-0'>
                  <div className='text-[56px] flex-1 text-[#1d2130] leading-[67px] font-[700] md:text-[46px] md:leading-[57px]'>Making a donation for Nature.</div>
                  <div className='flex items-start flex-1 flex-col gap-[16px]'>
                    <p className='text-[16px] text-[#525560] opacity-[0.7] leading-[26px] font-[400]'>When you donate, you`re supporting effective solutions to big <br className='lg:hidden' /> environmental challenges—an investment in the future of our planet.</p>
                  </div>
                  <Link to='' className='global-btn thrid'>Donate now</Link>
                </div>
              </div>
              <div className='w-[480px] h-[384px] flex flex-col items-start lg:w-full lg:h-full'>
                <img src={image.donation} alt="donation" className='w-full h-full object-cover rounded-[12px]' />
              </div>
            </div>
          </div>
        </div>
        <div className='relative p-[96px_0_0px_0] md:p-[64px_0_0px_0]'>
          <div className="main-container">
            <div className='flex items-center gap-[96px] pb-[96px] border-b-[1px] border-[#e5e5e5] md:pb-[64px] lg:flex-col'>
              <div className='flex flex-1 flex-col items-start gap-[24px]'>
                <div className='text-[48px] text-[#1d2130] font-[700] leading-[58px] md:text-[38px] md:leading-[48px]'>How you can contribute to protect Earth</div>
                <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
              <div className='w-full flex flex-1 flex-col items-start gap-[24px] sm:items-center'>
                <div className='w-full flex items-start sm:items-center sm:justify-center'>
                  <div className={toggleState === 1 ? 'text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_18px] border-b-[1px] border-[#70C174] cursor-pointer' : 'text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_18px] cursor-pointer border-b-[1px] border-[#e5e5e5]'} onClick={() => toggleTab(1)}>Overview</div>
                  <div className={toggleState === 2 ? 'text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_18px] border-b-[1px] border-[#70C174] cursor-pointer' : 'text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_18px] cursor-pointer border-b-[1px] border-[#e5e5e5]'} onClick={() => toggleTab(2)}>Impact</div>
                  <div className={toggleState === 3 ? 'text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_18px] border-b-[1px] border-[#70C174] cursor-pointer' : 'text-[16px] text-[#1d2130] font-[500] leading-[26px] p-[6px_18px] cursor-pointer border-b-[1px] border-[#e5e5e5]'} onClick={() => toggleTab(3)}>What You get</div>
                </div>
                <div>
                  <div className={toggleState === 1 ? 'flex flex-col items-start gap-[24px]' : 'hidden flex-col items-start gap-[24px]'}>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  </div>
                  <div className={toggleState === 2 ? 'flex flex-col items-start gap-[24px]' : 'hidden flex-col items-start gap-[24px]'}>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                  </div>
                  <div className={toggleState === 3 ? 'flex flex-col items-start gap-[24px]' : 'hidden flex-col items-start gap-[24px]'}>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative p-[96px_0_0px_0] md:p-[64px_0_0px_0]'>
          <div className="main-container">
            <div className='flex items-start gap-[98px] lg:gap-[68px] md:flex-col'>
              <div className='flex-1 text-[48px] text-[#1d2130] font-[700] leading-[58px] md:text-[38px] md:leading-[48px]'>How we use your donation</div>
              <div className='flex-[2] flex items-start gap-[96px] lg:flex-col lg:flex-1 lg:gap-[40px]'>
                <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.</p>
                <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
              </div>
            </div>
          </div>
        </div>
        <Joinus className='mb-[96px]' />
        <Footer />
    </>
  );
};