import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import image from '../constants/image';
import { RiCompassesFill, RiPencilFill, RiSunCloudyFill } from 'react-icons/ri';
import { TfiLayoutGrid2Alt } from 'react-icons/tfi';
import Joinus from '../components/Joinus';
import Footer from '../components/Footer';

export const Project2 = () => {
  const [ hero, setHero ] = useState(false);

  const marginTop = () => {
    if(window.scrollY >= 20) {
      setHero(true);
    } else {
      setHero(false);
    }
  }

  window.addEventListener('scroll', marginTop);
  return (
    <> 
        <Navbar />
        <div className={hero ? 'relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] mt-[70px]' : 'relative p-[96px_0_96px_0] md:p-[64px_0_64px_0]'}>
          <div className="main-container">
            <div className='flex flex-col items-start m-[0_120px] lg:m-0'>
              <div className='flex items-center gap-[24px] sm:gap-[14px]'>
                <div className="subheading-line"></div>
                <div className="global-subheading">Our Projects</div>
              </div>
              <div className='flex flex-col items-start gap-[48px] m-[0_96px_0_96px] lg:m-0'>
                <div className='flex flex-col items-start gap-[32px] mt-[32px]'>
                  <div className='text-[56px] text-[#1d2130] font-[700] leading-[67px] md:text-[46px] md:leading-[56px]'>Weekly cleanliness program in <br className='lg:hidden' /> city</div>
                  <div className='flex flex-col items-start gap-[32px]'>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>
                    <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.</p>
                  </div>
                  <img src={image.project4} alt="project" className='w-full h-full object-cover rounded-[8px] sm:h-[220px]' />
                </div>
                <div className='flex flex-col items-start gap-[16px]'>
                  <div className='text-[48px] text-[#1d2130] font-[700] leading-[58px] md:text-[38px] md:leading-[48px]'>Some cool heading</div>
                  <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum felis interdum pharetra. Diam fermentum in lectus morbi at eget sit et quisque. Semper commodo viverra donec magna egestas nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim penatibus faucibus tempus. Arcu pharetra morbi bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus suscipit sagittis, ultrices ut dui.</p>
                  <div className='flex flex-col items-start ml-[20px]'>
                    <ul className='list-item list-disc'>
                      <li className='text-[16px] text-[#1d2130] font-[700] leading-[26px]'>Posuere sed pulvinar enim faucibus justo, cursus.</li>
                      <li className='text-[16px] text-[#1d2130] font-[700] leading-[26px]'>In diam facilisi at sit convallis blandit blandit in.</li>
                      <li className='text-[16px] text-[#1d2130] font-[700] leading-[26px]'>Maecenas odio orci lectus urna ante consequat erat non morbi.</li>
                    </ul>
                  </div>
                  <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative p-[96px_0_96px_0] bg-[#EBF0F9] md:p-[64px_0_64px_0]'>
          <div className="main-container">
            <div className='grid grid-cols-2 auto-cols-[1fr] gap-[50px] m-[0_140px_0_140px] lg:m-0 md:grid-cols-1'>
              <div className='flex items-start gap-[22px]'>
                <div className='relative w-[26px] h-[26px] mt-[5px] flex items-center justify-center'>
                  <div className='w-[26px] h-[26px]  bg-[#716FE7] mix-blend-normal rounded-[4px] opacity-[0.4]'></div>
                  <RiPencilFill className='absolute opacity-[1] text-[#716FE7]' />
                </div>
                <div className='flex flex-col items-start gap-[8px]'>
                  <div className='text-[24px] text-[#1d2130] font-[700] leading-[38px]'>200+ Plantation in 1 week</div>
                  <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
              <div className='flex items-start gap-[22px]'>
                <TfiLayoutGrid2Alt color='#716FE7' className='text-[34px] md:mt-[5px] md:text-[28px] sm:text-[36px] sm:m-0' />
                <div className='flex flex-col items-start gap-[8px]'>
                  <div className='text-[24px] text-[#1d2130] font-[700] leading-[38px]'>230 People Have donated</div>
                  <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
              <div className='flex items-start gap-[22px]'>
                <div className='relative w-[26px] h-[26px] mt-[5px] flex items-center justify-center'>
                  <div className='w-[26px] h-[26px]  bg-[#716FE7] mix-blend-normal rounded-[4px] opacity-[0.4]'></div>
                  <RiSunCloudyFill className='absolute opacity-[1] text-[#716FE7]' />
                </div>
                <div className='flex flex-col items-start gap-[8px]'>
                  <div className='text-[24px] text-[#1d2130] font-[700] leading-[38px]'>30+ people joined </div>
                  <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
              <div className='flex items-start gap-[22px]'>
                <div className='relative w-[26px] h-[26px] mt-[5px] flex items-center justify-center'>
                  <div className='w-[26px] h-[26px]  bg-[#716FE7] mix-blend-normal rounded-[4px] opacity-[0.4]'></div>
                  <RiCompassesFill className='absolute opacity-[1] text-[#716FE7]' />
                </div>
                <div className='flex flex-col items-start gap-[8px]'>
                  <div className='text-[24px] text-[#1d2130] font-[700] leading-[38px]'>$324 Raised for this initiate</div>
                  <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Joinus />
        <Footer />
    </>
  );
};