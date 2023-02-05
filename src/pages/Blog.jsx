import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import image from '../constants/image';

export const Blog = () => {
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
                    <div className='flex flex-col items-center gap-[48px]'>
                        <div className='w-full flex flex-col items-center gap-[32px] sm:items-start'>
                            <div className='text-[16px] text-[#1d2130] font-[500] leading-[26px]'>21 DEC 2021</div>
                            <div className='flex flex-col items-center text-center gap-[16px] sm:items-start sm:text-left'>
                                <div className='text-[56px] text-[#1d2130] font-[700] leading-[67px] md:text-[46px] md:leading-[56px] sm:text-[36px] sm:leading-[46px]'> Is climate change happening faster <br className='lg:hidden' /> than expected?</div>
                                <p className='text-[16px] font-[400] text-[#525560] leading-[26px]'>Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit.</p>
                            </div>
                        </div>
                        <img src={image.blog} alt="blog" className='w-full h-full object-cover rounded-[12px] lg:mb-[44px] sm:h-[220px]' />
                    </div>
                    <div className='flex flex-col items-start gap-[32px] m-[96px_128px_0_128px] lg:m-0'>
                        <div className='flex flex-col items-start gap-[32px]'>
                            <div className='text-[48px] text-[#1d2130] font-[700] leading-[58px] md:text-[38px] md:leading-[48px] sm:text-[34px] sm:leading-[42px]'>Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque</div>
                            <div className='flex flex-col items-start gap-[32px]'>
                                <p className='text-[16px] font-[400] text-[#525560] leading-[26px]'>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</p>
                                <p className='text-[16px] font-[400] text-[#525560] leading-[26px]'>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>
                                <p className='text-[16px] font-[400] text-[#525560] leading-[26px]'>Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='text-[28px] text-[#1d2130] font-[700] leading-[42px] md:text-[22px] md:leading-[32px]'>Transform Your Idea Into Reality with Ether a Leading Digital Agency</div>
                            <ul className='list-item list-disc ml-[20px]'>
                                <li className='text-[16px] font-[400] text-[#525560] leading-[26px]'>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis.</li>
                                <li className='text-[16px] font-[400] text-[#525560] leading-[26px]'>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</li>
                                <li className='text-[16px] font-[400] text-[#525560] leading-[26px]'>Mauris morbi sed dignissim a in nec aliquam fringilla et</li>
                                <li className='text-[16px] font-[400] text-[#525560] leading-[26px]'>Consectetur feugiat quis hac enim nullam in enim.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='text-[28px] text-[#1d2130] font-[700] leading-[42px] md:text-[22px] md:leading-[32px]'>Transform Your Idea Into Reality with Ether a Leading Digital Agency</div>
                            <ul className='list-item'>
                                <li className='text-[16px] font-[400] text-[#525560] leading-[26px] mb-[32px]'>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.</li>
                                <li className='text-[16px] font-[400] text-[#525560] leading-[26px]'>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};