import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

export const ProcessOverview = () => {
  const { width } = useWindowSize();

  const headerTextStyles =
    width > 1440
      ? "text-[32px] leading-[36px]"
      : width > 1024
        ? "text-[32px] leading-[36px]"
        : width > 768
          ? "text-[28px] leading-[32px]"
          : "text-[18px] leading-[24px]";

  const paragraphTextStyles =
    width > 1440 ? "text-xl" : width > 1024 ? "text-[16px]" : "text-[14px]";

  const showGrid = width > 1024;
  const showDoubleColumn = width > 768;
  const showSingleColumn = width <= 768;

  return (
    <>
      <section className="flex w-full flex-col items-center justify-center space-y-2 bg-white px-12 text-center">
        <h2 className={`${headerTextStyles} font-semibold`}>
          Process Overview
        </h2>
        <p className={`${paragraphTextStyles}`}>
          We streamline hiring so you can focus on growth
        </p>
      </section>
      {showGrid && (
        <section className="mt-5 w-full space-y-6 px-8">
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
              <SuccessfulOnboarding />
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
        </section>
      )}
      {showDoubleColumn && !showGrid && (
        <section className="mt-5 flex w-full flex-col items-center justify-center px-8">
          <div className="flex space-x-3">
            <div className="space-y-3">
              <ProcessCard number="01" title="Requirement Gathering" />
              <ProcessCard number="02" title="Candidate Pre-screening" />
              <ProcessCard number="03" title="Candidate Submission" />
            </div>
            <div className="space-y-3">
              <ProcessCard
                number="04"
                title="Client Review & Interview Decision"
              />
              <ProcessCard number="05" title="Interview Process" />
              <ProcessCard number="06" title="Post-Interview Outcome" />/
            </div>
          </div>
          <SuccessfulOnboarding />
        </section>
      )}
      {showSingleColumn && (
        <section className="mt-5 flex w-full flex-col items-center justify-center space-y-3 px-8">
          <ProcessCard number="01" title="Requirement Gathering" />
          <ProcessCard number="02" title="Candidate Pre-screening" />
          <ProcessCard number="03" title="Candidate Submission" />
          <ProcessCard number="04" title="Client Review & Interview Decision" />
          <ProcessCard number="05" title="Interview Process" />
          <ProcessCard number="06" title="Post-Interview Outcome" />
          <SuccessfulOnboarding />
        </section>
      )}
    </>
  );
};

const ProcessCard = ({ number, title }: { number: string; title: string }) => {
  const { width } = useWindowSize();

  const cardTextStyles =
    width > 1440
      ? "h-[136px] w-[452px]"
      : width > 1280
        ? "h-[120px] w-[400px]"
        : width > 1024
          ? "h-[102px] w-[320px]"
          : width > 768
            ? "h-[102px] w-[320px]"
            : "h-[102px] w-[320px]";

  const numberStyles =
    width > 1440
      ? "text-[64px] leading-[64px]"
      : width > 1024
        ? "text-[48px] leading-[48px]"
        : width > 768
          ? "text-[48px] leading-[48px]"
          : "text-[48px] leading-[48px]";

  const titleStyles =
    width > 1440
      ? "text-[24px] leading-[28px]"
      : width > 1024
        ? "text-[20px] leading-[24px]"
        : width > 768
          ? "text-[20px] leading-[24px]"
          : "text-[20px] leading-[24px]";

  return (
    <div
      className={`flex ${cardTextStyles} flex-row items-end space-x-3 rounded border border-[#D5DBEE] bg-[#F0F4FF] px-5 pb-5`}
    >
      <span className={`${numberStyles} font-semibold text-[#2B4CA9]`}>
        {number}
      </span>
      <span className={`${titleStyles} font-semibold`}>{title}</span>
    </div>
  );
};

const SuccessfulOnboarding = () => {
  const { width } = useWindowSize();

  const titleStyles =
    width > 1440
      ? "text-[24px] leading-[28px]"
      : width > 1024
        ? "text-[20px] leading-[24px]"
        : width > 768
          ? "text-[20px] leading-[24px]"
          : "text-[20px] leading-[24px]";

  const iconSize = width > 1440 ? 48 : 40;
  return (
    <div className="flex flex-col items-center justify-end space-y-2 px-5 py-6 text-center">
      <Image
        src="/success.svg"
        alt="Success Icon"
        width={iconSize}
        height={iconSize}
      />
      <span className={`${titleStyles} font-semibold`}>
        Successful Onboarding
      </span>
    </div>
  );
};
