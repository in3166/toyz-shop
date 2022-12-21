import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { debounce } from 'lodash'

import { useOnClickOutside, useState } from 'hooks'
import { LogoImage, MenuBar } from 'public/svgs'
import { cx } from 'styles'
import styles from './sidebar.module.scss'

const Sidebar = (): JSX.Element => {
  const router = useRouter()
  const [visibleSideBar, setVisibleSideBar] = useState(true)

  const handleOpenMenu = () => {
    setVisibleSideBar((prev) => !prev)
  }

  const handleResize = debounce(() => {
    setVisibleSideBar(window.innerWidth > 768)
  }, 150)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 766) {
      setVisibleSideBar(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  const handleClickOutsideSidebar = () => {
    if (visibleSideBar && window.innerWidth < 600) setVisibleSideBar(false)
  }
  const asideRef = useOnClickOutside(handleClickOutsideSidebar)

  return (
    <aside
      ref={asideRef}
      className={cx(styles.aside, { [styles.hideSidebar]: !visibleSideBar }, { [styles.openSidebar]: visibleSideBar })}
    >
      <div className={styles.logo}>
        <Link href='/' aria-label='link to home page' className={styles.logo}>
          <LogoImage />
          Toyz
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/' aria-label='link to home page' className={router.pathname === '/' ? styles.isActive : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/marketplace'
              aria-label='link to marketplace page'
              className={router.pathname === '/marketplace' ? styles.isActive : ''}
            >
              MarketPlace
            </Link>
          </li>
          <li>
            <Link
              href='/likes'
              aria-label='link to likes page'
              className={router.pathname === '/likes' ? styles.isActive : ''}
            >
              Likes
            </Link>
          </li>
          <li>
            <Link
              href='/cart'
              aria-label='link to cart page'
              className={router.pathname === '/cart' ? styles.isActive : ''}
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <button type='button' onClick={handleOpenMenu} className={styles.menuToggle} aria-label='SideBar Toggle'>
        <MenuBar />
      </button>
    </aside>
  )
}

export default Sidebar
