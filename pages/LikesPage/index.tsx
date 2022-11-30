import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'

import Container from 'components/Container'
import Card from 'components/_shared/Card'
import styles from './likesPage.module.scss'

const LikesPage = () => {
  const [user, setUser] = useRecoil(currentUserState)
  const { data } = user

  if (data.id === 'admin') return <div className={styles.empty}>You are admin.</div>
  if (!data || data.id === '') return <div className={styles.empty}>You need to log in.</div>

  const userLikes = data?.likes
  if (userLikes.length < 1) return <div className={styles.empty}>No Items.</div>

  return (
    <main className={styles.main}>
      <Container>
        <ul className={styles.cardContainer}>
          {userLikes.map((value) => {
            return <Card key={value.id} item={value} user={user} setUser={setUser} />
          })}
        </ul>
      </Container>
    </main>
  )
}

export default LikesPage
