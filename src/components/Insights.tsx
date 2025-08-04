import useWindowSize from "@/hooks/useWindowSize";

export const Insights = () => {
  const { width } = useWindowSize();

  const headerTextStyles =
    width > 1440
      ? "text-[42px] leading-[48px]"
      : width > 1024
        ? "text-[32px] leading-[36px]"
        : width > 768
          ? "text-[28px] leading-[32px]"
          : "text-[22px] leading-[34px]";
  const paragraphTextStyles =
    width > 1440 ? "text-xl" : width > 1024 ? "text-[16px]" : "text-[14px]";

  return (
    <section
      id="insights"
      className="flex w-full flex-col items-center justify-center space-y-4 bg-gradient-to-b from-[#F0F4FF] to-white px-12 py-8 text-center md:px-20 md:py-16 lg:px-[200px] lg:py-[60px]"
    >
      <h2 className={`font-semibold ${headerTextStyles}`}>Insights</h2>
      <p className={`${paragraphTextStyles}`}>
        We pride ourselves on being flexible and responsive adapting quickly to
        changing requirements and scaling teams as your business evolves. Our
        agile approach helps clients stay competitive, efficient, and ahead of
        industry trends.
      </p>
    </section>
  );
};
