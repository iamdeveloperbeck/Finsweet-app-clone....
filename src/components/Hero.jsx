import React, { useState } from 'react';
import { Link } from 'react-scroll';
import image from '../constants/image';
import Navbar from './Navbar';
import { BsPlayCircleFill } from 'react-icons/bs';
import { BiUpArrow } from 'react-icons/bi';
import ModalVideo from 'react-modal-video';
import './hero.scss';
import Knowabout from './Knowabout';
import Whatwedo2 from './Whatwedo2';
import Projects from './Projects';
import Chart from './Chart';
import { motion } from 'framer-motion';
import Joinus from './Joinus';
import Footer from './Footer';
import News from './News';
import Events from './Events';

const Hero = () => {
  const [ hero, setHero ] = useState(false);
  const [ show, setShow ] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const marginTop = () => {
    if(window.scrollY >= 20) {
      setHero(true);
    } else {
      setHero(false);
    }
  }

  window.addEventListener('scroll', marginTop);

  const scrollTop = () => {
    if(window.scrollY >= 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  window.addEventListener('scroll', scrollTop);

  return (
    <>
        <Navbar />
        <div className={hero ? 'hero active' : 'hero'} id='hero'>
          <img src={image.hero} alt="hero" className='absolute top-0 left-0 w-full h-full object-cover object-bottom z-[-2]' />
          <div className='main-container centered'>
            <h1 className='w-[640px] font-[700] text-[64px] leading-[77px] text-[#fff] lg:text-[54px] lg:leading-[58px] md:text-[44px] md:leading-[52px] md:w-full md:text-center sm:text-[32px] sm:leading-[38px]'>
              Save the environment today for a better tomorrow
            </h1>
            <div className='flex items-center gap-[20px] mt-[40px] sm:flex-col'>
              <Link to="whatwedo" spy={true} smooth={true} offset={-70} duration={200} className='global-btn second'>What We Do</Link>
              <div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="BSm7c7zMg8c" onClose={() => setOpen(false)} />
                <div className='flex gap-[8px] text-[#fff] cursor-pointer p-[14px] rounded-[4px] hover:bg-[#7c7c7c] sm:p-[14px_22px]' onClick={()=> setOpen(true)}>
                  <BsPlayCircleFill fontSize={24} color="#fff" />
                  Play Video
              </div>
            </div>
            </div>
            <div className='w-full h-[160px] sm:h-[100px]'></div>
            <div className='w-full flex items-center justify-between pb-[-50px] gap-[24px] md:flex-col md:gap-[14px]'>
              <div className='text-[18px] text-[#fff] font-[500] leading-[21px]'>23,000 trees planted</div>
              <div className='w-full flex-1 h-auto border-[1px] border-[#e5e5e5] backdrop-blur-[15px] md:hidden'></div>
              <div className='text-[18px] text-[#fff] font-[500] leading-[21px]'>5840 donations collected</div>
            </div>
          </div>
        </div>
        <div className={show ? 'scroll show' : 'scroll'}>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={100}><BiUpArrow fontSize={22} color='#fff' /></Link>
        </div>
        <Knowabout />
        <Whatwedo2 />
        <Projects />
        <Chart />
        <Joinus />
        <News />
        <Events />
        <Footer />
    </>
  );
};

export default Hero;