const skillGroups = [
  {
    category: 'Programming & Dev',
    icon: '◈',
    skills: [
      { name: 'HTML / CSS / JavaScript', level: 85 },
      { name: 'PHP', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'Java', level: 60 },
    ],
  },
  {
    category: 'Database & Backend',
    icon: '◉',
    skills: [
      { name: 'MySQL / SQL', level: 80 },
      { name: 'MySQL Workbench', level: 80 },
      { name: 'XAMPP', level: 75 },
      { name: 'Relational DB Design', level: 75 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '◎',
    skills: [
      { name: 'Microsoft Office 365', level: 90 },
      { name: 'Google Workspace', level: 90 },
      { name: 'Git / VS Code', level: 75 },
      { name: 'VMware', level: 60 },
    ],
  },
]

function SkillBar({ name, level }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${level}%`, background: 'linear-gradient(90deg, var(--accent), var(--accent-2))', borderRadius: '2px', transition: 'width 1s ease' }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {skillGroups.map(group => (
            <div key={group.category} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '2rem', transition: 'border-color 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{group.icon}</span>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', letterSpacing: '0.02em' }}>{group.category}</h3>
              </div>
              {group.skills.map(skill => <SkillBar key={skill.name} {...skill} />)}
            </div>
          ))}
        </div>

        {/* Soft skills + other tools */}
        <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.12em', marginBottom: '1rem' }}>SOFT SKILLS</p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['Attention to Detail', 'Problem Escalation', 'User Communication', 'Data Integrity', 'Teamwork', 'Adaptability', 'Fast-Learner', 'Collaboration'].map(tag => (
                <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.73rem', padding: '0.3rem 0.9rem', border: '1px solid var(--border)', borderRadius: '100px', color: 'var(--text-muted)', letterSpacing: '0.03em' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.12em', marginBottom: '1rem' }}>OTHER TOOLS</p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['Cisco Packet Tracer', 'Apache NetBeans', 'Google Sheets', 'Canva', 'XML', 'TPL'].map(tag => (
                <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.73rem', padding: '0.3rem 0.9rem', border: '1px solid var(--border)', borderRadius: '100px', color: 'var(--text-muted)', letterSpacing: '0.03em' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}