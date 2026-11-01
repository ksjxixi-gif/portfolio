const links = [
  { id: "work" },
  { id: "stack", wide: true },
  { id: "security" },
  { id: "about", wide: true },
  { id: "contact" },
];

const Navbar = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-md">
    <nav aria-label="Main" className="flex h-16 items-center justify-between gap-4 px-5 md:px-10">
      <a href="#top" aria-label="Mohammad Abukhadija, back to top" className="shrink-0">
        <img src="/assets/signature.png" alt="" className="h-10 w-auto md:h-12" />
      </a>
      <ul className="flex gap-4 font-mono text-sm md:gap-8">
        {links.map((link, index) => (
          <li key={link.id} className={link.wide ? "hidden sm:block" : undefined}>
            <a href={`#${link.id}`} className="text-muted transition-colors hover:text-fg">
              <span className="hidden text-accent md:inline">0{index + 1} </span>
              {link.id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
