import { useState } from 'react';
import { AlertTriangle, CheckCircle2, ShieldAlert, Users } from 'lucide-react';
import { SCHOOL_SCENARIOS, type SchoolScenario } from '../data/schoolSupportData';

type Choice = 'brincadeira' | 'violencia' | null;

export function SituationExplorer() {
  const [selectedId, setSelectedId] = useState<string>(SCHOOL_SCENARIOS[0].id);
  const [choice, setChoice] = useState<Choice>(null);

  const scenario: SchoolScenario =
    SCHOOL_SCENARIOS.find((item) => item.id === selectedId) ?? SCHOOL_SCENARIOS[0];

  const handleSelectScenario = (id: string) => {
    setSelectedId(id);
    setChoice(null);
  };

  return (
    <section id="cenarios" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-[#0F766E]">
            Guia interativo de análise
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl [text-wrap:balance]">
            É brincadeira ou sinal de violência?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Escolhe uma situação do dia a dia escolar, testa o teu olhar e descobre como agir com segurança.
          </p>
        </div>
        <p className="text-sm text-slate-500 tabular-nums">
          4 cenários práticos · Resposta imediata
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div
          role="tablist"
          aria-label="Situações escolares para analisar"
          className="flex flex-col divide-y divide-slate-200 border-y border-slate-200"
        >
          {SCHOOL_SCENARIOS.map((item, idx) => {
            const isActive = item.id === scenario.id;
            return (
              <button
                key={item.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => handleSelectScenario(item.id)}
                className={`group flex w-full items-start justify-between gap-4 py-4 px-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E] ${
                  isActive ? 'bg-slate-100/90' : 'hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#0F766E] tabular-nums">
                      0{idx + 1}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{item.category}</span>
                  </div>
                  <p
                    className={`mt-1 text-base font-semibold transition-colors ${
                      isActive ? 'text-[#0F172A]' : 'text-slate-700 group-hover:text-[#0F172A]'
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className={`mt-1 text-xs font-medium whitespace-nowrap shrink-0 ${
                    isActive ? 'text-[#0F766E]' : 'text-slate-400'
                  }`}
                >
                  {isActive ? 'Em análise' : 'Analisar'}
                </span>
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span>{scenario.category}</span>
            <span aria-hidden="true">·</span>
            <span>Cenário selecionado</span>
          </div>

          <h3 className="mt-2 text-xl font-bold text-[#0F172A] sm:text-2xl">
            {scenario.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            {scenario.situation}
          </p>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-sm font-semibold text-[#0F172A]">{scenario.question}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setChoice('brincadeira')}
                className={`inline-flex min-h-11 items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E] ${
                  choice === 'brincadeira'
                    ? 'border-amber-600 bg-amber-50 text-amber-900'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                É apenas brincadeira
              </button>
              <button
                type="button"
                onClick={() => setChoice('violencia')}
                className={`inline-flex min-h-11 items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E] ${
                  choice === 'violencia'
                    ? 'border-[#0F766E] bg-[#0F766E] text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                É sinal de violência
              </button>
            </div>
          </div>

          {choice !== null && (
            <div className="mt-6 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                {choice === 'violencia' ? (
                  <>
                    <CheckCircle2 className="size-4 text-[#0F766E]" aria-hidden="true" />
                    <span className="text-[#0F766E]">
                      Identificação correta · {scenario.classificationLabel}
                    </span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="size-4 text-amber-700" aria-hidden="true" />
                    <span className="text-amber-800">
                      Atenção ao limite · {scenario.classificationLabel}
                    </span>
                  </>
                )}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {scenario.explanation}
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                    <ShieldAlert className="size-4 text-[#0F766E]" aria-hidden="true" />
                    <span>Se estiver a acontecer contigo</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {scenario.safeActionVictim}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                    <Users className="size-4 text-[#0F766E]" aria-hidden="true" />
                    <span>Se vires acontecer a um colega</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {scenario.safeActionBystander}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
