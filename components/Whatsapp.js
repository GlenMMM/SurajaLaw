import Image from "next/image";

const Whatsapp = () => {
  return (
    <div className="fixed z-20 bottom-5 right-5 xl:bottom-10 xl:right-10">
      <a
        href="https://wa.me/6282123563388"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <div className="relative h-16 w-16">
          <Image
            className="object-contain cursor-pointer"
            src="/icons/whatsapp_action.svg"
            alt="whatsapp floating icon"
            layout="fill"
          ></Image>
        </div>
      </a>
    </div>
  );
};

export default Whatsapp;
