import { LogoImage, MenuBar } from 'assets/svgs'
import { useRecoil } from 'hooks/state'
import { NavLink } from 'react-router-dom'
import { menuState } from 'states/sidebar'
import GNB from './GNB'
import SearchBar from './GNB/SearchBar'
import styles from './header.module.scss'

const Header = (): JSX.Element => {
  const [, setVisibleSideBar] = useRecoil(menuState)
  const handleOpenMenu = () => {
    setVisibleSideBar((prev) => !prev)
  }

  return (
    <div className={styles.header}>
      <div className={styles.leftMenu}>
        <button type='button' onClick={handleOpenMenu} className={styles.menuToggle}>
          <MenuBar />
        </button>
        <SearchBar />
      </div>
      <GNB />
    </div>
  )
}

export default Header
