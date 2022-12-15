import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import TradeChart from '../../../components/TabMenu/TradeChart'
import UserList from '../../../components/TabMenu/UserList'
import { cx } from 'styles'
import styles from './adminSetting.module.scss'
import { useI18n } from 'hooks'
import BannerSetting from 'components/TabMenu/BannerSetting'

const AdminSetting = () => {
  const t = useI18n()
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user?.role !== 0) router.replace('/')
  }, [router, session?.user?.role])

  const MENU_LISTS =
    session?.user?.role === 0
      ? [
          [t('adminSetting.userTab'), <UserList key='userlist' />],
          [t('adminSetting.chartTab'), <TradeChart key='tradechart' />],
          [t('adminSetting.bannerTab'), <BannerSetting key='bannerSetting' />],
        ]
      : []

  const width = 100 / MENU_LISTS.length

  const [value, setValue] = useState(0)
  const [SlideStyle, setSlideStyle] = useState({ width: `${width}%` })

  const changeTabHandler = (tabNumber: number) => {
    setValue(tabNumber)
    setSlideStyle((prev) => ({ ...prev, left: `${width * tabNumber}%` }))
  }

  return (
    <>
      <Head>
        <title>Admin Setting</title>
        <meta name='description' content='You can login our Toyz shop!' />
      </Head>
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
    </>
  )
}

export const getServerSideProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locales,
    },
  }
}

export default AdminSetting
