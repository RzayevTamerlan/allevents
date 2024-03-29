import initTranslations from "@/app/i18n";
import TranslationsProvider from "@components/TranslationsProvider";
import MiceContent from "@partials/mice/components/MiceContent";

const namespace = ['mice'];

const MiceSection = async ({locale}) => {
  const { resources } = await initTranslations(locale, namespace)

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={namespace}>
      <MiceContent/>
    </TranslationsProvider>
  );
};

export default MiceSection;