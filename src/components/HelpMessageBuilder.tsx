import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import conversaImg from '../assets/images/conversa_segura_escola_1794930214835.jpg';

type Perspective = 'comigo' | 'colega';
type AdultRole = 'professor' | 'familiar' | 'psicologo';
type IncidentKind = 'verbal' | 'fisica' | 'digital';

const ADULT_LABELS: Record<AdultRole, string> = {
  professor: 'Professor / Diretor de turma',
  familiar: 'Familiar',
  psicologo: 'Psicólogo / Apoio escolar',
};

const INCIDENT_LABELS: Record<IncidentKind, string> = {
  verbal: 'Insultos ou ameaças',
  fisica: 'Empurrões ou agressão',
  digital: 'Exclusão ou mensagens',
};

function buildMessage(
  perspective: Perspective,
  adult: AdultRole,
  kind: IncidentKind,
): string {
  const greeting =
    adult === 'familiar'
      ? 'Preciso de conversar contigo sobre uma coisa que tem acontecido na escola.'
      : adult === 'psicologo'
        ? 'Gostava de pedir um momento de conversa em privado sobre uma situação na escola.'
        : 'Professor(a), posso falar consigo num momento tranquilo sobre uma situação entre alunos?';

  const subject =
    perspective === 'comigo'
      ? kind === 'verbal'
        ? 'Tenho ouvido insultos e provocações repetidas de alguns colegas e já não me sinto seguro(a) nem à vontade nos intervalos.'
        : kind === 'fisica'
          ? 'Tenho sofrido empurrões ou danos nos meus objetos de propósito e preciso de ajuda para que pare.'
          : 'Estão a excluir-me ou a partilhar mensagens e comentários para me humilhar e quero resolver isto com apoio.'
      : kind === 'verbal'
        ? 'Tenho reparado que um(a) colega está a ser alvo constante de insultos e provocações e parece estar a sofrer com isso.'
        : kind === 'fisica'
          ? 'Vi um(a) colega ser empurrado(a) ou ter o seu material danificado de propósito e fiquei preocupado(a) com a segurança dele(a).'
          : 'Notei que estão a excluir um(a) colega ou a enviar mensagens ofensivas sobre ele(a) e acho importante que um adulto saiba.';

  const closing =
    'Não quero criar confusão, só quero que esta situação pare em segurança. Podemos conversar hoje?';

  return `${greeting} ${subject} ${closing}`;
}

export function HelpMessageBuilder() {
  const [perspective, setPerspective] = useState<Perspective>('comigo');
  const [adult, setAdult] = useState<AdultRole>('professor');
  const [kind, setKind] = useState<IncidentKind>('verbal');
  const [copied, setCopied] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const generatedText = buildMessage(perspective, adult, kind);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div id="preparar" className="mt-16 border-t border-slate-200 pt-14">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-slate-200">
          {!imgFailed ? (
            <img
              src={conversaImg}
              alt="Um aluno conversa com tranquilidade com uma orientadora escolar numa sala iluminada"
              referrerPolicy="no-referrer"
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full min-h-[280px] items-center justify-center bg-gradient-to-br from-teal-900 to-slate-800 p-8 text-white">
              <p className="max-w-xs text-center text-lg font-semibold">
                Conversar com um adulto de confiança abre caminho para a solução.
              </p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
            <p className="text-xs font-medium text-slate-200">
              Apoio confidencial na escola
            </p>
            <p className="mt-1 max-w-sm text-lg font-semibold leading-snug text-white">
              Não precisas de saber explicar tudo de forma perfeita. Basta começar a conversa.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#0F766E]">
              Preparar o primeiro passo
            </p>
            <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
              Como pedir ajuda por palavras tuas
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Se não souberes como começar a conversa, escolhe as opções abaixo para gerar uma mensagem clara que podes ler ou enviar.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs font-semibold text-slate-700">1. A situação</p>
                <div className="mt-2 inline-flex rounded-lg bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => setPerspective('comigo')}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      perspective === 'comigo'
                        ? 'bg-white text-[#0F172A] shadow-sm'
                        : 'text-slate-600 hover:text-[#0F172A]'
                    }`}
                  >
                    Aconteceu comigo
                  </button>
                  <button
                    type="button"
                    onClick={() => setPerspective('colega')}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      perspective === 'colega'
                        ? 'bg-white text-[#0F172A] shadow-sm'
                        : 'text-slate-600 hover:text-[#0F172A]'
                    }`}
                  >
                    Vi acontecer a um colega
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-700">2. Com quem vais falar</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(Object.keys(ADULT_LABELS) as AdultRole[]).map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setAdult(role)}
                      className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                        adult === role
                          ? 'border-[#0F766E] bg-[#0F766E] text-white'
                          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {ADULT_LABELS[role]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-700">3. Tipo de acontecimento</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(Object.keys(INCIDENT_LABELS) as IncidentKind[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setKind(item)}
                      className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                        kind === item
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {INCIDENT_LABELS[item]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 border border-slate-200">
            <p className="text-sm leading-relaxed text-slate-800">{generatedText}</p>
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Podes adaptar este texto antes de falar
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#0F766E] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0D5F59] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5" aria-hidden="true" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" aria-hidden="true" />
                    <span>Copiar mensagem</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
