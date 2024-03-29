'use client';

import Link from "next/link";
import Image from "next/image";
import {Dropdown} from "antd";

import "@partials/header/styles/dropdown.css";
import {useTranslation} from "react-i18next";

const NavMenu =  () => {
  const {t} = useTranslation();

  const handleClick = (e, anchore) => {
    e.preventDefault();
    if(anchore === 'https://allevents-az.tickets-partners.com/') {
      window.open(anchore, '_blank');
      return;
    }
    const element = document.querySelector(anchore);
    element.scrollIntoView({behavior: 'smooth'});
  }

  const navList = [
    {
      label: 'services',
      list: [
        {
          key: '1',
          label: (
            <Link onClick={(e) => handleClick(e, '#services')} className='text-base font-semibold text-nav-menu-item' href='#'>{t('airticket')}</Link>
          )
        },
        {
          key: '2',
          label: (
            <Link onClick={(e) => handleClick(e, '#services')} className='text-base font-semibold text-nav-menu-item' href='#'>{t('transport')}</Link>
          )
        },
        {
          key: '3',
          label: (
            <Link onClick={(e) => handleClick(e, '#services')} className='text-base font-semibold text-nav-menu-item' href='#'>{t('businesstrips')}</Link>
          )
        },
        {
          key: '4',
          label: (
            <Link onClick={(e) => handleClick(e, '#services')} className='text-base font-semibold text-nav-menu-item' href='#'>{t('visa')}</Link>
          )
        },
        {
          key: '5',
          label: (
            <Link onClick={(e) => handleClick(e, '#services')} className='text-base font-semibold text-nav-menu-item' href='#'>{t('conferences')}</Link>
          )
        }
      ]
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
    <ul className='hidden lg:flex items-center gap-7'>
      {navList.map((navItem, i) => {
        if (navItem?.href) {
          return (
            (
              <li key={i}>
                <Link onClick={(e) => handleClick(e, navItem.href)} target={navItem.target || '_self'} className='text-medium transition-all duration-300 hover:text-secondary text-black font-bold'
                      href={'#'}>
                  {t(navItem.label)}
                </Link>
              </li>
            )
          )
        }
        return (
          <li key={i}>
            <Dropdown
              placement="bottomLeft"
              trigger={['hover']}
              menu={{
                items: navItem.list,
              }}
            >
              <button className='flex items-center gap-1.5 text-medium transition-all duration-300 hover:text-secondary text-black font-bold'>
                {t(navItem.label)} <Image alt='Arrow down' width='10' height='10' src='/assets/icons/arrow-down.svg'/>
              </button>
            </Dropdown>
          </li>
        )
      })}
    </ul>
  );
};

export default NavMenu;