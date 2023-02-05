import React from 'react';
import image from '../constants/image';

const News = () => {
  return (
    <div className='relative p-[0px_0_96px_0] md:p-[64px_0_64px_0]'>
        <div className='main-container'>
            <div className='flex items-center gap-[24px]'>
                <div className='text-[40px] font-[600] leading-[56px] text-[#1d2130]'>Read Our News</div>
                <div className='w-full h-[1px] bg-[#e5e5e5] flex-1'></div>
            </div>
            <div className='w-full flex items-start gap-[24px] mt-[48px] lg:flex-wrap md:items-center md:justify-center'>
                <div className='flex flex-col items-start gap-[16px]'>
                    <img src={image.news1} alt="news" className='w-full h-full object-cover' />
                    <div className='flex flex-col items-start gap-[8px]'>
                        <div className='text-[20px] text-[#1d2130] font-[600] leading-[30px]'>Don't destroy greenery and don't <br className='md:hidden' /> spoil scenery</div>
                        <p className='w-[290px] text-[16px] text-[#525560] leading-[26px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-[16px]'>
                    <img src={image.news2} alt="news" className='w-full h-full object-cover' />
                    <div className='flex flex-col items-start gap-[8px]'>
                        <div className='text-[20px] text-[#1d2130] font-[600] leading-[30px]'> Is climate change happening <br className='md:hidden' /> faster than expected?</div>
                        <p className='w-[290px] text-[16px] text-[#525560] leading-[26px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-[16px]'>
                    <img src={image.news3} alt="news" className='w-full h-full object-cover' />
                    <div className='flex flex-col items-start gap-[8px]'>
                        <div className='text-[20px] text-[#1d2130] font-[600] leading-[30px]'>Top 10 facts about wind farms <br className='md:hidden' /> you didn't know</div>
                        <p className='w-[290px] text-[16px] text-[#525560] leading-[26px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-[16px]'>
                    <img src={image.news4} alt="news" className='w-full h-full object-cover' />
                    <div className='flex flex-col items-start gap-[8px]'>
                        <div className='text-[20px] text-[#1d2130] font-[600] leading-[30px]'>Our goal is to make water <br className='md:hidden' /> available for everyone</div>
                        <p className='w-[290px] text-[16px] text-[#525560] leading-[26px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default News;