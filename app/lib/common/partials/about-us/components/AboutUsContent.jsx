'use client';

import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {useTranslation} from "react-i18next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });

const AboutUsContent = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='flex items-start gap-10'>
      <h2 className={`${openSans.className} text-base max-w-[734px]`} data-aos='fade-right'>
        {t('about-us')}
      </h2>
      <div className='h-[200px] w-[1px] border border-solid border-blue-500' data-aos='fade-up' data-aos-delay='100'></div>
      <div className='flex flex-col gap-5 max-w-[375px]'>
        <p className={`font-bold text-larger ${openSans.className}`} data-aos='fade-left' data-aos-delay='200'>{t('about-us-touch')}</p>
        <h3 className={`text-base ${openSans.className}`} data-aos='fade-left' data-aos-delay='300'>
          <Link className={`text-base mr-1 text-secondary ${openSans.className}`} target='_blank' href='https://wa.me/+994502103543'>
            {t('about-us-contact-us')}
          </Link>
          {t('about-us-contact')}
        </h3>
      </div>
    </div>
  );
};

export default AboutUsContent;