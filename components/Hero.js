import React from "react";
import Link from "next/link";

function Hero({ t }) {
  return (
    <div className="flex justify-center items-center px-8 md:px-0 w-full relative">
      <div className="w-[240px] h-[200px] sm:w-[400px] border-2 border-boxBorder absolute top-[50px] sm:top-[70px] xl:top-0 -right-[100px] xl:right-[200px] z-0" />
      <div className="w-[300px] h-[180px] xl:w-[500px] xl:h-[500px] border-2 border-boxBorder absolute top-[60px] xl:top-0 -left-[140px] xl:-left-[50px] z-0" />
      <div className="w-[250px] h-[180px] sm:w-[400px] sm:h-[300px] border-2 border-boxBorder absolute top-[160px] xl:top-[220px] left-[50px] xl:left-[200px] z-0" />
      <div className="sm:h-[250px] md:w-[300px] lg:w-[400px] lg:h-[300px] border-2 border-boxBorder absolute top-[170px] md:top-[140px] -right-[30px] md:right-[40px] z-0 " />
      <div className="w-[200px] h-[240px] md:w-[400px] md:h-[350px] border-2 border-boxBorder absolute top-[280px] -left-[100px] z-0 " />
      <div className="md:h-[200px] lg:w-[350px] lg:h-[300px] xl:w-[500px] xl:h-[400px] border-2 border-boxBorder absolute top-[550px] -left-[100px] md:top-[350px] md:left-[400px] xl:left-[500px] z-0 " />
      <div className="lg:w-[200px] lg:h-[200px] border-2 border-boxBorder absolute top-[440px] sm:top-[400px] md:top-[360px] xl:top-[380px] right-0 z-0" />
      <div className="sm:w-[140px] sm:h-[140px] lg:w-[200px] lg:h-[200px] border-2 border-boxBorder absolute top-[600px] lg:top-[550px] right-0 sm:right-[40px] lg:right-[70px] z-0 " />
      <div className="sm:w-[240px] lg:w-[330px] lg:h-[440px] xl:w-[430px] border-2 border-boxBorder absolute top-[800px] lg:top-[730px] xl:top-[670px] xl:right-[100px] right-0 z-0" />
      <div className="2xl:w-[560px] 2xl:h-[600px] border-2 border-boxBorder absolute top-[300px] right-[300px] z-0 " />
      <div className="z-10 w-full flex items-center justify-center">
        <div className="flex flex-col items-start w-full max-w-[500px] md:max-w-[640px] xl:max-w-[1080px] 2xl:max-w-[1280px] py-[70px] xl:pt-[200px] xl:pb-[320px] gap-y-[25px]">
          <h1 className="text-[32px] xl:text-[90px] xl:w-[800px]">
            {t("common:heroTag")}
          </h1>
          <h3 className="text-[18px] xl:text-[32px] text-subTwo">
            {t("common:heroSub")}
          </h3>
          <button className="border border-subOne px-4 py-2 text-[19px]">
            <Link href="#contact">
              <a>{t("common:heroBtn")}</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
