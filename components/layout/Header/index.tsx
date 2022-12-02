import DropDown from 'components/_shared/DropDown'
import SearchBar from './SearchBar'
import UserMenu from './UserMenu'
import DarkMode from './DarkMode'

import styles from './header.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const SELECT_LIST = ['English', 'Korean']

interface IHeaderProps {
  lang: string
  isDark: boolean
}

const Header = ({ lang, isDark }: IHeaderProps): JSX.Element => {
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = useState(lang === 'ko' ? 'Korean' : 'English')

  useEffect(() => {
    console.log('cl', lang)
    setCurrentLanguage(lang === 'ko' ? 'Korean' : 'English')
  }, [lang])

  const handleChangeLanguage = useCallback(
    (language: string) => {
      router.replace(router.pathname, router.pathname, { locale: language === 'Korean' ? 'ko' : 'en' })
    },
    [router]
  )

  // useEffect(() => {
  //   handleChangeLanguage(currentLanguage)
  // }, [currentLanguage, handleChangeLanguage])

  return (
    <div className={styles.header}>
      <div className={styles.leftMenu}>
        <SearchBar />
      </div>
      <nav className={styles.rightMenu}>
        <ul>
          <UserMenu />
          <li>
            <DarkMode darkMode={isDark} />
          </li>
          <li className={styles.lang}>
            <DropDown
              currentValue={currentLanguage}
              selectList={SELECT_LIST}
              setCurrentValue={setCurrentLanguage}
              size='small'
              handleChangedValue={handleChangeLanguage}
            />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
