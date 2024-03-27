import TranslationsProvider from "@components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import ServicesContent from "@partials/services/components/ServicesContent";

const namespace = ['services'];

const ServicesSection = async ({locale}) => {
  const { resources } = await initTranslations(locale, namespace);

  return (
    <section id='services' className='py-[50px]'>
      <div className="custom-container">
        <TranslationsProvider resources={resources} locale={locale} namespaces={namespace}>
          <ServicesContent />
        </TranslationsProvider>
      </div>
    </section>
  );
};

export default ServicesSection;