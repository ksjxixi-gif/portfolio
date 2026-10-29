import Marquee from "react-fast-marquee";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactSummary = () => {
  const icon = "mdi:star-four-points";
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];

  const items2 = ["Foundation", "Scalability", "Evolve", "Deployment", "Architecture"];

  return (
    <section className="flex flex-col items-center justify-between gap-12 mt-16">
      <Marquee
        speed={80}
        className="overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap text-white bg-black"
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="flex items-center px-3 md:px-4 gap-x-6 md:gap-x-8 lg:px-5 lg:gap-x-10"
          >
            {item} <Icon icon={icon} />
          </span>
        ))}
      </Marquee>
      <Marquee
        speed={80}
        direction="right"
        className="overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap text-black bg-white"
      >
        {items2.map((item, index) => (
          <span
            key={index}
            className="flex items-center px-3 md:px-4 gap-x-6 md:gap-x-8 lg:px-5 lg:gap-x-10"
          >
            {item} <Icon icon={icon} />
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default ContactSummary;
