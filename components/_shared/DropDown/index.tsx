import { Dispatch, MouseEvent, SetStateAction, useState } from 'react'

import { useOnClickOutside } from 'hooks'
import { DownArrow } from 'public/svgs'
import styles from './dropDown.module.scss'
import { cx } from 'styles'

interface IDropDownProps {
  title?: string
  currentValue: string
  selectList: string[]
  setCurrentValue: Dispatch<SetStateAction<string>>
  size?: 'large' | 'medium' | 'small'
  handleChangedLanguage?: (language: string) => void // TODO: useeffect로 빼기
  handleChangedFilter?: (param: string) => void // TODO: useeffect로 빼기
}

const DropDown = ({
  title,
  currentValue,
  selectList,
  setCurrentValue,
  size = 'small',
  handleChangedLanguage,
  handleChangedFilter,
}: IDropDownProps) => {
  const [selectIsOpen, setSelectIsOpen] = useState(false)

  const handleVisibleOptions = () => {
    setSelectIsOpen((prev) => !prev)
  }

  const handleListClick = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedValue = e.currentTarget.value
    setCurrentValue(selectedValue)
    setSelectIsOpen(false)

    if (handleChangedFilter) {
      handleChangedFilter(selectedValue)
    }

    if (currentValue !== selectedValue && handleChangedLanguage)
      handleChangedLanguage(selectList[Number(selectedValue)] || 'korean')
  }

  const handleOnClose = () => {
    setSelectIsOpen(false)
  }

  const dropDownRef = useOnClickOutside(handleOnClose)

  return (
    <div className={cx(styles.select, styles[size], { [styles.selectIsOpen]: selectIsOpen })} ref={dropDownRef}>
      {title && <sub>{title}</sub>}
      <button
        type='button'
        aria-label='open dropdown options'
        className={cx(styles.selected, styles[size])}
        onClick={handleVisibleOptions}
      >
        {selectList[Number(currentValue)]}
        <DownArrow className={cx(styles.downArrowIcon, { [styles.selectMenuOpen]: selectIsOpen })} />
      </button>
      <ul className={styles.selectBox}>
        {selectIsOpen &&
          selectList.map((value, index) => {
            return (
              <li className={styles.option} key={value}>
                <button
                  type='button'
                  aria-label='click drop down menu'
                  value={index}
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
