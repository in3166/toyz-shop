import { ReactNode } from 'react'

import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from './layout.module.scss'
import { cx } from 'styles'
import Header from './Header'

interface ILayoutPropx {
  children: ReactNode
  languageList: string[]
  isDark: boolean
}

const Layout = ({ children, languageList, isDark }: ILayoutPropx) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={cx(styles.app)}>
        <Header languageList={languageList} isDark={isDark} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
