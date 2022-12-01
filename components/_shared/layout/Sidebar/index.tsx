import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { debounce } from 'lodash'

import { useCallback, useState } from 'hooks'
import { useRecoil } from 'hooks/state'
import { menuState } from 'store/sidebar'
import { LogoImage, MenuBar } from 'public/svgs'
import { cx } from 'styles'
import styles from './sidebar.module.scss'

const Sidebar = (): JSX.Element => {
  const router = useRouter()
  const [visibleSideBar, setVisibleSideBar] = useState(true)

  const handleResize = debounce(() => {
    setVisibleSideBar(window.innerWidth > 768)
  }, 150)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 766) {
      setVisibleSideBar(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  const handleOpenMenu = () => {
    setVisibleSideBar((prev) => !prev)
  }

  return (
    <aside
      className={cx(styles.aside, { [styles.hideSidebar]: !visibleSideBar }, { [styles.openSidebar]: visibleSideBar })}
    >
      <div className={styles.logo}>
        <Link href='/' className={styles.logo}>
          <LogoImage />
          Toyz
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/' className={router.pathname === '/' ? styles.isActive : ''}>
              MarketPlace
            </Link>
          </li>
          <li>
            <Link href='/likes' className={router.pathname === '/likes' ? styles.isActive : ''}>
              Likes
            </Link>
          </li>
        </ul>
      </nav>
      <button type='button' onClick={handleOpenMenu} className={styles.menuToggle}>
        <MenuBar />
      </button>
    </aside>
  )
}

export default Sidebar
