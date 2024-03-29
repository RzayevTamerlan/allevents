import initTranslations from "@/app/i18n";
import TranslationsProvider from "@components/TranslationsProvider";
import ContactsContent from "@partials/contacts/components/ContactsContent";

const namespace = ['contacts'];

const ContactsSection = async ({locale}) => {
  const { resources } = await initTranslations(locale, namespace);

  return (
    <section id='contact' className='py-[35px] lg:py-[90px]'>
      <div className="custom-container">
        <TranslationsProvider resources={resources} locale={locale} namespaces={namespace}>
          <ContactsContent />
        </TranslationsProvider>
      </div>
    </section>
  );
};

export default ContactsSection;