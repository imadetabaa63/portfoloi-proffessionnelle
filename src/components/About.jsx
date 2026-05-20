import { Github, Linkedin, Globe, MapPin } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { personal, about } from '../data/portfolio'

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: 'clamp(80px, 12vw, 120px) 24px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <ScrollReveal>
          <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>
            // about me
          </span>
          <h2 className="section-title" style={{ marginBottom: '60px' }}>
            Qui suis-<span className="text-gradient-cyan">je</span> ?
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '60px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* ── Left: text ── */}
          <div>
            {about.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p
                  style={{
                    color: '#8892a4',
                    lineHeight: 1.8,
                    marginBottom: '20px',
                    fontSize: '1rem',
                  }}
                >
                  {p}
                </p>
              </ScrollReveal>
            ))}

            {/* Links */}
            <ScrollReveal delay={0.3}>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn d'Imad ET-TABBAA"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 16px',
                    border: '1px solid #1e2d42',
                    borderRadius: '6px',
                    color: '#8892a4',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.78rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                    background: '#0d1420',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#00d4aa44'
                    e.currentTarget.style.color = '#00d4aa'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1e2d42'
                    e.currentTarget.style.color = '#8892a4'
                  }}
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub d'Imad ET-TABBAA"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 16px',
                    border: '1px solid #1e2d42',
                    borderRadius: '6px',
                    color: '#8892a4',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.78rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                    background: '#0d1420',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#00d4aa44'
                    e.currentTarget.style.color = '#00d4aa'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1e2d42'
                    e.currentTarget.style.color = '#8892a4'
                  }}
                >
                  <Github size={14} />
                  GitHub
                </a>

                <a
                  href={personal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Site web d'Imad ET-TABBAA"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 16px',
                    border: '1px solid #1e2d42',
                    borderRadius: '6px',
                    color: '#8892a4',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '0.78rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                    background: '#0d1420',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#00d4aa44'
                    e.currentTarget.style.color = '#00d4aa'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1e2d42'
                    e.currentTarget.style.color = '#8892a4'
                  }}
                >
                  <Globe size={14} />
                  imadet.site
                </a>
              </div>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal delay={0.4}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '20px',
                  color: '#8892a4',
                  fontSize: '0.85rem',
                  fontFamily: '"Space Mono", monospace',
                }}
              >
                <MapPin size={14} style={{ color: '#00d4aa' }} />
                {personal.location}
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: stat cards ── */}
          <div
            className="about-stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            {about.stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="right">
                <div
                  className="glass-card glow-cyan"
                  style={{
                    padding: '28px 20px',
                    textAlign: 'center',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div
                    className="text-gradient-cyan"
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                      lineHeight: 1,
                      marginBottom: '8px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#e2e8f0',
                      marginBottom: '4px',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '0.7rem',
                      color: '#8892a4',
                    }}
                  >
                    {stat.sub}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive grid override */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
