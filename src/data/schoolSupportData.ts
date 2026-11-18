export interface ViolenceType {
  id: 'verbal' | 'fisica' | 'digital';
  index: string;
  label: string;
  summary: string;
  examples: string[];
  impact: string;
}

export interface SchoolScenario {
  id: string;
  title: string;
  category: string;
  situation: string;
  question: string;
  isViolence: boolean;
  classificationLabel: string;
  explanation: string;
  safeActionVictim: string;
  safeActionBystander: string;
}

export interface ActionStep {
  number: string;
  title: string;
  description: string;
}

export const VIOLENCE_TYPES: ViolenceType[] = [
  {
    id: 'verbal',
    index: '01',
    label: 'Violência verbal',
    summary:
      'Insultos, ameaças, apelidos humilhantes, provocações constantes ou espalhar rumores para magoar.',
    examples: [
      'Chamar nomes ofensivos todos os dias à frente da turma.',
      'Rir-se do aspeto físico, da forma de falar ou das notas de um colega.',
      'Ameaçar com frases como "logo vês lá fora" para causar medo.',
    ],
    impact:
      'Mesmo sem marcas visíveis, as palavras repetidas afetam a confiança, o sono e a vontade de ir à escola.',
  },
  {
    id: 'fisica',
    index: '02',
    label: 'Violência física',
    summary:
      'Bater, empurrar, pontapear, prender, danificar ou tirar objetos de alguém de propósito.',
    examples: [
      'Empurrar contra os cacifos ou dar rasteiras "a brincar" nos corredores.',
      'Esconder, estragar ou rasgar cadernos, mochilas e material escolar.',
      'Impedir alguém de passar numa porta ou cercar num canto do recreio.',
    ],
    impact:
      'Nenhum contacto físico feito para assustar, magoar ou controlar outra pessoa é aceitável.',
  },
  {
    id: 'digital',
    index: '03',
    label: 'Exclusão e meios digitais',
    summary:
      'Excluir repetidamente, intimidar em grupo ou usar mensagens e redes sociais para humilhar.',
    examples: [
      'Criar grupos de mensagens para gozar com um colega ou partilhar fotos sem consentimento.',
      'Deixar alguém sistematicamente de fora dos trabalhos de grupo e do recreio.',
      'Enviar comentários agressivos ou anónimos depois do horário escolar.',
    ],
    impact:
      'Quando passa para o telemóvel, a pessoa sente que não tem descanso nem em casa. Guardar provas ajuda a travar.',
  },
];

export const SCHOOL_SCENARIOS: SchoolScenario[] = [
  {
    id: 'apelidos',
    title: 'Apelidos repetidos no recreio',
    category: 'Violência verbal',
    situation:
      'Sempre que um aluno entra no recreio, três colegas usam um apelido sobre a sua aparência e riem-se alto. Quando ele pede para pararem, respondem que "não aguenta uma piada".',
    question: 'Como devemos interpretar esta situação?',
    isViolence: true,
    classificationLabel: 'Sinal de violência verbal',
    explanation:
      'Só é brincadeira quando todos se riem e se sentem bem. Quando há repetição, desequilíbrio de força e alguém fica magoado depois de pedir para parar, é violência verbal.',
    safeActionVictim:
      'Afasta-te do grupo, regista o que tem acontecido e conta ao teu diretor de turma ou a um familiar.',
    safeActionBystander:
      'Não te rias nem repitas o apelido. Aproxima-te do colega e convida-o para caminhar contigo para outro sítio.',
  },
  {
    id: 'empurrao',
    title: 'Empurrões no corredor',
    category: 'Violência física',
    situation:
      'Na troca de aulas, um aluno mais velho empurra frequentemente o mesmo colega contra a parede e deixa-lhe cair os livros ao chão, dizendo que foi sem querer.',
    question: 'Como devemos interpretar esta situação?',
    isViolence: true,
    classificationLabel: 'Sinal de violência física',
    explanation:
      'Mesmo disfarçado de "acidente", o empurrão intencional e repetido serve para intimidar e humilhar. A integridade física e os pertences de cada aluno devem ser respeitados.',
    safeActionVictim:
      'Procura um funcionário ou professor próximo no corredor e comunica o que se repetiu.',
    safeActionBystander:
      'Ajuda o colega a apanhar os livros e acompanha-o até junto de um adulto da escola para relatar o sucedido.',
  },
  {
    id: 'grupo-mensagens',
    title: 'Prints e rumores em grupo de turma',
    category: 'Exclusão e digital',
    situation:
      'Alguém tirou uma foto desprevenida a uma colega durante a aula de Educação Física e partilhou-a no grupo da turma com legendas trocistas.',
    question: 'Como devemos interpretar esta situação?',
    isViolence: true,
    classificationLabel: 'Sinal de ciberbullying',
    explanation:
      'Partilhar imagens de colegas sem autorização para gozar ou humilhar é uma forma grave de violência digital e tem impacto rápido junto de muitas pessoas.',
    safeActionVictim:
      'Não respondas às provocações. Tira captura de ecrã das mensagens e mostra imediatamente a um adulto de confiança.',
    safeActionBystander:
      'Não partilhes nem comentes a imagem. Podes escrever no grupo que isso não tem graça e avisar um professor.',
  },
  {
    id: 'mochila',
    title: 'Esconder o estojo e a mochila',
    category: 'Dano e intimidação',
    situation:
      'Antes de tocar para a aula, um grupo tira a mochila de um colega e vai passando de mão em mão para que ele não a consiga alcançar antes do professor chegar.',
    question: 'Como devemos interpretar esta situação?',
    isViolence: true,
    classificationLabel: 'Sinal de intimidação',
    explanation:
      'Tirar ou danificar objetos pessoais em grupo coloca o colega em desvantagem, gera ansiedade e transforma um espaço comum num ambiente hostil.',
    safeActionVictim:
      'Não entres em confronto físico para recuperar a mochila. Avisa o professor assim que entrar na sala ou um assistente operacional.',
    safeActionBystander:
      'Recusa participar na passagem da mochila, devolve-a ao colega ou chama um adulto responsável.',
  },
];

export const ACTION_STEPS: ActionStep[] = [
  {
    number: '01',
    title: 'Conta a um adulto',
    description:
      'Fala com um professor, familiar, diretor de turma ou outro adulto em quem confies.',
  },
  {
    number: '02',
    title: 'Se vires, apoia',
    description:
      'Ouve sem julgar. Podes acompanhar o colega até um adulto de confiança para que não vá sozinho.',
  },
  {
    number: '03',
    title: 'Afasta-te do perigo',
    description:
      'Se houver risco de alguém se magoar, procura um adulto imediatamente. Não intervenhas com violência.',
  },
  {
    number: '04',
    title: 'Guarda o que aconteceu',
    description:
      'Se for seguro, anota datas, locais e quem estava presente. Mostra mensagens a um adulto, sem as divulgar.',
  },
];
