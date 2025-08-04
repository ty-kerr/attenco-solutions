import useWindowSize from "@/hooks/useWindowSize";

export const AboutUs = () => {
  const { width } = useWindowSize();

  const paragraphTextStyles =
    width > 1440 ? "text-xl" : width > 1024 ? "text-[16px]" : "text-[14px]";
  const subheaderTextStyles =
    width > 1440
      ? "text-[24px] leading-[32px]"
      : width > 1024
        ? "text-[18px] leading-[24px]"
        : width > 768
          ? "text-[16px] leading-[20px]"
          : "text-[14px] leading-[18px]";
  const headerTextStyles =
    width > 1440
      ? "text-[42px] leading-[48px]"
      : width > 1024
        ? "text-[32px] leading-[36px]"
        : width > 768
          ? "text-[28px] leading-[32px]"
          : "text-[22px] leading-[34px]";

  return (
    <section
      id="about"
      className="flex flex-col space-y-3 bg-white py-8 lg:h-[564px] lg:flex-row lg:space-y-0 lg:py-0"
    >
      <div className="flex flex-col items-center justify-center text-center lg:h-full lg:w-1/2 lg:bg-gradient-to-b lg:from-[#F0F4FF] lg:to-white">
        <h2 className={`font-semibold ${headerTextStyles}`}>Our Company</h2>
        <p className={`lg:pt-2 ${subheaderTextStyles} font-semibold`}>
          Your Partner in IT Outsourcing & Talent Management
        </p>
      </div>
      <div
        className={`flex flex-col justify-center space-y-3 px-4 text-center md:px-16 lg:h-full lg:w-1/2 lg:space-y-6 lg:px-28 lg:text-left ${paragraphTextStyles}`}
      >
        <p>
          Attenco Solutions is your go to partner for outsourcing and talent
          acquisition. We help businesses grow by connecting them with the right
          people. Our two main services, Outsourcing and Headhunting, are
          designed to provide flexible, efficient, and tailored talent
          solutions.
        </p>
        <p>
          Whether you need reliable support staff or top-level professionals,
          we&apos;re here to deliver talent that fits your business needs.
        </p>
        <p>Attenco Solutions Attention to You!</p>
      </div>
    </section>
  );
};
