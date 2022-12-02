import React, { useCallback } from 'react'
import Link from 'next/link'
import store from 'store'
import { useRouter } from 'next/router'
import { useRecoil } from 'hooks/state'
import { useI18n } from 'hooks'
import { currentUserState, initialSettingUser } from 'stores/user'
import { ProfileIcon, SettingIcon } from 'public/svgs'
import styles from '../header.module.scss'

const UserMenu = () => {
  const t = useI18n()
  const router = useRouter()

  const [currentUser, setCurrentUser] = useRecoil(currentUserState)

  const handleClickLogout = useCallback(() => {
    setCurrentUser(initialSettingUser)
    store.remove('currentUser')
  }, [setCurrentUser])

  const isLoggedIn = currentUser?.id !== ''

  const loggedOutMenu = isLoggedIn && (
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

  const loggedInMenu = !isLoggedIn && (
    <>
      <li>
        <button type='button' onClick={handleClickLogout} className={styles.logout}>
          {`${t('common:gnb.logout')}`}
        </button>
      </li>
      <li>
        <button type='button' className={styles.settingIcon}>
          {currentUser?.role === 0 ? (
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
    <>
      {loggedOutMenu}
      {loggedInMenu}
    </>
  )
}

export default UserMenu
