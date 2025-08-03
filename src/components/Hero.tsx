import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full" id="home">
      <Image
        src={"/hero_1.webp"}
        alt={"Hero Image 1"}
        priority
        width={1920}
        height={1080}
      />
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">Attenco Solutions</h1>
        <p className="mb-6 text-lg">Because your success is our focus</p>
      </div>
    </div>
  );
};
