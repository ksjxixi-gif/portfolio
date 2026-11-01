import { lazy, Suspense } from "react";

// three.js is the heaviest dependency; load it after the text has painted.
const HeroVisual = lazy(() => import("../components/HeroVisual"));

const stats = [
  ["186", "tables in the schema"],
  ["715", "API endpoints"],
  ["2,634", "automated tests"],
  ["50+", "projects delivered"],
];

const Hero = () => (
  <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pt-28 pb-10 md:px-10">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-16 bottom-0 opacity-40 md:bottom-[18%] md:left-[58%] md:opacity-100"
    >
      <Suspense fallback={null}>
        <HeroVisual />
      </Suspense>
    </div>
    <div
      aria-hidden="true"
      className="absolute right-10 bottom-[15%] hidden text-right font-mono text-xs leading-relaxed text-muted md:block"
    >
      <p>fig. 1 / my signature, 4,500 particles.</p>
      <p>fig. 2 / eight layers of defense around one core. see 03.</p>
    </div>

    <div className="relative">
      <p className="hero-line font-mono text-sm text-accent">~/amman $ whoami</p>
      <h1 className="mt-6 text-[clamp(3rem,10vw,8.5rem)] leading-[0.9] font-medium tracking-[-0.045em]">
        <span className="block overflow-hidden pb-[0.06em]">
          <span className="hero-line block">Mohammad</span>
        </span>
        <span className="block overflow-hidden pb-[0.06em]">
          <span className="hero-line block">Abukhadija</span>
        </span>
      </h1>
      <p lang="ar" dir="rtl" className="hero-line mt-5 w-fit font-arabic text-2xl text-muted md:text-3xl">
        محمد أبو خديجة
      </p>
      <p className="hero-line mt-8 max-w-xl text-lg text-fg/80 md:text-xl">
        Lead Software Engineer and AI &amp; Platform Engineer. I design the schema, build the services and AI
        pipelines, and run the servers a production legal-tech platform lives on.
      </p>
      <div className="hero-line mt-8 flex flex-wrap gap-3">
        <a href="#work" className="rounded-full bg-accent px-5 py-2.5 font-medium text-black transition-colors hover:bg-fg">
          See the work
        </a>
        <a href="#contact" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-fg">
          Get in touch
        </a>
      </div>
    </div>

    <dl className="relative mt-14 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-line pt-6 md:grid-cols-4">
      {stats.map(([value, label]) => (
        <div key={label} className="flex flex-col-reverse gap-1">
          <dt className="font-mono text-xs text-muted">{label}</dt>
          <dd className="text-2xl font-medium tracking-tight md:text-4xl">{value}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Hero;
