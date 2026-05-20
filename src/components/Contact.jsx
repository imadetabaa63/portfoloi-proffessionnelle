import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { personal } from '../data/portfolio'

// ── EmailJS config — replace with your actual IDs from emailjs.com ─────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const INITIAL_FORM = { name: '', email: '', message: '' }

// ── Contact link item ──────────────────────────────────────────────────────────
function ContactLink({ href, icon: Icon, label, value, color = '#00d4aa' }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '18px 20px',
        background: '#0d1420',
        border: '1px solid #1e2d42',
        borderRadius: '10px',
        textDecoration: 'none',
        transition: 'border-color 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = color + '44'
        e.currentTarget.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#1e2d42'
        e.currentTarget.style.transform = 'translateX(0)'
      }}
    >
      <span
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '8px',
          background: color + '14',
          border: `1px solid ${color}33`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color,
        }}
      >
        <Icon size={17} />
      </span>
      <div>
        <div
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '0.68rem',
            color: '#8892a4',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '2px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 600,
            fontSize: '0.9rem',
            color: '#e2e8f0',
          }}
        >
          {value}
        </div>
      </div>
    </a>
  )
}

// ── Form field ─────────────────────────────────────────────────────────────────
function Field({ label, id, type = 'text', value, onChange, placeholder, rows, required }) {
  const Tag = rows ? 'textarea' : 'input'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: '"Space Mono", monospace',
          fontSize: '0.72rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#8892a4',
        }}
      >
        {label} {required && <span style={{ color: '#00d4aa' }}>*</span>}
      </label>
      <Tag
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        style={{
          background: '#0a0f1a',
          border: '1px solid #1e2d42',
          borderRadius: '8px',
          padding: '12px 16px',
          color: '#e2e8f0',
          fontFamily: '"Syne", sans-serif',
          fontSize: '0.9rem',
          outline: 'none',
          transition: 'border-color 0.2s',
          resize: rows ? 'vertical' : undefined,
          minHeight: rows ? '140px' : undefined,
        }}
        onFocus={e => (e.currentTarget.style.borderColor = '#00d4aa44')}
        onBlur={e => (e.currentTarget.style.borderColor = '#1e2d42')}
      />
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'Imad',
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL_FORM)
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(80px, 12vw, 120px) 24px',
        background: '#0a0f1a',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <ScrollReveal>
          <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>
            // contact
          </span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Travaillons <span className="text-gradient-cyan">ensemble</span>
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
            Disponible pour des missions freelance, opportunités CDI ou collaborations.
            N'hésitez pas à me contacter — je réponds rapidement.
          </p>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
            gap: '48px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* ── Left: contact links ── */}
          <ScrollReveal direction="left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <ContactLink
                href={`mailto:${personal.email}`}
                icon={Mail}
                label="Email"
                value={personal.email}
                color="#00d4aa"
              />
              <ContactLink
                href={`tel:${personal.phone.replace(/\s/g, '')}`}
                icon={Phone}
                label="Téléphone"
                value={personal.phone}
                color="#7c3aed"
              />
              <ContactLink
                href={personal.linkedin}
                icon={Linkedin}
                label="LinkedIn"
                value="IMAD-ET-Tabbaa"
                color="#00d4aa"
              />
              <ContactLink
                href={personal.github}
                icon={Github}
                label="GitHub"
                value="imadetabaa63"
                color="#7c3aed"
              />
            </div>
          </ScrollReveal>

          {/* ── Right: form ── */}
          <ScrollReveal direction="right">
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px',
                }}
                className="form-row"
              >
                <Field
                  id="name"
                  label="Nom"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <Field
                id="message"
                label="Message"
                value={form.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet ou opportunité..."
                rows={5}
                required
              />

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '13px 28px',
                  background: status === 'success' ? '#28c840' : '#00d4aa',
                  color: '#080c14',
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: status === 'loading' ? 'not-allowed' : 'none',
                  transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                  opacity: status === 'loading' ? 0.7 : 1,
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => {
                  if (status !== 'loading') {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px #00d4aa33'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                aria-label="Envoyer le message"
              >
                {status === 'loading' ? (
                  <>
                    <span
                      style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid #080c1444',
                        borderTopColor: '#080c14',
                        borderRadius: '50%',
                        animation: 'spin 0.6s linear infinite',
                      }}
                    />
                    Envoi en cours...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={16} />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Envoyer le message
                  </>
                )}
              </button>

              {/* Error state */}
              {status === 'error' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    background: '#ef444414',
                    border: '1px solid #ef444433',
                    borderRadius: '6px',
                    color: '#ef4444',
                    fontSize: '0.85rem',
                    fontFamily: '"Space Mono", monospace',
                  }}
                >
                  <AlertCircle size={15} />
                  Erreur d'envoi. Configurez vos IDs EmailJS ou contactez directement par email.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>

      {/* Responsive + spinner keyframes */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
