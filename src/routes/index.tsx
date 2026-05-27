import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, OliveBand, Eyebrow } from "@/components/SiteLayout";
import hero from "@/assets/hero.jpg";
import clinic from "@/assets/clinic.jpg";
import facial from "@/assets/facial.jpg";
import corporal from "@/assets/corporal.jpg";
import masculino from "@/assets/masculino.jpg";
import skincare from "@/assets/skincare.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amanda Bombini — Estética de Alto Luxo em São Paulo" },
      {
        name: "description",
        content:
          "Clínica boutique de medicina estética. Protocolos personalizados, resultados naturais e experiência concierge privada em São Paulo.",
      },
    ],
  }),
  component: Home,
});

const PROTOCOLS = {
  Capilar: [
    "Terapia regenerativa",
    "Mesoterapia",
    "Microagulhamento capilar",
    "Hair infusion",
    "Spa capilar",
    "Corte bordado",
    "Exossomos",
    "LED capilar",
    "Transplante capilar",
    "Regeneração de haste",
  ],
  Facial: [
    "Radiofrequência facial",
    "Máscara fotage",
    "Bioestimulador de colágeno",
    "Peeling",
    "Diamond glow",
    "Skinbooster",
    "Botox",
    "Harmonização facial",
    "Limpeza de pele",
    "Eletrocauterização",
  ],
  Corporal: [
    "MMP estrias",
    "Radiofrequência corporal",
    "Criocirurgia",
    "Ultraformer",
    "Depilação a laser",
    "Morpheus corporal",
    "Remoção de tatuagem",
    "Botox corporal",
  ],
  Injetáveis: [
    "Ácido hialurônico",
    "Preenchimento",
    "Toxina botulínica",
    "Bioestimuladores",
    "Harmonização",
    "Vitaminas",
  ],
};

