import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useRecoil } from 'hooks/state'
import { currentUserState } from 'stores/user'
import Container from 'components/_shared/Container'
import styles from './likesPage.module.scss'
import ProductList from 'components/ProductList'

const LikesPage = () => {
  const { data: session } = useSession()
  const [user, setUser] = useRecoil(currentUserState)
  useEffect(() => {
    if (session) setUser(session?.user)
  }, [session, setUser])

  if (user?.id === 'admin') return <div className={styles.empty}>You are admin.</div>
  if (!user || user.id === '') return <div className={styles.empty}>You need to log in.</div>
  if (!user) return <div>권한 없음</div>

  const userLikes = user?.likes || []
  if (userLikes.length < 1) return <div className={styles.empty}>No Items.</div>

  return (
    <main className={styles.main}>
      <Container>
        <ul className={styles.cardContainer}>
          <ProductList products={userLikes} />
        </ul>
      </Container>
    </main>
  )
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
