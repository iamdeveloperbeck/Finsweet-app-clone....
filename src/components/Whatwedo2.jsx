import React from 'react';
import image from '../constants/image';
import { BsBuilding } from 'react-icons/bs';
import { FaHandHoldingWater, FaDog } from 'react-icons/fa';
import { MdWaves } from 'react-icons/md';

const Whatwedo2 = () => {
  return (
    <div id='whatwedo' className='relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] bg-[#eff7f2]'>
      <div className='main-container'>
        <div className='grid grid-cols-[1.5fr_2fr] grid-rows-[1fr] auto-cols-auto items-center gap-[96px] lg:grid-cols-[1fr] lg:gap-[40px]'>
          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-[24px] sm:gap-[14px]'>
              <div className="subheading-line"></div>
              <div className="global-subheading">What we do</div>
            </div>
            <div className='flex w-[608px] flex-col items-start gap-[24px] mt-[32px] ml-[96px] lg:w-full lg:ml-0'>
              <div className='global-heading'>We care for earth, care for the coming birth</div>
              <div className='global-subtitle'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nostrum cupiditate quia similique corrupti voluptas.
              </div>
              <div className='w-full flex flex-col items-start gap-[24px] pl-[24px] border-l-[1px] border-[#e5e5e5]'>
                <div className='flex items-start gap-[24px]'>
                  <div className='w-[28px] h-[28px] rounded-[4px] bg-[#83D187] p-[6px]'>
                    <BsBuilding color='#fff' />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <h2 className='text-[24px] leading-[28px] font-[700] text-[#1d2130]'>Build Heality Cities</h2>
                    <p className="global-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br className='sm:hidden' /> varius enim in eros.</p>
                  </div>
                </div>
                <div className='flex items-start gap-[24px]'>
                  <div className='w-[28px] h-[28px] rounded-[4px] bg-[#83D187] p-[6px]'>
                    <FaHandHoldingWater color='#fff' />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <h2 className='text-[24px] leading-[28px] font-[700] text-[#1d2130]'>Tree Plantation</h2>
                    <p className="global-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br className='sm:hidden' /> varius enim in eros.</p>
                  </div>
                </div>
                <div className='flex items-start gap-[24px]'>
                  <div className='w-[28px] h-[28px] rounded-[4px] bg-[#83D187] p-[6px]'>
                    <MdWaves color='#fff' />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <h2 className='text-[24px] leading-[28px] font-[700] text-[#1d2130]'>Protect Land and Water</h2>
                    <p className="global-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br className='sm:hidden' /> varius enim in eros.</p>
                  </div>
                </div>
                <div className='flex items-start gap-[24px]'>
                  <div className='w-[28px] h-[28px] rounded-[4px] bg-[#83D187] p-[6px]'>
                    <FaDog color='#fff' />
                  </div>
                  <div className='flex flex-col items-start gap-[8px]'>
                    <h2 className='text-[24px] leading-[28px] font-[700] text-[#1d2130]'>Animal Safety</h2>
                    <p className="global-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br className='sm:hidden' /> varius enim in eros.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-full h-auto flex flex-col items-start'>
            <img src={image.whatwedo} alt="about" className='relative w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatwedo2