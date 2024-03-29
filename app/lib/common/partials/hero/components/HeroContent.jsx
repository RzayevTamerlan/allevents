'use client';

import {useTranslation} from "react-i18next";

const HeroContent = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col justify-center h-full'>
      <h1 className='text-white flex flex-col text-xl font-bold'>
        {t('hero-content')}
        <span className='text-hero-subcontent text-xl font-bold'>{t('hero-subcontent')}</span>
      </h1>
      <p className='text-white font-bold text-larger'>{t('hero-subtext')}</p>
      <button className='px-5 py-2.5 mt-4 text-white font-semibold text-base w-fit bg-hero-btn rounded-full'>
        {t('hero-explore')}
      </button>
    </div>
  );
};

export default HeroContent;