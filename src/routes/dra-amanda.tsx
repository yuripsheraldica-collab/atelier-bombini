import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, OliveBand } from "@/components/SiteLayout";
import doctor from "@/assets/doctor.jpg";

export const Route = createFileRoute("/dra-amanda")({
  head: () => ({
    meta: [
      { title: "Dra. Amanda Bombini · Médica Especialista" },
      { name: "description", content: "Médica especialista em estética avançada, com abordagem natural, científica e individual." },
    ],
  }),
  component: DraAmanda,
});

function DraAmanda() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <div className="lg:col-span-5 lg:pt-16 reveal">
            <Eyebrow>Dra. Amanda</Eyebrow>
            <h1 className="mt-8 font-serif text-5xl leading-[1.02] lg:text-7xl text-balance">
              Excelência, ciência e <em className="not-italic">sensibilidade</em> em cada escolha.
            </h1>
            <div className="mt-10 h-px w-16 bg-graphite/40" />
            <p className="mt-10 max-w-md text-base leading-[1.9] text-muted-foreground">
              Médica especialista em estética avançada, com uma abordagem que
              valoriza a beleza individual, os traços naturais e a harmonia.
            </p>
            <Link to="/contato" className="link-underline mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase">
              Conheça sua trajetória <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="lg:col-span-7 reveal">
            <img src={doctor} alt="Dra. Amanda Bombini" className="h-[80vh] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <OliveBand
        items={[
          { eyebrow: "+15", label: "Anos de experiência" },
          { label: "Médica especialista em estética avançada e saúde integrativa" },
          { label: "Milhares de pacientes atendidos" },
          { label: "Foco em resultados naturais e harmônicos" },
        ]}
      />

      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center reveal">
            <Eyebrow>Formação e Especializações</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-5xl">
              Uma trajetória dedicada à <em className="not-italic">beleza natural</em>.
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-4">
            {[
              { t: "Medicina", d: "Graduada pela Faculdade de Medicina da USP." },
              { t: "Especialização", d: "Estética avançada e saúde integrativa." },
              { t: "Atualizações constantes", d: "Nos melhores centros internacionais." },
              { t: "Membro", d: "Associações nacionais e internacionais da área." },
            ].map((c) => (
              <div key={c.t} className="reveal border-t border-graphite/20 pt-6">
                <h3 className="text-[11px] tracking-[0.42em] uppercase text-olive">{c.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-32">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <div className="reveal">
            <Eyebrow>Filosofia</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-5xl text-balance">
              Beleza é singularidade. <em className="not-italic">Nunca padrão.</em>
            </h2>
          </div>
          <div className="reveal lg:pt-12">
            <p className="text-base leading-[1.9] text-muted-foreground">
              Acreditamos que o tempo, os traços e a história de cada pessoa
              compõem uma beleza que merece ser revelada — não substituída.
              Trabalhamos com a discrição de quem entende que o melhor
              resultado é aquele que ninguém percebe como intervenção, e
              todos percebem como vitalidade.
            </p>
            <p className="mt-6 text-base leading-[1.9] text-muted-foreground">
              Tecnologia avançada, protocolos individualizados e um olhar
              estético formado em décadas de prática médica e refinamento
              internacional.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
