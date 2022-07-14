import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ isOpen, toggle, route }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed z-30 top-0 w-full h-full lg:hidden translate-y-0 duration-700 transform ease-out "
          : "translate-y-[-100%]"
      }
    >
      <div className="absolute  top-0 right-0 z-30 w-full bg-bgCol h-full text-main overflow-hidden">
        <div className="absolute top-[70px] right-[45px] w-[250px] h-[250px] border-2 border-boxBorder z-0" />
        <div className="absolute top-[0px] right-[0px] w-[140px] h-[100px] border-2 border-boxBorder z-0" />
        <div className="absolute top-[0px] left-[0px] w-[100px] h-[120px] border-2 border-boxBorder z-0" />
        <div className="absolute top-[300px] left-[0px] w-[150px] h-[150px] border-2 border-boxBorder z-0" />
        <div className="absolute bottom-[0px] right-[0px] w-[250px] h-[100px] border-2 border-boxBorder z-0" />
        <div className="flex py-7 items-center justify-between px-10 md:px-24 z-10">
          <Link href="/" passHref>
            <Image
              className="object-contain cursor-pointer"
              src="/surajalaw-logo.png"
              alt="surajalaw logo"
              width={140}
              height={40}
            />
          </Link>

          <div className="cursor-pointer z-10" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="main"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="w-full flex flex-col h-full justify-start pt-[160px] z-40">
          <ul
            className="px-5 pt-3 text-[22px] -mt-40 text-subTwo w-full z-10"
            onClick={toggle}
          >
            <li className="w-full">
              <Link href="/" passHref>
                <a className={`block py-3 px-5`}>Home</a>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/about" passHref>
                <a className={`block py-3 px-5`}>About</a>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/#services" passHref>
                <a className={`block py-3 px-5`}>Services</a>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/#contact" passHref>
                <a className={`block py-3 px-5`}>Contact us</a>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col text-[16px] px-10 gap-[8px] absolute bottom-[40px]">
            <p>Sampoerna Strategic Square South Tower Level 30</p>
            <p>Jl. Jendral Sudirman Kav 45-46</p>
            <p>Jakarta 12930</p>
            <p>Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
