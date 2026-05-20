import ScrollReveal from './ScrollReveal'
import { experiences } from '../data/portfolio'

// ── Single experience item ─────────────────────────────────────────────────────
function ExperienceItem({ exp, delay, isLast }) {
  return (
    <ScrollReveal delay={delay}>
      <div style={{ display: 'flex', gap: '24px', paddingBottom: isLast ? 0 : '40px' }}>
        {/* Timeline column */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
          {/* Dot */}
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: exp.accent,
              boxShadow: `0 0 12px ${exp.accent}88`,
              border: `2px solid ${exp.accent}44`,
              flexShrink: 0,
              marginTop: '6px',
            }}
          />
          {/* Line */}
          {!isLast && (
            <div
              style={{
                flex: 1,
                width: '1px',
                background: `linear-gradient(to bottom, ${exp.accent}44, transparent)`,
                marginTop: '8px',
              }}
            />
          )}
        </div>

        {/* Content card */}
        <div
          className="glass-card"
          style={{
            flex: 1,
            padding: '24px 28px',
            transition: 'border-color 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = exp.accent + '44'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#1e2d42'
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '4px',
              alignItems: 'flex-start',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: '#e2e8f0',
                  margin: 0,
                }}
              >
                {exp.role}
              </h3>
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.8rem',
                  color: exp.accent,
                  margin: '4px 0 0',
                }}
              >
                {exp.company} — {exp.location}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
              <span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.72rem',
                  color: '#8892a4',
                  whiteSpace: 'nowrap',
                }}
              >
                {exp.period}
              </span>
              <span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.68rem',
                  color: exp.accent,
                  background: exp.accent + '14',
                  border: `1px solid ${exp.accent}33`,
                  borderRadius: '100px',
                  padding: '2px 9px',
                }}
              >
                {exp.current ? '● ' : ''}{exp.type}
              </span>
            </div>
          </div>

          {/* Bullet points */}
          <ul
            style={{
              margin: '16px 0 0',
              padding: 0,
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {exp.bullets.map((bullet, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  gap: '10px',
                  fontSize: '0.88rem',
                  color: '#8892a4',
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    color: exp.accent,
                    flexShrink: 0,
                    marginTop: '2px',
                    fontSize: '0.7rem',
                  }}
                >
                  ▸
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '18px' }}>
            {exp.stack.map(tech => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: 'clamp(80px, 12vw, 120px) 24px',
        background: '#0a0f1a',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <ScrollReveal>
          <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>
            // parcours
          </span>
          <h2 className="section-title" style={{ marginBottom: '60px' }}>
            Expérience <span className="text-gradient-cyan">professionnelle</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceItem
              key={exp.id}
              exp={exp}
              delay={i * 0.15}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
