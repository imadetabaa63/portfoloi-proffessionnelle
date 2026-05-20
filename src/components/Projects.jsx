import { Github, ExternalLink, Tag } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { projects } from '../data/portfolio'

// ── Single project card ────────────────────────────────────────────────────────
function ProjectCard({ project, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <article
        className="project-card"
        style={{ '--card-accent': project.accent, height: '100%', display: 'flex', flexDirection: 'column' }}
        aria-label={`Projet : ${project.title}`}
      >
        {/* Top accent line handled by CSS ::before */}

        <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Category + links */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: project.accent,
                background: project.accent + '14',
                border: `1px solid ${project.accent}33`,
                borderRadius: '100px',
                padding: '3px 10px',
              }}
            >
              {project.category}
            </span>

            <div style={{ display: 'flex', gap: '8px' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub — ${project.title}`}
                  style={{
                    color: '#8892a4',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = project.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = '#8892a4')}
                >
                  <Github size={17} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live — ${project.title}`}
                  style={{
                    color: '#8892a4',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = project.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = '#8892a4')}
                >
                  <ExternalLink size={17} />
                </a>
              )}
            </div>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#e2e8f0',
              marginBottom: '4px',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.75rem',
              color: project.accent,
              marginBottom: '14px',
            }}
          >
            {project.subtitle}
          </p>

          {/* Description */}
          <p
            style={{
              color: '#8892a4',
              fontSize: '0.88rem',
              lineHeight: 1.7,
              marginBottom: '18px',
              flex: 1,
            }}
          >
            {project.description}
          </p>

          {/* Highlights */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '20px',
            }}
          >
            {project.highlights.map(h => (
              <span
                key={h}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.68rem',
                  color: project.accent,
                  background: project.accent + '0f',
                  border: `1px solid ${project.accent}22`,
                  borderRadius: '4px',
                  padding: '3px 8px',
                }}
              >
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: project.accent, flexShrink: 0 }} />
                {h}
              </span>
            ))}
          </div>

          {/* Stack badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
            {project.stack.map(tech => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: 'clamp(80px, 12vw, 120px) 24px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <ScrollReveal>
          <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>
            // projets
          </span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Ce que j'ai <span className="text-gradient-cyan">construit</span>
          </h2>
          <p
            style={{
              color: '#8892a4',
              maxWidth: '520px',
              lineHeight: 1.7,
              marginBottom: '60px',
              fontSize: '0.95rem',
            }}
          >
            Projets réels combinant IA, automatisation et développement web moderne.
            Chaque projet résout un problème concret.
          </p>
        </ScrollReveal>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '20px',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
