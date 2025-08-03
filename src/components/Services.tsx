export const Services = () => {
  return (
    <>
      <div
        id="services"
        className="flex flex-col items-center justify-center space-y-4 bg-white px-30 py-16 text-left"
      >
        <h2 className="text-3xl font-bold text-[#122241]">Our Services</h2>
        <div className="flex w-full items-center space-x-5">
          <div className="flex flex-1 flex-col pt-12">
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
          <div className="flex flex-1 flex-col pt-12">
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
      <div className="flex w-full flex-col items-center justify-center space-y-2 bg-white px-12 text-center">
        <p>
          We cover a wide variety of roles—technical, non-technical, and
          everything in between. Here&apos;s a snapshot of the positions we
          recruit for
        </p>
        <div className="mt-8 flex flex-row space-x-24">
          <div className="w-[500px] rounded-l bg-[#EAEDF6] text-left">
            <div className="rounded-l bg-[#2B4CA9] px-10 py-5 text-white">
              <span className="font-bold">TECHNICAL</span>
            </div>
            <div className="rounded-l px-10 py-5">
              <ul className="list-inside list-disc space-y-4">
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
              <span className="font-bold">NON-TECHNICAL</span>
            </div>
            <div className="rounded-l px-10 py-5">
              <ul className="list-inside list-disc space-y-4">
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
    </>
  );
};
