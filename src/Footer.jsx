import { useScrollAnimation } from './hooks/useScrollAnimation'

export default function Footer() {
  const year = new Date().getFullYear()
  const [footerRef, isFooterVisible] = useScrollAnimation()

  return (
    <footer ref={footerRef} style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 0', background: 'var(--bg)', opacity: isFooterVisible ? 1 : 0, transform: isFooterVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>
          &lt;duan /&gt;
        </span>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          &copy; {year} Duan Luiz N. Navarro · Built with React + Tailwind
        </p>
        <a href="#hero" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.1em', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}