import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "react-fast-marquee";
import { contact, socials } from "../constants";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
  const icon = "mdi:star-four-points";
  const text = `Whether it’s a new build or improving
    an existing product, I’m open to
    meaningful conversations.`;
  const items = [
    "Your Vision, My Engineering",
    "Your Vision, My Engineering",
    "Your Vision, My Engineering",
    "Your Vision, My Engineering",
    "Your Vision, My Engineering",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section id="contact" className="bg-[#0d0d0d]">
      <div className="flex flex-col justify-between min-h-screen bg-black rounded-t-4xl">
        <div>
          <AnimatedHeaderSection
            subTitle={"Let’s Connect, Let’s Create"}
            title={"Contact"}
            text={text}
            textColor={"text-white"}
            withScrollTrigger={true}
          />
          <div className="flex px-4 md:px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
            <div className="flex flex-col w-full gap-10">
              <div className="social-link">
                <h2>E-mail</h2>
                <div className="w-full h-px my-2 bg-white/30" />
                <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>
              <div className="social-link">
                <h2>Phone</h2>
                <div className="w-full h-px my-2 bg-white/30" />
                <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                  <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
                </p>
              </div>
              <div className="social-link">
                <h2>Social Media</h2>
                <div className="w-full h-px my-2 bg-white/30" />
                <div className="flex flex-wrap gap-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                    >
                      {"[ "}
                      {social.name}
                      {" ]"}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Marquee
          speed={80}
          className="overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap text-white bg-black"
        >
          {items.map((item, index) => (
            <span
              key={index}
              className="flex items-center px-3 md:px-4 gap-x-6 md:gap-x-8 lg:px-5 lg:gap-x-10"
            >
              {item} <Icon icon={icon} className="text-gold" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Contact;
