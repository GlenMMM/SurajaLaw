import React from "react";
import Link from "next/link";

function Hero({ t }) {
  return (
    <div className="flex justify-center items-center px-8 md:px-0 w-full relative">
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
