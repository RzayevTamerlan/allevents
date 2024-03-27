import HeroSection from "@partials/hero";
import AboutUsSection from "@partials/about-us";
import ContactsSection from "@partials/contacts";
import ServicesContent from "@partials/services/components/ServicesContent";
import ServicesSection from "@partials/services";

export default function Home({params: {locale}}) {
  return (
    <main>
      <HeroSection locale={locale}/>
      <AboutUsSection locale={locale}/>
      <ServicesSection locale={locale}/>
      <ContactsSection locale={locale}/>
    </main>
  );
}
