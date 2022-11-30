import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { debounce } from 'lodash'

import { useRecoil } from 'hooks/state'
import { menuState } from 'states/sidebar'
import { LogoImage } from 'public/svgs'
import { cx } from 'styles'
import styles from './sidebar.module.scss'

const Sidebar = (): JSX.Element => {
  const router = useRouter()
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
    </aside>
  )
}

export default Sidebar
