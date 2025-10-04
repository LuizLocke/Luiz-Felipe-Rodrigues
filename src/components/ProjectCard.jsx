import { useState } from 'react'
import { Github, ExternalLink, Play, ChevronLeft, ChevronRight } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const isEven = index % 2 === 0

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className={`grid md:grid-cols-12 gap-8 items-center ${!isEven ? 'md:text-right' : ''}`}>
      {/* Project Media (Image or Video) */}
      <div className={`md:col-span-7 ${!isEven ? 'md:order-2' : ''}`}>
        <div className="relative group">
          <div className="relative overflow-hidden rounded border border-slate-700 bg-slate-800">
            
            {project.video ? (
              <video
                src={project.video}
                controls
                className="w-full h-80 object-cover rounded"
              />
            ) : project.images && project.images.length > 0 ? (
              <div className="relative">
                <img
                  src={project.images[currentImage]}
                  alt={project.title}
                  className={`w-full h-80 object-cover transition-all duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  } group-hover:opacity-80`}
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Botões de navegação */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/70 p-2 rounded-full text-white hover:bg-slate-900"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/70 p-2 rounded-full text-white hover:bg-slate-900"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
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
        </div>
      </div>

      {/* Project Info */}
      <div className={`md:col-span-5 ${!isEven ? 'md:order-1' : ''}`}>
        <p className="text-emerald-400 text-sm mb-2 font-mono">Projeto em destaque</p>
        <h3 className="text-2xl font-bold text-slate-200 mb-4 hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        
        <div className="bg-slate-800 p-6 rounded border border-slate-700 mb-4 shadow-lg">
          <p className="text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className={`flex flex-wrap gap-2 mb-4 ${!isEven ? 'md:justify-end' : ''}`}>
          {project.technologies.map((tech) => (
            <span key={tech} className="text-sm text-slate-400 font-mono">
              {tech}
            </span>
          ))}
        </div>
        
        <div className={`flex space-x-4 ${!isEven ? 'md:justify-end' : ''}`}>
          <a 
            href="#" 
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            title="Ver código"
          >
            <Github size={20} />
          </a>
          <a 
            href="#" 
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            title="Ver projeto"
          >
            <ExternalLink size={20} />
          </a>
          {project.video && (
            <a 
              href={project.video}
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              title="Ver demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
