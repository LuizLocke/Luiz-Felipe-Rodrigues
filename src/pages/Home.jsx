import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mail, Code, Palette, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { featuredProjects } from '../data/projects.js'

const timeline = [
  {
    year: '2022',
    title: 'Onde tudo começou: design e as primeiras vendas',
    points: [
      'Comecei com HTML, CSS e design, criando peças visuais no Canva.',
      'Vendi meus primeiros trabalhos: imagens e páginas com link para divulgação e vendas no Instagram.',
      'Desde aqui já acompanhava de perto inteligência artificial, automação e novas tecnologias.',
    ],
  },
  {
    year: '2023',
    title: 'Construir com as próprias mãos: robótica e eletrônica',
    points: [
      'Desenvolvi uma horta automática de irrigação no ensino médio, do desenho e da modelagem 3D até a montagem física: encomendei as peças, montei e programei o Arduino em C.',
      'Mergulhei em segurança da informação: explorei Linux (Kali) e ferramentas de pentest, montando dispositivos de segurança caseiros com Arduino para estudar vulnerabilidades.',
      'Curiosidade sem freio: de drones a foguetaria amadora, sempre estudando como as coisas funcionam por dentro.',
    ],
  },
  {
    year: '2024',
    title: 'Entrada no cenário profissional',
    points: [
      'Contratado como aprendiz de Desenvolvimento de Sistemas (Canal Construtora), atuando no SENAI desde setembro de 2024.',
      'Como já tinha base sólida de front-end, pude focar em aprofundar o back-end e explorar novas tecnologias.',
      'Comecei a construir com propósito: dei meus primeiros passos sérios em Python e JavaScript e nos frameworks que uso até hoje.',
    ],
  },
  {
    year: '2025',
    title: 'Tecnologia com propósito',
    points: [
      'Minha forma de pensar sempre foi fora da caixa, e foi aqui que ela ganhou direção: passei a construir coisas que ajudam pessoas de verdade.',
      'Aprofundei em inteligência artificial, deep learning e visão computacional, treinando meus próprios modelos e aplicando-os a problemas reais.',
      'Comecei a assumir soluções de ponta a ponta (da concepção à entrega) em vez de só executar partes isoladas.',
    ],
  },
  {
    year: 'Hoje',
    title: 'Full Stack, na prática',
    points: [
      'Construo produtos digitais completos, do aplicativo à estrutura que o sustenta por trás. Trabalho ponta a ponta: cuido da experiência de quem usa e de tudo que faz o sistema funcionar de forma segura e escalável, pensando cada solução como um todo, organizada, sólida e pronta para crescer.',
      'Nos últimos anos, liderei e conduzi diversos projetos do início à entrega, e foi aí que minha experiência em equipe, comunicação e pensamento analítico cresceu de forma exponencial.',
      'Levo a sério o que construo: assumo a responsabilidade pela qualidade, organizo bem o processo e me comunico com clareza com quem está do meu lado. Sou movido por evoluir tecnicamente e resolver problemas em conjunto, trocando ideias, discutindo soluções e colocando a mão na massa, presencialmente ou em equipe.',
    ],
  },
]

