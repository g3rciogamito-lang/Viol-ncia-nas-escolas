import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import heroImg from './assets/images/hero_apoio_escolar_1794930215501.jpg';
import { ACTION_STEPS, VIOLENCE_TYPES, type ViolenceType } from './data/schoolSupportData';
import { SituationExplorer } from './components/SituationExplorer';
import { HelpMessageBuilder } from './components/HelpMessageBuilder';

const TYPE_ICONS: Record<ViolenceType['id'], typeof MessageCircle> = {
  verbal: MessageCircle,
  fisica: ShieldCheck,
  digital: Smartphone,
};

export function App() {
  const [activeType, setActiveType] = useState<ViolenceType['id']>('verbal');
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  const selectedType =
    VIOLENCE_TYPES.find((item) => item.id === activeType) ?? VIOLENCE_TYPES[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#inicio"
            className="font-display text-lg font-bold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0"
          >
            Respeito na Escola
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex"
          >
            <a
              href="#reconhecer"
              className="transition-colors hover:text-[#0F172A] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Reconhecer
            </a>
            <a
              href="#cenarios"
              className="transition-colors hover:text-[#0F172A] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Cenários
            </a>
            <a
              href="#agir"
              className="transition-colors hover:text-[#0F172A] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Como agir
            </a>
            <a
              href="#apoio"
              className="transition-colors hover:text-[#0F172A] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Pedir apoio
            </a>
          </nav>

          <a
            href="#apoio"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#0F766E] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0D5F59] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
          >
            <span>Preciso de ajuda</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="relative mx-auto grid max-w-7xl items-stretch gap-10 px-5 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-12 lg:pb-24"
        >
          <div className="flex flex-col justify-between py-2">
            <div>
              <p className="text-sm font-medium text-[#0F766E]">
                Um espaço para aprender e cuidar
              </p>

              <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.5rem] [text-wrap:balance]">
                A escola deve ser um lugar{' '}
                <span className="text-[#0F766E]">seguro.</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                A violência entre alunos não é brincadeira. Reconhecer o que está a acontecer é o primeiro passo para mudar a história e proteger quem precisa.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#cenarios"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#0F766E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0D5F59] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                >
                  <span>Explorar situações</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href="#preparar"
                  className="inline-flex min-h-12 items-center gap-2 px-3 py-3 text-sm font-semibold text-[#0F172A] transition-colors hover:text-[#0F766E] whitespace-nowrap shrink-0"
                >
                  <span>Preparar pedido de ajuda</span>
                  <HeartHandshake className="size-4 text-[#0F766E]" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
              <HeartHandshake className="size-5 shrink-0 text-[#0F766E]" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-[#0F172A]">Não estás sozinho.</strong>{' '}
                Pedir ajuda é coragem.
              </span>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-slate-200 lg:h-full">
            {!heroImgFailed ? (
              <img
                src={heroImg}
                alt="Uma aluna recebe apoio de colegas e de uma professora no recreio da escola"
                referrerPolicy="no-referrer"
                onError={() => setHeroImgFailed(true)}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="flex h-full min-h-[320px] items-center justify-center bg-gradient-to-br from-teal-900 to-slate-800 p-8 text-white">
                <p className="max-w-xs text-center text-xl font-semibold">
                  Uma conversa pode ser o começo de uma mudança.
                </p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <p className="max-w-xs text-lg font-semibold leading-snug text-white sm:text-xl">
                Uma conversa pode ser o começo de uma mudança.
              </p>
              <a
                href="#reconhecer"
                aria-label="Descer para reconhecer a violência"
                className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#0F766E] transition-colors hover:bg-white sm:flex"
              >
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="reconhecer" className="border-y border-slate-200 bg-[#F1F5F9] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#0F766E]">
                Saber é proteger
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl [text-wrap:balance]">
                Quando deixa de ser brincadeira?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Quando magoa, assusta ou acontece repetidamente, merece atenção. A culpa nunca é de quem está a sofrer.
              </p>
            </div>

            <div className="grid border-y border-slate-200 md:grid-cols-3 md:divide-x md:divide-slate-200">
              {VIOLENCE_TYPES.map((item) => {
                const Icon = TYPE_ICONS[item.id];
                const isSelected = item.id === activeType;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveType(item.id)}
                    className={`flex gap-4 border-b border-slate-200 py-6 text-left transition-colors last:border-0 md:border-b-0 md:px-6 ${
                      isSelected ? 'bg-white/80' : 'hover:bg-white/40'
                    }`}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#0F766E] border border-slate-200">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-[#0F766E] tabular-nums">
                        {item.index}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-[#0F172A]">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold text-[#0F766E] tabular-nums">
                    {selectedType.index} · Sinais comuns de {selectedType.label.toLowerCase()}
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-700">
                    {selectedType.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0F766E]"
                        />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="max-w-md rounded-xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-xs font-semibold text-[#0F172A]">
                    Porque é importante agir cedo
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {selectedType.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SituationExplorer />

        <section id="agir" className="border-t border-slate-200 bg-[#F1F5F9] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#0F766E]">
                  Pequenos passos, grande diferença
                </p>
                <h2 className="mt-2 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl [text-wrap:balance]">
                  O que podes fazer?
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                  Se isto está a acontecer contigo ou com alguém da tua turma, não tens de resolver tudo sozinho.
                </p>
              </div>

              <ol className="grid gap-x-10 sm:grid-cols-2">
                {ACTION_STEPS.map((step) => (
                  <li
                    key={step.number}
                    className="flex gap-4 border-t border-slate-200 py-5"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#0F766E] text-sm font-bold text-white tabular-nums">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#0F172A]">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <HelpMessageBuilder />
          </div>
        </section>

        <section id="apoio" className="bg-[#0F766E] py-14 text-white sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-teal-100">
                Não precisas de passar por isso em silêncio
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl [text-wrap:balance]">
                Procura alguém de confiança.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-teal-50">
                Fala com um familiar, professor, diretor de turma ou serviços de psicologia da escola. Se houver perigo imediato, aproxima-te logo de um adulto ou liga para os serviços de emergência (112).
              </p>
            </div>

            <a
              href="#inicio"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition-colors hover:bg-slate-100 md:self-center whitespace-nowrap"
            >
              <span>Voltar ao início</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span className="font-display text-sm font-bold text-[#0F172A]">
            Respeito na Escola
          </span>
          <span>Escutar, acolher, proteger. Cada pessoa merece respeito.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
