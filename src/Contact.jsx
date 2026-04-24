import { useState } from 'react'
import gmail from './gmail.png'
import linkedin from './linkedin.png'
import github from './github.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import upwork from './upwork.png'
import { useScrollAnimation } from './hooks/useScrollAnimation'

export default function Contact() {

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sectionRef, isSectionVisible] = useScrollAnimation()
  const [leftRef, isLeftVisible] = useScrollAnimation()
  const [rightRef, isRightVisible] = useScrollAnimation()

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })


  const submit = e => {

    e.preventDefault()

    // TODO: Connect to Formspree or EmailJS for real submissions

    setSent(true)

    setTimeout(() => setSent(false), 4000)

    setForm({ name: '', email: '', message: '' })

  }



  const inputStyle = {

    width: '100%', padding: '0.85rem 1rem',

    background: 'var(--bg)', border: '1px solid var(--border)',

    borderRadius: '8px', color: 'var(--text)',

    fontFamily: 'var(--font-mono)', fontSize: '0.85rem',

    outline: 'none', transition: 'border-color 0.2s',

  }



  const socials = [

    { label: 'duanluiz24@gmail.com', href: 'mailto:duanluiz24@gmail.com', icon: gmail },

    { label: '+63 09065427963', href: 'tel:+639065427963', icon: '📞' },

    { label: 'linkedin.com/in/duan-navarro-a7708a2a1', href: 'https://www.linkedin.com/in/duan-navarro-a7708a2a1/', icon: linkedin },

    { label: 'github.com/duanluiz24', href: 'https://github.com/duanluiz24-svg', icon: github },

    { label: 'facebook.com/therealduan', href: 'https://www.facebook.com/therealduan/', icon: facebook },

    { label: 'instagram.com/duaannyyy', href: 'https://www.instagram.com/duaannyyy/', icon: instagram },

    { label: 'upwork.com/freelancer', href: 'https://www.upwork.com/freelancers/~016babe322430897f5?mp_source=share', icon: upwork },

    { label: 'Los Baños, Laguna, Philippines', href: '#', icon: '📍' },

  ]



  return (
    <section id="contact" ref={sectionRef} style={{ opacity: 1, transform: 'translateY(0)' }}>
      <div className="container">
        <p className="section-label">Let's talk</p>
        <h2 className="section-title">Get in <span className="gradient-text">touch</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left */}
          <div ref={leftRef} style={{ opacity: 1, transform: 'translateY(0)' }}>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1rem' }}>

              I'm actively looking for new opportunities that aligns in my IT Background: Data Management Roles, Front-End / Back-End Development, IT Support / Helpdesk, and Back-office related jobs that focuses Administrative Tasks.

              Whether it's a job offer, project collaboration, or just a chat — feel free to reach out!

            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

              {socials.map(s => (

                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', transition: 'color 0.2s', letterSpacing: '0.02em', wordBreak: 'break-all' }}

                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}

                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>

                  {typeof s.icon === 'string' && s.icon.length <= 2 ? (
                    <span style={{ fontSize: '1rem', flexShrink: 0 }}>{s.icon}</span>
                  ) : (
                    <img src={s.icon} alt="" style={{ width: '28px', height: 'auto', flexShrink: 0, objectFit: 'contain' }} />
                  )}

                  {s.label}

                </a>

              ))}

            </div>

          </div>



          {/* Form */}
          <form ref={rightRef} onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 1, transform: 'translateY(0)' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

              <div>

                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>NAME</label>

                <input name="name" type="text" required placeholder="Your name" value={form.name} onChange={handle} style={inputStyle}

                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}

                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />

              </div>

              <div>

                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>EMAIL</label>

                <input name="email" type="email" required placeholder="you@email.com" value={form.email} onChange={handle} style={inputStyle}

                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}

                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />

              </div>

            </div>

            <div>

              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>MESSAGE</label>

              <textarea name="message" required rows={5} placeholder="What's on your mind?" value={form.message} onChange={handle} style={{ ...inputStyle, resize: 'vertical' }}

                onFocus={e => e.target.style.borderColor = 'var(--accent)'}

                onBlur={e => e.target.style.borderColor = 'var(--border)'} />

            </div>

            <button type="submit" style={{ padding: '0.9rem 2rem', background: sent ? '#22c55e' : 'var(--accent)', color: 'white', border: 'none', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.05em', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s', boxShadow: sent ? '0 0 20px rgba(34,197,94,0.3)' : '0 0 20px rgba(124,106,247,0.2)', alignSelf: 'flex-start' }}>

              {sent ? '✓ Message Sent!' : 'Send message →'}

            </button>

          </form>

        </div>

      </div>



      <style>{`

        @media (max-width: 768px) {

          #contact .container > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }

        }

      `}</style>

    </section>

  )

}