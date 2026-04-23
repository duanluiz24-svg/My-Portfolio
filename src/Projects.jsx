const projects = [
  {
    title: 'Web-Based Unified Platform for Environmental and Civic Engagement',
    type: 'Thesis (2025)',
    description: 'Designed and developed a web-based platform to streamline environmental and civic reporting processes. Built the full front-end interface and integrated back-end data handling.',
    tags: ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL'],
    accent: '#7c6af7',
    icon: '🌿',
    link: '#',
    repo: '#',
  },
  {
    title: 'ERDB Forms Management System',
    type: 'On-the-Job Training (2025)',
    description: 'Built and structured the front-end interface including layout design, buttons, and navigation. Developed 8 digital forms and managed a relational database using MySQL Workbench at DENR-ERDB.',
    tags: ['MySQL Workbench', 'Front-End Dev', 'Database Design', 'XAMPP'],
    accent: '#e05cf7',
    icon: '🗂️',
    link: '#',
    repo: '#',
  },
  {
    title: 'Arduino Automated Smart Fan',
    type: 'Project (2024)',
    description: 'Assembled and configured hardware components including sensors and wiring. Programmed the microcontroller to automate fan speed based on temperature sensor readings.',
    tags: ['Arduino', 'C++', 'Hardware', 'IoT'],
    accent: '#f7955c',
    icon: '🌀',
    link: '#',
    repo: '#',
  },
  {
    title: 'Payroll Calculator & User\'s Guide',
    type: 'Work Immersion (2022)',
    description: 'Designed a user-friendly payroll calculator interface for accurate data input. Created a comprehensive user guide to assist operators in using the system correctly.',
    tags: ['Excel', 'UI Design', 'Documentation'],
    accent: '#4ade80',
    icon: '🧮',
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map(project => (
            <article key={project.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', transition: 'all 0.25s ease', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = project.accent; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 0 8px rgba(124,106,247,0.3))' }}>{project.icon}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: '4px', padding: '0.2rem 0.6rem', letterSpacing: '0.04em' }}>{project.type}</span>
              </div>

              <h3 style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.3 }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, flex: 1 }}>{project.description}</p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', padding: '0.2rem 0.7rem', borderRadius: '100px', background: `${project.accent}18`, border: `1px solid ${project.accent}40`, color: project.accent, letterSpacing: '0.04em' }}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Work experience callout */}
        <div style={{ marginTop: '3rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '220px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>WORK EXPERIENCE</p>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>Internship — DENR-ERDB</h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>August – December 2025</p>
          </div>
          <ul style={{ flex: 2, minWidth: '260px', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              'Developed and implemented 8 digital forms for the ERDB Forms Management System',
              'Designed and managed a relational database using MySQL Workbench',
              'Provided first-level technical support for staff on system and network concerns',
              'Managed user access, provisioning accounts, passwords, and firewall permissions',
            ].map(item => (
              <li key={item} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', gap: '0.6rem', lineHeight: 1.5 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}