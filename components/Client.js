import React from "react";

function Client({ t }) {
  return (
    <div className="flex justify-center px-8 md:px-0 pb-[70px] xl:pb-[225px] relative">
      <div className="flex flex-col items-start w-full max-w-[500px] md:max-w-[640px] xl:max-w-[1080px] 2xl:max-w-[1280px] z-10">
        <div className="flex items-center gap-[16px] -ml-[136px]">
          <div className="h-[2px] w-[120px] bg-main"></div>
          <h2 className="text-[24px] xl:text-[36px] font-semibold">
            {t("common:clientTtl")}
          </h2>
        </div>
        <h1 className="text-center w-full pt-[20px] xl:pt-[55px] text-[24px] xl:text-[64px] font-semibold">
          {t("common:TBA")}
        </h1>
      </div>
    </div>
  );
}

export default Client;
