import initTranslations from "@/app/i18n";
import TranslationsProvider from "@components/TranslationsProvider";
import BusinessContent from "@partials/buisness-travel/components/BusinessContent";

const namespace = ['business-travel'];

const BusinessTravelSection = async ({locale}) => {
  const {resources} = initTranslations(locale, namespace);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={namespace}>
      <BusinessContent />
    </TranslationsProvider>
  );
};

export default BusinessTravelSection;