import { useEffect, useState, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projets',    href: '#projects' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Formation',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

const SECTION_IDS = NAV_LINKS.map(l => l.href.slice(1))

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('home')
  const [menuOpen,       setMenuOpen]       = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.35, rootMargin: '-80px 0px 0px 0px' }
    )
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const scrollTo = useCallback((href) => {
    const el = document.getElementById(href.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }, [])

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        background:       scrolled ? 'rgba(8, 12, 20, 0.88)' : 'transparent',
        backdropFilter:   scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom:     scrolled ? '1px solid #1e2d4244' : '1px solid transparent',
        boxShadow:        scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '1.3rem',
            fontWeight: 700,
            color: '#00d4aa',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}
          aria-label="Retour en haut"
        >
          IT<span style={{ color: '#e2e8f0' }}>.</span>
        </button>

        {/* Desktop nav links — hidden on mobile via CSS */}
        <ul className="nav-desktop-links" style={{ gap: '4px', listStyle: 'none', margin: 0, padding: 0 }}>
          {NAV_LINKS.map(link => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  style={{
                    fontFamily: '"Syne", sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#00d4aa' : '#8892a4',
                    background: isActive ? '#00d4aa11' : 'none',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 14px',
                    cursor: 'none',
                    transition: 'color 0.2s ease, background 0.2s ease',
                    position: 'relative',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#e2e8f0' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#8892a4' }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: 2,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '2px',
                      background: '#00d4aa',
                      borderRadius: '1px',
                    }} />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Desktop CV button — hidden on mobile via CSS */}
        <a
          href="/cv-imad.pdf"
          download
          className="nav-desktop-cv"
          style={{
            fontFamily: '"Syne", sans-serif',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#00d4aa',
            border: '1.5px solid #00d4aa44',
            borderRadius: '6px',
            padding: '7px 18px',
            textDecoration: 'none',
            transition: 'border-color 0.2s, background 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#00d4aa'
            e.currentTarget.style.background  = '#00d4aa11'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#00d4aa44'
            e.currentTarget.style.background  = 'transparent'
          }}
          aria-label="Télécharger CV"
        >
          CV
        </a>

        {/* Mobile hamburger — visible on mobile via CSS */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="nav-hamburger"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          style={{
            background:   menuOpen ? '#00d4aa22' : '#1a2332',
            border:       `1.5px solid ${menuOpen ? '#00d4aa66' : '#2a3a52'}`,
            borderRadius: '8px',
            padding:      '8px 10px',
            color:        '#e2e8f0',
            cursor:       'pointer',
            transition:   'background 0.2s, border-color 0.2s',
            lineHeight:   0,
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            background:    'rgba(8, 12, 20, 0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid #1e2d42',
            padding: '16px 20px 24px',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '1rem',
                      fontWeight: isActive ? 700 : 500,
                      color:      isActive ? '#00d4aa' : '#e2e8f0',
                      background: isActive ? '#00d4aa0d' : 'none',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '12px 14px',
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>
          <a
            href="/cv-imad.pdf"
            download
            style={{
              display: 'block',
              marginTop: '14px',
              textAlign: 'center',
              fontFamily: '"Syne", sans-serif',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#080c14',
              background: '#00d4aa',
              borderRadius: '8px',
              padding: '12px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Télécharger CV
          </a>
        </div>
      )}

      {/* Responsive visibility — no Tailwind dependency */}
      <style>{`
        .nav-desktop-links { display: none; }
        .nav-desktop-cv    { display: none; }
        .nav-hamburger     { display: flex; align-items: center; justify-content: center; }

        @media (min-width: 768px) {
          .nav-desktop-links { display: flex; }
          .nav-desktop-cv    { display: inline-flex; }
          .nav-hamburger     { display: none; }
        }
      `}</style>
    </header>
  )
}
