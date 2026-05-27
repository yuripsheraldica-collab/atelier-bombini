import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, PageHero } from "@/components/SiteLayout";
import facial from "@/assets/facial.jpg";
import corporal from "@/assets/corporal.jpg";
import masculino from "@/assets/masculino.jpg";
import skincare from "@/assets/skincare.jpg";
import capilar from "@/assets/capilar.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/tratamentos")({
  head: () => ({
    meta: [
      { title: "Tratamentos & Experiências · Amanda Bombini" },
      { name: "description", content: "Protocolos avançados e personalizados para resultados naturais e sofisticados." },
    ],
  }),
  component: Tratamentos,
});

const CATEGORIES = [
  { img: facial, name: "Facial", desc: "Tecnologia e protocolos avançados para realçar sua beleza com naturalidade." },
  { img: corporal, name: "Corporal", desc: "Tratamentos personalizados para contornos, firmeza e bem-estar." },
  { img: capilar, name: "Capilar", desc: "Soluções avançadas para saúde, força e rejuvenescimento dos fios." },
  { img: masculino, name: "Masculino", desc: "Protocolos exclusivos para cuidados faciais, corporais e prevenção." },
  { img: hero, name: "Injetáveis", desc: "Aplicação precisa para harmonização sutil e expressões naturais." },
  { img: skincare, name: "Skincare & Home Care", desc: "Dermocosméticos exclusivos para potencializar seus resultados." },
];

const PROTOCOLS = {
  Capilar: ["Terapia regenerativa","Mesoterapia","Microagulhamento capilar","Hair infusion","Spa capilar","Corte bordado","Exossomos","LED capilar","Transplante capilar","Regeneração de haste"],
  Facial: ["Radiofrequência facial","Máscara fotage","Bioestimulador de colágeno","Peeling","Diamond glow","Skinbooster","Botox","Harmonização facial","Limpeza de pele","Eletrocauterização"],
  Corporal: ["MMP estrias","Radiofrequência corporal","Criocirurgia","Ultraformer","Depilação a laser","Morpheus corporal","Remoção de tatuagem","Botox corporal"],
  Injetáveis: ["Ácido hialurônico","Preenchimento","Toxina botulínica","Bioestimuladores","Harmonização","Vitaminas"],
};

function Tratamentos() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tratamentos & Experiências"
        title="Protocolos avançados e personalizados para resultados naturais."
        subtitle="Cada protocolo é único. Cada resultado, natural. Avaliação individualizada e protocolos personalizados para atender às suas necessidades específicas."
        image={hero}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="reveal">
                <div className="overflow-hidden bg-stone">
                  <img src={c.img} alt={c.name} className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]" loading="lazy" />
                </div>
                <h3 className="mt-6 font-serif text-3xl">{c.name}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive text-[#f5f2ea]">
        <div className="mx-auto max-w-[1500px] px-6 py-32 lg:px-12 lg:py-44">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3 reveal">
              <Eyebrow className="!text-[#d6d0bd]">Curadoria completa</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] lg:text-5xl">
                Protocolos & <em className="not-italic">Experiências</em>
              </h2>
              <p className="mt-8 max-w-xs text-sm leading-relaxed opacity-80">
                Ciência, tecnologia e um olhar individual para resultados naturais,
                sofisticados e atemporais.
              </p>
            </div>
            <div className="lg:col-span-9 grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4">
              {Object.entries(PROTOCOLS).map(([cat, items]) => (
                <div key={cat} className="reveal">
                  <h3 className="mb-6 text-[10px] tracking-[0.42em] uppercase border-b border-[#f5f2ea]/30 pb-3">{cat}</h3>
                  <ul className="space-y-3 text-[13px] leading-relaxed opacity-90">
                    {items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-[1500px] px-6 text-center lg:px-12">
          <Eyebrow>Avaliação personalizada</Eyebrow>
          <h2 className="mx-auto mt-8 max-w-3xl font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">
            Cada protocolo é único.<br />Cada resultado, <em className="not-italic">natural</em>.
          </h2>
          <Link to="/contato" className="btn-olive mt-12">Agendar avaliação</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
