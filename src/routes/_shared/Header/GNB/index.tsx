import store from 'store'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'

import { useEffect, useI18n, useState } from 'hooks'
import { useRecoil } from 'hooks/state'
import { currentUserState, initialSettingUser } from 'states/user'
import i18n from 'utils/locale'

import DropDown from 'components/DropDown'
import DarkMode from './DarkMode'
import { ProfileIcon, SettingIcon } from 'assets/svgs'
import styles from './GNB.module.scss'

const storedLang = store.get('language') || 'English'
const SELECT_LIST = ['English', 'Korean']

const GNB = () => {
  const t = useI18n()
  const [currentLanguage, setCurrentLanguage] = useState(storedLang)
  const [currentUser, setCurrentUser] = useRecoil(currentUserState)

  const handleClickLogout = () => {
    setCurrentUser(initialSettingUser)
    store.remove('currentUser')
  }

  useEffect(() => {
    i18n.changeLanguage(currentLanguage === 'English' ? 'en' : 'ko')
    store.set('language', currentLanguage)
  }, [currentLanguage])

  // TODO: ?
  const rightMenu =
    currentUser?.data?.id === '' ? (
      <>
        <li>
          <NavLink to='/signin' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            {`${t('front:gnb.signin')}`}
          </NavLink>
        </li>
        <li>
          <NavLink to='/signup' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            {`${t('front:gnb.signup')}`}
          </NavLink>
        </li>
      </>
    ) : (
      <>
        <li>
          <button type='button' onClick={handleClickLogout} className={styles.logout}>
            {`${t('front:gnb.logout')}`}
          </button>
        </li>
        <li>
          <button type='button' className={styles.settingIcon}>
            {currentUser?.data?.role === 0 ? (
              <NavLink to='/setting/user'>
                <ProfileIcon />
              </NavLink>
            ) : (
              <NavLink to='/setting/admin'>
                <SettingIcon />
              </NavLink>
            )}
          </button>
        </li>
      </>
    )

  return (
    <nav className={styles.gnb}>
      <ul className={styles.rightMenu}>
        {rightMenu}
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
