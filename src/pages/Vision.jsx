import styles from './Vision.module.css'

function Vision() {
  return (
    <section className={styles.vision}>
      <h1>Vision</h1>
      <p>
        JavaJolt exists to make learning to code feel less like reading
        documentation and more like playing a game. Many beginners stall
        because progress is invisible and feedback is slow.
      </p>
      <p>
        The API turns a curriculum into structured <strong>courses</strong>,
        <strong> lessons</strong>, and <strong>exercises</strong>, and tracks
        each learner's <strong>progress</strong> as they complete them. When a
        learner is stuck, JavaJolt pulls relevant questions from Stack Overflow
        so help is one request away instead of a context switch.
      </p>
      <p>
        It is a Java backend built with Javalin, Hibernate, and PostgreSQL,
        secured with JWT and role-based access, and deployed with a full
        CI/CD pipeline. This frontend is the window onto that API.
      </p>
    </section>
  )
}

export default Vision
