import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'about', label: 'Sobre', number: '01' },
  { id: 'experience', label: 'Experiência', number: '02' },
  { id: 'projects', label: 'Projetos', number: '03' },
  { id: 'contact', label: 'Contato', number: '04' },
]

const Layout = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  // Leva a uma seção da Home. Se estiver em outra página, navega pra Home e pede o scroll.
  const goToSection = (sectionId) => {
    setIsMenuOpen(false)
    if (!isHome) {
      navigate('/', { state: { scrollTo: sectionId } })
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  // Scroll-spy (só faz sentido na Home)
  useEffect(() => {
    if (!isHome) return
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      for (const { id } of NAV_ITEMS) {
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold text-emerald-400">
              Luiz Felipe
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map(({ id, label, number }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => goToSection(id)}
                  className={`text-sm transition-colors hover:text-emerald-400 ${
                    isHome && activeSection === id ? 'text-emerald-400' : 'text-slate-300'
                  }`}
                >
                  <span className="text-emerald-400 text-xs mr-1">{number}.</span>
                  {label}
                </button>
              ))}
              <Link
                to="/projetos"
                className={`text-sm transition-colors hover:text-emerald-400 ${
                  location.pathname.startsWith('/projetos') ? 'text-emerald-400' : 'text-slate-300'
                }`}
              >
                Todos os projetos
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden"
              aria-label="Abrir menu"
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
              {NAV_ITEMS.map(({ id, label, number }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => goToSection(id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <span className="text-emerald-400 text-sm mr-1">{number}.</span>
                  {label}
                </button>
              ))}
              <Link
                to="/projetos"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Todos os projetos
              </Link>
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
          className="text-slate-400 hover:text-emerald-400 transition-colors text-sm tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          luiz.lockeservicos@gmail.com
        </a>
        <div className="w-px h-24 bg-slate-400"></div>
      </div>

      {/* Conteúdo da página */}
      <main className="pt-16">
        <Outlet />

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

export default Layout
