import Image from "next/image";

export const Achievements = () => {
  return (
    <div className="flex h-[360px] w-full items-center justify-between px-30">
      <h2 className="text-center text-3xl font-bold text-[#122241]">
        Delivering Impact Through Experience
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-8">
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
  return (
    <div className="flex flex-row items-center space-x-4">
      <Image src={imageSrc} alt={imageAlt} width={60} height={60} />
      <div className="flex flex-col space-y-2">
        <p className="text-4xl font-bold text-[#122241]">{stat}</p>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};
