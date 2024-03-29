import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ListItem = ({ icon, label, linkText, link, alt }) => {
  const { t } = useTranslation();

  return (
    link ? (
      <Link target='_blank' href={link} className='py-12 w-full h-full px-10 flex flex-col transition-all duration-300 hover:scale-105 gap-4 items-center bg-contacts-item text-contacts-label border border-1 border-white'>
        <Image src={icon} height='48' width='48' alt={alt} />
        <p className='text-inherit uppercase font-semibold text-center text-sm lg:text-medium'>
          {t(label)}
        </p>
        {linkText && <span className='text-inherit text-base text-center'>{t(linkText)}</span>}
      </Link>
    ) : (
      <div className='py-12 h-full px-10 flex flex-col transition-all duration-300 hover:scale-105 gap-4 items-center bg-contacts-item text-contacts-label border border-1 border-white'>
        <Image src={icon} height='48' width='48' alt={alt} />
        <h6 className='text-inherit uppercase font-semibold text-center text-sm lg:text-medium'>
          {t(label)}
        </h6>
        {linkText && <span className='text-inherit text-base text-center'>{t(linkText)}</span>}
      </div>
    )
  );
};

export default ListItem;
