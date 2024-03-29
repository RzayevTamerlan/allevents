'use client';

import {useTranslation} from "react-i18next";
import {Open_Sans} from "next/font/google";
import {useEffect} from "react";
import Image from "next/image";

const openSans = Open_Sans({ subsets: ["latin"] });

const servicesList = [
  {
    id: 1,
    title: 'trips-exp'
  },
  {
    id: 2,
    title: 'trips-approach'
  },
  {
    id: 3,
    title: 'trips-partner'
  },
  {
    id: 4,
    title: 'trips-price'
  },
  {
    id: 5,
    title: 'trips-services'
  },
]

const BusinessContent = () => {
  const { t } = useTranslation();

  return (
    <section className='py-[90px]' id='trips'>
      <div className="custom-container">
        <div className='flex flex-col items-center justify-center'>
          <h4 className={`${openSans.className} text-3xl font-semibold max-w-[734px]`}>
            {t('trips')}
          </h4>
          <p className='text-medium text-center mt-5 max-w-[500px] leading-relaxed'>{t('trips-content')}</p>
          <ul className='grid grid-cols-3 gap-y-5 mt-10'>
            {servicesList.map((service) => (
              <li key={service.id}>
                <p className='text-base flex items-center gap-2 font-semibold'>
                  <Image width='30' height='30' alt='Success' src='/assets/icons/success.svg'/>
                  {t(service.title)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessContent;