import TranslationsProvider from "@components/TranslationsProvider";
import AboutUsContent from "@partials/about-us/components/AboutUsContent";
import initTranslations from "@/app/i18n";

const namespace = ['about-us'];

const AboutUsSection = async ({locale}) => {
  const {resources} = await initTranslations(locale, namespace);

  return (
    <section id='about-us' className='pt-[40px] lg:pt-[90px]'>
      <div className="custom-container">
        <TranslationsProvider resources={resources} locale={locale} namespaces={namespace}>
          <AboutUsContent />
        </TranslationsProvider>
      </div>
    </section>
  );
};

export default AboutUsSection;