const Home = () => {
  const location = useLocation()

  // Quando vier de outra página pedindo scroll pra uma seção
  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      // pequeno atraso para garantir que a seção já esteja renderizada
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location.state])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <div className="text-emerald-400 text-base sm:text-lg mb-4 font-mono">
                Olá, meu nome é
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-200 mb-4">
                Luiz Felipe.
              </h1>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-400 mb-6">
                Eu construo experiências digitais.
              </h2>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
                Sou um desenvolvedor especializado em criar soluções digitais excepcionais.
                Atualmente, estou focado em construir produtos acessíveis e centrados no usuário,
                unindo design e tecnologia.
              </p>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                size="lg"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 px-8 py-4 text-lg"
              >
                Veja meu trabalho!
              </Button>
            </div>

            {/* Right side - Design/Code Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 h-96">
                {/* Design Side */}
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 p-6 flex flex-col items-center justify-center text-center">
                  <Palette size={48} className="text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-slate-200 mb-2">Designer</h3>
                  <p className="text-slate-400 text-sm">
                    Criando interfaces que comunicam bem e geram interatividade
                  </p>
                </div>

                {/* Code Side */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-lg border border-emerald-500/30 p-6 flex flex-col items-center justify-center text-center">
                  <Code size={48} className="text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold text-slate-200 mb-2">Desenvolvedor</h3>
                  <p className="text-slate-400 text-sm">
                    Construindo sistemas robustos com foco em performance
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-emerald-400"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-emerald-400"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-8">
            <span className="text-emerald-400 font-mono text-xl mr-2">01.</span>
            Sobre mim
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Olá! Sou Luiz Felipe, um desenvolvedor apaixonado por criar experiências digitais
                  que combinam design inteligente com engenharia robusta. Meu trabalho favorito está
                  na interseção entre design e desenvolvimento, criando soluções que não apenas
                  parecem ótimas, mas são meticulosamente construídas para performance e usabilidade.
                </p>
                <p>
                  Me destaco pela combinação entre inteligência técnica, visão estratégica e
                  criatividade aplicada ao desenvolvimento de soluções. Como técnico e desenvolvedor,
                  domino a construção de sistemas do zero, sempre preocupado com a estruturação
                  lógica, performance e usabilidade dos projetos.
                </p>
                <p>
                  Minha capacidade de design vai além da estética: consigo criar interfaces que
                  comunicam bem, geram interatividade e tornam a experiência mais fluida, seja em
                  dashboards com gráficos interativos, seja em protótipos visuais.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-slate-400 mb-4">
                  Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                  {[
                    'TypeScript',
                    'JavaScript (ES6+)',
                    'React',
                    'Next.js',
                    'Node.js',
                    'Python',
                    'FastAPI',
                    'Flutter',
                    'Dart',
                    'C#',
                    'SQL (PostgreSQL / MySQL)',
                    'Redis',
                    'Supabase',
                    'Git & GitHub',
                    'Vercel',
                    'PyTorch',
                    'Machine Learning',
                    'Computer Vision (OpenCV)',
                    'CesiumJS',
                    'Tailwind CSS',
                    'Unity',
                    'Blender',
                    'Figma',
                    'n8n',
                  ].map((tech) => (
                    <div key={tech} className="flex items-center text-slate-400">
                      <span className="text-emerald-400 mr-2">▹</span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="w-full h-80 bg-emerald-400/10 rounded border-2 border-emerald-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-400/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img
                    src="/fotoperfil.jpg"
                    alt="Foto de Luiz Felipe"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-4">
            <span className="text-emerald-400 font-mono text-xl mr-2">02.</span>
            Minha trajetória
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Tecnologia não é só o que eu faço, é o que me move desde 2022. Uma linha do tempo de
            como cheguei até aqui.
          </p>

          <div className="space-y-10">
            {timeline.map((item) => (
              <div key={item.year} className="relative border-l-2 border-emerald-400/40 pl-6">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-emerald-400"></span>
                <p className="text-emerald-400 font-mono text-sm mb-1">{item.year}</p>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">{item.title}</h3>
                <ul className="space-y-2 text-slate-400">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1.5">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Destaques */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-12">
            <span className="text-emerald-400 font-mono text-xl mr-2">03.</span>
            Alguns projetos que construí
          </h2>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* CTA para todos os projetos */}
          <div className="mt-20 text-center">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 rounded-md px-8 py-4 text-lg transition-colors"
            >
              Ver todos os projetos
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-8">
            <span className="text-emerald-400 font-mono text-xl mr-2">04.</span>
            E agora?
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-slate-200 mb-6">
            Vamos conversar
          </h3>
          <p className="text-lg text-slate-400 mb-12 leading-relaxed">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Se você tem uma pergunta ou apenas quer dizer oi, farei o meu melhor
            para responder!
          </p>
          <a
            href="mailto:luiz.lockeservicos@gmail.com"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 h-12 px-8 py-4 text-lg"
          >
            <Mail className="mr-2" size={20} />
            Diga olá
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
