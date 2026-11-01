import SectionHeader from "../components/SectionHeader";

const facts = [
  ["Based in", "Amman, Jordan"],
  ["Languages", "Arabic & English (native), French & Spanish (B1)"],
  ["Education", "Self-directed, through production work"],
];

const career = [
  { when: "2026 - now", what: "Lead Software Engineer, Nibras Legal Tech", current: true },
  { when: "self-taught", what: "Systems, databases, networking, Linux, AI" },
  { when: "1 year", what: "Support desk, writing code between shifts" },
  { when: "freelance", what: "Marketing" },
  { when: "age 15", what: "First job, in a real estate office" },
];

const About = () => (
  <section id="about" className="px-5 py-20 md:px-10 md:py-24">
    <SectionHeader index="04" label="about" arabic="نبذة" title="Self-taught. Working since 15." />
    <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <div className="reveal">
        <img src="/images/profile.svg" alt="Mohammad Abukhadija" className="w-full max-w-md rounded-2xl border border-line" />
        <dl className="mt-6 max-w-md divide-y divide-line border-y border-line font-mono text-sm">
          {facts.map(([label, value]) => (
            <div key={label} className="flex justify-between gap-6 py-3">
              <dt className="text-muted">{label}</dt>
              <dd className="text-right">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-col gap-10">
        <div className="reveal space-y-5 text-lg text-fg/80 md:text-xl">
          <p>
            I lead engineering at Nibras Legal Tech, where I own architecture and the final technical review for a
            production legal-tech SaaS platform: a 186-table relational model, 715 API endpoints behind fail-closed
            authorization, AI and Arabic OCR pipelines, and the Linux infrastructure it all runs on.
          </p>
          <p>
            I&apos;m at my best turning ambiguous requirements into maintainable systems, and tracing failures across
            UI, APIs, databases, background jobs, networks, and containers until I find the real cause. I verify end to
            end instead of trusting that the UI says it worked.
          </p>
          <p>
            I also commissioned and directed a full-platform engineering review covering every table, endpoint, and
            screen (about 206,000 lines of code) and turned its findings into an ordered plan of work.
          </p>
        </div>

        <div className="reveal rounded-2xl border border-line bg-surface p-5 md:p-7">
          <p className="mb-6 font-mono text-xs text-muted">$ git log --career</p>
          <ol className="font-mono text-sm">
            {career.map((entry) => (
              <li
                key={entry.what}
                className="relative grid grid-cols-[1rem_6.5rem_minmax(0,1fr)] gap-3 pb-6 before:absolute before:top-4 before:bottom-0 before:left-[3.5px] before:w-px before:bg-line last:pb-0 last:before:hidden"
              >
                <span className={`mt-1.5 size-2 rounded-full ${entry.current ? "bg-accent" : "border border-muted"}`} />
                <span className="text-muted">{entry.when}</span>
                <span className={entry.current ? "text-fg" : "text-fg/80"}>{entry.what}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default About;
