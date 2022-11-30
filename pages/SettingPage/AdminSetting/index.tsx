import { useState } from 'react'

import TradeChart from './TabMenu/TradeChart'
import UserList from './TabMenu/UserList'
import { cx } from 'styles'
import styles from './adminSetting.module.scss'
import { useI18n } from 'hooks'

const AdminSetting = () => {
  const t = useI18n()
  const MENU_LISTS = [
    [t('common:adminSetting.userTab'), <UserList key='userlist' />],
    [t('common:adminSetting.chartTab'), <TradeChart key='tradechart' />],
  ]
  const width = 100 / MENU_LISTS.length

  const [value, setValue] = useState(0)
  const [SlideStyle, setSlideStyle] = useState({ width: `${width}%` })

  const changeTabHandler = (tabNumber: number) => {
    setValue(tabNumber)
    setSlideStyle((prev) => ({ ...prev, left: `${width * tabNumber}%` }))
  }

  return (
    <article className={styles.wrapper}>
      <header>
        <nav>
          <ul className={styles.tabMenu}>
            {MENU_LISTS.map((menu, index) => (
              <li key={`menu-${index + 1}`} className={cx({ [styles.tabMenuActive]: value === index })}>
                <button type='button' onClick={() => changeTabHandler(index)}>
                  {menu[0]}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.slider}>
            <div className={styles.indicator} style={SlideStyle} />
          </div>
        </nav>
      </header>

      <section className={styles.contentConatainer}>
        {MENU_LISTS.map((menu, index) => (
          <div
            key={`content-${index + 1}`}
            className={cx(styles.tabContents, { [styles.tabContentsHidden]: value !== index })}
          >
            {menu[1]}
          </div>
        ))}
      </section>
    </article>
  )
}

export default AdminSetting
