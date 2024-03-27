import Logo from "@ui/Logo";
import NavMenu from "@partials/header/components/NavMenu";
import LanguageSelect from "@partials/header/components/LanguageSelect";


const Header = ({locale}) => {
  return (
    <header className='bg-white shadow-xl py-5 fixed top-0 left-0 right-0 z-30'>
      <div className="custom-container">
        <div className='flex items-center justify-between'>
          <Logo />
          <NavMenu locale={locale}/>
          <LanguageSelect locale={locale}/>
        </div>
      </div>
    </header>
  );
};

export default Header;