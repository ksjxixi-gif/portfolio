import { securityLayers } from "../constants";
import SectionHeader from "../components/SectionHeader";

const Security = () => (
  <section id="security" className="px-5 py-20 md:px-10 md:py-24">
    <SectionHeader
      index="03"
      label="security"
      arabic="الأمن والبنية التحتية"
      title="Defense in depth, from the network to the release."
    />
    <div className="reveal mb-4 flex justify-between font-mono text-xs text-muted">
      <span>outermost</span>
      <span>core</span>
    </div>
    <ol className="border-t border-line">
      {securityLayers.map((item, index) => (
        <li
          key={item.layer}
          className="reveal grid gap-4 border-b border-line py-6 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_minmax(0,1fr)] md:gap-8"
        >
          <div className="flex items-center gap-3 font-mono text-sm">
            {/* depth bar: one segment per layer, filled up to this one */}
            <span aria-hidden="true" className="flex gap-0.5">
              {securityLayers.map((_, i) => (
                <span key={i} className={`h-3 w-1 rounded-full ${i <= index ? "bg-accent" : "bg-line"}`} />
              ))}
            </span>
            <span className="text-muted">L{index + 1}</span>
            <span>{item.layer}</span>
          </div>
          <p className="text-fg/80">{item.summary}</p>
          <ul className="flex flex-wrap content-start gap-2">
            {item.controls.map((control) => (
              <li key={control} className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-fg/80">
                {control}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </section>
);

export default Security;
