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
      <section className='py-[80px]' id='sportsevents'>
        <div className="custom-container">
          <iframe className='w-full h-[800px]' src="https://allevents-az.tickets-partners.com/"></iframe>
        </div>
      </section>
      <ContactsSection locale={locale}/>
    </main>
  );
}
