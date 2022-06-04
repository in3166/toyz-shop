import { LogoImage, MenuBar } from 'assets/svgs'
import { NavLink } from 'react-router-dom'
import GNB from './GNB'
import SearchBar from './GNB/SearchBar'
import styles from './header.module.scss'

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.leftMenu}>
        <div className={styles.menuToggle}>
          <MenuBar />
        </div>
        <SearchBar />
      </div>
      <GNB />
    </div>
  )
}

export default Header
