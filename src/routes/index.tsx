import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import store from 'store'

import { useAppSelector, useMount } from 'hooks'
import { useRecoil } from 'hooks/state'
import { getTheme } from 'states/system'
import { currentUserState, initialSettingUser } from 'states/user'
import { menuState } from 'states/sidebar'

import ProtectedRoute from './_shared/ProtectedRoute'
import Header from './_shared/Header'
import ErrorFallback from './_shared/ErrorFallback'
import Sidebar from './_shared/Sidebar'
import NotFound from './_shared/NotFound'
import Footer from './_shared/Footer'
import MainPage from './MainPage'
import ItemDetailPage from './ItemDetailPage'
import SignIn from './SignInPage'
import SignUp from './SignUpPage'
import LikesPage from './LikesPage'
import SearchPage from './SearchPage'
import AdminSetting from './SettingPage/AdminSetting'
import UserSetting from './SettingPage/UserSetting'
import { cx } from 'styles'
import styles from './routes.module.scss'

const App = () => {
  const [visibleSideBar] = useRecoil(menuState)
  const theme = useAppSelector(getTheme)
  const [user, setCurrentUser] = useRecoil(currentUserState)

  useMount(() => {
    document.documentElement.setAttribute('color-theme', theme)
    const storedUser = store.get('currentUser')
    if (storedUser && storedUser?.key !== '') setCurrentUser(storedUser)
    else setCurrentUser(initialSettingUser)
  })

  if (!user) return null

  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={cx(styles.app, { [styles.full]: !visibleSideBar })}>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='search' element={<SearchPage />} />

            <Route
              path='likes'
              element={
                <ProtectedRoute required user={user}>
                  <LikesPage />
                </ProtectedRoute>
              }
            />

            <Route path='item'>
              <Route path=':id' element={<ItemDetailPage />} />
            </Route>

            <Route
              path='signin'
              element={
                <ProtectedRoute required={false} user={user}>
                  <SignIn />
                </ProtectedRoute>
              }
            />

            <Route
              path='signup'
              element={
                <ProtectedRoute required={false} user={user}>
                  <SignUp />
                </ProtectedRoute>
              }
            />

            <Route path='setting'>
              <Route
                path='admin'
                element={
                  <ProtectedRoute required user={user}>
                    <AdminSetting />
                  </ProtectedRoute>
                }
              />
              <Route
                path='user'
                element={
                  <ProtectedRoute required user={user}>
                    <UserSetting />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </div>
    </div>
  )
}

export default App
