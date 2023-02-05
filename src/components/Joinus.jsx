import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import image from '../constants/image';

const Joinus = () => {

    const [ popup, setPopup ] = useState(false);

  return (
    <>
        <div className='relative p-[96px_0_96px_0] md:p-[64px_0_20px_0]'>
            <div className="main-container">
                <div className='relative w-full h-[384px] overflow-hidden rounded-[12px]'>
                    <img src={image.joinus} alt="join us" className='w-full h-full object-cover' />
                    <div className='w-full h-full absolute top-0 left-0 bg-[#0B0706] opacity-[0.5]'></div>
                    <div className='w-full h-full p-[92px_0_92px_0] absolute top-0 left-0 flex items-center justify-center flex-col gap-[32px] lg:p-[86px_20px_86px_20px] md:p-[60px_20px_60px_20px]'>
                        <div className="global-heading second text-center">You can contribute to make <br className='md:hidden' /> the environment greener!</div>
                        <div className='flex items-center gap-[32px] sm:flex-col sm:gap-[24px]'>
                            <div onClick={() => setPopup(true)} className='global-btn thrid'>Join as a volunteer</div>
                            <Link to='/donation' className='global-btn second'>Donate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {popup && (
            <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center popup z-[100] md:p-[0_30px_0_30px]'>
                <motion.div initial={{ y: '80px', opacity: 0 }} animate={{ y: 0, opacity: 1 }}  className='relative w-[640px] h-[684px] bg-[#fff] rounded-[8px] p-[48px] md:w-full md:h-auto md:p-[38px]'>
                    <div onClick={() => setPopup(false)} className='absolute top-[24px] right-[24px] w-[32px] h-[32px] bg-[#1d2130] flex items-center justify-center rounded-[4px] cursor-pointer'>
                        <VscChromeClose fontSize={18} color='#fff' />
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <div className='flex flex-col items-start gap-[16px] md:gap-[8px]'>
                            <div className='text-[40px] leading-[56px] font-[600] text-[#1d2130] md:text-[32px] md:leading-[46px]'>Join as a volunteer</div>
                            <p className='text-[14px] leading-[22px] font-[400] text-[#525560]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius enim in eros <br className='md:hidden' /> elementum tristique.</p>
                        </div>
                        <div className='w-full flex flex-col items-start gap-[32px] mt-[32px] md:gap-[22px] md:mt-[26px]'>
                            <form className='w-full flex items-center gap-[32px] md:flex-col md:gap-[22px]'>
                                <div className='w-full flex flex-col items-start gap-[8px]'>
                                    <label className='text-[12px] font-[700] leading-[19px] text-[#1d2130] opacity-[0.6]'>First Name</label>
                                    <input type="text" className='w-full border-b-[1px] border-[#e5e5e5] outline-none p-[4px_0_4px_0] hover:border-[#1d2130]' required />
                                </div>
                                <div className='w-full flex flex-col items-start gap-[8px]'>
                                    <label className='text-[12px] font-[700] leading-[19px] text-[#1d2130] opacity-[0.6]'>Last Name</label>
                                    <input type="text" className='w-full border-b-[1px] border-[#e5e5e5] outline-none p-[4px_0_4px_0] hover:border-[#1d2130]' required />
                                </div>
                            </form>
                            <form className='w-full flex items-start flex-col gap-[8px]'>
                                <label className='text-[12px] font-[700] leading-[19px] text-[#1d2130] opacity-[0.6]'>Email Id</label>
                                <input type="text" className='w-full border-b-[1px] border-[#e5e5e5] outline-none p-[4px_0_4px_0] hover:border-[#1d2130]' required />
                            </form>
                            <form className='w-full flex items-start flex-col gap-[8px]'>
                                <label className='text-[12px] font-[700] leading-[19px] text-[#1d2130] opacity-[0.6]'>Message</label>
                                <textarea placeholder='Type your Messege' className='w-full h-[156px] border border-[#e5e5e5] p-[20px] rounded-[4px] resize-none outline-none hover:border-[#1d2130] md:p-[15px] md:h-[136px]'></textarea>
                            </form>
                            <input type="submit" value="Send message" className='global-btn thrid cursor-pointer' required />
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
    </>
  );
};

export default Joinus;