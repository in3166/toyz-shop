import { useMount } from 'react-use'
import { Routes, Route, useLocation } from 'react-router-dom'
import styles from './routes.module.scss'

import { useAppDispatch, useAppSelector, useEffect } from 'hooks'
import { getTheme } from 'states/system'
import Header from './_shared/Header'
import MainPage from './MainPage'
import Sidebar from './_shared/Sidebar'
import NotFound from './_shared/NotFound'
import Footer from './_shared/Footer'
import SignIn from './SignInPage'
import SignUp from './SignUpPage'
import store from 'store'
import { useRecoil } from 'hooks/state'
import { currentUserState, initialSettingUser } from 'states/user'
import ProtectedRoute from './_shared/ProtectedRoute'
import { useGetProducts } from 'hooks/useGetProducts'
import { menuState } from 'states/sidebar'
import { cx } from 'styles'
import { getUserDataApi } from 'services/user'
import ItemDetailPage from './ItemDetailPage'
import LikesPage from './ItemListPage/Likes'

const App = () => {
  const [visibleSideBar] = useRecoil(menuState)
  const theme = useAppSelector(getTheme)
  // const { pathname, search } = useLocation()
  const [user, setCurrentUser] = useRecoil(currentUserState)

  useMount(() => {
    document.documentElement.setAttribute('color-theme', theme)
    const storedUser = store.get('currentUser')
    if (storedUser && storedUser?.key !== '') setCurrentUser(storedUser)
    else setCurrentUser(initialSettingUser)
  })

  // useEffect(() => {}, [pathname, search, setCurrentUser])

  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={cx(styles.app, { [styles.full]: !visibleSideBar })}>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />

          <Route
            path='/likes'
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
