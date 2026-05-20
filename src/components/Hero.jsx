import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Eye, MapPin } from 'lucide-react'
import gsap from 'gsap'
import { personal, hero } from '../data/portfolio'

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
            setTimeout(() => { setWaiting(false); setDeleting(true) }, pause)
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

// ── GSAP Scroll Indicator ──────────────────────────────────────────────────────
function ScrollIndicator({ onClick }) {
  const wrapperRef = useRef(null)
  const dotRef     = useRef(null)
  const line1Ref   = useRef(null)
  const line2Ref   = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 })

    // Dot slides down inside the mouse shell
    tl.fromTo(dotRef.current,
      { y: 0, opacity: 1 },
      { y: 10, opacity: 0, duration: 0.7, ease: 'power2.in' }
    )
    .fromTo(dotRef.current,
      { y: -4, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
    )

    // Chevron lines pulse down
    gsap.to([line1Ref.current, line2Ref.current], {
      y: 4,
      opacity: 0.4,
      duration: 0.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.15,
    })

    // Wrapper fades in after delay
    gsap.fromTo(wrapperRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, delay: 1.8, ease: 'power2.out' }
    )

    return () => { tl.kill(); gsap.killTweensOf([dotRef.current, line1Ref.current, line2Ref.current, wrapperRef.current]) }
  }, [])

  return (
    <button
      ref={wrapperRef}
      onClick={onClick}
      aria-label="Défiler vers la section suivante"
      style={{
        opacity: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        background: 'none',
        border: 'none',
        cursor: 'none',
        color: '#8892a4',
        fontFamily: '"Space Mono", monospace',
        fontSize: '0.65rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}
    >
      {/* Mouse shell */}
      <div style={{
        width: '26px',
        height: '40px',
        border: '1.5px solid #2a3a52',
        borderRadius: '13px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '6px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div
          ref={dotRef}
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#00d4aa',
            boxShadow: '0 0 6px #00d4aa',
          }}
        />
      </div>

      {/* Chevron arrows */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
        <svg ref={line1Ref} width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M1 1L7 7L13 1" stroke="#00d4aa88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg ref={line2Ref} width="14" height="8" viewBox="0 0 14 8" fill="none" style={{ opacity: 0.5 }}>
          <path d="M1 1L7 7L13 1" stroke="#00d4aa44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <span>scroll</span>
    </button>
  )
}

// ── Main Hero ──────────────────────────────────────────────────────────────────
export default function Hero() {
  const typedText = useTypedText(hero.roles)
  const scrollTo  = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(76px, 11vh, 120px) 24px 80px',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        <div className="hero-grid">
          {/* ── Left: text ── */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              style={{ marginBottom: 'clamp(16px, 3vh, 28px)' }}
            >
              <span className="hero-available-badge">
                <span className="hero-pulse-dot" />
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
                fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                lineHeight: 1.05,
                margin: '0 0 clamp(6px, 1.5vh, 12px) 0',
              }}
            >
              {personal.firstName}
              <br />
              <span className="text-gradient-cyan">{personal.lastName}</span>
            </motion.h1>

            {/* Typed role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'clamp(14px, 2.5vh, 24px)' }}
            >
              <span style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                color: '#00d4aa',
              }}>
                {typedText}<span className="cursor-blink" />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                color: '#8892a4',
                maxWidth: '500px',
                lineHeight: 1.75,
                marginBottom: 'clamp(10px, 2vh, 16px)',
                fontSize: 'clamp(0.85rem, 1.4vw, 0.97rem)',
              }}
            >
              Je construis des applications intelligentes — reconnaissance faciale,
              agents IA, APIs haute performance et automatisation de workflows.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: 'clamp(20px, 4vh, 40px)',
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.78rem',
              }}
            >
              <MapPin size={13} style={{ color: '#00d4aa', flexShrink: 0 }} />
              <span style={{ color: '#e2e8f0' }}>Casablanca, Maroc</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
            >
              <button onClick={() => scrollTo('projects')} className="btn-primary hero-btn" aria-label="Voir les projets">
                <Eye size={15} /> Voir Projets
              </button>
              <a href={personal.cv} download className="btn-outline hero-btn" aria-label="Télécharger mon CV">
                <Download size={15} /> CV
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-outline hero-btn" aria-label="GitHub">
                <Github size={15} /> GitHub
              </a>
            </motion.div>
          </div>

          {/* ── Right: Profile photo ── */}
          <motion.div
            className="hero-photo-col"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hero-photo-wrapper">
              <div className="hero-photo-glow" aria-hidden="true" />
              <img
                src="/images/my.png"
                alt="Imad ET-TABBAA"
                className="hero-photo"
              />
              <div className="hero-badge hero-badge-left">
                <span style={{ fontSize: '1rem' }}>🚀</span>
                <div>
                  <div style={{ fontFamily: '"Syne", sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#e2e8f0', lineHeight: 1.2 }}>2+ ans</div>
                  <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.58rem', color: '#8892a4' }}>d'expérience</div>
                </div>
              </div>
              <div className="hero-badge hero-badge-right">
                <span style={{ fontSize: '1rem' }}>✅</span>
                <div>
                  <div style={{ fontFamily: '"Syne", sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#e2e8f0', lineHeight: 1.2 }}>3+ projets</div>
                  <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.58rem', color: '#8892a4' }}>en production</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — fixed at bottom of section */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
          <ScrollIndicator onClick={() => scrollTo('about')} />
        </div>
      </div>

      <style>{`
        .hero-available-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Space Mono", monospace;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00d4aa;
          background: #00d4aa0d;
          border: 1px solid #00d4aa33;
          border-radius: 100px;
          padding: 5px 14px;
        }
        .hero-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00d4aa;
          box-shadow: 0 0 8px #00d4aa;
          animation: pulse-glow 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        .hero-btn {
          padding: 11px 22px !important;
          font-size: 0.85rem !important;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 48px;
          align-items: center;
        }
        .hero-photo-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-photo-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          flex-shrink: 0;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(160deg, #0d1a2a, #080c14);
          border: 1.5px solid #00d4aa22;
          box-shadow: 0 0 0 1px #1e2d4266, 0 24px 60px rgba(0,0,0,0.45), 0 0 60px #00d4aa0c;
        }
        .hero-photo-glow {
          position: absolute;
          inset: -10px;
          border-radius: 30px;
          background: linear-gradient(135deg, #00d4aa1a, #7c3aed0e, transparent);
          filter: blur(24px);
          z-index: 0;
        }
        .hero-photo {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center bottom;
          display: block;
        }
        .hero-badge {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 9px;
          background: rgba(8, 12, 20, 0.92);
          border: 1px solid #1e2d42;
          border-radius: 11px;
          padding: 9px 13px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.35);
        }
        .hero-badge-left  { bottom: 32px; left: -24px; }
        .hero-badge-right { top: 32px; right: -24px; }

        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 14px;
          }
          .hero-photo-col { order: -1; }
          .hero-photo-wrapper {
            width: min(160px, 44vw);
            aspect-ratio: 3 / 4;
            height: auto;
            margin: 0 auto;
          }
          .hero-badge-left  { left: -8px; bottom: 8px; }
          .hero-badge-right { right: -8px; top: 8px; }
          .hero-available-badge { justify-content: center; }
          .hero-btn { width: auto !important; }
          .hero-tagline { display: none; }
        }

        @media (max-width: 480px) {
          .hero-photo-wrapper { width: min(140px, 42vw); }
          .hero-badge { padding: 5px 8px; gap: 5px; }
          .hero-badge-left  { left: 0; }
          .hero-badge-right { right: 0; }
        }
      `}</style>
    </section>
  )
}
