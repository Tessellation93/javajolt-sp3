import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  const linkClass = ({ isActive }) =>
    isActive ? styles.link + ' ' + styles.active : styles.link

  return (
    <header className={styles.header}>
      <span className={styles.brand}>JavaJolt</span>
      <nav className={styles.nav}>
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/vision" className={linkClass}>Vision</NavLink>
        <NavLink to="/endpoints" className={linkClass}>Endpoints</NavLink>
        <NavLink to="/ideas" className={linkClass}>Frontend Ideas</NavLink>
      </nav>
    </header>
  )
}

export default NavBar
