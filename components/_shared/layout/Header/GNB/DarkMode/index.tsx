import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getTheme, toggleTheme } from 'states/system'

import { MoonIcon, SunIcon } from 'public/svgs'
import { cx } from 'styles'
import styles from './darkMode.module.scss'

const DarkMode = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(getTheme)
  const [value, setValue] = useState(theme === 'dark')

  const clickToggleHandler = () => {
    setValue((prev) => !prev)
    dispatch(toggleTheme())
  }
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
