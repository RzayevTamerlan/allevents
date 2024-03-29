import Logo from "@ui/Logo";
import NavMenu from "@partials/header/components/NavMenu";
import LanguageSelect from "@partials/header/components/LanguageSelect";
import BurgerBtn from "@partials/header/components/BurgerBtn";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@components/TranslationsProvider";
import BurgerMenu from "@partials/header/components/BurgerMenu";

const namespace = ['header'];

const Header = async ({locale}) => {
  const {resources} = await initTranslations(locale, namespace);

  return (
    <header className='bg-white shadow-xl py-5 fixed top-0 left-0 right-0 z-30'>
      <div className="custom-container">
        <div className='flex items-center justify-between'>
          <Logo/>
          <TranslationsProvider locale={locale} namespaces={namespace} resources={resources}>
              <NavMenu />
          </TranslationsProvider>
          <div className='flex items-center gap-5'>
            <LanguageSelect locale={locale}/>
            <BurgerBtn/>
          </div>
        </div>
      </div>
      <TranslationsProvider locale={locale} namespaces={namespace} resources={resources}>
        <BurgerMenu/>
      </TranslationsProvider>
    </header>
  );
};

export default Header;