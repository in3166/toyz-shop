import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useI18n } from 'hooks'

import { useRecoil } from 'hooks/state'
import { currentUserState } from 'stores/user'
import Container from 'components/_shared/Container'
import styles from './likesPage.module.scss'
import ProductList from 'components/ProductList'

const LikesPage = () => {
  const t = useI18n()
  const { data: session } = useSession()
  const [user, setUser] = useRecoil(currentUserState)
  console.log('recoil likes user: ', user)
  console.log('session likes: ', session)

  useEffect(() => {
    if (session) setUser(session?.user)
  }, [session, setUser])

  if (user?.id === 'admin') return <div className={styles.empty}>{`${t('likes.admin')}`}</div>
  if (!user || user.id === '') return <div className={styles.empty}>{`${t('likes.notValid')}`}</div>

  const userLikes = user?.likes || []
  if (userLikes.length < 1) return <div className={styles.empty}>No Items.</div>

  return <ProductList products={userLikes} />
}

export const getStaticProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locales,
    },
  }
}

export default LikesPage
