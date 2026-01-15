import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { featuredProjects } from './data/projects.js'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-emerald-400">
              Luiz Felipe
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: '01. Sobre', number: '01' },
                { id: 'experience', label: '02. Experiência', number: '02' },
                { id: 'projects', label: '03. Projetos', number: '03' },
                { id: 'contact', label: '04. Contato', number: '04' }
              ].map(({ id, label, number }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm transition-colors hover:text-emerald-400 ${
                    activeSection === id ? 'text-emerald-400' : 'text-slate-300'
                  }`}
                >
                  <span className="text-emerald-400 text-xs mr-1">{number}.</span>
                  {label.split('. ')[1]}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'about', label: '01. Sobre' },
                { id: 'experience', label: '02. Experiência' },
                { id: 'projects', label: '03. Projetos' },
                { id: 'contact', label: '04. Contato' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Social Links - Fixed Left */}
      <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40">
        <a
          href="https://github.com/LuizLocke"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:luiz.lockeservicos@gmail.com"
          className="text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <Mail size={20} />
        </a>
        <div className="w-px h-24 bg-slate-400"></div>
      </div>

      {/* Email - Fixed Right */}
      <div className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40">
        <a
          href="mailto:luiz.lockeservicos@gmail.com"
          className="text-slate-400 hover:text-emerald-400 transition-colors writing-mode-vertical text-sm tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          luiz.lockeservicos@gmail.com
        </a>
        <div className="w-px h-24 bg-slate-400"></div>
      </div>

      {/* Main Content */}
      <main className="pt-16">
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
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {[
                      'JavaScript (ES6+)',
                      'React',
                      'Node.js',
                      'Python',
                      'HTML & CSS',
                      'Unity',
                      'OpenCV',
                      'MySQL',
                      'Blender'
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
                    <div className="absolute inset-0 flex items-center justify-center text-emerald-400 text-6xl font-bold">
                       <img
                            src="/perfil.jpg"
                            alt="Foto de Luiz Felipe"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-12">
              <span className="text-emerald-400 font-mono text-xl mr-2">02.</span>
              Experiências & Projetos
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-emerald-400 pl-6">
                <h3 className="text-xl font-semibold text-slate-200 mb-2">
                  Desenvolvedor Full Stack & Designer
                </h3>
                <p className="text-emerald-400 mb-4">Freelancer • 2024 - Presente</p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-2">▹</span>
                    Desenvolvimento de sistemas com integração a banco de dados usando Node.js e MySQL
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-2">▹</span>
                    Criação de dashboards com gráficos interativos para empresas
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-2">▹</span>
                    Protótipos de simulação em Unity aplicados à indústria
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-2">▹</span>
                    Modelagem 3D e artes digitais em Blender (projetos autorais e de estudo)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-12">
              <span className="text-emerald-400 font-mono text-xl mr-2">03.</span>
              Alguns projetos que construír
            </h2>
            
            <div className="space-y-24">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {/* Other Notable Projects */}
            <div className="mt-24">
              <h3 className="text-xl font-bold text-slate-200 mb-8 text-center">
                Outros projetos notáveis
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Additional projects can be added here */}
                <div className="bg-slate-800 p-6 rounded border border-slate-700 hover:border-emerald-400/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-emerald-400">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex space-x-2">
                      <Github size={16} className="text-slate-400 hover:text-emerald-400 cursor-pointer" />
                      <ExternalLink size={16} className="text-slate-400 hover:text-emerald-400 cursor-pointer" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">
                    Projeto Interativo Batman
                  </h4>
                  <p className="text-slate-400 text-sm mb-4">
                    Projeto interativo noir inspirado em "The Batman", desenvolvido em HTML, CSS e JavaScript.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-slate-400 font-mono">HTML</span>
                    <span className="text-xs text-slate-400 font-mono">CSS</span>
                    <span className="text-xs text-slate-400 font-mono">JavaScript</span>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded border border-slate-700 hover:border-emerald-400/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-emerald-400">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex space-x-2">
                      <Github size={16} className="text-slate-400 hover:text-emerald-400 cursor-pointer" />
                      <ExternalLink size={16} className="text-slate-400 hover:text-emerald-400 cursor-pointer" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">
                    Blender
                  </h4>
                  <p className="text-slate-400 text-sm mb-4">
                    Proposta de uso diferenciado do Blender aplicada ao desenvolvimento de Projetos Personalizados.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-slate-400 font-mono">Blender</span>
                    <span className="text-xs text-slate-400 font-mono">Game Dev</span>
                    <span className="text-xs text-slate-400 font-mono">Innovation</span>
                  </div>
                </div>

                <div className="bg-slate-800 p-6 rounded border border-slate-700 hover:border-emerald-400/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-emerald-400">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="flex space-x-2">
                      <Github size={16} className="text-slate-400 hover:text-emerald-400 cursor-pointer" />
                      <ExternalLink size={16} className="text-slate-400 hover:text-emerald-400 cursor-pointer" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2">
                    Dashboards Interativos
                  </h4>
                  <p className="text-slate-400 text-sm mb-4">
                    Criação de dashboards com gráficos interativos para empresas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-slate-400 font-mono">React</span>
                    <span className="text-xs text-slate-400 font-mono">Charts</span>
                    <span className="text-xs text-slate-400 font-mono">Data Viz</span>
                  </div>
                </div>
              </div>
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
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 h-12 px-8 py-4 text-lg"
            >
              <Mail className="mr-2" size={20} />
              Diga olá
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm">
            Construído por Luiz Felipe com React & Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App

