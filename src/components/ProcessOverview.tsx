import Image from "next/image";

export const ProcessOverview = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center space-y-2 bg-white px-12 text-center">
        <h2 className="text-[32px] leading-[40px] font-semibold">
          Process Overview
        </h2>
        <p className="text-xl">
          We streamline hiring so you can focus on growth
        </p>
      </div>
      <div className="mt-5 w-full space-y-6 px-8">
        <div className="grid w-full grid-cols-3 space-x-6 bg-white">
          <div className="col-span-1">
            <ProcessCard number="01" title="Requirement Gathering" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-1" />
        </div>
        <div className="grid w-full grid-cols-3 gap-x-6 bg-white">
          <div className="col-span-1">
            <ProcessCard number="02" title="Candidate Pre-screening" />
          </div>
          <div className="col-span-1">
            <ProcessCard
              number="04"
              title="Client Review 
& Interview Decision"
            />
          </div>
          <div className="col-span-1">
            <div className="flex flex-col items-center justify-end space-y-2 px-5 py-6 text-center">
              <Image
                src="/success.svg"
                alt="Success Icon"
                width={48}
                height={48}
              />
              <span className="text-[24px] leading-[36px] font-semibold">
                Successful Onboarding
              </span>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-3 gap-x-6 bg-white">
          <div className="col-span-1">
            <ProcessCard number="03" title="Candidate Submission" />
          </div>
          <div className="col-span-1">
            <ProcessCard number="05" title="Interview Process" />
          </div>
          <div className="col-span-1">
            <ProcessCard number="06" title="Post-Interview Outcome" />
          </div>
        </div>
      </div>
    </>
  );
};

const ProcessCard = ({ number, title }: { number: string; title: string }) => {
  return (
    <div className="flex h-[136px] flex-row items-end space-x-3 rounded bg-[#D5DBEE] px-5 pb-5">
      <span className="text-[64px] leading-[64px] font-semibold text-[#2B4CA9]">
        {number}
      </span>
      <span className="text-[24px] leading-[36px] font-semibold">{title}</span>
    </div>
  );
};
