import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../constants/image';
import { MdPlayArrow} from 'react-icons/md';
import ModalVideo from 'react-modal-video';
import './hero.scss';

const Knowabout = () => {

  const [isOpen, setOpen] = useState(false);

  return (
    <div className='relative p-[96px_0_64px_0] md:p-[64px_0_64px_0]'>
      <div className='main-container'>
        <div className='grid grid-cols-[1.5fr_1fr] grid-rows-[1fr] auto-cols-auto items-center gap-[96px] lg:grid-cols-[1fr] lg:gap-[40px]'>
          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-[24px] sm:gap-[14px]'>
              <div className="subheading-line"></div>
              <div className="global-subheading">Know about us</div>
            </div>
            <div className='flex flex-col items-start gap-[24px] mt-[32px] ml-[96px] lg:ml-0'>
              <div className='global-heading'>We help nature smile and survive everywhere</div>
              <div className='global-subtitle'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nostrum cupiditate quia similique corrupti voluptas.
                  <br />
                  <br />
                  Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </div>
              <Link to='/about' className='global-btn thrid'>Learn More</Link>
            </div>
          </div>
          <div className='relative w-full h-auto flex flex-col items-start'>
            <img src={image.about} alt="about" className='relative w-full h-full object-cover' />
            <div className='absolute top-0 z-10 w-full h-full flex justify-center items-center'>
              <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="BSm7c7zMg8c" onClose={() => setOpen(false)} />
              <div className='w-[64px] h-[64px] rounded-[100%] bg-[#fff] flex items-center justify-center cursor-pointer' onClick={()=> setOpen(true)}>
                <MdPlayArrow fontSize={40} color="#1D2130" />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-start mt-[64px]'>
          <div className='w-full flex items-center gap-[24px]'>
            <div className='global-subheading'>Our supporters</div>
            <div className='w-full h-[auto] flex-1 border-[1px] border-[#e5e5e5]'></div>
          </div>
          <div className='w-full flex items-center justify-between gap-[86px] mt-[33px] lg:flex-wrap lg:gap-[40px] lg:justify-start'>
            <img src={image.logo1} alt="logo" />
            <img src={image.logo2} alt="logo" />
            <img src={image.logo3} alt="logo" />
            <img src={image.logo4} alt="logo" />
            <img src={image.logo5} alt="logo" />
            <img src={image.logo6} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowabout;