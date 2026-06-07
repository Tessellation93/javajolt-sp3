import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import styles from "./Reflections.module.css"

const posts = [
  {
    slug: "week-1",
    week: "Week 1",
    date: "May 2026",
    topic: "JS and React I: One Component, One Page",
    text: "I started JavaJolt this week, a gamified platform for learning Java that grew out of how I learn best. The first goal was getting React itself to make sense: one component rendering one page. I set up the project with Vite and built my first components, learning how JSX lets me describe the UI as a function instead of manipulating the DOM by hand. The biggest shift for me was thinking in components rather than pages, and understanding that a component is really just a function that returns JSX. It felt strange at first after writing plain HTML and JavaScript, where I would select elements and change them manually. In React I describe what the UI should look like for a given state and let the framework update the DOM for me. Once that clicked, I could see how the whole app would fit together, and I stopped fighting the framework and started trusting it."
  },
  {
    slug: "week-2",
    week: "Week 2",
    date: "May 2026",
    topic: "React II: Many Components, One Page",
    text: "This week was about composition: many components working together on a single page. I broke my UI into reusable pieces like the NavBar, the Spinner and the ProgressBar, and learned how props pass data from a parent down into a child. Pulling repeated markup into its own component changed how I build, because instead of copying code I write a piece once and reuse it everywhere. The Spinner is a good example: I use the exact same component on the Courses page, the Dashboard and the course detail page, just by passing a different label prop. I also started using state with useState, and watching the UI update on its own when state changed was the moment React really made sense to me. A challenge here was understanding the difference between props and state. Props come from the outside and the component cannot change them, while state is owned by the component and drives re-renders when it changes. Getting that distinction clear made everything afterwards easier."
  },
  {
    slug: "week-3",
    week: "Week 3",
    date: "May 2026",
    topic: "React III: Routing, Security, and Deployment",
    text: "The hardest and most rewarding week. I added React Router so JavaJolt became a real multi page app, with protected routes that check for a token before showing a page, and sub-routing so a single route template handles every individual course through a URL parameter. I implemented JWT authentication: logging in returns a signed token that I store in localStorage and send with every request as a Bearer token. Then I deployed the whole thing myself with Docker, GitHub Actions and Caddy handling HTTPS automatically on my own domain. This was also the week of the hardest bug. My login and register calls kept failing in the browser even though they worked fine with curl, and it turned out the JWT before-filter was intercepting the CORS preflight OPTIONS request and returning 401, which killed the whole request before it started. The fix was a single guard that lets OPTIONS requests skip the auth filter, but finding it taught me how Same Origin Policy and CORS actually work. I also discovered my automatic deployment had quietly stopped working, so I learned to deploy manually by pulling and restarting the container. Getting the JWT flow, CORS and deployment working end to end taught me more about how the frontend and backend connect than anything else all semester. When it finally worked live, everything came together."
  },
  {
    slug: "week-4",
    week: "Week 4",
    date: "June 2026",
    topic: "React IV: CRUD, Fetching, and Styling",
    text: "This week I built the heart of the app: the Courses page, with full CRUD against my API using all four HTTP verbs. I centralised all my fetch calls into one request function that attaches the token and handles errors in one place, so I never repeat that logic and every call throws a clear error when the response is not ok. I used useEffect with a dependency array to load data on mount and to refetch whenever a filter changes, and made my form inputs controlled so React stays the single source of truth for every field. I added role based UI so admins can create, edit and delete courses while regular users only browse and read, which I implemented by reading the role from the token and conditionally rendering the admin controls. I want to be honest in my reflection that this role check currently lives only in the frontend, so it controls what the user sees but is not real security yet. The proper next step is to enforce the same check on the backend so the API itself rejects an unauthorised request. I styled everything with CSS Modules using flexbox for the forms and grid for the card layout, which keeps my class names scoped to each component. I am proud that this is a complete, working, deployed application that reflects how I actually like to learn."
  },
  {
    slug: "honest-notes",
    week: "Reflection",
    date: "June 2026",
    topic: "What I Would Do Differently",
    text: "I want to be transparent about where the project stands. The mockup on the Frontend Ideas page shows the vision for JavaJolt, with XP, badges, streaks and a Stack Overflow panel. That is the product I want to build, not what is finished today. The working app has courses, lessons, full CRUD, JWT authentication, role based UI, sub-routing and a lesson completion flow saved in localStorage, but the gamified features are still ideas. On deployment, I have shown that I can deploy: my backend portfolio is deployed and my JavaJolt API runs live on my own domain behind Caddy with HTTPS. What I did not finish in time was deploying the frontend application itself to the same polished standard, so it currently runs locally against the live API. I also wish I had written these weekly reflections as I went instead of gathering them at the end. Doing them live would have captured the small decisions more honestly, and it is the main thing I would change about how I worked. I am keeping this note here because being clear about what is done, what is planned, and what I would improve is part of reflecting properly."
  }
]

function Post({ post }) {
  return (
    <article className={styles.post}>
      <span className={styles.postDate}>{post.week} · {post.date}</span>
      <h1 className={styles.postTopic}>{post.topic}</h1>
      <p className={styles.postText}>{post.text}</p>
    </article>
  )
}

function Reflections() {
  return (
    <section className={styles.layout}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Reflections</h2>
        <nav className={styles.sidebarNav}>
          {posts.map((post) => (
            <NavLink
              key={post.slug}
              to={"/reflections/" + post.slug}
              className={({ isActive }) =>
                isActive ? styles.sidebarLink + " " + styles.sidebarActive : styles.sidebarLink
              }
            >
              {post.week}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className={styles.content}>
        <Routes>
          <Route index element={<Navigate to="week-1" replace />} />
          {posts.map((post) => (
            <Route key={post.slug} path={post.slug} element={<Post post={post} />} />
          ))}
        </Routes>
      </div>
    </section>
  )
}

export default Reflections
