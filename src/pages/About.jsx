import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import ModalVideo from 'react-modal-video';
import '../components/hero.scss';
import image from '../constants/image';
import { MdPlayArrow } from 'react-icons/md';
import Joinus from '../components/Joinus';
import News from '../components/News';
import Events from '../components/Events';
import Footer from '../components/Footer';
import { Link } from 'react-scroll';
import { BiUpArrow } from 'react-icons/bi';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

export const About = () => {
  const [isOpen, setOpen] = useState(false);
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
        <div className={hero ? 'p-[96px_0_96px_0] md:p-[64px_0_64px_0] margin-top' : 'p-[96px_0_96px_0] md:p-[64px_0_64px_0]'}>
          <div className="main-container">
            <div className='flex items-center gap-[24px] sm:gap-[14px]'>
              <div className="subheading-line"></div>
              <div className="global-subheading">Know about us</div>
            </div>
            <div className='flex items-start gap-[64px] mt-[32px] ml-[96px] flex-wrap lg:ml-0 md:flex-col md:gap-[32px]'>
              <div className='text-[56px] flex-1 text-[#1d2130] leading-[67px] font-[700] md:text-[46px] md:leading-[57px]'>We are a nonprofit team working worldwide</div>
              <div className='flex items-start flex-1 flex-col gap-[16px]'>
                <div className='text-[20px] text-[#1d2130] font-[700] leading-[30px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
                <p className='text-[16px] text-[#1d2130] opacity-[0.7] leading-[26px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full h-auto pb-[96px] lg:pb-[40px]'>
            <div className="main-container">
              <div className='relative w-full h-[448px] lg:h-auto'>
                <img src={image.aboutBg} alt="about" className='w-full lg:h-[308px] object-cover' />
                <div className='absolute top-0 z-10 w-full h-full flex justify-center items-center'>
                  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="BSm7c7zMg8c" onClose={() => setOpen(false)} />
                  <div className='w-[64px] h-[64px] rounded-[100%] bg-[#fff] flex items-center justify-center cursor-pointer' onClick={()=> setOpen(true)}>
                    <MdPlayArrow fontSize={40} color="#1D2130" />
                  </div>
                </div>
              </div>
              <div className='w-full flex pt-[96px] pb-[96px] gap-[96px] items-center justify-center lg:flex-col lg:pt-[40px] lg:gap-[40px] lg:pb-[40px]'>
                <div className='flex flex-col items-start gap-[16px]'>
                  <div className='global-subheading'>Our mission</div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <div className='w-[496px] text-[28px] text-[#1d2130] font-[700] leading-[42px] lg:w-full'>We make the world we save our own environment</div>
                    <p className='global-subtitle width'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  </div>
                </div>
                <div className='flex flex-col items-start gap-[16px]'>
                  <div className='global-subheading'>Our mission</div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <div className='w-[496px] text-[28px] text-[#1d2130] font-[700] leading-[42px] lg:w-full'>We make the world we save our own environment</div>
                    <p className='global-subtitle width'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  </div>
                </div>
              </div>
              <div className='w-full flex flex-col items-start'>
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
            <div className='w-full h-[867px] absolute top-auto left-0 bottom-0 z-[-1] bg-[#eff7f2] sm:h-screen'></div>
        </div>
        <div className='relative pt-[96px] pb-[96px] sm:p-[40px_0_40px_0]'>
          <div className="main-container">
            <div className='flex flex-col items-center justify-center gap-[48px] mb-[96px]'>
              <div className='global-heading thrid text-center'>Awards & Recognitions</div>
              <div className='w-full pl-[94px] pr-[94px] flex items-center justify-between sm:p-0 sm:flex-wrap sm:gap-[20px] sm:justify-center'>
                <div className='flex flex-col items-center gap-[16px]'>
                  <img src={image.awardBadge1} alt="award badge" />
                  <div className='text-center'>
                    <div className='text-[24px] text-[#1d2130] font-[700] leading-[38px]'>2021</div>
                    <div className='text-[16px] font-[700] text-[#1d2130] leading-[26px]'>Best NGO Award</div>
                    <div className='text-[12px] font-[500] leading-[19px] uppercase opacity-[0.6]'>Berlin, Germany</div>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-[16px]'>
                  <img src={image.awardBadge2} alt="award badge" />
                  <div className='text-center'>
                    <div className='text-[24px] text-[#1d2130] font-[700] leading-[38px]'>2018</div>
                    <div className='text-[16px] font-[700] text-[#1d2130] leading-[26px]'>Global Award</div>
                    <div className='text-[12px] font-[500] leading-[19px] uppercase opacity-[0.6]'>New York, Usa</div>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-[16px]'>
                  <img src={image.awardBadge3} alt="award badge" />
                  <div className='text-center'>
                    <div className='text-[24px] text-[#1d2130] font-[700] leading-[38px]'>2014</div>
                    <div className='text-[16px] font-[700] text-[#1d2130] leading-[26px]'>Foresto Award</div>
                    <div className='text-[12px] font-[500] leading-[19px] uppercase opacity-[0.6]'>New Delhi, India</div>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-[16px]'>
                  <img src={image.awardBadge4} alt="award badge" />
                  <div className='text-center'>
                    <div className='text-[24px] text-[#1d2130] font-[700] leading-[38px]'>2010</div>
                    <div className='text-[16px] font-[700] text-[#1d2130] leading-[26px]'>Earth Saver Award</div>
                    <div className='text-[12px] font-[500] leading-[19px] uppercase opacity-[0.6]'>Vienna, Austria</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-auto p-[64px_0px_64px_96px] bg-[#0B0706] rounded-[12px] overflow-hidden md:p-[64px_0px_64px_60px] sm:p-0'>
              <div className='flex items-center gap-[48px] lg:flex-col lg:items-start sm:gap-0'>
                <div className='flex flex-col items-start gap-[32px] lg:pr-[60px] md:pr-[40px] sm:p-[40px]'>
                  <div className='flex flex-col items-start gap-[16px]'>
                    <div className='global-subheading second lg:w-full'>Our Journey</div>
                    <div className='global-heading second thrid'>How we raised 34M</div>
                    <p className='global-subtitle width2 opacity-[0.6] lg:w-[100%_!important]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.</p>
                  </div>
                  <div className='flex items-start gap-[32px]'>
                    <div className='flex flex-col items-start'>
                      <div className='text-[24px] text-[#fff] font-[500] leading-[38px]'>34M+</div>
                      <div className='text-[12px] font-[500] leading-[19px] text-[#fff] opacity-[0.6]'>Donation Received</div>
                    </div>
                    <div className='flex flex-col items-start'>
                      <div className='text-[24px] text-[#fff] font-[500] leading-[38px]'>400+</div>
                      <div className='text-[12px] font-[500] leading-[19px] text-[#fff] opacity-[0.6]'>Volunters</div>
                    </div>
                    <div className='flex flex-col items-start'>
                      <div className='text-[24px] text-[#fff] font-[500] leading-[38px]'>40K+</div>
                      <div className='text-[12px] font-[500] leading-[19px] text-[#fff] opacity-[0.6]'>Trees planted</div>
                    </div>
                  </div>
                </div>
                <div className='w-full h-full flex items-end sm:items-start'>
                  <img src={image.journey} alt="journey" className='w-full h-full object-cover rounded-[12px_0px_0px_12px] ml-[2px] sm:rounded-[12px_12px_0px_12px] sm:m-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-full h-auto'>
          <div className="main-container">
            <div className='flex flex-col items-center text-center gap-[48px]'>
              <div className='text-center flex flex-col items-center gap-[16px]'>
                <div className='text-[48px] font-[700] text-[#1d2130] leading-[58px]'>Meet our team</div>
                <p className='text-[16px] text-[#525560] font-[400] leading-[26px] opacity-[0.6] w-[519px] md:w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
              <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[32px] gap-y-[48px] lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr]'>
                <div className='w-full h-auto flex flex-col items-center gap-[16px]'>
                  <img src={image.team1} alt="team member" />
                  <div className='flex flex-col items-center text-center gap-[16px]'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-[20px] font-[500] leading-[32px] text-[#1d2130]'>Leonard John Davies</div>
                      <p className='text-[12px] font-[500] leading-[19px] text-[#1D2130] opacity-[0.6]'>Cofounder, CEO</p>
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
                <div className='w-full h-auto flex flex-col items-center gap-[16px]'>
                  <img src={image.team2} alt="team member" />
                  <div className='flex flex-col items-center text-center gap-[16px]'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-[20px] font-[500] leading-[32px] text-[#1d2130]'>Francis Weber</div>
                      <p className='text-[12px] font-[500] leading-[19px] text-[#1D2130] opacity-[0.6]'>Vice Chairman</p>
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
                <div className='w-full h-auto flex flex-col items-center gap-[16px]'>
                  <img src={image.team3} alt="team member" />
                  <div className='flex flex-col items-center text-center gap-[16px]'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-[20px] font-[500] leading-[32px] text-[#1d2130]'>Kyla Obrien</div>
                      <p className='text-[12px] font-[500] leading-[19px] text-[#1D2130] opacity-[0.6]'>Head of Authority</p>
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
                <div className='w-full h-auto flex flex-col items-center gap-[16px]'>
                  <img src={image.team4} alt="team member" />
                  <div className='flex flex-col items-center text-center gap-[16px]'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-[20px] font-[500] leading-[32px] text-[#1d2130]'>Adrian Dixon</div>
                      <p className='text-[12px] font-[500] leading-[19px] text-[#1D2130] opacity-[0.6]'>Support Executive</p>
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
                <div className='w-full h-auto flex flex-col items-center gap-[16px]'>
                  <img src={image.team5} alt="team member" />
                  <div className='flex flex-col items-center text-center gap-[16px]'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-[20px] font-[500] leading-[32px] text-[#1d2130]'>Freddy Busby</div>
                      <p className='text-[12px] font-[500] leading-[19px] text-[#1D2130] opacity-[0.6]'>Project Manager</p>
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
                <div className='w-full h-auto flex flex-col items-center gap-[16px]'>
                  <img src={image.team6} alt="team member" />
                  <div className='flex flex-col items-center text-center gap-[16px]'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-[20px] font-[500] leading-[32px] text-[#1d2130]'>Dale Banks</div>
                      <p className='text-[12px] font-[500] leading-[19px] text-[#1D2130] opacity-[0.6]'>Accountatnt, Finance</p>
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
                <div className='w-full h-auto flex flex-col items-center gap-[16px]'>
                  <img src={image.team7} alt="team member" />
                  <div className='flex flex-col items-center text-center gap-[16px]'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-[20px] font-[500] leading-[32px] text-[#1d2130]'>Miriam Middleton</div>
                      <p className='text-[12px] font-[500] leading-[19px] text-[#1D2130] opacity-[0.6]'>Cofounder, CEO</p>
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
                <div className='w-full h-auto flex flex-col items-center gap-[16px]'>
                  <img src={image.team8} alt="team member" />
                  <div className='flex flex-col items-center text-center gap-[16px]'>
                    <div className='flex flex-col items-center text-center'>
                      <div className='text-[20px] font-[500] leading-[32px] text-[#1d2130]'>Ellen Walton</div>
                      <p className='text-[12px] font-[500] leading-[19px] text-[#1D2130] opacity-[0.6]'>Vice Chairman</p>
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
          </div>
        </div>
        <div className={show ? 'scroll show' : 'scroll'}>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={100}><BiUpArrow fontSize={22} color='#fff' /></Link>
        </div>
        <Joinus />
        <News />
        <Events />
        <Footer />
    </>
  )
}