import { useCallback, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { debounce } from 'lodash'

import { LogoImage } from 'assets/svgs'
import { useRecoil } from 'hooks/state'
import { menuState } from 'states/sidebar'
import { cx } from 'styles'
import styles from './sidebar.module.scss'

const Sidebar = (): JSX.Element => {
  const [visibleSideBar, setVisibleSideBar] = useRecoil(menuState)

  const handleResize = debounce(() => {
    setVisibleSideBar(window.innerWidth > 768)
  }, 150)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <aside
      className={cx(styles.aside, { [styles.hideSidebar]: !visibleSideBar }, { [styles.openSidebar]: visibleSideBar })}
    >
      <div className={styles.logo}>
        <NavLink to='/' className={styles.logo}>
          <LogoImage />
          Toyz
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              MarketPlace
            </NavLink>
          </li>
          <li>
            <NavLink to='/likes' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
              Likes
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
