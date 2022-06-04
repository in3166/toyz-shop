import { LogoImage } from 'assets/svgs'
import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.scss'

const Sidebar = (): JSX.Element => {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <NavLink to='/' className={styles.logo}>
          <LogoImage /> Toyz
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>Market Place</li>
          <li>Popular</li>
          <li>Likes</li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
