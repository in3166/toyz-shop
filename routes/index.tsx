import { ErrorBoundary } from 'react-error-boundary'
import store from 'store'

import { useAppSelector, useMount } from 'hooks'
import { useRecoil } from 'hooks/state'
import { getTheme } from 'store/reducer/system'
import { currentUserState, initialSettingUser } from 'store/user'
import { menuState } from 'store/sidebar'

import ProtectedRoute from './_shared/ProtectedRoute'
import ErrorFallback from '../components/_shared/layout/ErrorFallback'
import Sidebar from '../components/_shared/layout/Sidebar'
import NotFound from '../pages/404'
import ItemDetailPage from '../pages/[itemId]'
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {/* <Routes>
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
              /> */}
          {/* </Route> */}
          {/* <Route path='*' element={<NotFound />} />
          </Routes> */}
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
