import Head from "next/head";
import Image from "next/image";
import MaintenancePage from "../components/MaintenancePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suraja Law Offices</title>
        <meta name="title" content="Suraja Law Offices" />
        <meta
          name="description"
          content="Website under maintenance, we will be back soon"
        />
        <link rel="icon" href="/surajalaw.png" />
      </Head>
      <div className="hidden sm:block">
        <Image src="/bg-shape.png" layout="fill" alt="bg-image" />
      </div>
      <div className="sm:hidden">
        <Image src="/bg-shape-phone.png" layout="fill" alt="bg-image" />
      </div>
      <MaintenancePage />
    </div>
  );
}