function Home() {
  return (
    <SiteLayout transparentNav>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#2a2722]">
        <img
          src={hero}
          alt="Amanda Bombini — Estética editorial"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2722]/80 via-[#2a2722]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2722]/40 via-transparent to-[#2a2722]/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-6 pb-24 lg:justify-center lg:px-12 lg:pb-0">
          <div className="max-w-2xl reveal in">
            <Eyebrow className="!text-[#d6d0bd]">Maison de Estética Avançada</Eyebrow>
            <h1 className="mt-8 font-serif text-[44px] leading-[1.02] text-[#f5f2ea] sm:text-6xl lg:text-[88px] text-balance">
              A beleza não deve<br />
              transformar.<br />
              <em className="not-italic text-[#d6d0bd]">Deve revelar.</em>
            </h1>
            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-12 bg-[#d6d0bd]" />
              <p className="text-[11px] tracking-[0.42em] uppercase text-[#d6d0bd]">
                Estética de alto luxo<br />para homens e mulheres
              </p>
            </div>
            <Link to="/contato" className="btn-olive mt-12">
              Concierge Privado
            </Link>
          </div>

          <div className="absolute bottom-10 right-6 hidden items-center gap-3 text-[10px] tracking-[0.42em] uppercase text-[#d6d0bd] lg:flex lg:right-12">
            <span className="block h-10 w-px bg-[#d6d0bd]/60 animate-pulse" />
            Descubra · Scroll
          </div>
        </div>
      </section>

      {/* OLIVE BAND */}
      <OliveBand
        items={[
          { label: "Medicina de alta precisão e tecnologia avançada" },
          { label: "Resultados naturais e personalizados" },
          { label: "Atendimento exclusivo e humanizado" },
          { label: "Privacidade absoluta e confidencialidade" },
        ]}
      />

      {/* A CLÍNICA */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
          <div className="lg:col-span-5 lg:pt-24 reveal">
            <Eyebrow>A Clínica</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">
              Uma experiência única, pensada em <em className="not-italic">cada detalhe</em>.
            </h2>
            <div className="mt-10 h-px w-16 bg-graphite/40" />
            <p className="mt-10 max-w-md text-base leading-[1.9] text-muted-foreground">
              Na Clínica Amanda Bombini, cada detalhe foi pensado para
              oferecer uma experiência única, com privacidade, conforto
              e excelência em cada etapa do seu cuidado.
            </p>
            <Link to="/clinica" className="link-underline mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase">
              Conheça nossa clínica <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="lg:col-span-7 reveal">
            <img src={clinic} alt="Recepção da clínica" className="h-[70vh] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* TRATAMENTOS */}
      <section className="bg-bone py-32 lg:py-44">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center reveal">
            <Eyebrow>Experiências</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">
              Protocolos personalizados<br />
              para realçar sua <em className="not-italic">melhor versão</em>.
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { img: facial, name: "Facial", desc: "Tecnologia e protocolos avançados para realçar sua beleza com naturalidade.", to: "/tratamentos" },
              { img: corporal, name: "Corporal", desc: "Tratamentos personalizados para contornos, firmeza e bem-estar.", to: "/tratamentos" },
              { img: masculino, name: "Masculino", desc: "Protocolos exclusivos para cuidados faciais, corporais e prevenção.", to: "/tratamentos" },
              { img: skincare, name: "Skincare & Home Care", desc: "Linha exclusiva de dermocosméticos para potencializar seus resultados.", to: "/tratamentos" },
            ].map((c) => (
              <Link to={c.to} key={c.name} className="group block reveal">
                <div className="overflow-hidden bg-stone">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl tracking-[0.02em]">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <span className="mt-5 inline-flex items-center gap-3 text-[10px] tracking-[0.42em] uppercase text-olive">
                  Explorar <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Link to="/tratamentos" className="border border-graphite/40 px-10 py-4 text-[11px] tracking-[0.32em] uppercase transition-colors hover:bg-graphite hover:text-bone">
              Conhecer todas experiências
            </Link>
          </div>
        </div>
      </section>

      {/* PROTOCOLOS — OLIVE BG */}
      <section className="bg-olive text-[#f5f2ea]">
        <div className="mx-auto max-w-[1500px] px-6 py-32 lg:px-12 lg:py-44">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3 reveal">
              <span className="text-[10px] tracking-[0.42em] uppercase opacity-70">Curadoria</span>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] lg:text-5xl">
                Protocolos & <em className="not-italic">Experiências</em>
              </h2>
              <p className="mt-8 max-w-xs text-sm leading-relaxed opacity-80">
                Ciência, tecnologia e um olhar individual para resultados naturais,
                sofisticados e atemporais.
              </p>
              <Link to="/tratamentos" className="mt-8 inline-flex items-center gap-3 text-[10px] tracking-[0.32em] uppercase opacity-90">
                Saiba mais <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-9 grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4">
              {Object.entries(PROTOCOLS).map(([cat, items]) => (
                <div key={cat} className="reveal">
                  <h3 className="mb-6 text-[10px] tracking-[0.42em] uppercase border-b border-[#f5f2ea]/30 pb-3">
                    {cat}
                  </h3>
                  <ul className="space-y-3 text-[13px] leading-relaxed opacity-90">
                    {items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE EXPERIENCE */}
      <section className="relative">
        <div className="relative h-[80vh] min-h-[520px] w-full overflow-hidden bg-[#2a2722]">
          <img src={clinic} alt="Experiência privada" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a2722]/90 via-[#2a2722]/40 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-6 pb-20 lg:px-12">
            <div className="max-w-2xl reveal">
              <Eyebrow className="!text-[#d6d0bd]">Experiência Privada</Eyebrow>
              <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-[#f5f2ea] lg:text-6xl text-balance">
                Atendimento exclusivo.<br />
                Resultados naturais.<br />
                <em className="not-italic text-[#d6d0bd]">Beleza que te representa.</em>
              </h2>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-[#d6d0bd]">
                Da sua chegada ao pós-tratamento, cada momento é pensado para
                você se sentir acolhido, seguro e confiante.
              </p>
              <Link to="/contato" className="btn-olive mt-10">
                Concierge Privado
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
