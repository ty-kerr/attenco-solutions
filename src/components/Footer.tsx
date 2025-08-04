import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center justify-between bg-[#122241] py-14 md:flex-row md:px-[60px] lg:px-[120px]"
    >
      <div className="flex flex-col">
        <Image
          src="/Logo.webp"
          alt="Attenco Solutions Logo"
          width={260}
          height={38}
          className="cursor-pointer"
          priority
        />
        <p className="mt-2 text-center text-sm text-white md:text-[16px] lg:text-left">
          {`© ${new Date().getFullYear()} Attenco Solutions Ltd.`}
          <br />
          All rights reserved.
        </p>
      </div>
      <div className="flex flex-col space-y-4 pt-4 lg:pt-0">
        <h4 className="text-center text-lg font-semibold text-white md:text-xl">
          Contact Information
        </h4>
        <div className="flex items-center space-x-2">
          <img src="/call.svg" alt="phone number" height={30} width={30} />
          <p className="text-white md:text-lg">attencosolutions@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/sms.svg" alt="phone number" height={30} width={30} />
          <p className="text-white md:text-lg">+66645204065</p>
        </div>
        <div className="flex items-start space-x-2">
          <img src="/location.svg" alt="phone number" height={30} width={30} />
          <p className="max-w-[246px] text-white md:text-lg">
            3266-1 No.1010, Shinawatra Tower 3, 32nd floor, Viphavadi Rangsit
            Road, Chatuchak, Bangkok, 10900
          </p>
        </div>
      </div>
    </footer>
  );
};
