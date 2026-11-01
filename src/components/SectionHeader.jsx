const SectionHeader = ({ index, label, arabic, title }) => (
  <header className="reveal mb-12 grid gap-4 border-t border-line pt-6 md:mb-16 md:grid-cols-[minmax(0,14rem)_1fr]">
    <p className="font-mono text-sm text-accent">
      {index} / {label}
    </p>
    <div>
      <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.03em] text-balance md:text-6xl">{title}</h2>
      <p lang="ar" dir="rtl" className="mt-3 w-fit font-arabic text-xl text-muted">
        {arabic}
      </p>
    </div>
  </header>
);

export default SectionHeader;
