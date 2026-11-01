import { useEffect, useState } from "react";
import { contact, socials } from "../constants";
import SectionHeader from "../components/SectionHeader";

const ammanTime = () =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Amman", hour: "2-digit", minute: "2-digit" }).format(new Date());

const Contact = () => {
  const [time, setTime] = useState(ammanTime);
  useEffect(() => {
    const id = setInterval(() => setTime(ammanTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  const rows = [
    ["Phone", contact.phone, `tel:${contact.phone.replaceAll(" ", "")}`],
    ...socials.map((social) => [social.name, social.href.replace("https://", ""), social.href]),
    ["Local time", `${time} in Amman`],
  ];

  return (
    <section id="contact" className="px-5 pt-20 md:px-10 md:pt-24">
      <SectionHeader index="05" label="contact" arabic="تواصل" title="Have a system that has to work in production?" />
      <a
        href={`mailto:${contact.email}`}
        className="reveal block text-[clamp(1.1rem,5vw,4.5rem)] font-medium tracking-[-0.03em] underline decoration-line decoration-2 underline-offset-[0.2em] transition-colors [overflow-wrap:anywhere] hover:decoration-accent"
      >
        {contact.email}
      </a>
      <dl className="reveal mt-12 grid border-t border-line font-mono text-sm sm:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]">
        {rows.map(([label, value, href]) => (
          <div key={label} className="flex justify-between gap-4 border-b border-line py-4 sm:block sm:border-b-0 sm:py-6">
            <dt className="text-muted">{label}</dt>
            <dd className="sm:mt-2">
              {href ? (
                <a href={href} className="transition-colors hover:text-accent">
                  {value}
                </a>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <img
        src="/assets/signature.png"
        alt="Mohammad Abukhadija signature"
        loading="lazy"
        className="reveal mt-24 w-64 opacity-90 md:w-96"
      />
      <footer className="mt-10 flex flex-col gap-2 border-t border-line py-6 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Mohammad Abukhadija</span>
        <span>Built with React, three.js and GSAP. Designed in Amman.</span>
      </footer>
    </section>
  );
};

export default Contact;
