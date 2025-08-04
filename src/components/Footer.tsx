import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-row items-center justify-between bg-[#122241] px-[120px] py-14"
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
        <p className="mt-2 text-white">
          {`© ${new Date().getFullYear()} Attenco Solutions Ltd.`}
          <br />
          All rights reserved.
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <h4 className="text-xl font-semibold text-white">Contact Us</h4>
        <div className="flex items-center space-x-2">
          <img src="/call.svg" alt="phone number" height={30} width={30} />
          <p className="text-xl text-white">attencosolutions@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/sms.svg" alt="phone number" height={30} width={30} />
          <p className="text-xl text-white">+66645204065</p>
        </div>
        <div className="flex items-start space-x-2">
          <img src="/location.svg" alt="phone number" height={30} width={30} />
          <p className="max-w-[246px] text-xl text-white">
            3266-1 No.1010, Shinawatra Tower 3, 32nd floor, Viphavadi Rangsit
            Road, Chatuchak, Bangkok, 10900
          </p>
        </div>
      </div>
    </footer>
  );
};
