import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className='relative p-[0_0_96px_]'>
        <div className="main-container">
            <div className='flex items-center gap-[24px]'>
                <div className='text-[40px] font-[600] leading-[56px] text-[#1d2130]'>Our Events</div>
                <div className='w-full h-[1px] bg-[#e5e5e5] flex-1'></div>
            </div>
            <div className='flex items-start justify-between gap-[24px] mt-[48px] lg:flex-col'>
                <Link to='/events2' className='w-full'>
                    <div className='w-full h-[190px] p-[0_48px_0_40px] flex items-center justify-between bg-[#BEF3C0] rounded-[8px] md:p-[0_40px_0_40px]'>
                        <div className='flex items-start gap-[24px] md:gap-[20px] md:items-center'>
                            <div className='flex flex-col items-start'>
                                <div className='text-[48px] text-[#1d2130] font-[500] leading-[58px]'>23</div>
                                <div className='text-[16px] text-[#1d2130] font-[500] tracking-[2px] uppercase leading-[19px]'>Sep</div>
                            </div>
                            <div className='flex items-start flex-col gap-[8px]'>
                                <div className='flex items-center gap-[23px]'>
                                    <div className='text-[16px] text-[#1d2130] font-[600] tracking-[2px] uppercase leading-[19px]'>Next Events</div>
                                    <div className='w-[44px] h-[2px] bg-[#1d2130] flex-1'></div>
                                </div>
                                <div className='text-[28px] leading-[42px] font-[700] text-[#1d2130] md:text-[22px] md:leading-[32px]'>Say no to plastic usage and <br className='md:hidden' /> save the planet</div>
                            </div>
                        </div>
                        <div className='w-[56px_!important] h-[56px] bg-[#fff] rounded-[100%] flex items-center justify-center md:hidden'>
                            <HiOutlineArrowRight fontSize={20} />
                        </div>
                    </div>
                </Link>
                <Link to='/events2' className='w-full'>
                    <div className='w-full h-[190px] p-[0_48px_0_40px] flex items-center justify-between bg-[#BEF3C0] rounded-[8px]'>
                        <div className='flex items-start gap-[24px] md:items-center'>
                            <div className='flex flex-col items-start'>
                                <div className='text-[48px] text-[#1d2130] font-[500] leading-[58px]'>25</div>
                                <div className='text-[16px] text-[#1d2130] font-[500] tracking-[2px] uppercase leading-[19px]'>Sep</div>
                            </div>
                            <div className='flex items-start flex-col gap-[8px]'>
                                <div className='flex items-center gap-[23px]'>
                                    <div className='text-[16px] text-[#1d2130] font-[600] tracking-[2px] uppercase leading-[19px]'>Next Events</div>
                                    <div className='w-[44px] h-[2px] bg-[#1d2130] flex-1'></div>
                                </div>
                                <div className='text-[28px] leading-[42px] font-[700] text-[#1d2130] md:text-[22px] md:leading-[32px]'>Weekly cleaning program</div>
                            </div>
                        </div>
                        <div className='w-[56px] h-[56px] bg-[#fff] rounded-[100%] flex items-center justify-center md:hidden'>
                            <HiOutlineArrowRight fontSize={20} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Events;