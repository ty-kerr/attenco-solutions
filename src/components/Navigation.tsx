import Image from "next/image";

export const Navigation = () => {
  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-99 flex items-center justify-between bg-white p-4">
      <div className="flex h-[28px] items-center">
        <Image
          src="/logo.webp"
          alt="Attenco Solutions Logo"
          width={130}
          height={19}
          className="cursor-pointer"
          priority
          onClick={() => handleClick("home")}
        />
      </div>
      <ul className="flex space-x-12 pr-20 text-xl">
        <li>
          <a
            href="#home"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              handleClick("home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#insights"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              handleClick("insights");
            }}
          >
            Insights
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              handleClick("services");
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              handleClick("contact");
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};
