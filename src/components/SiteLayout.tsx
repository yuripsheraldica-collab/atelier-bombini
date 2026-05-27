import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { to: "/clinica", label: "A Clínica" },
  { to: "/tratamentos", label: "Tratamentos & Experiências" },
  { to: "/dra-amanda", label: "Dra. Amanda" },
  { to: "/resultados", label: "Resultados" },
  { to: "/journal", label: "Journal" },
  { to: "/contato", label: "Contato" },
];

export function SiteLayout({ children, transparentNav = false }: { children: ReactNode; transparentNav?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  const navIsLight = transparentNav && !scrolled;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled || open ? "bg-[#f5f2ea]/95 backdrop-blur border-b border-stone/40" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 lg:px-12">
          <Link to="/" className="flex flex-col leading-none">
            <span
              className={`font-serif text-xl tracking-[0.18em] ${navIsLight ? "text-[#f5f2ea]" : "text-graphite"}`}
            >
              AMANDA BOMBINI
            </span>
            <span
              className={`mt-1 text-[9px] tracking-[0.42em] ${navIsLight ? "text-[#f5f2ea]/70" : "text-muted-foreground"}`}
            >
              CLÍNICA DE ESTÉTICA AVANÇADA
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`link-underline text-[10.5px] tracking-[0.28em] uppercase ${
                  navIsLight ? "text-[#f5f2ea]/90 hover:text-[#f5f2ea]" : "text-graphite/80 hover:text-graphite"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contato" className="btn-olive !py-3 !px-5">
              Concierge Privado
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden text-[11px] tracking-[0.3em] uppercase ${navIsLight ? "text-[#f5f2ea]" : "text-graphite"}`}
            aria-label="Menu"
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-stone/40 bg-[#f5f2ea]">
            <nav className="flex flex-col px-6 py-6">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="py-3 font-serif text-2xl text-graphite"
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/contato" className="btn-olive mt-6 self-start">
                Concierge Privado
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-32 border-t border-stone/60 bg-bone">
        <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-4">
            <div>
              <div className="font-serif text-2xl tracking-[0.14em]">AMANDA BOMBINI</div>
              <p className="mt-2 text-[10px] tracking-[0.42em] text-muted-foreground">
                CLÍNICA DE ESTÉTICA AVANÇADA
              </p>
              <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Uma maison de medicina estética dedicada à beleza natural,
                ao cuidado humanizado e à privacidade absoluta.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.42em] text-muted-foreground">NAVEGAÇÃO</p>
              <ul className="mt-6 space-y-3 text-sm">
                {NAV.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="link-underline text-graphite/80">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.42em] text-muted-foreground">CONTATO</p>
              <ul className="mt-6 space-y-3 text-sm text-graphite/80">
                <li>contato@amandabombini.com.br</li>
                <li>(11) 89999-9999</li>
                <li>São Paulo — SP</li>
                <li>Jardins · Itaim · V. N. Conceição</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.42em] text-muted-foreground">CONCIERGE</p>
              <p className="mt-6 text-sm leading-relaxed text-graphite/80">
                Atendimento exclusivo, com hora marcada,
                em ambiente privado e discreto.
              </p>
              <Link to="/contato" className="btn-olive mt-6">
                Agendar consulta
              </Link>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-stone/60 pt-6 text-[10px] tracking-[0.32em] uppercase text-muted-foreground md:flex-row">
            <span>© {new Date().getFullYear()} Amanda Bombini · Todos os direitos reservados</span>
            <span>São Paulo · Brasil</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function OliveBand({ items }: { items: { eyebrow?: string; label: string }[] }) {
  return (
    <section className="bg-olive text-[#f5f2ea]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-px px-6 py-16 lg:grid-cols-4 lg:px-12">
        {items.map((it, i) => (
          <div key={i} className="flex flex-col items-center justify-center px-4 text-center">
            {it.eyebrow && (
              <span className="mb-3 text-[10px] tracking-[0.42em] opacity-70">{it.eyebrow}</span>
            )}
            <span className="text-[11px] tracking-[0.32em] uppercase leading-relaxed">
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`block text-[10px] tracking-[0.42em] uppercase text-olive ${className}`}>
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5 lg:pt-16 reveal">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-8 font-serif text-5xl leading-[1.02] tracking-tight lg:text-7xl text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        <div className="lg:col-span-7 reveal">
          <img
            src={image}
            alt={title}
            className="h-[60vh] w-full object-cover lg:h-[75vh]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
