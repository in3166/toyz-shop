import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Sidebar from './Sidebar'
import Footer from './Footer'
import Header from './Header'
import ErrorFallback from './ErrorFallback'
import { cx } from 'styles'
import styles from './layout.module.scss'

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
        <main className={styles.main}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
