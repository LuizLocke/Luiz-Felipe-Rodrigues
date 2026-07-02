// Configuração dos projetos do portfólio
//
// Schema de cada projeto:
//   id            -> identificador único, usado na URL (/projetos/:id). Sem espaços/acentos.
//   title         -> título do projeto
//   category      -> categoria curta
//   role          -> "Meu papel" (ex.: 'Desenvolvimento solo')
//   year          -> ano
//   featured      -> true = aparece nos destaques da Home
//   order         -> ordem de exibição nos destaques (menor primeiro)
//   summary       -> frase curta usada no card
//   description   -> texto completo usado na página de detalhe
//   outcome       -> resultado/impacto (ex.: '98% de acurácia')
//   technologies  -> array de tecnologias
//   cover         -> imagem de capa (card)
//   gallery       -> imagens da página de detalhe
//   videos        -> array de vídeos (.mp4 local ou embed); pode ter 0, 1 ou vários
//   links         -> { github, live, article }; todos opcionais

export const projects = [
  {
    id: 'tcc-geoespacial',
    title: 'Sistema Geoespacial de Análise de Risco Aéreo',
    category: 'Geoespacial & Pesquisa',
    role: 'Desenvolvimento solo (TCC)',
    year: '2025 - 2026',
    featured: true,
    order: 1,
    summary:
      'Dados públicos de voo (ADS-B) em um globo 3D da Terra para prever zonas de impacto e alertar áreas rurais antes de um acidente.',
    description:
      'Sistema geoespacial que consome dados públicos de aeronaves (ADS-B), satélites e outras fontes e os projeta sobre um globo 3D da Terra. A visualização roda em CesiumJS com React 18 e Vite, enquanto funções serverless na Vercel integram os dados de voo em tempo real (OpenSky, ADSB.lol) e a propagação orbital dos satélites (satellite.js com TLEs da CelesTrak). O objetivo da pesquisa é aplicar regras pré-definidas (perda de altitude, velocidade, altitude barométrica, sinais de Mayday) para calcular o impacto potencial de uma aeronave em zonas rurais e alertar as pessoas antes que o acidente aconteça. Como estudo de caso, fiz a reconstrução forense de uma queda real de um avião de pequeno porte em Belo Horizonte: a partir do horário de saída do aeroporto e da hora do impacto, calculei a velocidade média, refiz a trajetória e estimei a zona de impacto. Não é possível impedir a queda, mas é possível dar às pessoas tempo para se proteger.',
    outcome:
      'Reconstrução forense de um caso real (queda em Belo Horizonte) e base de um artigo acadêmico.',
    technologies: [
      'React 18',
      'CesiumJS',
      'Vercel Serverless',
      'satellite.js',
      'GLSL / Shaders',
      'Vite',
      'ADS-B',
      'JavaScript',
    ],
    cover: '/assets/projects/tcc/geoesp.jpeg',
    gallery: [
      '/assets/projects/tcc/geoesp.jpeg',
      '/assets/projects/tcc/geoespll.jpeg',
      '/assets/projects/tcc/geoesplll.jpeg',
      '/assets/projects/tcc/geoesplV.jpeg',
    ],
    videos: ['/assets/projects/tcc/demo.mp4'],
    links: { github: '', live: '', article: '' },
  },
  {
    id: 'pneumoai',
    title: 'PneumoAI: Detecção de Pneumonia com IA',
    category: 'IA & Saúde',
    role: 'Desenvolvimento solo',
    year: '2026',
    featured: true,
    order: 2,
    summary:
      'Detector de pneumonia em radiografias com ensemble de redes neurais (98% de acurácia) e mapa de calor explicável.',
    description:
      'PneumoAI é um sistema de detecção de pneumonia em radiografias de tórax. O modelo usa um ensemble de redes neurais: várias redes analisam a imagem e suas respostas são combinadas em um único resultado, alcançando 98% de acurácia. Além do diagnóstico, gera um mapa de calor que mostra onde o modelo "olhou" para chegar à conclusão, trazendo explicabilidade ao resultado. O treinamento levou cerca de 8 horas. O projeto está em avaliação no Desafio Liga Jovem, do Sebrae, e foi apresentado no Conexão Ciência (5ª edição), dentro da Semana Estadual de Ciência, Tecnologia e Inovação. Também é a base de uma futura pesquisa acadêmica: pretendo abrir uma iniciação científica a partir dele.',
    outcome:
      '98% de acurácia. Em avaliação no Desafio Liga Jovem (Sebrae), apresentado no Conexão Ciência e base de uma futura iniciação científica.',
    technologies: [
      'PyTorch',
      'Deep Learning',
      'Explainable AI (XAI)',
      'FastAPI',
      'React',
      'Ensemble Learning',
      'Computer Vision',
      'Python',
    ],
    cover: '/assets/projects/pneumoai/capa.jpeg',
    gallery: [
      '/assets/projects/pneumoai/capa.jpeg',
      '/assets/projects/pneumoai/detector-1.jpeg',
      '/assets/projects/pneumoai/detector-2.jpeg',
    ],
    videos: ['/assets/projects/pneumoai/demo.mp4'],
    links: { github: '', live: '', article: '' },
  },
  {
    id: 'oportunitech',
    title: 'OportuniTech',
    category: 'App Mobile & Web',
    role: 'Desenvolvimento solo',
    year: '2025',
    featured: true,
    order: 3,
    summary:
      'App multiplataforma (Android, iOS e web) que conecta alunos do Senai a empresas e freelancers: radar de vagas, mural, chat ao vivo e perfis, com painel web para empresas.',
    description:
      'OportuniTech é um aplicativo mobile (Android e iOS) que conecta alunos do Senai a empresas de pequeno, médio e grande porte e a freelancers. A ideia nasceu de um problema real: muitos alunos deixavam o curso para trabalhar em vagas que pagavam mais. O app reúne um radar de vagas e freelas, um mural onde os alunos publicam e se candidatam a trabalhos integradores e colaborações, perfis com certificados e currículo, e chat entre usuários. Para as empresas, criei também um painel web (no mesmo código Flutter) com publicação de vagas e triagem de candidatos. No backend, o Supabase reúne autenticação por perfil, banco PostgreSQL com segurança linha a linha (RLS), Realtime para o chat ao vivo e Storage para os currículos; a gerência de estado usa Riverpod, a navegação leva cada perfil para a tela certa (GoRouter) e o radar de talentos usa mapas interativos com geolocalização (flutter_map). Apresentei o projeto ao supervisor do Senai, que aprovou a ideia; por ser uma instituição pública, o Senai não pôde adotar a plataforma, mas o resultado é um produto completo, de ponta a ponta.',
    outcome:
      'Produto completo de ponta a ponta (app mobile + painel web para empresas), validado pelo supervisor do Senai. Não adotado por se tratar de instituição pública.',
    technologies: [
      'Flutter',
      'Supabase',
      'PostgreSQL',
      'Realtime',
      'Riverpod',
      'Geolocalização',
      'Multiplataforma',
      'Dart',
    ],
    cover: '/assets/projects/oportunitech/cover.png',
    mockup: {
      image: '/assets/projects/oportunitech/banner.png',
      video: '/assets/projects/oportunitech/app.mp4',
      screen: { top: 9.63, left: 12.4, width: 21.15, height: 80.56, radius: 18 },
    },
    webShowcase: {
      image: '/assets/projects/oportunitech/web-banner.png',
      video: '/assets/projects/oportunitech/web.mp4',
    },
    gallery: [
      '/assets/projects/oportunitech/cover.png',
      '/assets/projects/oportunitech/screens.png',
      '/assets/projects/oportunitech/dev.jpeg',
    ],
    videos: [],
    links: { github: '', live: '', article: '' },
  },
  {
    id: 'learning-time',
    title: 'Learning Time',
    category: 'Game Development',
    role: 'Desenvolvimento solo',
    year: '2025 - 2026',
    featured: true,
    order: 4,
    summary:
      'Jogo de terror solo, pensado em capítulos, feito na Unity 6 e no Blender. Teaser apresentado na competição Blue Oceano Games.',
    description:
      'Learning Time é um jogo de terror solo, para um jogador e pensado em capítulos, com o jogador como protagonista, um antagonista e um modo história tão divertido quanto aterrorizante. A base do cenário (um corredor) veio de um projeto maior de desenvolvimento de jogo que liderei em 2025; a partir dela, reconstruí uma ambientação nova, com história e antagonista próprios. A ideia era me dedicar só a ele, mas, entre os trabalhos da instituição técnica, o projeto teve seu ponto alto ao virar um teaser apresentado na Blue Oceano Games, competição em que se envia o teaser do jogo e é possível ganhar categorias e até financiamento para produzi-lo. Mais do que um jogo finalizado, Learning Time foi onde minhas habilidades em Unity e Blender chegaram a nível profissional: level design e ambientes de altíssima resolução, texturização, cenografia e programação em C#, além de modelagem, materiais e texturas no Blender.',
    outcome:
      'Teaser apresentado na Blue Oceano Games, competição que financia jogos. Projeto onde levei Unity e Blender a nível profissional.',
    technologies: ['Unity 6', 'C#', 'Blender', 'Level Design', 'Modelagem 3D', 'Texturização', 'Iluminação'],
    cover: '/assets/projects/learning-time/capa.png',
    gallery: [
      '/assets/projects/learning-time/capa.png',
      '/assets/projects/learning-time/1.png',
      '/assets/projects/learning-time/2.png',
      '/assets/projects/learning-time/3.png',
      '/assets/projects/learning-time/4.png',
      '/assets/projects/learning-time/5.png',
    ],
    videos: ['/assets/projects/learning-time/trailer.mp4'],
    links: { github: '', live: '', article: '' },
  },
  {
    id: 'automacao-eletrica',
    title: 'Automação Elétrica com IA',
    category: 'Computer Vision & Automation',
    role: 'Desenvolvimento solo',
    year: '2025',
    featured: true,
    order: 5,
    summary:
      'Sistema em Python + OpenCV que identifica cômodos em plantas arquitetônicas e sobrepõe a rede elétrica automaticamente.',
    description:
      'Sistema desenvolvido em Python com OpenCV capaz de identificar cômodos em plantas arquitetônicas e sobrepor automaticamente a rede elétrica. Um projeto que une programação, visão computacional e design aplicado.',
    outcome: 'Automatiza uma etapa manual de projeto elétrico a partir da planta.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Automation'],
    cover: '/assets/projects/Planta Automatica/Planta AUTO 2025-06-03 144701.png',
    gallery: [
      '/assets/projects/Planta Automatica/Planta AUTO 2025-06-03 144701.png',
      '/assets/projects/Planta Automatica/Planta AUTO-06-03 144636.png',
      '/assets/projects/Planta Automatica/Planta AUTO  2025-06-03 145643 - Copia.png',
      '/assets/projects/Planta Automatica/Planta AUTO -06-03 145626.png',
    ],
    videos: [],
    links: { github: '', live: '', article: '' },
  },
  {
    id: 'nike-ecommerce',
    title: 'Nike E-commerce Interface',
    category: 'Web Design & UI/UX',
    role: 'Design solo',
    year: '2024',
    featured: true,
    order: 6,
    summary:
      'Interface moderna para e-commerce de tênis Nike, com foco em experiência do usuário, conversão e usabilidade.',
    description:
      'Interface moderna para e-commerce de tênis Nike, focando em experiência do usuário e design visual atrativo. Projeto desenvolvido com foco em conversão e usabilidade.',
    outcome: 'Protótipo de alta fidelidade focado em conversão.',
    technologies: ['UI/UX Design', 'Figma', 'Web Design', 'E-commerce'],
    cover: '/assets/projects/niki canva/Home.png',
    gallery: [
      '/assets/projects/niki canva/1.png',
      '/assets/projects/niki canva/2.png',
      '/assets/projects/niki canva/Home.png',
      '/assets/projects/niki canva/Produtos.png',
      '/assets/projects/niki canva/Coleções II.png',
      '/assets/projects/niki canva/6.png',
      '/assets/projects/niki canva/7.png',
    ],
    videos: [],
    links: { github: '', live: '', article: '' },
  },
  {
    id: 'face-id-system',
    title: 'Facial Motion Capture na Unity',
    category: 'Computer Vision',
    role: 'Desenvolvimento solo',
    year: '2025',
    featured: true,
    order: 7,
    summary:
      'Captação e reprodução de expressões faciais em personagens 3D dentro da Unity, com Motion Capture.',
    description:
      'Sistema de captação e reprodução de expressões faciais em personagens 3D, desenvolvido na Unity. O projeto demonstra conhecimentos em animação facial, integração de tecnologias de Motion Capture e aplicação prática em jogos e simulações.',
    outcome: 'Pipeline de captura facial aplicável a jogos e simulações.',
    technologies: ['Computer Vision', 'AI', 'Face Recognition', 'Python'],
    cover: '/assets/projects/faceid/capa.jpg',
    gallery: [
      '/assets/projects/faceid/capa.jpg',
      '/assets/projects/faceid/scene.jpg',
      '/assets/projects/faceid/captura.jpg',
    ],
    videos: ['/faceid.mp4'],
    links: { github: '', live: '', article: '' },
  },
  {
    id: 'senai-app',
    title: 'Aplicativo Educacional Senai',
    category: 'UI/UX Design',
    role: 'Design solo',
    year: '2025',
    featured: false,
    order: 4,
    summary:
      'Protótipo de app educacional para o Senai: múltiplas disciplinas, cursos, aulas gravadas, cronograma e planos de estudo com IA.',
    description:
      'Protótipo de aplicativo educacional desenvolvido no Canva para a instituição Senai. O design foi pensado para oferecer aos alunos diversas funcionalidades: acesso a múltiplas disciplinas em um só lugar, cursos complementares, aulas gravadas, cardápio semanal, cronograma de salas e horários, além de planos de estudo baseados em IA. O aplicativo também permitiria que os alunos acompanhassem seus estudos dirigidos e verificassem pendências acadêmicas de forma simples e intuitiva.',
    outcome: 'Protótipo funcional de UI/UX validado como conceito.',
    technologies: ['Canva', 'UI/UX', 'Prototyping', 'Education'],
    cover: '/assets/projects/Captura de tela 2025-09-02 141104.png',
    gallery: [
      '/assets/projects/Captura de tela 2025-09-02 141104.png',
      '/assets/projects/Captura de tela 2025-09-02 141122.png',
    ],
    videos: [],
    links: { github: '', live: '', article: '' },
  },
  {
    id: 'sistema-medico',
    title: 'Sistema Médico Mobile',
    category: 'Mobile App Design',
    role: 'Design solo',
    year: '2024',
    featured: false,
    order: 20,
    summary:
      'Interface de app móvel para sistema médico, com foco em acessibilidade e facilidade de uso para profissionais da saúde.',
    description:
      'Interface de aplicativo móvel para sistema médico, com foco em acessibilidade e facilidade de uso para profissionais da saúde. Design clean e funcional.',
    outcome: 'Protótipo de interface clean e acessível.',
    technologies: ['Mobile Design', 'UI/UX', 'Healthcare', 'App Design'],
    cover: '/assets/projects/Tela Medicas Canva/1.png',
    gallery: [
      '/assets/projects/Tela Medicas Canva/1.png',
      '/assets/projects/Tela Medicas Canva/2.png',
      '/assets/projects/Tela Medicas Canva/3.png',
    ],
    videos: [],
    links: { github: '', live: '', article: '' },
  },
  {
    id: 'unity-development',
    title: 'Desenvolvimento Unity',
    category: 'Game Development',
    role: 'Desenvolvimento solo',
    year: '2025',
    featured: false,
    order: 21,
    summary:
      'Projetos em Unity com mecânicas de jogo, interface e sistemas multiplayer.',
    description:
      'Projetos desenvolvidos em Unity incluindo mecânicas de jogo, interface e sistemas multiplayer. Demonstra versatilidade em desenvolvimento de jogos e simulações.',
    outcome: 'Demonstra versatilidade em jogos e simulações.',
    technologies: ['Unity', 'C#', 'Game Development', 'Multiplayer'],
    cover: '/assets/projects/Video do Unity - Google Drive - Google Chrome 02_09_2025 13_48_47.png',
    gallery: [
      '/assets/projects/Video do Unity - Google Drive - Google Chrome 02_09_2025 13_48_47.png',
    ],
    videos: [],
    links: { github: '', live: '', article: '' },
  },
]

// Ordenados por `order` para exibição consistente
const byOrder = (a, b) => (a.order ?? 99) - (b.order ?? 99)

export const featuredProjects = projects.filter((p) => p.featured).sort(byOrder)
export const allProjects = [...projects].sort(byOrder)

export const getProjectById = (id) => projects.find((p) => p.id === id)
