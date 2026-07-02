import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  FileText,
} from 'lucide-react'
import { getProjectById } from '../data/projects.js'
import PhoneMockup from '../components/PhoneMockup.jsx'

// Carrossel da galeria (a versão corrigida: troca instantânea, contador e onError)
const Gallery = ({ images, title }) => {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) return null

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="relative overflow-hidden rounded border border-slate-700 bg-slate-800">
      <img
        src={images[current]}
        alt={`${title}, imagem ${current + 1} de ${images.length}`}
        className="w-full max-h-[70vh] object-contain bg-slate-900"
        onError={(e) => {
          e.currentTarget.style.opacity = '0.4'
        }}
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/70 p-2 rounded-full text-white hover:bg-slate-900"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/70 p-2 rounded-full text-white hover:bg-slate-900"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-2 right-2 bg-slate-900/70 text-white text-xs font-mono px-2 py-1 rounded">
            {current + 1} / {images.length}
          </div>

          {/* Miniaturas */}
          <div className="absolute bottom-2 left-2 hidden sm:flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para imagem ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? 'bg-emerald-400' : 'bg-slate-500 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const ProjectDetail = () => {
  const { id } = useParams()
  const project = getProjectById(id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <section className="py-32 px-4 text-center min-h-screen">
        <h1 className="text-2xl font-bold text-slate-200 mb-4">Projeto não encontrado</h1>
        <Link to="/projetos" className="text-emerald-400 hover:text-emerald-300 font-mono">
          ← Voltar para os projetos
        </Link>
      </section>
    )
  }

  const links = project.links || {}
  const hasVideos = Array.isArray(project.videos) && project.videos.length > 0

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Voltar */}
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors font-mono text-sm mb-8"
        >
          <ArrowLeft size={16} />
          Todos os projetos
        </Link>

        {/* Cabeçalho */}
        <div className="mb-8">
          <p className="text-emerald-400 font-mono text-sm mb-2">{project.category}</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-400 font-mono">
            {project.role && <span>{project.role}</span>}
            {project.year && <span>{project.year}</span>}
          </div>
        </div>

        {/* Mockup vivo (app mobile: celular com vídeo tocando na tela) */}
        {project.mockup && (
          <div className="mb-10">
            <PhoneMockup
              image={project.mockup.image}
              video={project.mockup.video}
              screen={project.mockup.screen}
              alt={project.title}
            />
          </div>
        )}

        {/* Versão web */}
        {project.webShowcase && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-200 mb-3">Versão web (para empresas)</h2>
            <img
              src={project.webShowcase.image}
              alt={`${project.title} versão web`}
              className="w-full rounded border border-slate-700 mb-4"
            />
            {project.webShowcase.video && (
              <video
                src={project.webShowcase.video}
                controls
                className="w-full rounded border border-slate-700 bg-black"
              />
            )}
          </div>
        )}

        {/* Vídeos */}
        {hasVideos && (
          <div className="space-y-4 mb-8">
            {project.videos.map((src) => (
              <video
                key={src}
                src={src}
                controls
                className="w-full rounded border border-slate-700 bg-black"
              />
            ))}
          </div>
        )}

        {/* Galeria */}
        <div className="mb-8">
          <Gallery images={project.gallery} title={project.title} />
        </div>

        {/* Descrição */}
        <div className="prose prose-invert max-w-none mb-8">
          <h2 className="text-xl font-bold text-slate-200 mb-3">Sobre o projeto</h2>
          <p className="text-slate-400 leading-relaxed whitespace-pre-line">{project.description}</p>
        </div>

        {/* Resultado */}
        {project.outcome && (
          <div className="bg-slate-800 border border-slate-700 rounded p-6 mb-8">
            <h3 className="text-emerald-400 font-mono text-sm mb-2">Resultado & impacto</h3>
            <p className="text-slate-300">{project.outcome}</p>
          </div>
        )}

        {/* Tecnologias */}
        <div className="mb-8">
          <h3 className="text-slate-200 font-semibold mb-3">Tecnologias</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm text-emerald-400 font-mono bg-emerald-400/10 border border-emerald-400/20 rounded px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(links.github || links.live || links.article) && (
          <div className="flex flex-wrap gap-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Github size={18} /> Código
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <ExternalLink size={18} /> Ver ao vivo
              </a>
            )}
            {links.article && (
              <a
                href={links.article}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <FileText size={18} /> Artigo
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectDetail
