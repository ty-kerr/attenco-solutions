import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

export const Hero = () => {
  return (
    <div className={montserrat.className}>
      <div className="w-full" id="home">
        <Image
          src={"/hero_1.webp"}
          alt={"Hero Image 1"}
          priority
          width={1920}
          height={1080}
        />
        <div className="absolute top-1/2 left-1/2 z-10 flex w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white">
          <h1 className="text-[64px] leading-[76px] font-semibold">
            Unlock Top Talents. <br /> Accelerate Your Growth.
          </h1>
          <div className="flex flex-row items-center justify-center space-x-1 pt-2">
            <p className="text-[28px]">Start your hiring journey with </p>
            <div>
              <Image
                src="/logo.webp"
                alt="Attenco Solutions Logo"
                width={260}
                height={38}
                className="cursor-pointer"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
