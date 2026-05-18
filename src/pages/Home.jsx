import { useEffect, useRef } from "react"
import styles from "./Home.module.css"

const CODE_SNIPPETS = [
  "class JavaJolt {", "@Override", "List<Course>", "void learn() {",
  "return xp;", "if (xp > 100)", "new Lesson();", "@GET('/api')",
  "HashMap<>", "try {", "} catch (e) {", "public static",
  "@Entity", "SELECT *", "JOIN users", "int level = 0;",
  "bcrypt.hash", "JWT.sign", "em.persist", "dao.findAll()"
]

function AnimatedBg() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener("resize", onResize)
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vy: 0.18 + Math.random() * 0.3,
      text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
      opacity: 0.06 + Math.random() * 0.12,
      size: 11 + Math.floor(Math.random() * 4)
    }))
    let raf
    function draw() {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        ctx.font = p.size + "px \"Share Tech Mono\", monospace"
        ctx.fillStyle = `rgba(232, 99, 10, ${p.opacity})`
        ctx.fillText(p.text, p.x, p.y)
        p.y += p.vy
        if (p.y > h + 30) { p.y = -20; p.x = Math.random() * w; p.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)] }
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize) }
  }, [])
  return <canvas ref={canvasRef} className={styles.canvas} />
}

function Home() {
  return (
    <div className={styles.page}>
      <AnimatedBg />
      <section className={styles.hero}>
        <img src="/logo.png" alt="JavaJolt" className={styles.logo} />
        <h1 className={styles.headline}>level up your<br /><span className={styles.accent}>java skills</span></h1>
        <p className={styles.sub}>A gamified coding learning platform: courses, lessons, exercises, progress tracking and Stack Overflow integration.</p>
        <div className={styles.links}>
          <a href="http://209.38.230.212:7070" target="_blank" rel="noreferrer" className={styles.btn}>live api</a>
          <a href="https://github.com/Tessellation93/JavaJolt" target="_blank" rel="noreferrer" className={styles.btnOutline}>source code</a>
        </div>
      </section>
    </div>
  )
}

export default Home
