import { servicesData } from "../constants";
import SectionHeader from "../components/SectionHeader";

// "AI & Document Intelligence" -> "ai_document_intelligence"
const tableName = (title) => title.toLowerCase().replace(/[^a-z]+/g, "_");

const Stack = () => (
  <section id="stack" className="px-5 py-20 md:px-10 md:py-24">
    <SectionHeader index="02" label="stack" arabic="الخبرات" title="Four areas I own end to end." />
    <div className="grid gap-5 md:grid-cols-2">
      {servicesData.map((service) => (
        <div key={service.title} className="reveal overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3 font-mono text-xs md:px-7">
            <span className="min-w-0 truncate">
              <span className="text-accent">table</span> expertise.{tableName(service.title)}
            </span>
            <span className="shrink-0 text-muted">{service.items.length} rows</span>
          </div>
          <div className="p-5 md:p-7">
            <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
            <p className="mt-3 text-muted">{service.description}</p>
          </div>
          <dl className="border-t border-line font-mono text-sm">
            {service.items.map((item) => (
              <div
                key={item.title}
                className="grid gap-1 border-b border-line px-5 py-3 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] sm:gap-4 md:px-7"
              >
                <dt>{item.title}</dt>
                <dd className="text-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  </section>
);

export default Stack;
