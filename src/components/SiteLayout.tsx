import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { to: "/clinica", label: "A Clínica" },
  { to: "/dra-amanda", label: "Dra. Amanda" },
  { to: "/tratamentos", label: "Tratamentos" },
  { to: "/tecnologia", label: "Tecnologia" },
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
            <span className={`font-serif text-xl tracking-[0.18em] ${navIsLight ? "text-[#f5f2ea]" : "text-graphite"}`}>
              AMANDA BOMBINI
            </span>
            <span className={`mt-1 text-[9px] tracking-[0.42em] ${navIsLight ? "text-[#f5f2ea]/70" : "text-muted-foreground"}`}>
              CLÍNICA DE ESTÉTICA AVANÇADA
            </span>
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`link-underline text-[10.5px] tracking-[0.24em] uppercase ${
                  navIsLight ? "text-[#f5f2ea]/90 hover:text-[#f5f2ea]" : "text-graphite/80 hover:text-graphite"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contato" className="btn-olive !py-3 !px-5">
              Agendar Avaliação
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`xl:hidden text-[11px] tracking-[0.3em] uppercase ${navIsLight ? "text-[#f5f2ea]" : "text-graphite"}`}
            aria-label="Menu"
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="xl:hidden border-t border-stone/40 bg-[#f5f2ea]">
            <nav className="flex flex-col px-6 py-6">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="py-3 font-serif text-2xl text-graphite">
                  {n.label}
                </Link>
              ))}
              <Link to="/contato" className="btn-olive mt-6 self-start">
                Agendar Avaliação
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <WhatsAppFloat />

      <footer className="mt-32 border-t border-stone/60 bg-bone">
        <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="font-serif text-2xl tracking-[0.14em]">AMANDA BOMBINI</div>
              <p className="mt-2 text-[10px] tracking-[0.42em] text-muted-foreground">
                CLÍNICA DE ESTÉTICA AVANÇADA
              </p>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Medicina estética dedicada à beleza natural, ao cuidado humanizado
                e à privacidade absoluta. Atendimento exclusivo, com hora marcada.
              </p>
              <p className="mt-8 text-[10px] tracking-[0.42em] text-muted-foreground">
                CRM/SP 000000 · RQE 00000
              </p>
              <div className="mt-6 flex gap-5 text-[10px] tracking-[0.42em] uppercase text-graphite/80">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="link-underline">Instagram</a>
                <a href="https://wa.me/5511899999999" target="_blank" rel="noreferrer" className="link-underline">WhatsApp</a>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="link-underline">Google</a>
              </div>
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
              <p className="text-[10px] tracking-[0.42em] text-muted-foreground">SÃO PAULO</p>
              <ul className="mt-6 space-y-2 text-sm text-graphite/80">
                <li>Rua dos Jardins, 000</li>
                <li>Jardim Paulista — SP</li>
                <li>(11) 89999-9999</li>
              </ul>
              <p className="mt-8 text-[10px] tracking-[0.42em] text-muted-foreground">LIMEIRA</p>
              <ul className="mt-6 space-y-2 text-sm text-graphite/80">
                <li>Av. Central, 000</li>
                <li>Centro — Limeira/SP</li>
                <li>(19) 89999-9999</li>
              </ul>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.42em] text-muted-foreground">HORÁRIOS</p>
              <ul className="mt-6 space-y-2 text-sm text-graphite/80">
                <li>Segunda a Sexta · 9h – 19h</li>
                <li>Sábado · 9h – 13h</li>
                <li>Com hora marcada</li>
              </ul>
              <Link to="/contato" className="btn-olive mt-8">
                Agendar Avaliação
              </Link>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-stone/60 pt-6 text-[10px] tracking-[0.32em] uppercase text-muted-foreground md:flex-row">
            <span>© {new Date().getFullYear()} Amanda Bombini · Todos os direitos reservados</span>
            <span>São Paulo · Limeira · Brasil</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      {open && (
        <div className="mb-3 w-[300px] border border-stone/60 bg-[#f5f2ea] p-6 shadow-[0_20px_60px_-20px_rgba(42,39,34,0.35)]">
          <span className="text-[10px] tracking-[0.42em] uppercase text-olive">Concierge</span>
          <h4 className="mt-3 font-serif text-2xl leading-tight">Agende sua avaliação.</h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Atendimento personalizado pelo WhatsApp, com a discrição que você merece.
          </p>
          <a
            href="https://wa.me/5511899999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noreferrer"
            className="btn-olive mt-5 w-full"
          >
            Conversar agora
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 border border-graphite/30 bg-[#f5f2ea] px-5 py-3 text-[10px] tracking-[0.32em] uppercase text-graphite shadow-[0_10px_30px_-10px_rgba(42,39,34,0.3)] transition-colors hover:bg-olive hover:text-[#f5f2ea]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-olive" />
        {open ? "Fechar" : "WhatsApp · Concierge"}
      </button>
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
