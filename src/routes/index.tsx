import { Routes, Route } from 'react-router-dom'
import store from 'store'

import { useAppSelector, useMount } from 'hooks'
import { useRecoil } from 'hooks/state'
import { getTheme } from 'states/system'
import { currentUserState, initialSettingUser } from 'states/user'
import { menuState } from 'states/sidebar'

import ProtectedRoute from './_shared/ProtectedRoute'
import ItemDetailPage from './ItemDetailPage'
import Header from './_shared/Header'
import MainPage from './MainPage'
import Sidebar from './_shared/Sidebar'
import NotFound from './_shared/NotFound'
import Footer from './_shared/Footer'
import SignIn from './SignInPage'
import SignUp from './SignUpPage'
import LikesPage from './LikesPage'
import SearchPage from './SearchPage'
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
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='search' element={<SearchPage />} />

          <Route
            path='likes'
            element={
              <ProtectedRoute required user={user}>
                <LikesPage user={user} />
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
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
