import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, OliveBand, Eyebrow } from "@/components/SiteLayout";
import doctor from "@/assets/doctor.jpg";
import clinic from "@/assets/clinic.jpg";
import reception from "@/assets/clinic-reception.jpg";
import room from "@/assets/clinic-room.jpg";
import facial from "@/assets/facial.jpg";
import corporal from "@/assets/corporal.jpg";
import skincare from "@/assets/skincare.jpg";
import tecnologia from "@/assets/tecnologia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amanda Bombini — Estética Avançada com Resultados Naturais" },
      {
        name: "description",
        content:
          "Estética avançada com resultados naturais e personalizados. Protocolos exclusivos para rejuvenescimento facial, corporal e saúde da pele.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout transparentNav>
      {/* 1. HERO — Esquerda valor / Direita imagem editorial */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#f5f2ea] pt-28 lg:pt-32">
        <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-[1500px] grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-0">
          <div className="lg:col-span-6 lg:pr-8 reveal in">
            <Eyebrow>Atelier Bombini · São Paulo · Limeira</Eyebrow>
            <h1 className="mt-8 font-serif text-[44px] leading-[1.02] tracking-tight sm:text-6xl lg:text-[78px] text-balance">
              Estética avançada com resultados <em className="not-italic text-olive">naturais</em> e personalizados.
            </h1>
            <p className="mt-10 max-w-lg text-base leading-[1.9] text-muted-foreground">
              Protocolos exclusivos para rejuvenescimento facial, corporal e saúde
              da pele — desenhados pela Dra. Amanda Bombini para revelar o melhor
              de você, com discrição e ciência.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link to="/contato" className="btn-olive">Agendar Avaliação</Link>
              <Link to="/dra-amanda" className="link-underline text-[11px] tracking-[0.32em] uppercase text-graphite/80">
                Conheça a Dra. Amanda →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <div className="relative">
              <img
                src={doctor}
                alt="Dra. Amanda Bombini"
                width={1200}
                height={1500}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute -bottom-6 left-6 hidden bg-[#f5f2ea] px-6 py-4 lg:block">
                <p className="text-[10px] tracking-[0.42em] uppercase text-olive">Dra. Amanda Bombini</p>
                <p className="mt-1 text-[11px] tracking-[0.18em] text-muted-foreground">
                  CRM/SP · Medicina Estética
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIFERENCIAIS — Por que escolher o Atelier */}
      <section className="border-t border-stone/60 py-28 lg:py-36">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center reveal">
            <Eyebrow>Por que escolher o Atelier</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-5xl text-balance">
              Uma filosofia de cuidado <em className="not-italic">antes</em> de qualquer procedimento.
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Ciência", d: "Tratamentos baseados em evidências, com protocolos médicos sólidos." },
              { n: "02", t: "Personalização", d: "Avaliação individualizada e protocolos desenhados sob medida." },
              { n: "03", t: "Tecnologia", d: "Equipamentos de última geração, reconhecidos internacionalmente." },
              { n: "04", t: "Naturalidade", d: "Resultados elegantes, discretos e fiéis à sua identidade." },
            ].map((c) => (
              <div key={c.n} className="reveal border-t border-graphite/25 pt-6">
                <span className="font-serif text-2xl text-olive">{c.n}</span>
                <h3 className="mt-4 font-serif text-2xl">{c.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OliveBand
        items={[
          { label: "Medicina de alta precisão" },
          { label: "Resultados naturais e individuais" },
          { label: "Atendimento exclusivo e humanizado" },
          { label: "Privacidade absoluta" },
        ]}
      />

      {/* 3. DRA. AMANDA */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
          <div className="lg:col-span-6 reveal">
            <img src={doctor} alt="Dra. Amanda Bombini" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
          <div className="lg:col-span-6 lg:pt-16 reveal">
            <Eyebrow>Dra. Amanda Bombini</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">
              Excelência, ciência e <em className="not-italic">sensibilidade</em> em cada escolha.
            </h2>
            <div className="mt-10 h-px w-16 bg-graphite/40" />
            <p className="mt-10 max-w-lg text-base leading-[1.9] text-muted-foreground">
              Médica especialista em estética avançada, com uma abordagem que
              valoriza a beleza individual, os traços naturais e a harmonia.
              Formação contínua nos principais centros internacionais.
            </p>
            <Link to="/dra-amanda" className="link-underline mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase">
              Conheça sua trajetória <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TRATAMENTOS — por jornada */}
      <section className="bg-bone py-32 lg:py-44">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center reveal">
            <Eyebrow>Tratamentos por jornada</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">
              Protocolos para cada <em className="not-italic">objetivo</em>.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Não tratamos procedimentos isolados — tratamos jornadas. Cada
              caminho começa por uma avaliação individual.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: facial,
                name: "Facial",
                items: ["Botox", "Bioestimuladores", "Ultrassom microfocado", "Preenchimentos"],
              },
              {
                img: corporal,
                name: "Corporal",
                items: ["Flacidez", "Gordura localizada", "Celulite", "Firmeza"],
              },
              {
                img: skincare,
                name: "Pele",
                items: ["Melasma", "Acne", "Cicatrizes", "Manchas"],
              },
            ].map((c) => (
              <Link key={c.name} to="/tratamentos" className="group block reveal">
                <div className="overflow-hidden bg-stone">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-6 font-serif text-3xl">{c.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {c.items.map((i) => <li key={i}>· {i}</li>)}
                </ul>
                <span className="mt-6 inline-flex items-center gap-3 text-[10px] tracking-[0.42em] uppercase text-olive">
                  Explorar <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Link to="/tratamentos" className="border border-graphite/40 px-10 py-4 text-[11px] tracking-[0.32em] uppercase transition-colors hover:bg-graphite hover:text-bone">
              Ver todos os tratamentos
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TECNOLOGIA */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-12">
          <div className="lg:col-span-5 lg:pt-16 reveal">
            <Eyebrow>Tecnologia</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">
              Equipamentos reconhecidos <em className="not-italic">internacionalmente</em>.
            </h2>
            <div className="mt-10 h-px w-16 bg-graphite/40" />
            <p className="mt-10 max-w-md text-base leading-[1.9] text-muted-foreground">
              Trabalhamos com tecnologias de ponta, certificadas e validadas
              cientificamente. Segurança e precisão em cada protocolo.
            </p>
            <Link to="/tecnologia" className="link-underline mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase">
              Conheça nossa tecnologia <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="lg:col-span-7 reveal">
            <img src={tecnologia} alt="Tecnologia" className="h-[70vh] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 6. DEPOIMENTOS — prova social elegante */}
      <section className="bg-olive py-32 text-[#f5f2ea]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center reveal">
            <Eyebrow className="!text-[#d6d0bd]">Pacientes</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-5xl">
              Confiança que se traduz em <em className="not-italic">retorno</em>.
            </h2>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              { t: "“Um cuidado raro. Discrição, ciência e um olhar que entende o que você não verbaliza.”", a: "M.A., 47", c: "Paciente desde 2021" },
              { t: "“A primeira clínica em que o procedimento foi consequência de uma conversa, não a venda da consulta.”", a: "C.R., 38", c: "Paciente desde 2022" },
              { t: "“Resultados que ninguém percebe como intervenção — e todos percebem como vitalidade.”", a: "J.P., 52", c: "Paciente desde 2020" },
            ].map((d) => (
              <figure key={d.a} className="reveal border-t border-[#f5f2ea]/30 pt-8">
                <blockquote className="font-serif text-xl leading-snug">{d.t}</blockquote>
                <figcaption className="mt-8 text-[10px] tracking-[0.42em] uppercase opacity-80">
                  {d.a} · {d.c}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[10px] tracking-[0.42em] uppercase opacity-80">
            <span>★★★★★ Avaliações Google</span>
            <span aria-hidden>·</span>
            <span>Participações em congressos científicos</span>
            <span aria-hidden>·</span>
            <span>Casos clínicos autorizados</span>
          </div>
        </div>
      </section>

      {/* 7. CLÍNICA — galeria estilo hotel de luxo */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4 lg:pt-12 reveal">
              <Eyebrow>A Clínica</Eyebrow>
              <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-5xl text-balance">
                Um ambiente <em className="not-italic">sentido</em> antes de visto.
              </h2>
              <p className="mt-8 max-w-sm text-base leading-[1.9] text-muted-foreground">
                Recepção privativa, consultórios individuais, salas de
                procedimento e fachada discreta — cada espaço foi pensado
                para acolher.
              </p>
              <Link to="/clinica" className="link-underline mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase">
                Tour pela clínica <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 gap-3 lg:gap-5">
              {[reception, room, clinic, skincare].map((src, i) => (
                <div key={i} className="reveal overflow-hidden bg-stone">
                  <img src={src} alt="Clínica" className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.04]" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="bg-bone py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12 reveal">
          <Eyebrow>Próximo passo</Eyebrow>
          <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">
            Vamos planejar o seu <em className="not-italic">cuidado</em>.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Comece pela avaliação. Nenhum protocolo antes de uma conversa.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Link to="/contato" className="btn-olive">Agendar Avaliação</Link>
            <a
              href="https://wa.me/5511899999999"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-[11px] tracking-[0.32em] uppercase text-graphite/80"
            >
              Conversar pelo WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
