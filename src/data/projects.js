// Configuração dos projetos do portfólio
export const projects = [
  {
    id: 'automacao-eletrica',
    title: 'Automação Elétrica com IA',
    category: 'Computer Vision & Automation',
    description: 'Sistema desenvolvido em Python com OpenCV capaz de identificar cômodos em plantas arquitetônicas e sobrepor automaticamente a rede elétrica. Um projeto que une programação, visão computacional e design aplicado.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Automation'],
    images: [
      '/assets/projects/Planta Automatica/Planta AUTO 2025-06-03 144701.png',
      '/assets/projects/Planta Automatica/Planta AUTO-06-03 144636.png',
      '/assets/projects/Planta Automatica/Planta AUTO 2025-06-03 145643 - Copia.png',
      '/assets/projects/Planta Automatica/Planta AUTO -06-03 145626.png'

    ],
    featured: true,
    year: '2025'
  },
  {
    id: 'nike-ecommerce',
    title: 'Nike E-commerce Interface',
    category: 'Web Design & UI/UX',
    description: 'Interface moderna para e-commerce de tênis Nike, focando em experiência do usuário e design visual atrativo. Projeto desenvolvido com foco em conversão e usabilidade.',
    technologies: ['UI/UX Design', 'Figma', 'Web Design', 'E-commerce'],
    images: [
      '/assets/projects/niki canva/1.png',
      '/assets/projects/niki canva/2.png',
      '/assets/projects/niki canva/Home.png',
      '/assets/projects/niki canva/Home.png',
      '/assets/projects/niki canva/Produtos.png',
      '/assets/projects/niki canva/Coleções II.png',
      '/assets/projects/niki canva/6.png',
      '/assets/projects/niki canva/7.png',
    ],
    featured: true,
    year: '2024'
  },
  {
    id: 'sistema-medico',
    title: 'Sistema Médico Mobile',
    category: 'Mobile App Design',
    description: 'Interface de aplicativo móvel para sistema médico, com foco em acessibilidade e facilidade de uso para profissionais da saúde. Design clean e funcional.',
    technologies: ['Mobile Design', 'UI/UX', 'Healthcare', 'App Design'],
    images: [
      '/src/assets/projects/Tela Medicas Canva/1.png',
      '/src/assets/projects/Tela Medicas Canva/2.png',
      '/src/assets/projects/Tela Medicas Canva/3.png'
    ],
    featured: false,
    year: '2024'
  },
  {
    id: 'unity-development',
    title: 'Desenvolvimento Unity',
    category: 'Game Development',
    description: 'Projetos desenvolvidos em Unity incluindo mecânicas de jogo, interface e sistemas multiplayer. Demonstra versatilidade em desenvolvimento de jogos e simulações.',
    technologies: ['Unity', 'C#', 'Game Development', 'Multiplayer'],
    images: [
      '/src/assets/projects/Video do Unity - Google Drive - Google Chrome 02_09_2025 13_48_47.png'
    ],
    featured: false,
    year: '2025'
  },
  {
    id: 'face-id-system',
    title: 'Facial Motion Capture na Unity',
    category: 'Computer Vision',
    description: 'Sistema de captação e reprodução de expressões faciais em personagens 3D, desenvolvido na Unity. O projeto demonstra conhecimentos em animação facial, integração de tecnologias de Motion Capture e aplicação prática em jogos e simulações.',
    technologies: ['Computer Vision', 'AI', 'Face Recognition', 'Python'],
    images: [],
    video: '/faceid.mp4',
    featured: true,
    year: '2025'
  },
  {
  id: 'senai-app',
  title: 'Aplicativo Educacional Senai',
  category: 'UI/UX Design',
  description: 'Protótipo de aplicativo educacional desenvolvido no Canva para a instituição Senai. O design foi pensado para oferecer aos alunos diversas funcionalidades: acesso a múltiplas disciplinas em um só lugar, cursos complementares, aulas gravadas, cardápio semanal, cronograma de salas e horários, além de planos de estudo baseados em IA. O aplicativo também permitiria que os alunos acompanhassem seus estudos dirigidos e verificassem pendências acadêmicas de forma simples e intuitiva.',
  technologies: ['Canva', 'UI/UX', 'Prototyping', 'Education'],
  images: ['/assets/projects/Captura de tela 2025-09-02 141104.png', '/assets/projects/Captura de tela 2025-09-02 141122.png'],
  video: null,
  featured: true,
  year: '2025'
}

];

export const featuredProjects = projects.filter(project => project.featured);
export const allProjects = projects;

