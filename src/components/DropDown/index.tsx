import store from 'store'
import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react'

import { DownArrow } from 'assets/svgs'
import { cx } from 'styles'
import styles from './dropDown.module.scss'
import { useOnClickOutside } from 'hooks'

interface IDropDownProps {
  currentLanguage: string
  selectList: string[]
  setCurrentSelect: Dispatch<SetStateAction<string>>
  size: 'large' | 'medium' | 'small'
}

const DropDown = ({ currentLanguage, selectList, setCurrentSelect, size }: IDropDownProps) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false)
  const [isCategorySelect, setIsCategorySelect] = useState(false)
  const [categoryColor, setCategoryColor] = useState('')

  const handleVisibleOptions = () => {
    setIsOpenSelect((prev) => !prev)
  }

  const handleListClick = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedValue = e.currentTarget.dataset.value
    setCurrentSelect(selectedValue ?? selectList[0])
    setIsOpenSelect(false)
  }

  const handleOnClose = () => {
    setIsOpenSelect(false)
  }
  const dropDownRef = useOnClickOutside(handleOnClose)

  // useEffect(() => {
  //   if (selectName === 'firstCategory' || selectName === 'secondCategory') {
  //     setIsCategorySelect(true)
  //     if (selectName === 'firstCategory') {
  //       setCategoryColor('#4fadf7')
  //     }
  //     if (selectName === 'secondCategory') {
  //       setCategoryColor('#85da47')
  //     }
  //   }
  // }, [selectName])

  return (
    <div className={cx(styles.select, styles[size], { [styles.isOpenSelect]: isOpenSelect })} ref={dropDownRef}>
      <button type='button' className={cx(styles.selected, styles[size])} onClick={handleVisibleOptions}>
        {/* {isCategorySelect && (
          <div className={styles.categoryIndicator} style={{ backgroundColor: `${categoryColor}` }} />
        )} */}
        {currentLanguage}
        <DownArrow className={cx(styles.downArrowIcon, { [styles.selectMenuOpen]: isOpenSelect })} />
      </button>
      <ul>
        {isOpenSelect &&
          selectList.map((value) => {
            return (
              <li className={styles.option} key={value}>
                <button type='button' data-value={value} onClick={handleListClick}>
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
