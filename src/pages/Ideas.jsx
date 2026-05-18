import styles from "./Ideas.module.css"

function Mockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.mockupBar}>
        <span className={styles.mockupDot} style={{background:"#ff5f57"}} />
        <span className={styles.mockupDot} style={{background:"#ffbd2e"}} />
        <span className={styles.mockupDot} style={{background:"#28ca41"}} />
        <span className={styles.mockupUrl}>javajolt.app</span>
      </div>
      <div className={styles.mockupBody}>
        <div className={styles.mockupSidebar}>
          <div className={styles.mockupLogo}>⚡ JavaJolt</div>
          <div className={styles.mockupNav}>
            <span className={styles.navItem + " " + styles.navActive}>🏠 dashboard</span>
            <span className={styles.navItem}>📚 courses</span>
            <span className={styles.navItem}>⚡ exercises</span>
            <span className={styles.navItem}>📈 progress</span>
            <span className={styles.navItem}>🔗 stack overflow</span>
          </div>
          <div className={styles.mockupUser}>👤 tess · lv 12</div>
        </div>
        <div className={styles.mockupMain}>
          <div className={styles.mockupXpBar}>
            <span className={styles.xpLabel}>XP</span>
            <div className={styles.xpTrack}><div className={styles.xpFill} /></div>
            <span className={styles.xpVal}>2400 / 3000</span>
          </div>
          <div className={styles.mockupCards}>
            <div className={styles.mockupCard}>
              <div className={styles.cardTop}><span className={styles.cardBadge}>IN PROGRESS</span></div>
              <div className={styles.cardTitle}>Java Basics</div>
              <div className={styles.cardProgress}><div className={styles.cardFill} style={{width:"70%"}} /></div>
              <div className={styles.cardMeta}>7 / 10 lessons</div>
            </div>
            <div className={styles.mockupCard}>
              <div className={styles.cardTop}><span className={styles.cardBadgeNew}>NEW</span></div>
              <div className={styles.cardTitle}>REST APIs</div>
              <div className={styles.cardProgress}><div className={styles.cardFill} style={{width:"0%"}} /></div>
              <div className={styles.cardMeta}>0 / 8 lessons</div>
            </div>
            <div className={styles.mockupCard}>
              <div className={styles.cardTop}><span className={styles.cardBadgeDone}>DONE ✓</span></div>
              <div className={styles.cardTitle}>OOP Principles</div>
              <div className={styles.cardProgress}><div className={styles.cardFill} style={{width:"100%"}} /></div>
              <div className={styles.cardMeta}>12 / 12 lessons</div>
            </div>
          </div>
          <div className={styles.mockupSO}>
            <span className={styles.soLabel}>🔗 stuck? top java questions</span>
            <div className={styles.soItem}>How does HashMap work internally?</div>
            <div className={styles.soItem}>What is the difference between == and .equals()?</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Ideas() {
  return (
    <section className={styles.ideas}>
      <h1>Frontend Ideas</h1>
      <p>A loose brainstorm for the React app that will consume this API:</p>
      <ul>
        <li>Course catalog with filtering by difficulty and topic.</li>
        <li>Lesson view with its exercises listed underneath.</li>
        <li>Personal dashboard showing progress and completion streaks.</li>
        <li>Gamified XP and badges as exercises are marked complete.</li>
        <li>Inline "Stuck?" panel pulling Stack Overflow questions per exercise.</li>
        <li>JWT login with protected routes and an admin area for managing courses.</li>
      </ul>
      <Mockup />
      <p className={styles.muted}>
        Nothing here is final. It is a starting point to refine during SP-3.
      </p>
    </section>
  )
}

export default Ideas
