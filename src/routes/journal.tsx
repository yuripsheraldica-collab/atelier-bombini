import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow } from "@/components/SiteLayout";
import j1 from "@/assets/journal1.jpg";
import j2 from "@/assets/journal2.jpg";
import j3 from "@/assets/journal3.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal · Amanda Bombini" },
      { name: "description", content: "Conteúdo exclusivo sobre estética, bem-estar e inovação." },
    ],
  }),
  component: Journal,
});

const ARTICLES = [
  { date: "12 MAI 2026", title: "Skincare minimalista: menos é mais.", excerpt: "Por que uma rotina enxuta e bem desenhada entrega resultados mais bonitos do que prateleiras inteiras." },
  { date: "28 ABR 2026", title: "Bioestimuladores de colágeno: o que saber.", excerpt: "Ciência, tempo e naturalidade — como devolver firmeza sem alterar a identidade do rosto." },
  { date: "15 ABR 2026", title: "A importância de uma avaliação personalizada.", excerpt: "Antes da tecnologia, o olhar. O ponto de partida de todo protocolo bem-sucedido." },
];

function Journal() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <div className="lg:col-span-5 lg:pt-24 reveal">
            <Eyebrow>Journal</Eyebrow>
            <h1 className="mt-8 font-serif text-5xl leading-[1.02] lg:text-7xl text-balance">
              Conteúdo exclusivo sobre estética, bem-estar e <em className="not-italic">inovação</em>.
            </h1>
            <p className="mt-10 max-w-md text-[11px] tracking-[0.32em] uppercase text-olive">
              Inspiração · Ciência · Cuidado
            </p>
          </div>
          <div className="lg:col-span-7 reveal">
            <img src={j1} alt="Journal" className="h-[70vh] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <article key={a.title} className="reveal border-t border-graphite/20 pt-8">
                <div className="overflow-hidden bg-stone">
                  <img
                    src={[j2, j3, j1][i]}
                    alt={a.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <span className="mt-6 block text-[10px] tracking-[0.42em] uppercase text-muted-foreground">{a.date}</span>
                <h3 className="mt-3 font-serif text-2xl leading-[1.15]">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-3 text-[10px] tracking-[0.42em] uppercase text-olive">
                  Ler mais <span aria-hidden>→</span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive py-32 text-[#f5f2ea]">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <Eyebrow className="!text-[#d6d0bd]">Receba nossas cartas</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] lg:text-5xl text-balance">
            Uma seleção mensal de leituras sobre estética e <em className="not-italic">cuidado</em>.
          </h2>
          <form className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="seu e-mail"
              className="flex-1 border-b border-[#f5f2ea]/40 bg-transparent px-2 py-3 text-sm placeholder:text-[#f5f2ea]/60 focus:outline-none focus:border-[#f5f2ea]"
            />
            <button type="submit" className="text-[10px] tracking-[0.42em] uppercase border-b border-[#f5f2ea] pb-1">
              Assinar →
            </button>
          </form>
          <p className="mt-12">
            <Link to="/contato" className="text-[10px] tracking-[0.42em] uppercase opacity-80 link-underline">
              Falar com a clínica
            </Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
