import React from 'react';
import image from '../constants/image';

const Chart = () => {
  return (
    <div className='relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] bg-[#0B0706]'>
        <div className='main-container'>
            <div className='flex items-center justify-between gap-[56px] lg:flex-col'>
                <div className='flex flex-[2] items-start flex-col'>
                    <div className='global-heading second mb-[16px]'>How we spend your donations and where it goes</div>
                    <div className="global-subtitle third mb-[32px]">We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.</div>
                    <div className='flex flex-col items-start gap-[15px] md:flex-row md:gap-[30px]'>
                        <div className='flex items-center gap-[24px] md:flex-col md:items-start'>
                            <div className='flex items-center'>
                                <div className='w-[16px] h-[16px] rounded-[4px] bg-[#bef3c0] mr-[8px]'></div>
                                <div className='text-[16px] font-[500] leading-[26px] text-[#fff]'>40% planting trees</div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-[16px] h-[16px] rounded-[4px] bg-[#AC94F1] mr-[8px]'></div>
                                <div className='text-[16px] font-[500] leading-[26px] text-[#fff]'>35% cleanliness program</div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-[16px] h-[16px] rounded-[4px] bg-[#FFF0CA] mr-[8px]'></div>
                                <div className='text-[16px] font-[500] leading-[26px] text-[#fff]'>10% helping people</div>
                            </div>
                        </div>
                        <div className='flex items-center gap-[24px] md:flex-col md:items-start'>
                            <div className='flex items-center'>
                                <div className='w-[16px] h-[16px] rounded-[4px] bg-[#F9CF64] mr-[8px]'></div>
                                <div className='text-[16px] font-[500] leading-[26px] text-[#fff]'>10% animal safety</div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-[16px] h-[16px] rounded-[4px] bg-[#F38FBF] mr-[8px]'></div>
                                <div className='text-[16px] font-[500] leading-[26px] text-[#fff]'>5% feeding the poor</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex-col items-end'>
                    <img src={image.chart} alt="chart" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Chart;