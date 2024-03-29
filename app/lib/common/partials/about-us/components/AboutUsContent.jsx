'use client';

import {useTranslation} from "react-i18next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });

const AboutUsContent = () => {
  const { t } = useTranslation();

  return (
    <div className='flex items-start gap-10'>
      <h2 className={`${openSans.className} text-base max-w-[734px]`}>
        {t('about-us')}
      </h2>
      <div className='h-[200px] w-[1px] border border-solid border-blue-500'></div>
      <div className='flex flex-col gap-5 max-w-[375px]'>
        <p className={`font-bold text-larger ${openSans.className}`}>{t('about-us-touch')}</p>
        <h3 className={`text-base ${openSans.className}`}>
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