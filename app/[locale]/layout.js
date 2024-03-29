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
  robots: "index, follow",
  ogTitle: "All Events - Turizm.az",
  ogDescription: "Explore a comprehensive list of upcoming events. Find conferences, workshops, and seminars covering a wide range of topics.",
  ogType: "website",
  ogUrl: "https://allevents.az/",
  ogImage: "/assets/hero/hero.webp",
  twitterCard: "summary_large_image",
  twitterTitle: "All Events - Your Company Name",
  twitterDescription: "Explore a comprehensive list of upcoming events. Find conferences, workshops, and seminars covering a wide range of topics.",
  twitterImage: "/assets/hero/hero.webp",
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({locale}));
}

export default function RootLayout({children, params: {locale}}) {
  return (
    <html lang={locale}>
    <head>
      <meta property="og:url" content="https://allevents.az"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="AllEvents.az"/>
      <meta property="og:description" content="Explore a comprehensive list of upcoming events. Find conferences, workshops, and seminars covering a wide range of topics."/>
      <meta property="og:image" content="/assets/hero/hero2.png"/>
    </head>
    <body className={montserrat.className}>
    <Header locale={locale}/>
    {children}
    </body>
    </html>
  );
}
