import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0)
  const images = project.images || []

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Aperçu du projet : ${project.title}`}
    >
      <motion.div
        className="modal-container"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="modal-header">
          <div style={{ minWidth: 0 }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: project.accent,
                background: project.accent + '14',
                border: `1px solid ${project.accent}33`,
                borderRadius: '100px',
                padding: '3px 10px',
                marginBottom: '8px',
              }}
            >
              {project.category}
            </span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        {/* ── Image viewer ── */}
        <div className="modal-image-area">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]?.src}
              alt={images[current]?.caption}
              className="modal-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              draggable={false}
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button className="modal-nav modal-nav-prev" onClick={prev} aria-label="Image précédente">
                <ChevronLeft size={22} />
              </button>
              <button className="modal-nav modal-nav-next" onClick={next} aria-label="Image suivante">
                <ChevronRight size={22} />
              </button>
              <span className="modal-counter">{current + 1} / {images.length}</span>
            </>
          )}
        </div>

        {/* ── Caption ── */}
        {images[current]?.caption && (
          <p className="modal-caption">{images[current].caption}</p>
        )}

        {/* ── Thumbnails ── */}
        {images.length > 1 && (
          <div className="modal-thumbnails" role="tablist">
            {images.map((img, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Aperçu ${i + 1}`}
                className={`modal-thumb${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
              >
                <img src={img.src} alt="" draggable={false} />
              </button>
            ))}
          </div>
        )}

        {/* ── Footer: stack + links ── */}
        <div className="modal-footer">
          <div className="modal-stack">
            {project.stack.map(tech => (
              <span key={tech} className="badge">{tech}</span>
            ))}
          </div>
          <div className="modal-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: '0.8rem', padding: '8px 16px', gap: '6px' }}
              >
                <Github size={14} /> GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '8px 16px', gap: '6px' }}
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
