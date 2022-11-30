import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import styles from './layout.module.scss'
import ErrorFallback from './ErrorFallback'
import { useRecoil } from 'hooks/state'
import { menuState } from 'states/sidebar'
import { cx } from 'styles'

interface ILayoutPropx {
  children: ReactNode
}

const Layout = ({ children }: ILayoutPropx) => {
  const [visibleSideBar] = useRecoil(menuState)
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={cx(styles.app, { [styles.full]: !visibleSideBar })}>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <main className={styles.main}>{children}</main>
        </ErrorBoundary>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
