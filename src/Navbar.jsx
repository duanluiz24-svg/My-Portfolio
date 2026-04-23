import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
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
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.1em', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            {link}
          </a>
        ))}
        <a href="mailto:duanluiz24@gmail.com" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '0.5rem 1.25rem', border: '1px solid var(--accent)', color: 'var(--accent)', textDecoration: 'none', borderRadius: '4px', transition: 'all 0.2s', letterSpacing: '0.08em' }}
          onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'white' }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}>
          Hire me
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}