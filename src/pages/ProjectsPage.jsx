import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, ArrowRight } from 'lucide-react'
import { allProjects } from '../data/projects.js'

const GridCard = ({ project }) => {
  const [loaded, setLoaded] = useState(false)
  const to = `/projetos/${project.id}`
  const cover = project.cover || (project.gallery && project.gallery[0]) || ''
  const hasVideo = Array.isArray(project.videos) && project.videos.length > 0

  return (
    <Link
      to={to}
      className="group flex flex-col bg-slate-800 rounded border border-slate-700 hover:border-emerald-400/50 transition-colors overflow-hidden"
    >
      {/* Capa */}
      <div className="relative h-48 bg-slate-900 overflow-hidden">
        {cover ? (
          <img
            src={cover}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {hasVideo ? (
              <Play size={40} className="text-emerald-400" />
            ) : (
              <span className="text-4xl">🚀</span>
            )}
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-emerald-400 text-xs font-mono">{project.category}</span>
          <span className="text-slate-500 text-xs font-mono">{project.year}</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 flex-1">{project.summary || project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs text-slate-400 font-mono">
              {tech}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-emerald-400 text-sm font-mono">
          Ver projeto <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}

const ProjectsPage = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm mb-2">Portfólio</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-4">Todos os projetos</h1>
        <p className="text-slate-400 mb-12 max-w-2xl">
          Uma seleção do que venho construindo, de sistemas geoespaciais e IA a apps e design.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <GridCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
