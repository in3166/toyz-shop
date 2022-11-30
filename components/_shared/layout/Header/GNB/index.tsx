import Link from 'next/link'
import store from 'store'

import { useEffect, useI18n, useState } from 'hooks'
import { useRecoil } from 'hooks/state'
import { currentUserState, initialSettingUser } from 'states/user'
// import i18n from 'public/locales'

import DropDown from 'components/_shared/DropDown'
import DarkMode from './DarkMode'
import { ProfileIcon, SettingIcon } from 'public/svgs'
import styles from './GNB.module.scss'
import { useRouter } from 'next/router'

const storedLang = store.get('language') || 'English'
const SELECT_LIST = ['English', 'Korean']

const GNB = () => {
  const t = useI18n()
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = useState(storedLang)
  const [currentUser, setCurrentUser] = useRecoil(currentUserState)

  const handleClickLogout = () => {
    setCurrentUser(initialSettingUser)
    store.remove('currentUser')
  }

  useEffect(() => {
    const lang = currentLanguage === 'English' ? 'en' : 'ko'
    router.push(router.pathname, router.asPath, { locale: lang })
    store.set('language', currentLanguage)
  }, [currentLanguage])

  const loggedOutMenu = currentUser?.data?.id === '' && (
    <>
      <li>
        <Link href='/signin' className={router.pathname === '/signin' ? styles.isActive : ''}>
          {`${t('common:gnb.signin')}`}
        </Link>
      </li>
      <li>
        <Link href='/signup' className={router.pathname === '/signup' ? styles.isActive : ''}>
          {`${t('common:gnb.signup')}`}
        </Link>
      </li>
    </>
  )

  const loggedInMenu = currentUser?.data?.id !== '' && (
    <>
      <li>
        <button type='button' onClick={handleClickLogout} className={styles.logout}>
          {`${t('common:gnb.logout')}`}
        </button>
      </li>
      <li>
        <button type='button' className={styles.settingIcon}>
          {currentUser?.data?.role === 0 ? (
            <Link href='/setting/user'>
              <ProfileIcon />
            </Link>
          ) : (
            <Link href='/setting/admin'>
              <SettingIcon />
            </Link>
          )}
        </button>
      </li>
    </>
  )

  return (
    <nav className={styles.gnb}>
      <ul className={styles.rightMenu}>
        {loggedOutMenu}
        {loggedInMenu}
        <li>
          <DarkMode />
        </li>
        <li className={styles.lang}>
          <DropDown
            currentLanguage={currentLanguage}
            selectList={SELECT_LIST}
            setCurrentSelect={setCurrentLanguage}
            size='small'
          />
        </li>
      </ul>
    </nav>
  )
}

export default GNB
