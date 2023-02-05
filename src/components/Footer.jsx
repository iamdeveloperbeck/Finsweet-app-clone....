import React from 'react';
import { Link } from 'react-router-dom';
import image from '../constants/image';


const Footer = () => {
  return (
    <div className='relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] bg-[#0B0706]'>
        <div className="main-container">
            <div className='flex items-start gap-[96px] justify-between lg:gap-[60px] lg:flex-wrap lg:justify-start'>
                <Link to='/'><img src={image.logoWhite} alt="logo white" className='h-[24px] object-cover mr-[24px]' /></Link>
                <div className='flex items-start gap-[70px] mr-[40px] sm:gap-[44px] sm:mr-0'>
                    <div className='flex flex-col items-start gap-[24px]'>
                        <div className='text-[16px] text-[#fff] font-[700] leading-[26px]'>Our team</div>
                        <Link to='/about'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>About us</span>
                        </Link>
                        <Link to='/about'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>Team</span>
                        </Link>
                        <Link to='/whatwedo'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>What we do</span>
                        </Link>
                        <Link to='/contact'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>Contact</span>
                        </Link>
                    </div>
                    <div className='flex flex-col items-start gap-[24px]'>
                        <div className='text-[16px] text-[#fff] font-[700] leading-[26px]'>More</div>
                        <Link to='/projects'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>Projects</span>
                        </Link>
                        <Link to='/events'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>Events</span>
                        </Link>
                        <Link to='/donate'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>Donate</span>
                        </Link>
                        <Link to='/blog'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>Blog</span>
                        </Link>
                    </div>
                    <div className='flex flex-col items-start gap-[24px]'>
                        <div className='text-[16px] text-[#fff] font-[700] leading-[26px]'>Connect</div>
                        <Link to='/about'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>Facebook</span>
                        </Link>
                        <Link to='/about'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>Instagram</span>
                        </Link>
                        <Link to='/about'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>Twitter</span>
                        </Link>
                        <Link to='/about'>
                            <span className='text-[14px] text-[#fff] leading-[22px] opacity-[0.78] tracking-[1px]'>Linkdin </span>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-[32px]'>
                    <div className='text-[40px] text-[#fff] leading-[56px] font-[700] sm:text-[32px]'>Subscribe to get latest <br className='md:hidden' /> updates</div>
                    <form className='w-[544px] h-[64px] flex items-center relative lg:w-full md:w-[422px] sm:w-full'>
                        <input type="email" placeholder='Your email' className='w-full h-full p-[22px_24px] outline-none border-[#ebf0f94d] border-[1px] rounded-[4px] bg-transparent text-[#fff]' />
                        <input type="submit" value="Subscribe" className='global-btn second h-full absolute right-0' />
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;