import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import DropDown from 'components/_shared/DropDown'
import SearchBar from '../../_shared/SearchBar'
import UserMenu from './UserMenu'
import DarkMode from './DarkMode'
import styles from './header.module.scss'
import Link from 'next/link'
import { LogoImage } from 'public/svgs'

interface IHeaderProps {
  languageList: string[]
  isDark: boolean
}

const Header = ({ languageList, isDark }: IHeaderProps): JSX.Element => {
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = useState('0')

  const handleChangeLanguage = useCallback(
    (language: string) => {
      const selectedLanguage = language === 'English' || language === '영어' ? 'en' : 'ko'
      const { pathname, asPath, query } = router
      router.push({ pathname, query }, asPath, { locale: selectedLanguage })
    },
    [router]
  )

  useEffect(() => {
    setCurrentLanguage('0')
  }, [languageList])

  return (
    <div className={styles.header}>
      <div className={styles.leftMenu}>
        <Link href='/' aria-label='link to home page' className={styles.logo}>
          <LogoImage />
        </Link>
        <SearchBar />
      </div>
      <nav className={styles.rightMenu}>
        <ul>
          <UserMenu lang={currentLanguage} />
          <li>
            <DarkMode darkMode={isDark} />
          </li>
          <li className={styles.lang}>
            <DropDown
              currentValue={currentLanguage}
              selectList={languageList}
              setCurrentValue={setCurrentLanguage}
              size='small'
              handleChangedLanguage={handleChangeLanguage}
            />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
