import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

export const Hero = () => {
  return (
    <div className={montserrat.className}>
      <div className="w-full" id="home">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/hero_1.webp"
            alt="Hero Image 1"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute top-1/2 left-1/2 z-10 flex w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-2xl leading-[30px] font-semibold md:text-[48px] md:leading-[54px] lg:text-[64px] lg:leading-[76px]">
              Unlock Top Talents <br /> Accelerate Your Growth
            </h1>
            <div className="flex flex-row items-center justify-center space-x-1 pt-2">
              <p className="text-[16px] md:text-[22px] lg:text-[28px]">
                Start your hiring journey with us today
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
