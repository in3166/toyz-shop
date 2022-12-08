import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

import { useI18n } from 'hooks'
import { ProfileIcon, SettingIcon } from 'public/svgs'
import styles from '../header.module.scss'

const UserMenu = () => {
  const t = useI18n()
  const router = useRouter()

  const { data: session } = useSession()

  const loggedOutMenu = !session && (
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

  const loggedInMenu = session && (
    <>
      <li>
        <Link href='/product'>{`${t('gnb.addItem')}`}</Link>
      </li>
      <li>
        <button
          type='button'
          onClick={() => signOut({ callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })}
          className={styles.logout}
        >
          {`${t('common:gnb.logout')}`}
        </button>
      </li>
      <li>
        <button type='button' className={styles.settingIcon}>
          {session?.user?.name !== 'admin' ? (
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
