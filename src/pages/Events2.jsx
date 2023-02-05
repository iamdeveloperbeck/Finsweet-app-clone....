import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiOutlineArrowRight, HiOutlineLocationMarker, HiOutlineMenuAlt1 } from 'react-icons/hi';
import { VscClose } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import image from '../constants/image';
import { navData } from '../constants/navData';
import { FiCalendar } from 'react-icons/fi';

export const Events2 = () => {
    const [ toggle, setToggle ] = useState(false);
    const [ navbar, setNavbar ] = useState(false);
    const [ hero, setHero ] = useState(false);

    const changePosition = () => {
        if(window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changePosition);

    const marginTop = () => {
        if(window.scrollY >= 20) {
            setHero(true);
        } else {
            setHero(false);
        }
    }

    window.addEventListener('scroll', marginTop);

    const activeLink = "font-[600] text-[#0b0106] text-[16px] leading-[19px]";
    const normalLink = "font-[600] text-[#0b0106] text-[16px] leading-[19px] opacity-[0.5] hover:opacity-[1]";

    return (
        <>
            <div className='relative w-full h-auto' id='hero'>
                <div className={navbar ? 'navbar active' : 'navbar second'}>
                    <div className="w-[100%] max-w-[1280px] m-[0_auto] p-[0_20px] flex items-center justify-between">
                        <Link to='/' className='flex items-center gap-[6px]'>
                            <img src={image.logo} alt="logo" className='h-[28px] object-cover sm:w-[90px] sm:h-auto' />
                        </Link>
                        <div className='flex items-center gap-[40px]'>
                            <nav className='flex items-center gap-[40px] lg:hidden'>
                                {navData.map((items, index) => {
                                return (
                                    <li key={index} className='list-none'>
                                        <NavLink to={items.url} className={({ isActive }) => (isActive ? activeLink : normalLink)}>{items.title}</NavLink>
                                    </li>
                                )
                                })}
                            </nav>
                            <div className='flex items-center gap-[15px]'>
                                <Link to="/donation" className='md:hidden'>
                                    <button className='global-btn'>Donate</button>
                                </Link>
                                <div className='lg:block hidden cursor-pointer'>
                                    {toggle ? <VscClose fontSize={28} onClick={() => setToggle(false)} /> : <HiOutlineMenuAlt1 fontSize={28} onClick={() => setToggle(true)} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    {toggle && (
                    <motion.div initial={{ y: '80px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='absolute top-[100px] right-[20px] w-full shadow-bottom flex items-end justify-end z-50 sm:right-auto sm:top-[70px] sm:left-0'>
                        <div className='w-[300px] h-auto bg-[#EFF7F2] p-[30px] rounded-[8px] shadow-lg shadow-[#ffffff27] sm:w-[100%] sm:rounded-none'>
                            <div className='flex flex-col items-end gap-[10px] sm:items-start'>
                                {navData.map((items, index) => {
                                    return (
                                        <li key={index} className='list-none'>
                                            <NavLink to={items.url} className={({ isActive }) => (isActive ? `${activeLink} text-[20px] leading-[24px]` : `${normalLink} text-[20px] leading-[24px]`)}>{items.title}</NavLink>
                                        </li>
                                    )
                                })}
                                <Link to="/donation" className='md:block lg:hidden'>
                                    <button className='global-btn'>Donate</button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                    )}
                </div>
            </div>
            <div className={hero ? 'relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] bg-[#EFF7F2] margin-top sm:mb-0' : 'relative p-[96px_0_96px_0] md:p-[64px_0_64px_0] bg-[#EFF7F2] sm:mb-0'}>
                <div className='main-container'>
                    <div className='flex flex-col items-start gap-[48px] m-[0_244px] lg:m-0'>
                        <div className='text-[56px] text-[#1d2130] font-[700] leading-[67px] md:text-[36px] md:leading-[46px]'>Say no to using plastic and <br className='lg:hidden' /> save Earth</div>
                        <div className='flex items-center justify-start gap-[48px]'>
                            <div className='flex items-center justify-start gap-[8px]'>
                                <HiOutlineLocationMarker className='text-[24px] text-[#70C174]' />
                                <div className='text-[16px] text-[#1d2130] font-[500] leading-[26px]'>8 Brewery Drive, Hudson, NH 03051, USA</div>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <FiCalendar className='text-[24px] text-[#70C174]' />
                                <div className='text-[16px] text-[#1d2130] font-[500] leading-[26px]'>September 3, 2021 8:30 AM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative w-full p-[96px_0_96px_0] md:p-[64px_0_64px_0]'>
                <div className="main-container">
                    <div className='m-[0_244px] flex flex-col items-start gap-[96px] lg:gap-[56px] lg:m-0'>
                        <div className='flex flex-col items-start gap-[32px]'>
                            <div className='text-[48px] text-[#1d2130] font-[700] leading-[58px] md:text-[38px] md:leading-[48px]'>About</div>
                            <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
                            <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>
                            <img src={image.events} alt="events" className='rounded-[12px] sm:h-[220px] object-cover' />
                            <p className='text-[16px] text-[#525560] font-[400] leading-[26px]'>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
                        </div>
                        <div className='w-full flex flex-col items-start gap-[48px]'>
                            <div className='w-full flex items-center gap-[24px]'>
                                <div className='text-[40px] font-[600] leading-[56px] text-[#1d2130] sm:text-[32px]'>Other events</div>
                                <div className='w-[100%] h-[1px] block bg-[#e5e5e5] flex-1'></div>
                            </div>
                            <div className='w-full flex flex-col items-start gap-[24px]'>
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
                                                <div className='text-[28px] leading-[42px] font-[700] text-[#1d2130] md:text-[22px] md:leading-[32px]'>Say no to plastic usage and save the <br className='md:hidden' /> planet</div>
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
                </div>
            </div>
            <Footer />
        </>
    );
};
