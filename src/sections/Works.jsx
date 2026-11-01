import { projects } from "../constants";
import SectionHeader from "../components/SectionHeader";

const Works = () => (
  <section id="work" className="px-5 py-20 md:px-10 md:py-24">
    <SectionHeader index="01" label="work" arabic="مشاريع مختارة" title="Systems I've designed, built, and run." />
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => {
        // First card, and a last card that would sit alone in its row, span the full width.
        const featured = index === 0 || (index === projects.length - 1 && projects.length % 2 === 0);
        return (
          <article
            key={project.id}
            className={`reveal group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/50 ${
              featured ? "md:col-span-2 lg:grid lg:grid-cols-[1.5fr_1fr]" : ""
            }`}
          >
            <div
              className={`aspect-[1930/1080] overflow-hidden border-b border-line bg-bg ${
                featured ? "lg:border-r lg:border-b-0" : ""
              }`}
            >
              <img
                src={project.image}
                alt={`${project.name} cover`}
                loading="lazy"
                className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5 md:p-7">
              <div className="flex items-baseline justify-between gap-4 font-mono text-xs text-muted">
                <span>
                  {String(index + 1).padStart(2, "0")} / {project.tagline}
                </span>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noreferrer" className="shrink-0 text-fg hover:text-accent">
                    visit ↗
                  </a>
                )}
              </div>
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{project.name}</h3>
              <p className="max-w-2xl text-muted">{project.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-3">
                {project.frameworks.map((name) => (
                  <li key={name} className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-fg/80">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default Works;
