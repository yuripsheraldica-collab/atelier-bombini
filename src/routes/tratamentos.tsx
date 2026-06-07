import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, PageHero } from "@/components/SiteLayout";
import facial from "@/assets/facial.jpg";
import corporal from "@/assets/corporal.jpg";
import skincare from "@/assets/skincare.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/tratamentos")({
  head: () => ({
    meta: [
      { title: "Tratamentos · Amanda Bombini" },
      { name: "description", content: "Protocolos por jornada: facial, corporal e saúde da pele. Avaliação individualizada." },
    ],
  }),
  component: Tratamentos,
});

const JOURNEYS = [
  {
    img: facial,
    name: "Facial",
    intro: "Rejuvenescimento, harmonia e firmeza, respeitando seus traços.",
    items: [
      { t: "Botox", d: "Suavização de linhas dinâmicas com expressão preservada." },
      { t: "Bioestimuladores", d: "Estímulo de colágeno para firmeza e qualidade de pele." },
      { t: "Ultrassom microfocado", d: "Lifting não invasivo para contorno e elevação." },
      { t: "Preenchimentos", d: "Reposição de volume com naturalidade e proporção." },
    ],
  },
  {
    img: corporal,
    name: "Corporal",
    intro: "Tonicidade, contorno e bem-estar — sem agressão.",
    items: [
      { t: "Flacidez", d: "Radiofrequência e ultrassom para firmeza tecidual." },
      { t: "Gordura localizada", d: "Criolipólise e protocolos lipolíticos avançados." },
      { t: "Celulite", d: "Tratamentos combinados para textura e contorno." },
      { t: "Firmeza & contorno", d: "Estímulo de colágeno corporal e remodelamento." },
    ],
  },
  {
    img: skincare,
    name: "Pele",
    intro: "Diagnóstico médico e protocolos para saúde dermatológica.",
    items: [
      { t: "Melasma", d: "Protocolos clareadores médicos e fotoproteção avançada." },
      { t: "Acne", d: "Manejo clínico, controle inflamatório e cicatricial." },
      { t: "Cicatrizes", d: "Microagulhamento, lasers e bioestimulação." },
      { t: "Manchas", d: "Luz intensa pulsada e peelings médicos." },
    ],
  },
];

function Tratamentos() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tratamentos por jornada"
        title="Protocolos para cada objetivo, personalizados pela Dra. Amanda."
        subtitle="Não tratamos procedimentos isolados. Tratamos jornadas — desenhadas a partir de uma avaliação clínica individual."
        image={hero}
      />

      {JOURNEYS.map((j, i) => (
        <section key={j.name} className={i % 2 === 1 ? "bg-bone py-28 lg:py-36" : "py-28 lg:py-36"}>
          <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
            <div className={`grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              <div className="lg:col-span-6 reveal lg:[direction:ltr]">
                <div className="overflow-hidden bg-stone">
                  <img src={j.img} alt={j.name} className="aspect-[4/5] w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="lg:col-span-6 lg:pt-12 reveal lg:[direction:ltr]">
                <Eyebrow>{`0${i + 1} · Jornada`}</Eyebrow>
                <h2 className="mt-6 font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">{j.name}</h2>
                <p className="mt-6 max-w-lg text-base leading-[1.9] text-muted-foreground">{j.intro}</p>
                <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                  {j.items.map((it) => (
                    <div key={it.t} className="border-t border-graphite/25 pt-5">
                      <h3 className="font-serif text-xl">{it.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                    </div>
                  ))}
                </div>
                <Link to="/contato" className="btn-olive mt-12">Agendar Avaliação</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-32">
        <div className="mx-auto max-w-[1500px] px-6 text-center lg:px-12">
          <Eyebrow>Próximo passo</Eyebrow>
          <h2 className="mx-auto mt-8 max-w-3xl font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">
            Cada protocolo é único.<br />Cada resultado, <em className="not-italic">natural</em>.
          </h2>
          <Link to="/contato" className="btn-olive mt-12">Planejar meu tratamento</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
