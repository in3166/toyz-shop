import { Dispatch, MouseEvent, SetStateAction, useState } from 'react'

import { useOnClickOutside } from 'hooks'
import { cx } from 'styles'
import styles from './dropDown.module.scss'
import { DownArrow } from 'public/svgs'

interface IDropDownProps {
  currentValue: string
  selectList: string[]
  setCurrentValue: Dispatch<SetStateAction<string>>
  size: 'large' | 'medium' | 'small'
  handleChangedValue?: (language: string) => void
}

const DropDown = ({ currentValue, selectList, setCurrentValue, size, handleChangedValue }: IDropDownProps) => {
  const [selectIsOpen, setSelectIsOpen] = useState(false)

  const handleVisibleOptions = () => {
    setSelectIsOpen((prev) => !prev)
  }

  const handleListClick = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedValue = e.currentTarget.value
    setCurrentValue(selectedValue)
    setSelectIsOpen(false)
    if (currentValue !== selectedValue && handleChangedValue) handleChangedValue(selectedValue || 'korean')
  }

  const handleOnClose = () => {
    setSelectIsOpen(false)
  }

  const dropDownRef = useOnClickOutside(handleOnClose)

  return (
    <div className={cx(styles.select, styles[size], { [styles.selectIsOpen]: selectIsOpen })} ref={dropDownRef}>
      <button
        type='button'
        aria-label='open dropdown options'
        className={cx(styles.selected, styles[size])}
        onClick={handleVisibleOptions}
      >
        {currentValue}
        <DownArrow className={cx(styles.downArrowIcon, { [styles.selectMenuOpen]: selectIsOpen })} />
      </button>
      <ul className={styles.selectBox}>
        {selectIsOpen &&
          selectList.map((value) => {
            return (
              <li className={styles.option} key={value}>
                <button
                  type='button'
                  aria-label='click drop down menu'
                  value={value}
                  data-value={value}
                  onClick={handleListClick}
                >
                  {value}
                </button>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default DropDown
