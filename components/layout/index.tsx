import { ReactNode } from 'react'

import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from './layout.module.scss'
import { cx } from 'styles'

interface ILayoutPropx {
  children: ReactNode
}

const Layout = ({ children }: ILayoutPropx) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={cx(styles.app)}>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
