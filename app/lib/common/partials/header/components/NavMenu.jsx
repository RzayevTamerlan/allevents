import Link from "next/link";
import initTranslations from "@/app/i18n";
import Image from "next/image";
import {Dropdown} from "antd";

import "@partials/header/styles/dropdown.css";

const NavMenu = async ({locale}) => {
  const {t} = await initTranslations(locale, ['header']);

  const navList = [
    {
      label: 'services',
      list: [
        {
          key: '1',
          label: (
            <Link className='text-base font-semibold text-nav-menu-item' href='#services'>{t('airticket')}</Link>
          )
        },
        {
          key: '2',
          label: (
            <Link className='text-base font-semibold text-nav-menu-item' href='#services'>{t('transport')}</Link>
          )
        },
        {
          key: '3',
          label: (
            <Link className='text-base font-semibold text-nav-menu-item' href='#services'>{t('businesstrips')}</Link>
          )
        },
        {
          key: '4',
          label: (
            <Link className='text-base font-semibold text-nav-menu-item' href='#services'>{t('visa')}</Link>
          )
        },
        {
          key: '5',
          label: (
            <Link className='text-base font-semibold text-nav-menu-item' href='#services'>{t('conferences')}</Link>
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
  ]

  return (
    <ul className='flex items-center gap-7'>
      {navList.map((navItem, i) => {
        if (navItem?.href) {
          return (
            (
              <li key={i}>
                <Link target={navItem.target || '_self'} className='text-medium transition-all duration-300 hover:text-secondary text-black font-bold'
                      href={navItem.href}>
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