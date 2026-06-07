import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, PageHero, OliveBand } from "@/components/SiteLayout";
import tecnologia from "@/assets/tecnologia.jpg";

export const Route = createFileRoute("/tecnologia")({
  head: () => ({
    meta: [
      { title: "Tecnologia · Amanda Bombini" },
      { name: "description", content: "Equipamentos reconhecidos internacionalmente, certificados e validados cientificamente." },
    ],
  }),
  component: Tecnologia,
});

const EQUIPMENT = [
  { t: "Ultraformer MPT", d: "Ultrassom microfocado para lifting não invasivo de face e corpo.", o: "Classys · Coreia do Sul" },
  { t: "Morpheus8", d: "Radiofrequência microagulhada para remodelamento dérmico profundo.", o: "InMode · Estados Unidos" },
  { t: "Lumecca IPL", d: "Luz intensa pulsada de alta potência para manchas e vasos.", o: "InMode · Estados Unidos" },
  { t: "Diamond Glow", d: "Hidrodermoabrasão com infusão de ativos para luminosidade imediata.", o: "Allergan Aesthetics" },
  { t: "Exilis Ultra 360", d: "Radiofrequência e ultrassom combinados para flacidez e contorno.", o: "BTL · Reino Unido" },
  { t: "LED Heliotherapy", d: "Fototerapia clínica para regeneração e bioestimulação cutânea.", o: "Dermalux · Reino Unido" },
];

function Tecnologia() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tecnologia"
        title="Equipamentos reconhecidos internacionalmente."
        subtitle="Trabalhamos apenas com tecnologias certificadas, validadas cientificamente e protocoladas com segurança médica."
        image={tecnologia}
      />

      <OliveBand
        items={[
          { label: "Equipamentos certificados ANVISA / FDA" },
          { label: "Fabricantes reconhecidos globalmente" },
          { label: "Protocolos médicos validados" },
          { label: "Manutenção e calibração contínuas" },
        ]}
      />

      <section className="py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center reveal">
            <Eyebrow>Curadoria de Equipamentos</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-5xl text-balance">
              Tecnologia escolhida com o mesmo rigor de uma <em className="not-italic">indicação clínica</em>.
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {EQUIPMENT.map((e) => (
              <div key={e.t} className="reveal border-t border-graphite/25 pt-6">
                <h3 className="font-serif text-2xl">{e.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
                <p className="mt-6 text-[10px] tracking-[0.42em] uppercase text-olive">{e.o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12 reveal">
          <h2 className="font-serif text-4xl leading-[1.05] lg:text-5xl text-balance">
            Tecnologia avançada, indicada com <em className="not-italic">discernimento médico</em>.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Nenhum equipamento substitui um bom diagnóstico. Toda indicação
            parte de uma avaliação clínica individualizada.
          </p>
          <Link to="/contato" className="btn-olive mt-12">Agendar Avaliação</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
