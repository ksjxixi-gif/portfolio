import ReactLenis from "lenis/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import Stack from "./sections/Stack";
import Security from "./sections/Security";
import About from "./sections/About";
import Contact from "./sections/Contact";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(() => {
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hero-line", { yPercent: 100, opacity: 0, duration: 1.2, stagger: 0.08, ease: "expo.out", delay: 0.1 });
      gsap.set(".reveal", { opacity: 0, y: 40 });
      ScrollTrigger.batch(".reveal", {
        start: "top 90%",
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" }),
      });
    });
  });

  return (
    <ReactLenis root options={{ anchors: { offset: -64 } }}>
      <Navbar />
      <main>
        <Hero />
        <Works />
        <Stack />
        <Security />
        <About />
        <Contact />
      </main>
    </ReactLenis>
  );
};

export default App;
