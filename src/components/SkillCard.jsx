import { motion } from 'framer-motion'
import SkillBadge from './SkillBadge'

/**
 * SkillCard — category card with accent bar, title, divider, and badge grid.
 *
 * Props
 * ─────
 * title       string
 * accentColor string
 * skills      { name, icon, type, white? }[]
 * index       number — for staggered entrance delay
 */
export default function SkillCard({ title, accentColor, skills, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ translateY: -4, transition: { duration: 0.22, ease: 'easeOut' } }}
      style={{
        position: 'relative',
        borderRadius: '16px',
        border: `1px solid rgba(${hexToRgb(accentColor)}, 0.18)`,
        background: 'linear-gradient(135deg, #0d1120 0%, #111827 100%)',
        padding: '28px',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
      }}
      onHoverStart={e => {
        if (e.currentTarget) {
          e.currentTarget.style.borderColor = `rgba(${hexToRgb(accentColor)}, 0.45)`
        }
      }}
      onHoverEnd={e => {
        if (e.currentTarget) {
          e.currentTarget.style.borderColor = `rgba(${hexToRgb(accentColor)}, 0.18)`
        }
      }}
    >
      {/* ── Left accent bar ── */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          bottom: '20px',
          left: 0,
          width: '3px',
          borderRadius: '0 3px 3px 0',
          background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}44)`,
        }}
        aria-hidden="true"
      />

      {/* ── Subtle corner glow ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accentColor}0d 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* ── Title ── */}
      <h3
        style={{
          fontFamily: '"Syne", sans-serif',
          fontWeight: 700,
          fontSize: '1.1rem',
          color: '#f1f5f9',
          margin: '0 0 16px 0',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>

      {/* ── Divider ── */}
      <div
        style={{
          height: '1px',
          background: 'rgba(255,255,255,0.06)',
          marginBottom: '20px',
        }}
        aria-hidden="true"
      />

      {/* ── Badges ── */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {skills.map(skill => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            type={skill.type}
            white={skill.white}
            accentColor={accentColor}
          />
        ))}
      </div>
    </motion.div>
  )
}

// ── Utility: convert #rrggbb → "r, g, b" for rgba() ────────────────────────────
function hexToRgb(hex) {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  return `${r}, ${g}, ${b}`
}
