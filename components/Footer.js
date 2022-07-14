import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-footerCol xl:pt-[40px]">
      <div className="flex flex-col items-start w-full max-w-[500px] md:max-w-[640px] xl:max-w-[1080px] 2xl:max-w-[1280px] md:py-[28px] px-8 md:px-0 z-10">
        <div className="hidden md:flex justify-between w-full">
          <div>
            <div className="flex items-start text-black ">
              <Link href="/" passHref>
                <Image
                  className="object-contain cursor-pointer"
                  src="/surajalaw-logo.png"
                  alt="surajalaw logo"
                  width={220}
                  height={60}
                />
              </Link>
            </div>
            <div className="flex flex-col gap-[8px] py-[12px]">
              <p>Sampoerna Strategic Square South Tower Level 30</p>
              <p>Jl. Jendral Sudirman Kav 45-46</p>
              <p>Jakarta 12930</p>
              <p>Indonesia</p>
            </div>
          </div>
          <div className="hidden md:flex">
            <ul className="cursor-pointer flex flex-col gap-[8px]">
              <h4 className="text-[24px] font-semibold">Menu</h4>
              <Link href="/" passHref>
                <li className="text-subTwo hover:font-semibold">Home</li>
              </Link>
              <Link href="/about" passHref>
                <li className="text-subTwo hover:font-semibold">About</li>
              </Link>
              <Link href="/#services" passHref>
                <li className="text-subTwo hover:font-semibold">Services</li>
              </Link>
              <Link href="/#contact" passHref>
                <li className="text-subTwo hover:font-semibold">Contact us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-main xl:py-[22px] py-[14px] px-8 md:px-0">
        <div className="flex justify-between items-center w-full max-w-[500px] md:max-w-[640px] xl:max-w-[1080px] 2xl:max-w-[1280px]">
          <p className="text-white text-[12px] md:text-[14px]">
            © 2021 Suraja Law Offices. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
