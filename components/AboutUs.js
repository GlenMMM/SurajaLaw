import React from "react";

function AboutUs({ t }) {
  return (
    <div className="relative flex justify-center px-8 xl:px-0 py-[70px] xl:pt-[120px] xl:pb-[225px]">
      {/*<div className="sm:h-[200px] sm:w-[400px] border-2 border-boxBorder absolute top-[50px] sm:top-[70px] xl:top-0 -right-[100px] xl:right-[200px] z-0" />
      <div className="w-[300px] h-[180px] xl:w-[500px] xl:h-[500px] border-2 border-boxBorder absolute top-[60px] xl:top-0 -left-[140px] xl:-left-[50px] z-0" />
      <div className="w-[250px] h-[180px] sm:w-[400px] sm:h-[300px] border-2 border-boxBorder absolute top-[200px] xl:top-[220px] left-[50px] xl:left-[200px] z-0" />
      <div className="w-[200px] h-[140px] sm:h-[250px] md:w-[300px] lg:w-[400px] lg:h-[300px] border-2 border-boxBorder absolute top-[140px] md:top-[140px] -right-[30px] md:right-[40px] z-0 " />
      <div className="w-[200px] h-[140px] md:w-[400px] md:h-[350px] border-2 border-boxBorder absolute top-[360px] -left-[100px] z-0 " />
      <div className="w-[200px] h-[140px] md:h-[200px] lg:w-[350px] lg:h-[300px] xl:w-[500px] xl:h-[400px] border-2 border-boxBorder absolute top-[550px] -left-[100px] md:top-[350px] xl:top-[400px] md:left-[400px] xl:left-[500px] z-0" />

      <div className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] border-2 border-boxBorder absolute top-[440px] sm:top-[400px] md:top-[360px] xl:top-[380px] right-0 z-0" />
      <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[200px] lg:h-[200px] border-2 border-boxBorder absolute top-[600px] lg:top-[550px] right-0 sm:right-[40px] lg:right-[70px] z-0 " />
  */}
      <div className="flex flex-col items-start w-full max-w-[500px] md:max-w-[640px] xl:max-w-[1080px] 2xl:max-w-[1280px] z-10">
        <div className="flex items-center gap-[16px] -ml-[136px]">
          <div className="h-[2px] w-[120px] bg-main"></div>
          <h2 className="text-[24px] xl:text-[36px] font-lato">
            {t("common:aboutTtl")}
          </h2>
        </div>

        <h2 className="text-[24px] xl:text-[36px] py-[19px]">
          SURAJA <span className="text-subTwo">LAW OFFICES</span>
        </h2>
        <div className="flex flex-col items-start sm:items-center">
          <h2 className="text-[22px] font-semibold xl:text-[36px]">
            {t("common:aboutTag")}
          </h2>
          <p className="text-[16px] xl:text-[18px] pt-[26px] text-justify">
            {t("common:aboutDesc")}
          </p>
        </div>
        <div className="flex flex-col items-start sm:items-center">
          <h2 className="text-[22px] xl:text-[36px] py-[26px] font-semibold">
            {t("about:misiVisi")}
          </h2>
          <p className="text-[16px] xl:text-[18px] text-justify">
            {t("about:mvDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
