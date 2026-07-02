import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'

// Card de destaque (Home): layout alternado, mostra a capa e leva à página de detalhe.
const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const isEven = index % 2 === 0
  const to = `/projetos/${project.id}`
  const cover = project.cover || (project.gallery && project.gallery[0]) || ''
  const hasVideo = Array.isArray(project.videos) && project.videos.length > 0

  return (
    <div className={`grid md:grid-cols-12 gap-8 items-center ${!isEven ? 'md:text-right' : ''}`}>
      {/* Mídia (capa) que leva ao detalhe */}
      <div className={`md:col-span-7 ${!isEven ? 'md:order-2' : ''}`}>
        <Link to={to} className="relative group block">
          <div className="relative overflow-hidden rounded border border-slate-700 bg-slate-800">
            {cover ? (
              <img
                src={cover}
                alt={project.title}
                className={`w-full h-auto block transition-all duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } group-hover:opacity-80`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
              />
            ) : hasVideo ? (
              <div className="w-full h-80 bg-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <Play size={48} className="text-emerald-400 mx-auto mb-2" />
                  <span className="text-slate-500 text-lg">{project.category}</span>
                </div>
              </div>
            ) : (
              <div className="w-full h-80 bg-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <span className="text-slate-500 text-lg">{project.category}</span>
                </div>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </Link>
      </div>

      {/* Info */}
      <div className={`md:col-span-5 ${!isEven ? 'md:order-1' : ''}`}>
        <p className="text-emerald-400 text-sm mb-2 font-mono">Projeto em destaque</p>
        <Link to={to}>
          <h3 className="text-2xl font-bold text-slate-200 mb-4 hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
        </Link>

        <div className="bg-slate-800 p-6 rounded border border-slate-700 mb-4 shadow-lg">
          <p className="text-slate-400 leading-relaxed">
            {project.summary || project.description}
          </p>
        </div>

        <div className={`flex flex-wrap gap-2 mb-4 ${!isEven ? 'md:justify-end' : ''}`}>
          {project.technologies.map((tech) => (
            <span key={tech} className="text-sm text-slate-400 font-mono">
              {tech}
            </span>
          ))}
        </div>

        <div className={`flex ${!isEven ? 'md:justify-end' : ''}`}>
          <Link
            to={to}
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-sm"
          >
            Ver projeto
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
