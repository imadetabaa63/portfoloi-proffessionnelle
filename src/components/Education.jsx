import ScrollReveal from './ScrollReveal'
import { education } from '../data/portfolio'

// ── Single education card ──────────────────────────────────────────────────────
function EducationCard({ item, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <div
        className="glass-card"
        style={{
          padding: '28px 24px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          transition: 'border-color 0.3s ease, transform 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = item.accent + '44'
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#1e2d42'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, ${item.accent}, transparent)`,
          }}
        />

        {/* Icon + period */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '2rem', lineHeight: 1 }} aria-hidden="true">
            {item.icon}
          </span>
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.7rem',
              color: item.accent,
              background: item.accent + '14',
              border: `1px solid ${item.accent}33`,
              borderRadius: '100px',
              padding: '3px 10px',
              whiteSpace: 'nowrap',
            }}
          >
            {item.period}
          </span>
        </div>

        {/* Degree */}
        <div>
          <h3
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#e2e8f0',
              margin: '0 0 6px',
              lineHeight: 1.3,
            }}
          >
            {item.degree}
          </h3>
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.75rem',
              color: item.accent,
              margin: 0,
            }}
          >
            {item.institution}
          </p>
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.68rem',
              color: '#8892a4',
              margin: '3px 0 0',
            }}
          >
            {item.location}
          </p>
        </div>

        {/* Description */}
        <p
          style={{
            color: '#8892a4',
            fontSize: '0.85rem',
            lineHeight: 1.65,
            margin: 0,
            flex: 1,
          }}
        >
          {item.description}
        </p>
      </div>
    </ScrollReveal>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function Education() {
  return (
    <section
      id="education"
      style={{ padding: 'clamp(80px, 12vw, 120px) 24px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <ScrollReveal>
          <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>
            // formation
          </span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Mon parcours <span className="text-gradient-cyan">académique</span>
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
            Formations techniques et académiques qui ont forgé mon expertise en développement et IA.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
            gap: '20px',
          }}
        >
          {education.map((item, i) => (
            <EducationCard key={item.id} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
