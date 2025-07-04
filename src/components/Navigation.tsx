export const Navigation = () => {
  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-99 flex items-center justify-between bg-white p-4 text-[#122241]">
      <div>LOGO</div>
      <ul className="flex space-x-6">
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
            href="#about"
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault();
              handleClick("about");
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
