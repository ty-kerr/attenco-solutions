import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

export const Achievements = () => {
  const { width } = useWindowSize();

  const headerTextStyles =
    width > 1440
      ? "text-[32px] leading-[36px]"
      : width > 1024
        ? "text-[32px] leading-[36px]"
        : width > 768
          ? "text-[28px] leading-[32px]"
          : "text-[24px] leading-[28px]";

  return (
    <div className="flex w-full flex-col items-center justify-between px-4 pt-12 lg:h-[360px] lg:flex-row lg:space-x-4 lg:px-12 lg:pt-0">
      <h2
        className={`pb-4 text-center font-semibold lg:pb-0 ${headerTextStyles}`}
      >
        Delivering Impact Through Experience
      </h2>
      <div className="space-y-3 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-12 sm:gap-y-8">
        <Stat
          imageSrc="/achievement.svg"
          imageAlt="Achievement Icon"
          stat="500+"
          description="IT Professionals Managed"
        />
        <Stat
          imageSrc="/like.svg"
          imageAlt="Like Icon"
          stat="5+"
          description="Years of Industry Experience"
        />
        <Stat
          imageSrc="/people.svg"
          imageAlt="People Icon"
          stat="10+"
          description="Major Clients Across Industries"
        />
        <Stat
          imageSrc="/chart.svg"
          imageAlt="Achievement Medal"
          stat="50%"
          description="Faster Hiring Turnaround"
        />
      </div>
    </div>
  );
};

const Stat = ({
  imageSrc,
  imageAlt,
  stat,
  description,
}: {
  imageSrc: string;
  imageAlt: string;
  stat: string;
  description: string;
}) => {
  const { width } = useWindowSize();

  const iconSize =
    width > 1440 ? 60 : width > 1024 ? 52 : width > 768 ? 52 : 40;

  const statTextStyles =
    width > 1440
      ? "text-[36px]"
      : width > 1024
        ? "text-[32px]"
        : width > 768
          ? "text-[32px]"
          : "text-[28px]";

  const descriptionTextStyles =
    width > 1440
      ? "text-[20px]"
      : width > 1024
        ? "text-[18px]"
        : width > 768
          ? "text-[20px]"
          : "text-[20px]";

  return (
    <section className="flex flex-row items-center space-x-4 pb-8 lg:pb-0">
      <Image src={imageSrc} alt={imageAlt} width={iconSize} height={iconSize} />
      <div className="flex flex-col space-y-2">
        <p className={`font-semibold ${statTextStyles}`}>{stat}</p>
        <p className={`text-xl text-gray-600 ${descriptionTextStyles}`}>
          {description}
        </p>
      </div>
    </section>
  );
};
