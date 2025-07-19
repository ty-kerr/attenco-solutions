import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between bg-[#122241] px-[120px] py-14">
      <div className="flex flex-col">
        <Image
          src="/logo.png"
          alt="Attenco Solutions Logo"
          width={130}
          height={19}
          className="cursor-pointer"
          priority
        />
        <p className="mt-2 text-white">
          {`© ${new Date().getFullYear()} Attenco Solutions Ltd.`}
          <br />
          All rights reserved.
        </p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-white">Contact Us</h4>
        <p className="mt-3 text-white">attencosolutions@gmail.com</p>
        <p className="mt-3 text-white">+66645204065</p>
        <p className="mt-3 max-w-[246px] text-white">
          3266-1 No.1010, Shinawatra Tower 3, 32nd floor, Viphavadi Rangsit
          Road, Chatuchak, Bangkok, 10900
        </p>
      </div>
    </footer>
  );
};
