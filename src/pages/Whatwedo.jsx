import React, { useState } from 'react'
import Footer from '../components/Footer';
import Joinus from '../components/Joinus';
import Navbar from '../components/Navbar';
import News from '../components/News';
import Events from '../components/Events';
import { Link } from 'react-router-dom';
import image from '../constants/image';
import { BiUpArrow } from 'react-icons/bi';
import { BsBuilding } from 'react-icons/bs';
import { MdWaves } from 'react-icons/md';
import { FaDog, FaHandHoldingWater, FaLeaf } from 'react-icons/fa';
import { IoIosWater } from 'react-icons/io';

export const Whatwedo = () => {
  const [ hero, setHero ] = useState(false);
  const [ show, setShow ] = useState(false);

  const marginTop = () => {
    if(window.scrollY >= 20) {
      setHero(true);
    } else {
      setHero(false);
    }
  }

  window.addEventListener('scroll', marginTop);

  const scrollTop = () => {
    if(window.scrollY >= 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  window.addEventListener('scroll', scrollTop);

  return (
    <>
        <Navbar />
        <div className={hero ? 'p-[96px_0_96px_0] md:p-[64px_0_64px_0] margin-top' : 'p-[96px_0_96px_0] md:p-[64px_0_64px_0]'}>
          <div className="main-container">
            <div className='w-full flex items-start justify-between lg:flex-col'>
              <div>
                <div className='flex items-center gap-[24px] sm:gap-[14px]'>
                  <div className="subheading-line"></div>
                  <div className="global-subheading">What we do</div>
                </div>
                <div className='flex items-start flex-col ml-[96px] mt-[32px] lg:ml-0'>
                  <div className='text-[56px] flex-1 text-[#1d2130] leading-[67px] font-[700] md:text-[46px] md:leading-[57px]'>We are working <br className='lg:hidden' /> worldwide</div>
                  <div className='flex items-start flex-1 flex-col gap-[16px] mt-[34px]'>
                    <p className='text-[16px] text-[#1d2130] opacity-[0.7] leading-[26px] font-[400] w-[594px] lg:w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                  </div>
                </div>
              </div>
              <div className='w-[480px] h-[384px] lg:w-full overflow-hidden rounded-[12px] lg:mt-[32px] lg:rounded-[12px]'>
                <img src={image.whatwedo2} alt="what we do" className='w-full h-[380px] object-cover' />
              </div>
            </div>
          </div>
        </div>
        <div className='relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] bg-[#eff7f2]'>
          <div className="main-container">
            <div className='flex flex-col items-start gap-[64px] lg:gap-[44px]'>
              <div className='text-[48px] text-[#1d2130] font-[700] leading-[58px] lg:text-[38px] lg:leading-[48px]'>What we do for the environment</div>
              <div className='w-full grid grid-cols-[1fr_1fr_1fr] gap-x-[64px] gap-y-[48px] auto-cols-auto items-start lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr]'>
                <div className='flex items-start gap-[24px]'>
                  <div className='w-[28px] h-[28px] rounded-[4px] bg-[#83D187] p-[6px]'>
                    <BsBuilding color='#fff' />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <h2 className='text-[24px] leading-[28px] font-[700] text-[#1d2130]'>Build Heality Cities</h2>
                    <p className="tetx-[14px] text-[#525560] font-[400] leading-[22px] w-[332px] lg:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                </div>
                <div className='flex items-start gap-[24px]'>
                  <div className='w-[28px] h-[28px] rounded-[4px] bg-[#83D187] p-[6px]'>
                    <MdWaves color='#fff' />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <h2 className='text-[24px] leading-[28px] font-[700] text-[#1d2130]'>Protect Land and Water</h2>
                    <p className="tetx-[14px] text-[#525560] font-[400] leading-[22px] w-[332px] lg:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                </div>
                <div className='flex items-start gap-[24px]'>
                  <div className='w-[28px] h-[28px] rounded-[4px] bg-[#83D187] p-[6px]'>
                    <FaHandHoldingWater color='#fff' />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <h2 className='text-[24px] leading-[28px] font-[700] text-[#1d2130]'>Tree Plantation</h2>
                    <p className="tetx-[14px] text-[#525560] font-[400] leading-[22px] w-[332px] lg:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                </div>
                <div className='flex items-start gap-[24px]'>
                  <div className='w-[28px] h-[28px] rounded-[4px] bg-[#83D187] p-[6px]'>
                    <IoIosWater color='#fff' />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <h2 className='text-[24px] leading-[28px] font-[700] text-[#1d2130]'>Water sustainability</h2>
                    <p className="tetx-[14px] text-[#525560] font-[400] leading-[22px] w-[332px] lg:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                </div>
                <div className='flex items-start gap-[24px]'>
                  <div className='w-[28px] h-[28px] rounded-[4px] bg-[#83D187] p-[6px]'>
                    <FaDog color='#fff' />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <h2 className='text-[24px] leading-[28px] font-[700] text-[#1d2130]'>Animal Safety</h2>
                    <p className="tetx-[14px] text-[#525560] font-[400] leading-[22px] w-[332px] lg:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                </div>
                <div className='flex items-start gap-[24px]'>
                  <div className='w-[28px] h-[28px] rounded-[4px] bg-[#83D187] p-[6px]'>
                    <FaLeaf color='#fff' />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <h2 className='text-[24px] leading-[28px] font-[700] text-[#1d2130]'>Biodiversity</h2>
                    <p className="tetx-[14px] text-[#525560] font-[400] leading-[22px] w-[332px] lg:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative p-[96px_0_0px_0] md:p-[64px_0_0px_0]'>
          <div className="main-container">
            <div className='flex flex-col items-center'>
                <div className='flex items-center'>
                  <div className="global-subheading">Projects we have done</div>
                </div>
                <div className='flex flex-col items-start gap-[24px] mt-[32px] mb-[65px] text-center'>
                  <div className='text-[48px] text-[#1d2130] font-[700] leading-[58px] lg:text-[38px] lg:leading-[48px]'>We are Creating sustainable <br className='lg:hidden' /> society, for everyone and forever.</div>
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
        <div className={show ? 'scroll show' : 'scroll'}>
          <a href='#'><BiUpArrow fontSize={22} color='#fff' /></a>
        </div>
        <Joinus />
        <News />
        <Events />
        <Footer />
    </>
  )
}
