export const AboutUs = () => {
  return (
    <section id="about" className="flex h-[564px] flex-row bg-white">
      <div className="flex h-full w-1/2 flex-col items-center justify-center bg-gradient-to-b from-[#F0F4FF] to-white">
        <h2 className="text-[42px] leading-[48px] font-semibold">
          Our Company
        </h2>
        <p className="pt-2 text-2xl">
          Your Partner in IT Outsourcing & Talent Management
        </p>
      </div>
      <div className="flex h-full w-1/2 flex-col justify-center space-y-6 px-32">
        <p className="text-xl">
          Attenco Solutions is your go to partner for outsourcing and talent
          acquisition. We help businesses grow by connecting them with the right
          people. Our two main services, Outsourcing and Headhunting, are
          designed to provide flexible, efficient, and tailored talent
          solutions.
        </p>
        <p className="text-xl">
          Whether you need reliable support staff or top-level professionals,
          we&apos;re here to deliver talent that fits your business needs.
        </p>
        <p className="text-xl">Attenco Solutions Attention to You!</p>
      </div>
    </section>
  );
};
