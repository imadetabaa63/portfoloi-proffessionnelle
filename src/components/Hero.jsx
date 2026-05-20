import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Eye, ChevronDown } from 'lucide-react'
import { personal, hero } from '../data/portfolio'

// ── Typed text hook ────────────────────────────────────────────────────────────
function useTypedText(words, typeSpeed = 85, deleteSpeed = 45, pause = 2200) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [waiting, setWaiting] = useState(false)

  useEffect(() => {
    if (waiting) return
    const current = words[wordIdx % words.length]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1))
          } else {
            setWaiting(true)
            setTimeout(() => {
              setWaiting(false)
              setDeleting(true)
            }, pause)
          }
        } else {
          if (text.length > 0) {
            setText(current.slice(0, text.length - 1))
          } else {
            setDeleting(false)
            setWordIdx(i => (i + 1) % words.length)
          }
        }
      },
      deleting ? deleteSpeed : typeSpeed
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, waiting, wordIdx, words, typeSpeed, deleteSpeed, pause])

  return text
}

// ── Terminal window ────────────────────────────────────────────────────────────
function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0)
  const lines = hero.terminalLines

  useEffect(() => {
    if (visibleLines >= lines.length) return
    const delay = visibleLines === 0 ? 600 : 900
    const t = setTimeout(() => setVisibleLines(v => v + 1), delay)
    return () => clearTimeout(t)
  }, [visibleLines, lines.length])

  return (
    <div className="terminal-window float-animation" style={{ width: '460px', maxWidth: '100%' }}>
      {/* Header bar */}
      <div className="terminal-header">
        <span className="terminal-dot" style={{ background: '#ff5f57' }} />
        <span className="terminal-dot" style={{ background: '#febc2e' }} />
        <span className="terminal-dot" style={{ background: '#28c840' }} />
        <span
          style={{
            marginLeft: 'auto',
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.68rem',
            color: '#8892a4',
          }}
        >
          bash — imad@portfolio ~
        </span>
      </div>

      {/* Body */}
      <div className="terminal-body" style={{ minHeight: '180px' }}>
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginBottom: '6px' }}
          >
            <div>
              <span style={{ color: '#28c840' }}>{line.prompt}&nbsp;</span>
              <span style={{ color: '#e2e8f0' }}>{line.command}</span>
            </div>
            <div style={{ color: '#8892a4', paddingLeft: '16px', fontSize: '0.8rem' }}>
              <span style={{ color: '#00d4aa' }}>→&nbsp;</span>
              {line.output}
            </div>
          </motion.div>
        ))}

        {/* Blinking cursor after last line */}
        {visibleLines <= lines.length && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#28c840' }}>$&nbsp;</span>
            <span className="cursor-blink" />
          </div>
        )}
      </div>
    </div>
  )
}

// ── Main Hero ──────────────────────────────────────────────────────────────────
export default function Hero() {
  const typedText = useTypedText(hero.roles)

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(100px, 14vh, 140px) 24px 60px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Two-column layout on large screens */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) auto',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* ── Left column ── */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              style={{ marginBottom: '20px' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#00d4aa',
                  background: '#00d4aa0d',
                  border: '1px solid #00d4aa33',
                  borderRadius: '100px',
                  padding: '5px 14px',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#00d4aa',
                    boxShadow: '0 0 8px #00d4aa',
                    animation: 'pulse-glow 2s ease-in-out infinite',
                    flexShrink: 0,
                  }}
                />
                Disponible — Open to work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
                lineHeight: 1.05,
                margin: '0 0 6px 0',
              }}
            >
              {personal.firstName}&nbsp;
              <span className="text-gradient-cyan">{personal.lastName}</span>
            </motion.h1>

            {/* Typed role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '28px',
              }}
            >
              <span
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)',
                  color: '#8892a4',
                }}
              >
                {typedText}
                <span className="cursor-blink" />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                color: '#8892a4',
                maxWidth: '520px',
                lineHeight: 1.75,
                marginBottom: '44px',
                fontSize: '1rem',
              }}
            >
              Je construis des applications intelligentes — reconnaissance faciale,
              agents IA, APIs haute performance et automatisation de workflows.
              Basé à{' '}
              <span style={{ color: '#e2e8f0' }}>Casablanca, Maroc</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
                aria-label="Voir les projets"
              >
                <Eye size={16} />
                Voir Projets
              </button>

              <a
                href={personal.cv}
                download
                className="btn-outline"
                aria-label="Télécharger mon CV"
              >
                <Download size={16} />
                Télécharger CV
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="Voir mon GitHub"
              >
                <Github size={16} />
                GitHub ↗
              </a>
            </motion.div>
          </div>

          {/* ── Right column — terminal (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <TerminalWindow />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '72px' }}
        >
          <button
            onClick={() => scrollTo('about')}
            aria-label="Défiler vers About"
            style={{
              background: 'none',
              border: 'none',
              color: '#8892a4',
              cursor: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
            }}
          >
            scroll down
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
