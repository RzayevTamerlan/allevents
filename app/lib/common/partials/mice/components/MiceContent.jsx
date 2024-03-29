'use client';

import {useTranslation} from "react-i18next";
import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const MiceContent = () => {
  const { t } = useTranslation();

  return (
    <section className='py-[50px]' id='mice'>
      <div className="custom-container">
        <div className='flex flex-col gap-1 items-center justify-center'>
          <h6 className={`${openSans.className} text-3xl font-bold`}>MICE</h6>
          <p className='text-medium max-w-[700px] text-center leading-relaxed'>
            {t('mice-content')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiceContent;