import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Turning ambiguous requirements into
    maintainable systems that run
    in production.`;
  const aboutText = `I'm a self-taught software engineer from Amman, Jordan. I started working at 15 (a real estate office, freelance marketing, a year on a support desk) and wrote code between shifts.

  Today I lead engineering at Nibras Legal Tech, where I own architecture and the final technical review for a production legal-tech SaaS platform: a 220+ table relational model, tenant-aware authorization, AI and Arabic OCR pipelines, and the Linux infrastructure it all runs on.

  I'm at my best tracing failures across UI, APIs, databases, background jobs, networks, and containers until I find the real cause, and verifying end-to-end instead of trusting that the UI says it worked.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Craft in Details, Strength in Structure."}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-4 md:px-10 pb-16 text-xl font-light tracking-wide lg:flex-row-reverse md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/profile.svg"
          alt="Mohammad Abukhadija"
          className="rounded-xl w-full lg:w-2/5"
        />
        <AnimatedTextLines text={aboutText} className={"w-full text-lg"} lineGap="pb-5 last:pb-0"/>
      </div>
    </section>
  );
};

export default About;
