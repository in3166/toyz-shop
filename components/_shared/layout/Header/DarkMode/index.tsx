import { useEffect, useState } from 'react'
import store from 'store'

import { MoonIcon, SunIcon } from 'public/svgs'
import { cx } from 'styles'
import styles from './darkMode.module.scss'

const DarkMode = ({ darkMode }: { darkMode: boolean }): JSX.Element => {
  const [value, setValue] = useState(darkMode)

  const clickToggleHandler = () => {
    setValue((prev) => !prev)
    const newColorSet = !value ? 'dark' : 'light'
    store.set('toyz.theme', newColorSet)
    document.documentElement.setAttribute('color-theme', newColorSet)
  }

  useEffect(() => {
    setValue(darkMode)
    document.documentElement.setAttribute('color-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <label className={styles.switch}>
      <input type='checkbox' checked={value} id='toggleSwitch' onChange={clickToggleHandler} />
      <span className={styles.slider} />
      <label className={cx(styles.textLeft, styles.text, { [styles.textActive]: !value })} htmlFor='toggleSwitch'>
        <SunIcon />
      </label>
      <label className={cx(styles.textRight, styles.text, { [styles.textActive]: value })} htmlFor='toggleSwitch'>
        <MoonIcon />
      </label>
    </label>
  )
}

export default DarkMode
