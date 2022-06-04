import { useMount } from 'react-use'
import { Routes, Route, useLocation } from 'react-router-dom'
import styles from './routes.module.scss'

import { useAppSelector, useEffect, useGA } from 'hooks'
import { getTheme } from 'states/system'
import Header from './_shared/Header'
import MainPage from './MainPage'
import Sidebar from './_shared/Sidebar'
import NotFound from './_shared/NotFound'
import Footer from './_shared/Footer'
import SignIn from './SignInPage'
import SignUp from './SignUpPage'
import { getUserDataApi } from 'services/user'
import { useQuery } from 'react-query'
import store from 'store'
import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'
import ProtectedRoute from './_shared/ProtectedRoute'

const App = () => {
  const theme = useAppSelector(getTheme)
  const { initializeGA, gaPV } = useGA()
  const { pathname, search } = useLocation()
  const [, setCurrentUser] = useRecoil(currentUserState)

  useMount(() => {
    initializeGA()
    document.documentElement.setAttribute('color-theme', theme)
  })

  useEffect(() => {
    const user = store.get('currentUser')
    console.log('cuind user : ', user)
    if (user && user?.id !== '') setCurrentUser(user)
    gaPV(`${pathname}${search}`)
  }, [gaPV, pathname, search, setCurrentUser])

  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route element={<ProtectedRoute isLoggedIn={false} />}>
            <Route path='/signin' element={<SignIn />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/items' element={<MainPage />}>
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
