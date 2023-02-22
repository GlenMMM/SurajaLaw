import Link from "next/link";
import Image from "next/image";

const Navbar = ({ toggle, route, router, t }) => {
  return (
    <nav
      className="flex justify-center items-center fixed md:relative top-0 z-30 px-4 py-2 md:px-20 2xl:px-0 w-full bg-bgCol md:bg-transparent"
      role="navigation"
    >
      <div className="flex justify-between items-center w-full max-w-[500px] md:max-w-[640px] xl:max-w-[980px] 2xl:max-w-[1280px] pt-2">
        <div className="md:flex hidden space-x-10 items-center justify-center text-black xl:text-[18px]">
          <Link className="p-4" href="/" passHref>
            <a className={`hover:opacity-100 opacity-80 items-center gap-2 `}>
              {t("common:navHome")}
            </a>
          </Link>
          <Link className="p-4" href="/about" passHref>
            <a className={`hover:opacity-100 opacity-80 items-center gap-2`}>
              {t("common:navAbout")}
            </a>
          </Link>
          <Link className="p-4" href="/#services" passHref>
            <a
              className={`hover:opacity-100 opacity-80 items-center gap-2
              }`}
            >
              {t("common:navServices")}
            </a>
          </Link>
          <Link className="p-4" href="/#contact" passHref>
            <a className={`hover:opacity-100 opacity-80 items-center gap-2`}>
              {t("common:navContact")}
            </a>
          </Link>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="md:flex px-4 items-center text-black hidden">
            <Link href="/" passHref>
              <Image
                className="object-contain cursor-pointer "
                src="/surajalaw-logo.png"
                alt="surajalaw logo"
                width={180}
                height={65}
              />
            </Link>
          </div>
          <div className="md:absolute md:right-0 md:-mr-[50px]">
            {router.locale === "en-US" ? (
              <Link href={router.asPath} locale={"id"}>
                <a className="text-[24px]">EN</a>
              </Link>
            ) : (
              <Link href={router.asPath} locale={"en-US"}>
                <a className="text-[24px]">ID</a>
              </Link>
            )}
          </div>
        </div>
        <div className="cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="main"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
