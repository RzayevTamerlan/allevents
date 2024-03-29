'use client';

import {useTranslation} from "react-i18next";
import {useBurger} from "@partials/header/state/useBurger";
import Link from "next/link";

const BurgerMenu = () => {
  const { t } = useTranslation();
  const isOpen = useBurger((state) => state.isOpen);
  const close = useBurger((state) => state.close);

  const navList = [
    {
      label: 'services',
      href: '#services'
    },
    {
      label: 'about-us',
      href: '#about-us'
    },
    {
      label: 'mice',
      href: '#mice'
    },
    {
      label: 'trips',
      href: '#trips'
    },
    {
      label: 'sportsevents',
      href: 'https://allevents-az.tickets-partners.com/',
      target: '_blank'
    },
    {
      label: 'contacts',
      href: '#contact'
    },
  ];

  return (
    <div className={`${isOpen ? 'max-h-[800px]' : 'max-h-0'}  overflow-hidden absolute top-[100%] left-0 right-0 transition-all duration-500 bg-nav-menu-item`}>
      <ul className='flex items-center justify-center py-7 flex-col gap-3'>
        {navList.map((navItem, i) =>(
          <li key={i}>
            <Link onClick={close} target={navItem.target || '_self'} className='text-medium transition-all duration-300 hover:text-secondary text-white font-bold'
                  href={navItem.href}>
              {t(navItem.label)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;