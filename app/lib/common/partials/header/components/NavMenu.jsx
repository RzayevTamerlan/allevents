import Link from "next/link";
import initTranslations from "@/app/i18n";

const navList = [{
  label: 'services',
  href: '#services'
},
  {
    label: 'about-us',
    href: '#about-us'
  }
]

const NavMenu = async ({locale}) => {
  const { t } = await initTranslations(locale, ['header']);

  return (
    <ul className='flex items-center gap-5'>
      {navList.map((navItem, i) => (
        <li key={i}>
          <Link className='text-medium transition-all duration-300 hover:text-secondary text-black font-bold' href={navItem.href}>
            {t(navItem.label)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;