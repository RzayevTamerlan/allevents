'use client';

import {Open_Sans} from "next/font/google";
import {useTranslation} from "react-i18next";
import ListItem from "@ui/ListItem";

const openSans = Open_Sans({ subsets: ["latin"] });

const servicesList = [
  {
    icon: '/assets/icons/aviaticket.svg',
    label: 'aviatickets',
    alt: 'Avia Tickets',
  },
  {
    icon: '/assets/icons/transport.svg',
    label: 'transport',
    alt: 'Transports',
  },
  {
    icon: '/assets/icons/trips.svg',
    label: 'buisness-trips',
    alt: 'Trips',
  },
  {
    icon: '/assets/icons/documents.svg',
    label: 'visa-support',
    alt: 'Visa Support',
  },
  {
    icon: '/assets/icons/conf.svg',
    label: 'confs',
    alt: 'Conferences',
  },
  {
    icon: '/assets/icons/events.svg',
    label: 'buisness-events',
    alt: 'Buisness Events',
  },
]

const ServicesContent = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-10'>
      <h3 className={`${openSans.className} text-3xl font-semibold text-center`}>
        {t('services')}
      </h3>
      <ul className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {servicesList.map((services, index) => (
          <li key={index}>
            <ListItem alt={services.alt} icon={services.icon} label={services.label} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesContent;