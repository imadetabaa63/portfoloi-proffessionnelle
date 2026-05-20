import { Github, Linkedin, Mail, Zap } from 'lucide-react'
import { personal } from '../data/portfolio'

const SOCIALS = [
  {
    href: personal.github,
    icon: Github,
    label: 'GitHub',
  },
  {
    href: personal.linkedin,
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: `mailto:${personal.email}`,
    icon: Mail,
    label: 'Email',
  },
]

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projets', id: 'projects' },
  { label: 'Expérience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer
      style={{
        borderTop: '1px solid #1e2d42',
        padding: '40px 24px',
        background: '#080c14',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#00d4aa',
              background: 'none',
              border: 'none',
              cursor: 'none',
              letterSpacing: '-0.02em',
            }}
            aria-label="Retour en haut"
          >
            IT<span style={{ color: '#e2e8f0' }}>.</span>
          </button>

          {/* Nav links */}
          <nav aria-label="Navigation footer">
            <ul
              style={{
                display: 'flex',
                gap: '4px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                flexWrap: 'wrap',
              }}
            >
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: '#8892a4',
                      background: 'none',
                      border: 'none',
                      cursor: 'none',
                      padding: '6px 10px',
                      borderRadius: '4px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8892a4')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid #1e2d42',
                  background: '#0d1420',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8892a4',
                  transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#00d4aa44'
                  e.currentTarget.style.color = '#00d4aa'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#1e2d42'
                  e.currentTarget.style.color = '#8892a4'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#1e2d42' }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.72rem',
              color: '#8892a4',
              margin: 0,
            }}
          >
            &copy; 2025 <span style={{ color: '#e2e8f0' }}>Imad ET-TABBAA</span>. Tous droits réservés.
          </p>

          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.72rem',
              color: '#8892a4',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            Construit avec React + Vite
            <Zap size={12} style={{ color: '#f59e0b' }} />
          </p>
        </div>
      </div>
    </footer>
  )
}
