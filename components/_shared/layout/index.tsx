import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { useRecoil } from 'hooks/state'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import styles from './layout.module.scss'
import ErrorFallback from './ErrorFallback'
import { cx } from 'styles'

interface ILayoutPropx {
  children: ReactNode
}

const Layout = ({ children }: ILayoutPropx) => {
  // const [currentUser, setCurrentUser] = useRecoil(currentLanguage)
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
