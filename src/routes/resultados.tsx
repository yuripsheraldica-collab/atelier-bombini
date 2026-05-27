import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Eyebrow } from "@/components/SiteLayout";
import r1 from "@/assets/result1.jpg";
import r2 from "@/assets/result2.jpg";
import r3 from "@/assets/result3.jpg";
import r4 from "@/assets/result4.jpg";
import facial from "@/assets/facial.jpg";

export const Route = createFileRoute("/resultados")({
  head: () => ({
    meta: [
      { title: "Resultados · Amanda Bombini" },
      { name: "description", content: "Resultados reais. Beleza natural. Uma curadoria editorial dos cuidados Amanda Bombini." },
    ],
  }),
  component: Resultados,
});

function Resultados() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <div className="lg:col-span-5 lg:pt-24 reveal">
            <Eyebrow>Resultados</Eyebrow>
            <h1 className="mt-8 font-serif text-5xl leading-[1.02] lg:text-7xl text-balance">
              Resultados que respeitam sua essência e <em className="not-italic">realçam</em> sua melhor versão.
            </h1>
            <div className="mt-10 h-px w-16 bg-graphite/40" />
            <p className="mt-10 max-w-md text-[11px] tracking-[0.32em] uppercase text-olive">
              Beleza real. Resultados naturais.
            </p>
            <Link to="/contato" className="btn-olive mt-10">Agendar avaliação</Link>
          </div>
          <div className="lg:col-span-7 reveal">
            <img src={facial} alt="Resultados" className="h-[78vh] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
            {[r1, r2, r3, r4].map((src, i) => (
              <div key={i} className="reveal overflow-hidden bg-stone">
                <img src={src} alt={`Resultado ${i + 1}`} className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-[11px] tracking-[0.42em] uppercase text-muted-foreground">
              Casos reais · Resultados reais
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <h2 className="font-serif text-4xl leading-[1.05] lg:text-6xl text-balance">
            A naturalidade é o nosso <em className="not-italic">padrão de ouro</em>.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-[1.9] text-muted-foreground">
            Não buscamos a transformação. Buscamos a revelação. Cada protocolo
            é desenhado para que o resultado pareça parte de você — porque é.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
