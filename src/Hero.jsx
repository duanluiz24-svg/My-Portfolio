import { useEffect, useRef, useState } from 'react'
import ProfilePicture from './ProfilePicture.png'

export default function Hero() {
  const canvasRef = useRef(null)
  const [typedText, setTypedText] = useState('')
  const fullText = "IT Graduate specializing in database management, front-end and back-end development, and technical support. Detail-oriented, data-driven, and committed to building clean digital solutions."

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId, t = 0

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const spacing = 40
      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const wave = Math.sin(t * 0.01 + c * 0.3 + r * 0.3) * 0.5 + 0.5
          ctx.beginPath()
          ctx.arc(c * spacing, r * spacing, 1 + wave * 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(124,106,247,${0.06 + wave * 0.12})`
          ctx.fill()
        }
      }
      t++
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 30)
    return () => clearInterval(typeInterval)
  }, [])

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)', top: '-100px', right: '-100px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(224,92,247,0.08) 0%, transparent 70%)', bottom: '-50px', left: '10%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', border: '1px solid var(--border)', borderRadius: '100px', marginBottom: '2.5rem', animation: 'fadeIn 0.6s ease forwards' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.6)', animation: 'blink 2s ease infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>Open to opportunities · Los Baños, Laguna, Philippines</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem', animation: 'fadeUp 0.7s ease 0.1s both' }}>
          
          <div style={{ flex: '0 0 auto', animation: 'fadeIn 0.8s ease 0.2s both' }}>
            <img 
              src={ProfilePicture} 
              alt="Profile" 
              style={{ 
                width: '350px', 
                height: '350px', 
                objectFit: 'cover', 
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(124,106,247,0.3)',
                border: '2px solid var(--border)'
              }} 
            />
          </div>

          <div style={{ flex: '1', minWidth: '0' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>Hi, I'm</h1>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '2rem' }}>
                <span className="gradient-text">Duan.</span>
              </h1>
            </div>

            <div style={{ animation: 'fadeUp 0.7s ease 0.25s both' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.8, marginBottom: '3rem' }}>
                {typedText}<span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 0.7s ease 0.4s both' }}>
              <a href="#projects" style={{ display: 'inline-block', padding: '0.9rem 2rem', background: 'var(--accent)', color: 'white', textDecoration: 'none', borderRadius: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.05em', fontWeight: 500, transition: 'all 0.2s', boxShadow: '0 0 30px rgba(124,106,247,0.3)' }}
                onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>
                View my work →
              </a>
              <a href="#contact" style={{ display: 'inline-block', padding: '0.9rem 2rem', border: '1px solid var(--border)', color: 'var(--text)', textDecoration: 'none', borderRadius: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.05em', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}>
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '-8rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', animation: 'fadeIn 1s ease 1s both' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>SCROLL</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--text-muted), transparent)', animation: 'float 2s ease infinite' }} />
        </div>
      </div>
    </section>
  )
}