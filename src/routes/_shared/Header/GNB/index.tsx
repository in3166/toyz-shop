import store from 'store'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import styles from './GNB.module.scss'

import i18n from 'utils/locale'
import { useAppDispatch, useAppSelector, useEffect, useI18n, useState } from 'hooks'
import { getTheme, toggleTheme } from 'states/system'
import SearchBar from './SearchBar'
import DarkMode from './DarkMode'
import DropDown from 'components/DropDown'
import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'
import { ProfileIcon, SettingIcon } from 'assets/svgs'

const storedLang = store.get('language') || 'English'
const SELECT_LIST = ['English', 'Korean']

const GNB = () => {
  const t = useI18n()
  const [currentLanguage, setCurrentLanguage] = useState(storedLang)
  const [currentUser, , resetCurrentUser] = useRecoil(currentUserState)
  const handleClickLogout = () => {
    resetCurrentUser()
    store.remove('currentUser')
  }

  useEffect(() => {
    i18n.changeLanguage(currentLanguage === 'English' ? 'en' : 'ko')
    store.set('language', currentLanguage)
  }, [currentLanguage])

  return (
    <nav className={styles.gnb}>
      <ul className={styles.rightMenu}>
        {currentUser?.id === '' ? (
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
                {currentUser.role === 0 ? <ProfileIcon /> : <SettingIcon />}
              </button>
            </li>
          </>
        )}
        <li>
          <DarkMode />
        </li>
        <li>
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
