/**
 * Data and configuration for 1.ª Conferência da Academia Prime Edge
 * Theme: "Do Conhecimento à Ação"
 */

export interface TicketPackage {
  id: 'normal' | 'vip' | 'premium';
  name: string;
  price: number;
  priceFormatted: string;
  badge?: string;
}

export interface Speaker {
  id: string;
  displayName: string;
  fullName: string;
  area: string;
  bio: string;
  imageSrc: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const EVENT_DATA = {
  organization: 'Academia Prime Edge',
  logoSrc: '/assets/aistudio/Prime_Edge_4464fc74.jpg',
  eventName: '1.ª Conferência da Academia Prime Edge',
  theme: 'Do Conhecimento à Ação',
  slogan: 'Academia Prime Edge — o conhecimento à ação.',
  dateString: '5 de Dezembro de 2026',
  dateIso: '2026-12-05T09:00:00+01:00',
  startTime: '09h00',
  venue: 'Edifício Kilamba',
  city: 'Luanda',
  country: 'Angola',
  format: 'Presencial',
  officialWhatsAppNumber: '955217354',
  officialWhatsAppCountryCode: '244',
  officialWhatsAppFull: '+244 955 217 354',
  officialWhatsAppLink: 'https://wa.me/244955217354',
  officialEmail: 'contacto@academiaprimeedge.ao',
  socials: {
    facebook: 'https://facebook.com/academiaprimeedge',
    instagram: 'https://instagram.com/academiaprimeedge',
    linkedin: 'https://linkedin.com/company/academiaprimeedge',
  },
};

export const TICKET_PACKAGES: TicketPackage[] = [
  {
    id: 'normal',
    name: 'Normal',
    price: 16999,
    priceFormatted: '16.999 Kz',
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 25999,
    priceFormatted: '25.999 Kz',
    badge: 'Mais Procurado',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 39000,
    priceFormatted: '39.000 Kz',
  },
];

export const BENEFITS = [
  {
    id: 'aprendizagem',
    title: 'Aprendizagem',
    description: 'Contacto com novas ideias, métodos comprovados e experiências práticas de líderes de referência.',
    iconName: 'BookOpen',
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Oportunidade de conhecer profissionais, empreendedores e pessoas com interesses e propósitos semelhantes.',
    iconName: 'Users',
  },
  {
    id: 'desenvolvimento-pessoal',
    title: 'Desenvolvimento pessoal',
    description: 'Incentivo contínuo à evolução individual, maturidade emocional e auto-liderança.',
    iconName: 'Sparkles',
  },
  {
    id: 'crescimento-profissional',
    title: 'Crescimento profissional',
    description: 'Novas perspectivas, estratégias de posicionamento e horizontes para o teu percurso profissional.',
    iconName: 'TrendingUp',
  },
  {
    id: 'inspiracao',
    title: 'Inspiração para agir',
    description: 'Estímulo para transformar conhecimentos teóricos em iniciativas, decisões e atitudes concretas.',
    iconName: 'Target',
  },
  {
    id: 'novas-perspectivas',
    title: 'Novas perspectivas',
    description: 'Ampliar a visão sobre oportunidades de mercado, desafios corporativos e soluções inovadoras.',
    iconName: 'Compass',
  },
];

export const TARGET_AUDIENCE = [
  'Profissionais de diferentes áreas à procura de diferenciação',
  'Estudantes universitários e finalistas em início de carreira',
  'Empreendedores e empresários com visão estratégica',
  'Jovens interessados no desenvolvimento prático de competências',
  'Pessoas interessadas em liderança e crescimento pessoal contínuo',
  'Quem procura novas perspectivas, conexões e parcerias profissionais',
];

export const SPEAKERS: Speaker[] = [
  {
    id: 'atchinguelessy',
    displayName: 'Atchinguelessy',
    fullName: 'Amilcar Francisco Gonçalves Joaquim Tchinguelessy',
    area: 'Consultoria de negócios, liderança organizacional, gestão e produção intelectual.',
    bio: 'Amilcar Francisco Gonçalves Joaquim Tchinguelessy — ou simplesmente Atchinguelessy — é um consultor de negócios de alto impacto com presença em três continentes. Angolano de origem, construiu uma carreira que cruza o empreendedorismo, a liderança organizacional e a produção intelectual.\n\nCom formação em Administração, Biblioteconomia e Master em Gestão Financeira, completou uma Pós-Graduação em Liderança e Gestão de Pessoas. Foi o primeiro a liderar a digitalização de documentos na história do Ministério Público Federal do Brasil e integrou a histórica Força-Tarefa Lava Jato — a maior operação anticorrupção do mundo.\n\nAdministrador do Bureau Feerie há mais de 10 anos, consultor de empresas em Angola e Portugal, e autor de dois livros já publicados. Amilcar combina rigor metodológico com uma visão profundamente humanista da liderança.',
    imageSrc: '/assets/aistudio/Amilcar_97171695.jpeg',
    initials: 'AT',
  },
  {
    id: 'aercio-leiland',
    displayName: 'Aércio Leiland',
    fullName: 'Aércio Leiland',
    area: 'Terapia comportamental, casais e família, desenvolvimento pessoal e formação.',
    bio: 'Aércio Leiland é terapeuta comportamental, com foco em casais e família. É especializado em Terapia Comportamental, casal e Família. Possui mais de 7 anos de experiência em terapia relacional, Gestão, Prevenção e Resolução de Conflitos Conjugais, Desenvolvimento Pessoal e Equilíbrio Emocional. É também mestre de cerimónias profissional, palestrante e formador certificado.',
    imageSrc: '/assets/aistudio/A_rcio_f9d15398.jpeg',
    initials: 'AL',
  },
  {
    id: 'armando-zibungana',
    displayName: 'Armando Zibungana',
    fullName: 'Armando Zibungana',
    area: 'Música, ensino das artes e empreendedorismo.',
    bio: 'Armando Zibungana é músico, professor de artes e empresário.',
    imageSrc: '/assets/aistudio/Armando_7090be9c.jpeg',
    initials: 'AZ',
  },
  {
    id: 'venancio-vicente',
    displayName: 'Venâncio Vicente',
    fullName: 'Venâncio Vicente',
    area: 'Desenvolvimento profissional, alta performance e excelência corporativa.',
    bio: 'Venâncio Vicente é palestrante de alta performance, com foco no desenvolvimento profissional e na excelência corporativa.',
    imageSrc: '/assets/aistudio/Venancio_a08c6004.jpeg',
    initials: 'VV',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Quando será a conferência?',
    answer: 'A conferência está marcada para 5 de Dezembro de 2026, com início às 09h00.',
  },
  {
    question: 'Onde será realizada?',
    answer: 'No Edifício Kilamba, em Luanda, Angola.',
  },
  {
    question: 'Quem pode participar?',
    answer: 'Profissionais, estudantes, empreendedores e pessoas interessadas em aprendizagem e desenvolvimento pessoal e profissional.',
  },
  {
    question: 'Quais são os preços dos ingressos?',
    answer: 'Normal: 16.999 Kz; VIP: 25.999 Kz; Premium: 39.000 Kz.',
  },
  {
    question: 'Como posso solicitar a minha inscrição?',
    answer: 'Preenche o formulário no website, escolhe o pacote pretendido e clica em “Garantir a minha vaga” para enviar o pedido através do WhatsApp oficial da Academia.',
  },
  {
    question: 'A inscrição fica confirmada automaticamente?',
    answer: 'Não. O envio da mensagem representa um pedido de inscrição. A confirmação e os detalhes de pagamento devem ser feitos pela Academia Prime Edge.',
  },
  {
    question: 'Quais são os benefícios específicos dos pacotes?',
    answer: 'Os benefícios específicos de cada pacote serão apresentados quando forem oficialmente confirmados pela organização.',
  },
];

export function formatKwanzas(value: number): string {
  return new Intl.NumberFormat('pt-AO').format(value) + ' Kz';
}

export interface RegistrationFormData {
  fullName: string;
  cityProvince: string;
  countryCode: string;
  phoneWhatsApp: string;
  email: string;
  occupation: string;
  selectedPackageId: 'normal' | 'vip' | 'premium';
  quantity: number;
  notes: string;
}

export function generateWhatsAppMessage(formData: RegistrationFormData): string {
  const pkg = TICKET_PACKAGES.find((p) => p.id === formData.selectedPackageId) || TICKET_PACKAGES[0];
  const unitPriceFormatted = formatKwanzas(pkg.price);
  const totalPrice = pkg.price * Math.max(1, formData.quantity);
  const totalPriceFormatted = formatKwanzas(totalPrice);
  const fullPhone = `${formData.countryCode} ${formData.phoneWhatsApp}`.trim();

  const lines: string[] = [
    'Olá, Academia Prime Edge!',
    '',
    'Quero garantir a minha vaga na 1.ª Conferência da Academia Prime Edge — Do Conhecimento à Ação.',
    '',
    'DADOS DO PARTICIPANTE',
    `Nome completo: ${formData.fullName.trim()}`,
    `Cidade/Província: ${formData.cityProvince.trim()}`,
    `Telefone/WhatsApp: ${fullPhone}`,
  ];

  if (formData.email.trim()) {
    lines.push(`E-mail: ${formData.email.trim()}`);
  }

  if (formData.occupation.trim()) {
    lines.push(`Área profissional: ${formData.occupation.trim()}`);
  }

  lines.push('');
  lines.push('DADOS DO INGRESSO');
  lines.push(`Pacote escolhido: ${pkg.name}`);
  lines.push(`Preço unitário: ${unitPriceFormatted}`);
  lines.push(`Quantidade: ${formData.quantity}`);
  lines.push(`Valor total: ${totalPriceFormatted}`);

  if (formData.notes.trim()) {
    lines.push(`Observações: ${formData.notes.trim()}`);
  }

  lines.push('');
  lines.push('INFORMAÇÕES DO EVENTO');
  lines.push('Data: 5 de Dezembro de 2026');
  lines.push('Hora: 09h00');
  lines.push('Local: Edifício Kilamba, Luanda, Angola.');
  lines.push('');
  lines.push('Por favor, enviem-me as informações necessárias para concluir a minha inscrição e confirmar o pagamento.');
  lines.push('');
  lines.push('Obrigado!');

  return lines.join('\n');
}

export const INSTITUTION_INFO = {
  name: 'Academia PRIME EDGE',
  about:
    'A Academia PRIME EDGE é uma instituição dedicada à formação profissional, capacitação técnica e desenvolvimento pessoal, com foco na excelência, inovação e resultados concretos.',
  vision:
    'Ser uma academia de referência em Angola e além fronteiras, reconhecida pela excelência na formação, desenvolvimento de líderes, descoberta e capacitação de profissionais preparados para enfrentar os desafios do mundo moderno.',
  mission:
    'Promover formação de alta qualidade, ética e inovadora, capacitando indivíduos e organizações com conhecimentos, habilidades e atitudes que impulsionem o crescimento pessoal, profissional e social.',
  values: [
    {
      title: 'Excelência',
      description:
        'Buscamos oferecer formações com elevado padrão de qualidade, focadas em resultados e impacto positivo.',
      icon: 'Award',
    },
    {
      title: 'Ética',
      description:
        'Agimos com integridade, transparência e respeito em todas as nossas actividades e relações.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Inovação',
      description:
        'Valorizamos ideias criativas e soluções modernas que promovem o desenvolvimento contínuo.',
      icon: 'Lightbulb',
    },
    {
      title: 'Compromisso',
      description:
        'Assumimos responsabilidade pelo sucesso dos nossos formandos, parceiros e colaboradores.',
      icon: 'Handshake',
    },
    {
      title: 'Responsabilidade Social',
      description:
        'Contribuimos para desenvolvimento da sociedade atraves da educação e formação de cidadãos conscientes.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Valorização Humana',
      description:
        'Acreditamos no potencial das pessoas e incentivamos o crescimento pessoal e profissional.',
      icon: 'Users2',
    },
  ],
};
