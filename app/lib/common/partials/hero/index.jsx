import Image from "next/image";
import HeroContent from "@partials/hero/components/HeroContent";
import TranslationsProvider from "@components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const namespace = ['hero'];

const HeroSection = async ({locale}) => {
  const { resources } = await initTranslations(locale, namespace)

  return (
    <section className='background bg-fixed bg-cover bg-center w-full h-[475px] mt-[82px]' style={{backgroundImage: "url('/assets/hero/hero.png')"}}>
      <div className='custom-container h-full'>
        <TranslationsProvider namespaces={namespace} resources={resources} locale={locale} >
          <HeroContent locale={locale}/>
        </TranslationsProvider>
      </div>
    </section>
  );
};

export default HeroSection;