import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import DropDown from 'components/_shared/DropDown'
import SearchBar from './SearchBar'
import UserMenu from './UserMenu'
import DarkMode from './DarkMode'

import styles from './header.module.scss'

interface IHeaderProps {
  languageList: string[]
  isDark: boolean
}

const Header = ({ languageList, isDark }: IHeaderProps): JSX.Element => {
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = useState(languageList[0])

  const handleChangeLanguage = useCallback(
    (language: string) => {
      const selectedLanguage = language === 'English' || language === '영어' ? 'en' : 'ko'
      const path = router.query.email ? `${router.pathname}?email=${router.query.email}` : router.pathname
      router.replace(path, path, {
        locale: selectedLanguage,
      })
    },
    [router]
  )

  useEffect(() => {
    setCurrentLanguage(languageList[0])
  }, [languageList])

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
              selectList={languageList}
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
