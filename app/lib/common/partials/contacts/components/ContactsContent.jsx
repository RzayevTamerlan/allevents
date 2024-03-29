'use client';

import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {Open_Sans} from "next/font/google";
import ListItem from "@ui/ListItem";

const openSans = Open_Sans({ subsets: ["latin"] });

const contactsList = [
  {
    icon: '/assets/icons/address.svg',
    label: 'address',
    linkText: 'address-text',
    alt: 'Address',
    link: 'https://maps.app.goo.gl/YChRYB7gpSiTePZ76'
  },
  {
    icon: '/assets/icons/phone-call.svg',
    label: 'call-us',
    linkText: 'call-us-text',
    alt: 'phone-call',
    link: 'tel:+994552164476'
  },
  {
    icon: '/assets/icons/email.svg',
    label: 'email-us',
    linkText: 'email-us-text',
    alt: 'email us',
    link: 'mailto:office@allevents.az'
  },
]

const ContactsContent = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-5 lg:gap-10 items-center'>
      <h5 className={`${openSans.className} text-2xl lg:text-3xl font-semibold max-w-[734px]`}>{t('contacts')}</h5>
      <ul className='grid gap-5 grid-cols-1 md:grid-cols-3'>
        {contactsList.map((contact, index) => (
          <li key={index}>
            <ListItem label={contact.label} link={contact.link} alt={contact.alt} linkText={contact.linkText} icon={contact.icon}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsContent;