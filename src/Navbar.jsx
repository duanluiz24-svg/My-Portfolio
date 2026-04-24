import { useState, useEffect } from 'react'
import linkedin from './linkedin.png'
import jobstreet from './jobstreet.png'
import indeed from './indeed.png'
import glassdoor from './glassdoor.png'
import gmail from './gmail.png'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact']
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach(section => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.25rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}>
        <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.05em' }}>
          &lt;duan /&gt;
        </a>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(link => {
            const isActive = activeSection === link.toLowerCase()
            return (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.8rem', 
                  color: isActive ? 'var(--accent)' : 'var(--text-muted)', 
                  textDecoration: 'none', 
                  letterSpacing: '0.1em', 
                  transition: 'color 0.2s',
                  fontWeight: isActive ? 500 : 400,
                  position: 'relative'
                }}
                onMouseEnter={e => e.target.style.color = isActive ? 'var(--accent)' : 'var(--text)'}
                onMouseLeave={e => e.target.style.color = isActive ? 'var(--accent)' : 'var(--text-muted)'}
              >
                {isActive && <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: 'var(--accent)', borderRadius: '1px' }} />}
                {link}
              </a>
            )
          })}
          <button 
            onClick={toggleTheme}
            style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '1.2rem', 
              padding: '0.5rem', 
              border: '1px solid var(--border)', 
              background: 'transparent', 
              borderRadius: '4px', 
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setShowModal(true)} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.5rem 1.25rem', border: '1px solid var(--accent)', color: 'var(--accent)', background: 'transparent', borderRadius: '4px', transition: 'all 0.2s', letterSpacing: '0.08em', cursor: 'pointer' }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'white' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}>
            Hire me
          </button>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ 
            display: 'none', 
            flexDirection: 'column', 
            gap: '5px', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            padding: '5px'
          }}
        >
          <span style={{ 
            width: '25px', 
            height: '2px', 
            background: 'var(--text)', 
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
          }} />
          <span style={{ 
            width: '25px', 
            height: '2px', 
            background: 'var(--text)', 
            transition: 'all 0.3s ease',
            opacity: mobileMenuOpen ? 0 : 1
          }} />
          <span style={{ 
            width: '25px', 
            height: '2px', 
            background: 'var(--text)', 
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
          }} />
        </button>

        {mobileMenuOpen && (
          <div 
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              background: 'var(--bg)',
              borderBottom: '1px solid var(--border)',
              padding: '1rem 2rem',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              animation: 'slideDown 0.3s ease'
            }}
          >
            {links.map(link => {
              const isActive = activeSection === link.toLowerCase()
              return (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.9rem', 
                    color: isActive ? 'var(--accent)' : 'var(--text-muted)', 
                    textDecoration: 'none', 
                    letterSpacing: '0.1em', 
                    padding: '0.5rem 0',
                    transition: 'color 0.2s',
                    fontWeight: isActive ? 500 : 400
                  }}
                >
                  {link}
                </a>
              )
            })}
            <button 
              onClick={toggleTheme}
              style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.9rem', 
                padding: '0.5rem 0',
                border: '1px solid var(--border)', 
                background: 'transparent', 
                borderRadius: '4px', 
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'left'
              }}
              onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
            >
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <button 
              onClick={() => {
                setShowModal(true)
                setMobileMenuOpen(false)
              }}
              style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.8rem', 
                padding: '0.6rem 1.5rem', 
                border: '1px solid var(--accent)', 
                color: 'var(--accent)', 
                background: 'transparent', 
                borderRadius: '4px', 
                transition: 'all 0.2s', 
                letterSpacing: '0.08em', 
                cursor: 'pointer',
                alignSelf: 'flex-start'
              }}
            >
              Hire me
            </button>
          </div>
        )}

        <style>{`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 640px) { 
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: flex !important; }
          }
        `}</style>
      </nav>

      {showModal && (
        <div 
          onClick={() => setShowModal(false)}
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.7)', 
            backdropFilter: 'blur(4px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2rem',
              width: '400px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              position: 'relative'
            }}
          >
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              ×
            </button>
            
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.5rem', 
              marginBottom: '0.5rem',
              color: 'var(--text)'
            }}>
              Hire Me
            </h3>
            <p style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.85rem', 
              color: 'var(--text-muted)', 
              marginBottom: '1.5rem',
              lineHeight: 1.6
            }}>
              Connect with me through these platforms:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href="https://www.linkedin.com/in/duan-navarro-a7708a2a1/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => { 
                  e.target.style.borderColor = 'var(--accent)'; 
                  e.target.style.color = 'var(--accent)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => { 
                  e.target.style.borderColor = 'var(--border)'; 
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <img src={linkedin} alt="LinkedIn" style={{ width: '28px', height: '28px' }} />
                LinkedIn
              </a>

              <a 
                href="https://ph.jobstreet.com/profiles/duan-navarro-v3VSRZp1kk"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => { 
                  e.target.style.borderColor = 'var(--accent)'; 
                  e.target.style.color = 'var(--accent)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => { 
                  e.target.style.borderColor = 'var(--border)'; 
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <img src={jobstreet} alt="JobStreet" style={{ width: '28px', height: '28px' }} />
                JobStreet
              </a>

              <a 
                href="https://www.indeed.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => { 
                  e.target.style.borderColor = 'var(--accent)'; 
                  e.target.style.color = 'var(--accent)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => { 
                  e.target.style.borderColor = 'var(--border)'; 
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <img src={indeed} alt="Indeed" style={{ width: '28px', height: '28px' }} />
                Indeed - DUAN NAVARRO
              </a>

              <a 
                href="https://www.glassdoor.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => { 
                  e.target.style.borderColor = 'var(--accent)'; 
                  e.target.style.color = 'var(--accent)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => { 
                  e.target.style.borderColor = 'var(--border)'; 
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <img src={glassdoor} alt="Glassdoor" style={{ width: '28px', height: '28px' }} />
                Glassdoor - DUAN NAVARRO
              </a>

              <a 
                href="mailto:duanluiz24@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => { 
                  e.target.style.borderColor = 'var(--accent)'; 
                  e.target.style.color = 'var(--accent)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => { 
                  e.target.style.borderColor = 'var(--border)'; 
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <img src={gmail} alt="Gmail" style={{ width: '28px', height: 'auto', objectFit: 'contain' }} />
                duanluiz24@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}