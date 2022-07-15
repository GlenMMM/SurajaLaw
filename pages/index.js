import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Client from "../components/Client";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-bgCol overflow-hidden w-full">
      <Head>
        <title>Suraja Law Offices</title>
        <meta name="title" content="Suraja Law Offices" />
        <meta
          name="description"
          content="SURAJA Law Offices is a Jakarta based law firm offering a full range of Indonesian legal services. At SURAJA, we focus on constantly delivering the highest quality legal services to meet our client’s needs. Each of our lawyers are equipped with profound knowledge and extensive experience in his/her fields of law."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/surajalaw.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://surajalaw.com/" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:title" content="Suraja Law Offices" />
        <meta
          property="og:description"
          content="SURAJA Law Offices is a Jakarta based law firm offering a full range of Indonesian legal services. At SURAJA, we focus on constantly delivering the highest quality legal services to meet our client’s needs. Each of our lawyers are equipped with profound knowledge and extensive experience in his/her fields of law."
        />
        <meta property="og:image" content="/surajalaw.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://surajalaw.com/" />
        <meta property="twitter:title" content="Suraja Law Offices" />
        <meta
          property="twitter:description"
          content="SURAJA Law Offices is a Jakarta based law firm offering a full range of Indonesian legal services. At SURAJA, we focus on constantly delivering the highest quality legal services to meet our client’s needs. Each of our lawyers are equipped with profound knowledge and extensive experience in his/her fields of law."
        />
        <meta property="twitter:image" content="/surajalaw.png" />
      </Head>
      <Navigation t={t} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Client t={t} />
      <Contact t={t} />
      <Whatsapp />
      <Footer t={t} />
    </div>
  );
}
