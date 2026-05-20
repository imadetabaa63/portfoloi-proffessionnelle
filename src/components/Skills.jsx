import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import { skillCategories } from '../data/portfolio'

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(80px, 12vw, 120px) 24px',
        background: '#080c14',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginBottom: '56px' }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#00d4aa',
              marginBottom: '12px',
            }}
          >
            // 02. SKILLS
          </span>

          <h2
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.1,
              margin: '0 0 16px',
              color: '#f1f5f9',
            }}
          >
            Stack &amp;{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4aa, #00ffcc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Technologies
            </span>
          </h2>

          {/* Title underline accent */}
          <div
            style={{
              width: '48px',
              height: '3px',
              background: 'linear-gradient(90deg, #00d4aa, transparent)',
              borderRadius: '2px',
              marginBottom: '20px',
            }}
            aria-hidden="true"
          />

          <p
            style={{
              color: '#8892a4',
              maxWidth: '520px',
              lineHeight: 1.75,
              fontSize: '0.95rem',
              margin: 0,
            }}
          >
            Un stack complet couvrant frontend, backend, IA/ML et DevOps —
            avec les outils que j'utilise vraiment en production.
          </p>
        </motion.div>

        {/* ── 2×2 card grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}
          className="skills-grid"
        >
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.id}
              title={cat.title}
              accentColor={cat.accentColor}
              skills={cat.skills}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* ── Responsive: 1 col on mobile ── */}
      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
