'use client';

import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useTranslation} from "react-i18next";

const HeroContent = () => {

  const { t } = useTranslation()

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='flex flex-col justify-center h-full'>
      <h1 className='text-white flex flex-col text-xl font-bold' data-aos="fade-right">
        {t('hero-content')}
        <span className='text-hero-subcontent text-xl font-bold'>{t('hero-subcontent')}</span>
      </h1>
      <p className='text-white font-bold text-larger' data-aos="fade-right" data-aos-delay="200">{t('hero-subtext')}</p>
      <button className='px-5 py-2.5 mt-4 text-white font-semibold text-base w-fit bg-hero-btn rounded-full' data-aos="fade-right" data-aos-delay="300">
        {t('hero-explore')}
      </button>
    </div>
  );
};

export default HeroContent;