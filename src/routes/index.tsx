import { useMount } from 'react-use'
import { Routes, Route, useLocation } from 'react-router-dom'
import styles from './routes.module.scss'

import { useAppSelector, useEffect } from 'hooks'
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
import { currentUserState } from 'states/user'
import ProtectedRoute from './_shared/ProtectedRoute'

const App = () => {
  const theme = useAppSelector(getTheme)
  const { pathname, search } = useLocation()
  const [, setCurrentUser] = useRecoil(currentUserState)

  useMount(() => {
    document.documentElement.setAttribute('color-theme', theme)
  })

  useEffect(() => {
    const user = store.get('currentUser')
    if (user && user?.id !== '') setCurrentUser(user)
  }, [pathname, search, setCurrentUser])

  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route
            path='signin'
            element={
              <ProtectedRoute>
                <SignIn />
              </ProtectedRoute>
            }
          />

          <Route
            path='signup'
            element={
              <ProtectedRoute>
                <SignUp />
              </ProtectedRoute>
            }
          />
          <Route path='items' element={<MainPage />}>
            <Route path=':id' element={<MainPage />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
