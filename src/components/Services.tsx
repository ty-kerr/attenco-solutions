export const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center space-y-4 bg-white px-30 py-16 text-left"
    >
      <h2 className="text-3xl font-bold text-[#122241]">Our Services</h2>
      <div className="flex w-full items-center space-x-5">
        <div className="flex flex-1 flex-col">
          <span className="text-lg font-semibold text-[#122241]">
            Outsourcing
          </span>
          <p>
            We provide skilled professionals who become an extension of your
            team without the overhead of traditional hiring. Our outsourcing
            service is ideal for businesses seeking cost-effective & reliable
            support
          </p>
        </div>
        <img
          src={"/services_1.png"}
          alt={"Services Image"}
          className="w-1/2 object-cover"
        />
      </div>

      <div className="flex w-full items-center space-x-5">
        <img
          src={"/services_2.png"}
          alt={"Services Image"}
          className="w-1/2 object-cover"
        />
        <div className="flex flex-1 flex-col">
          <span className="text-lg font-semibold text-[#122241]">
            Headhunt & Recruitment
          </span>
          <p>
            Our headhunting service is tailored for businesses that need top
            tier talent for critical roles. We identify, approach, and secure
            high-caliber professionals who align with your company culture and
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};
