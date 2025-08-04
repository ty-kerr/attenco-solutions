export const Services = () => {
  return (
    <>
      <div
        id="services"
        className="flex flex-col items-center justify-center space-y-4 bg-white px-30 py-16 text-left"
      >
        <h2 className="text-[42px] leading-[48px] font-semibold">
          Our Services
        </h2>
        <div className="flex w-full items-center space-x-5">
          <div className="flex flex-1 flex-col pt-12">
            <span className="text-2xl font-semibold">Outsourcing</span>
            <p className="mt-1 text-xl">
              We provide skilled professionals who become an extension of your
              team without the overhead of traditional hiring. Our outsourcing
              service is ideal for businesses seeking cost-effective & reliable
              support
            </p>
          </div>
          <img
            src={"/services_1.webp"}
            alt={"Services Image"}
            className="w-1/2 object-cover"
          />
        </div>

        <div className="flex w-full items-center space-x-5">
          <img
            src={"/services_2.webp"}
            alt={"Services Image"}
            className="w-1/2 object-cover"
          />
          <div className="flex flex-1 flex-col pt-12">
            <span className="text-2xl font-semibold">
              Headhunt & Recruitment
            </span>
            <p className="mt-1 text-xl">
              Our headhunting service is tailored for businesses that need top
              tier talent for critical roles. We identify, approach, and secure
              high-caliber professionals who align with your company culture and
              goals.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center space-y-2 bg-white px-12 text-center">
        <p className="max-w-[70%] text-xl">
          We cover a wide variety of roles—technical, non-technical, and
          everything in between. <br /> Here&apos;s a snapshot of the positions
          we recruit for.
        </p>
        <div className="mt-8 flex flex-row space-x-24">
          <div className="w-[500px] rounded-l bg-[#EAEDF6] text-left">
            <div className="rounded-l bg-[#2B4CA9] px-10 py-5 text-white">
              <span className="text-2xl font-semibold">TECHNICAL</span>
            </div>
            <div className="rounded-l px-10 py-5">
              <ul className="list-inside list-disc space-y-4 text-xl">
                <li>Quality Assurance</li>
                <li>Software Tester</li>
                <li>Business Analyst</li>
                <li>System Analyst</li>
                <li>Data Analyst</li>
                <li>Data Engineer</li>
                <li>Software Developer</li>
              </ul>
            </div>
          </div>
          <div className="w-[500px] rounded-l bg-[#EAEDF6] text-left">
            <div className="rounded-l bg-[#2B4CA9] px-10 py-5 text-white">
              <span className="text-2xl font-semibold">NON-TECHNICAL</span>
            </div>
            <div className="rounded-l px-10 py-5">
              <ul className="list-inside list-disc space-y-4 text-xl">
                <li>Sales Representative</li>
                <li>Project Manager</li>
                <li>PMO</li>
                <li>Accountant</li>
                <li>Human Resources</li>
                <li>Administrator</li>
                <li>Marketing Specialist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center space-y-2 bg-white px-12 py-14 text-center">
        <p className="max-w-[70%] text-[36px] leading-[42px] font-semibold">
          The best talent is just one conversation away <br /> We&apos;d love to
          hear from you
        </p>
      </div>
    </>
  );
};
