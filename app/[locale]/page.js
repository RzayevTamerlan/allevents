import HeroSection from "@partials/hero";
import AboutUsSection from "@partials/about-us";

export default function Home({params: {locale}}) {
  return (
    <main>
      <HeroSection locale={locale}/>
      <AboutUsSection locale={locale}/>
    </main>
  );
}
