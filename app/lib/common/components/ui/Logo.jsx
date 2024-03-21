'use client';

import Image from "next/image";

const Logo = () => {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button onClick={handleLogoClick} className='max-w-[200px] max-h-[111px]'>
      <Image className='w-full h-full object-cover' width='200' height='111' src='/assets/logo/logo.png'
             alt='All events'/>
    </button>
  );
};

export default Logo;