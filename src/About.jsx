export default function About() {
  const stats = [
    { value: '4', label: 'Years of\nStudy' },
    { value: '4+', label: 'Projects\nBuilt' },
    { value: '3', label: 'Certificates\nEarned' },
  ]

  return (
    <section id="about" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          {/* Text side */}
          <div>
            <p className="section-label">About me</p>
            <h2 className="section-title">
              Detail-oriented<br />
              <span className="gradient-text">IT Graduate</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
              I'm Duan Luiz N. Navarro, an Information Technology graduate from Trace College with hands-on experience in
              data entry, database management, and Excel-based reporting. During my internship at DENR-ERDB,
              I developed digital forms and maintained a relational database using MySQL Workbench.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
              Proficient in SQL, Microsoft Excel, Google Workspace, and front-end / back-end development. Known for strong
              attention to detail, data integrity, and effective collaboration with both technical and non-technical users.
            </p>
          </div>

          {/* Right side */}
          <div>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '2.5rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-warm))' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 800, color: 'white', flexShrink: 0 }}>
                  D
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Duan Luiz N. Navarro</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', marginTop: '2px' }}>BS Information Technology · 2022–2026</div>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 2 }}>
                <div>📍 Los Baños, Laguna, Philippines</div>
                <div>🎓 Trace College — BSIT Graduate</div>
                <div>🏢 Intern @ DENR-ERDB (2025)</div>
                <div>📧 duanluiz24@gmail.com</div>
                <div>🔗 <a href="https://www.linkedin.com/in/duan-navarro-a7708a2a1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>linkedin.com/in/duan-navarro</a></div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {stats.map(({ value, label }) => (
                <div key={value} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem 1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.4rem' }} className="gradient-text">{value}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', whiteSpace: 'pre-line', lineHeight: 1.4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}