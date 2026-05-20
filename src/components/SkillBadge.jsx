import { useState } from 'react'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

/**
 * Returns the CDN URL for a devicon logo.
 * Uses -original.svg by default.
 */
function deviconUrl(icon) {
  return `${DEVICON_BASE}/${icon}/${icon}-original.svg`
}

/**
 * SkillBadge — pill-shaped badge with a devicon logo or emoji icon.
 *
 * Props
 * ─────
 * name        string  — display name
 * icon        string  — devicon slug  OR  emoji character
 * type        'devicon' | 'emoji'
 * white       bool    — apply brightness(0) invert(1) filter for dark-bg logos
 * accentColor string  — used for hover glow and emoji background tint
 */
export default function SkillBadge({ name, icon, type = 'devicon', white = false, accentColor = '#00d4aa' }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
        padding: '7px 13px',
        borderRadius: '100px',
        background: '#13192b',
        border: `1px solid ${hovered ? accentColor + '55' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered ? `0 0 12px ${accentColor}22` : 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        cursor: 'default',
        flexShrink: 0,
      }}
      aria-label={name}
    >
      {/* ── Icon ── */}
      {type === 'devicon' && !imgError ? (
        <img
          src={deviconUrl(icon)}
          alt={name}
          loading="lazy"
          width={22}
          height={22}
          style={{
            width: '22px',
            height: '22px',
            objectFit: 'contain',
            flexShrink: 0,
            filter: white ? 'brightness(0) invert(1)' : 'none',
          }}
          onError={() => setImgError(true)}
        />
      ) : type === 'devicon' && imgError ? (
        /* Fallback: colored square with first letter */
        <span
          style={{
            width: '22px',
            height: '22px',
            borderRadius: '4px',
            background: accentColor + '22',
            border: `1px solid ${accentColor}44`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontFamily: '"Space Mono", monospace',
            color: accentColor,
            flexShrink: 0,
          }}
        >
          {name[0]}
        </span>
      ) : (
        /* Emoji icon */
        <span
          style={{
            width: '22px',
            height: '22px',
            borderRadius: '6px',
            background: accentColor + '18',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      {/* ── Name ── */}
      <span
        style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '12px',
          color: hovered ? '#e2e8f0' : '#a0aec0',
          whiteSpace: 'nowrap',
          transition: 'color 0.2s ease',
          lineHeight: 1,
        }}
      >
        {name}
      </span>
    </div>
  )
}
