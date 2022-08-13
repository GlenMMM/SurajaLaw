import React from "react";

function About({ t }) {
  return (
    <div className="relative flex justify-center pb-[70px] xl:pb-[225px] px-8 md:px-0">
      <div className="xl:w-[300px] xl:h-[400px] border-2 border-boxBorder absolute top-0 left-[100px] z-0" />
      <div className="xl:w-[300px] xl:h-[300px] border-2 border-boxBorder absolute top-[170px] left-[210px] z-0" />

      <div className="flex flex-col items-start w-full max-w-[500px] md:max-w-[640px] xl:max-w-[1080px] 2xl:max-w-[1280px] z-10">
        <div className="flex items-center gap-[16px] -ml-[136px]">
          <div className="h-[2px] w-[120px] bg-main"></div>
          <h2 className="text-[24px] xl:text-[36px] font-semibold">
            {t("common:aboutTtl")}
          </h2>
        </div>

        <h2 className="text-[24px] xl:text-[36px] py-[19px]">
          SURAJA <span className="text-subTwo">LAW OFFICES</span>
        </h2>
        <div className="flex flex-col items-center ">
          <h2 className="text-[22px] xl:text-[36px] font-semibold">
            {t("common:aboutTag")}
          </h2>
          <p className="text-[16px] xl:text-[18px] pt-[26px] text-justify">
            {t("common:aboutDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
