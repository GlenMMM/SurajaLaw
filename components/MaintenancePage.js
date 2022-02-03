import React from "react";
import Image from "next/image";

function MaintenancePage() {
  return (
    <div className="bg-[#FBFFFF] w-full h-full min-h-screen flex justify-center items-center">
      <div className="max-w-[1920px] w-full h-full relative min-h-screen flex flex-col justify-center">
        <div className="absolute right-0 top-0 p-5 ">
          <div className="lg:w-60 lg:h-16 md:w-56 md:h-14 sm:w-40 sm:h-10 w-36 h-9 relative flex justify-end">
            <Image src="/surajalaw-logo.png" layout="fill" alt="logo" />
          </div>
        </div>
        <div className="relative flex justify-center items-center font-lato">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl px-10 pb-4">
            <h2 className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-[55px] text-[#294545] tracking-[1px] sm:tracking-[2px] md:tracking-[3.1px] lg:tracking-[2px]">
              UNDER MAINTENANCE
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl pt-2 lg:pt-5 text-[#A2854B] tracking-[0.7px] sm:tracking-[0.3px] lg:tracking-[2.1px]">
              Our website is currently under maintanance, kindly contact us at{" "}
              <span className="font-semibold underline cursor-pointer">
                <a href="mailto:info@surajalaw.com">info@surajalaw.com</a>
              </span>
              .
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 p-5 text-base leading-[18px] sm:text-lg sm:leading-[20px] md:text-xl md:leading-[22px] lg:text-2xl lg:leading-[26px] text-[#294545] font-barlow">
          <p>
            <span className="font-medium">
              Sampoerna Strategic Square South Tower Level 30{" "}
            </span>
            <br />
            <span className="font-light">
              Jl. Jendral Sudirman Kav 45-46
              <br />
              Jakarta 12930
              <br />
              Indonesia
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MaintenancePage;
