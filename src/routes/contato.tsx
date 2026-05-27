import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Eyebrow, OliveBand } from "@/components/SiteLayout";
import contact from "@/assets/contact.jpg";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato · Concierge Privado · Amanda Bombini" },
      { name: "description", content: "Atendimento exclusivo e humanizado. Agende sua consulta com nosso concierge privado." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <div className="lg:col-span-5 lg:pt-24 reveal">
            <Eyebrow>Contato</Eyebrow>
            <h1 className="mt-8 font-serif text-5xl leading-[1.02] lg:text-7xl text-balance">
              Estamos aqui para <em className="not-italic">cuidar de você</em>.
            </h1>
            <p className="mt-10 max-w-md text-base leading-[1.9] text-muted-foreground">
              Fale com nossa equipe. Atendimento exclusivo e humanizado, com hora marcada.
            </p>
          </div>
          <div className="lg:col-span-7 reveal">
            <img src={contact} alt="Clínica" className="h-[75vh] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 md:grid-cols-3 lg:px-12">
          <div className="reveal border-t border-graphite/20 pt-6">
            <h3 className="text-[10px] tracking-[0.42em] uppercase text-olive">Agendamento</h3>
            <ul className="mt-6 space-y-2 text-sm text-graphite/80">
              <li>(11) 89999-9999</li>
              <li>contato@amandabombini.com.br</li>
              <li>São Paulo — SP</li>
            </ul>
          </div>
          <div className="reveal border-t border-graphite/20 pt-6">
            <h3 className="text-[10px] tracking-[0.42em] uppercase text-olive">Horário</h3>
            <ul className="mt-6 space-y-2 text-sm text-graphite/80">
              <li>Segunda a Sexta — 9h às 19h</li>
              <li>Sábado — 9h às 13h</li>
              <li>Atendimento com hora marcada.</li>
            </ul>
          </div>
          <div className="reveal border-t border-graphite/20 pt-6">
            <h3 className="text-[10px] tracking-[0.42em] uppercase text-olive">Localização</h3>
            <ul className="mt-6 space-y-2 text-sm text-graphite/80">
              <li>Jardins — São Paulo</li>
              <li>Endereço completo enviado na confirmação.</li>
              <li>Estacionamento com manobrista.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-bone py-32">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
          <div className="lg:col-span-5 reveal">
            <Eyebrow>Concierge Privado</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] lg:text-5xl text-balance">
              Conte-nos sobre você. Cuidaremos do <em className="not-italic">resto</em>.
            </h2>
            <p className="mt-8 max-w-md text-base leading-[1.9] text-muted-foreground">
              Responderemos pessoalmente, com total privacidade, para
              organizar sua avaliação inicial.
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-7 reveal space-y-8"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Field label="Nome" name="nome" />
              <Field label="Sobrenome" name="sobrenome" />
              <Field label="E-mail" name="email" type="email" />
              <Field label="Telefone" name="telefone" />
            </div>
            <Field label="Interesse" name="interesse" placeholder="Facial, corporal, capilar…" />
            <div>
              <label className="text-[10px] tracking-[0.42em] uppercase text-muted-foreground">Mensagem</label>
              <textarea
                rows={4}
                className="mt-3 w-full border-b border-graphite/30 bg-transparent py-2 text-sm focus:border-olive focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-olive">
              {sent ? "Recebido — entraremos em contato" : "Enviar mensagem"}
            </button>
          </form>
        </div>
      </section>

      <OliveBand
        items={[
          { label: "Localização privilegiada" },
          { label: "Estacionamento com manobrista" },
          { label: "Ambiente confortável e discreto" },
          { label: "Atendimento exclusivo · hora marcada" },
        ]}
      />
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.42em] uppercase text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-graphite/30 bg-transparent py-2 text-sm focus:border-olive focus:outline-none"
      />
    </div>
  );
}
