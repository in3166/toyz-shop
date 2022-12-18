import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

import { useI18n } from 'hooks'
import { ProfileIcon, SettingIcon } from 'public/svgs'
import styles from '../header.module.scss'
import { cx } from 'styles'
import { BASE_URL } from 'src/fixtures'

const UserMenu = ({ lang }: { lang: string }) => {
  const t = useI18n()
  const router = useRouter()

  const { data: session } = useSession()
  const language = lang === '한국어' || lang === 'Korean' ? '' : '/en'
  const loggedOutMenu = !session && (
    <>
      <li>
        <Link href='/signin' className={cx(styles.userMenu, { [styles.isActive]: router.pathname === '/signin' })}>
          {`${t('common:gnb.signin')}`}
        </Link>
      </li>
      <li>
        <Link href='/signup' className={cx(styles.userMenu, { [styles.isActive]: router.pathname === '/signup' })}>
          {`${t('common:gnb.signup')}`}
        </Link>
      </li>
    </>
  )

  const loggedInMenu = session && (
    <>
      <li className={cx(styles.userMenu, { [styles.isActive]: router.pathname === '/product' })}>
        <Link href='/product'>
          <button type='button'>{`${t('gnb.addItem')}`}</button>
        </Link>
      </li>
      <li className={styles.userMenu}>
        <button type='button' onClick={() => signOut({ callbackUrl: `${BASE_URL}/${language}` })}>
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
