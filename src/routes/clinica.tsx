import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, OliveBand, Eyebrow, PageHero } from "@/components/SiteLayout";
import clinic from "@/assets/clinic.jpg";
import skincare from "@/assets/skincare.jpg";

export const Route = createFileRoute("/clinica")({
  head: () => ({
    meta: [
      { title: "A Clínica · Amanda Bombini" },
      { name: "description", content: "Uma maison boutique de medicina estética em São Paulo, pensada em cada detalhe." },
    ],
  }),
  component: Clinica,
});

function Clinica() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="A Clínica"
        title={"Uma experiência única, pensada em cada detalhe."}
        subtitle="Excelência médica, tecnologia avançada e atendimento humanizado em um espaço criado para o seu bem-estar."
        image={clinic}
      />

      <OliveBand
        items={[
          { label: "Medicina de alta precisão" },
          { label: "Resultados naturais" },
          { label: "Atendimento exclusivo" },
          { label: "Privacidade absoluta" },
        ]}
      />

      <section className="py-32 lg:py-44">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
          <div className="lg:col-span-6 reveal">
            <img src={skincare} alt="Detalhes" className="h-[70vh] w-full object-cover" loading="lazy" />
          </div>
          <div className="lg:col-span-6 lg:pt-24 reveal">
            <Eyebrow>Nosso compromisso</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">
              Cuidado que vai <em className="not-italic">além do tratamento</em>.
            </h2>
            <div className="mt-10 h-px w-16 bg-graphite/40" />
            <p className="mt-10 max-w-lg text-base leading-[1.9] text-muted-foreground">
              Da sua chegada ao pós-tratamento, cada momento é pensado para
              que você se sinta acolhido, seguro e confiante. Mármore quente,
              luz suave, silêncio escolhido — uma arquitetura criada para
              receber.
            </p>
            <p className="mt-6 max-w-lg text-base leading-[1.9] text-muted-foreground">
              Cada protocolo é único. Cada resultado, natural. Uma experiência
              boutique para o público mais exigente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Acolhimento", d: "Recepção privativa em ambiente discreto, com hora marcada." },
              { n: "02", t: "Avaliação", d: "Diagnóstico individualizado, protocolo desenhado para você." },
              { n: "03", t: "Concierge", d: "Acompanhamento contínuo, do tratamento à manutenção em casa." },
            ].map((c) => (
              <div key={c.n} className="reveal border-t border-graphite/20 pt-8">
                <span className="font-serif text-3xl text-olive">{c.n}</span>
                <h3 className="mt-4 font-serif text-2xl">{c.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link to="/contato" className="btn-olive">Agendar avaliação</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
