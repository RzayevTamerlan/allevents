import HeroSection from "@partials/hero";
import AboutUsSection from "@partials/about-us";
import ContactsSection from "@partials/contacts";
import ServicesSection from "@partials/services";
import BusinessTravelSection from "@partials/buisness-travel";
import MiceSection from "@partials/mice";

export default function Home({params: {locale}}) {
  return (
    <main>
      <HeroSection locale={locale}/>
      <AboutUsSection locale={locale}/>
      <ServicesSection locale={locale}/>
      <BusinessTravelSection locale={locale}/>
      <MiceSection locale={locale}/>
      <ContactsSection locale={locale}/>
    </main>
  );
}
