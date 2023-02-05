import React from 'react';
import { Link } from 'react-router-dom';
import image from '../constants/image';

const Projects = () => {
  return (
    <div className='relative p-[96px_0_96px_0] md:p-[64px_0_64px_0]'>
      <div className="main-container">
        <div className='flex flex-col'>
            <div className='flex items-center gap-[24px] sm:gap-[14px]'>
              <div className="subheading-line"></div>
              <div className="global-subheading">Projects we have done</div>
            </div>
            <div className='flex flex-col items-start gap-[24px] mt-[32px] ml-[96px] mb-[65px] lg:ml-0'>
              <div className='global-heading'>We are Creating sustainable society, for everyone and forever.</div>
            </div>
            <div className='grid grid-cols-[1fr_1fr_1fr] place-items-center grid-rows-[1fr] auto-cols-auto items-center gap-[24px] lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr]'>
              <div className='relative w-full h-[421px] overflow-hidden rounded-[12px] md:w-full sm:h-[380px]'>
                <img src={image.project1} alt="project" className='relative w-full h-full object-cover' />
                <div className='w-full h-full absolute top-0 left-0 bg-[#0B0706] opacity-[0.5] rounded-[12px] overflow-hidden'></div>
                <div className='absolute top-0 left-0 z-10 w-full h-full p-[80px_48px_48px_48px] flex flex-col items-start justify-between sm:p-[48px]'>
                  <div>
                    <div className='text-[28px] font-[700] leading-[42px] text-[#fff] mb-[16px]'>Mission 40K: Tree <br className='sm:hidden' /> plantation</div>
                    <div className='global-subtitle second'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                  </div>
                  <Link to='/projects' className='global-btn second'>See more</Link>
                </div>
              </div>
              <div className='relative w-full h-[421px] overflow-hidden rounded-[12px] md:w-full sm:h-[380px]'>
                <img src={image.project2} alt="project" className='relative w-full h-full object-cover' />
                <div className='w-full h-full absolute top-0 left-0 bg-[#0B0706] opacity-[0.5] rounded-[12px] overflow-hidden'></div>
                <div className='absolute top-0 left-0 z-10 w-full h-full p-[80px_48px_48px_48px] flex flex-col items-start justify-between sm:p-[48px]'>
                  <div>
                    <div className='text-[28px] font-[700] leading-[42px] text-[#fff] mb-[16px]'>Weekly cleanliness <br className='sm:hidden' /> program in city</div>
                    <div className='global-subtitle second'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                  </div>
                  <Link to='/projects' className='global-btn second'>See more</Link>
                </div>
              </div>
              <div className='relative w-full h-[421px] overflow-hidden rounded-[12px] md:w-full sm:h-[380px]'>
                <img src={image.project3} alt="project" className='relative w-full h-full object-cover' />
                <div className='w-full h-full absolute top-0 left-0 bg-[#0B0706] opacity-[0.5] rounded-[12px] overflow-hidden'></div>
                <div className='absolute top-0 left-0 z-10 w-full h-full p-[80px_48px_48px_48px] flex flex-col items-start justify-between sm:p-[48px]'>
                  <div>
                    <div className='text-[28px] font-[700] leading-[42px] text-[#fff] mb-[16px]'>Wildlife safety program <br className='sm:hidden' /> 2021</div>
                    <div className='global-subtitle second'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                  </div>
                  <Link to='/projects' hrefLang='#' className='global-btn second'>See more</Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Projects;