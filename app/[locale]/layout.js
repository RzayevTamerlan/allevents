import {Montserrat} from "next/font/google";
import "./globals.css";
import i18nConfig from "@/i18nConfig";
import Header from "@partials/header";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata = {
  title: "AllEvents.az",
  description: "Explore a comprehensive list of upcoming events. Find conferences, workshops, and seminars covering a wide range of topics.",
  keywords: ["events", "upcoming events", "conferences", "workshops", "seminars"],
  author: "Turizm.az",
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({locale}));
}

export default function RootLayout({children, params: {locale}}) {
  console.log(locale);
  return (
    <html lang={locale}>
    <head>
      <meta property="og:url" content="https://allevents.az"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="AllEvents.az"/>
      <meta property="og:description" content="Explore a comprehensive list of upcoming events. Find conferences, workshops, and seminars covering a wide range of topics."/>
      <meta property="og:image" content="/assets/hero/hero.webp"/>
    </head>
    <body className={montserrat.className}>
    <Header locale={locale}/>
    {children}
    </body>
    </html>
  );
}
