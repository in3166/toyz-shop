import { IDBUser } from 'types/user'
import LikesCard from './LikesCard'
import Container from 'components/Container'
import styles from './likesPage.module.scss'

interface ILikesPageProps {
  user: IDBUser
}
const LikesPage = ({ user }: ILikesPageProps) => {
  const { data } = user

  if (!data || data.id === 'admin' || data.id === '') return <div className={styles.empty}>You need to log in.</div>

  const userLikes = data?.likes
  if (userLikes.length < 1) return <div className={styles.empty}>No Items.</div>

  return (
    <main className={styles.main}>
      <Container>
        <ul className={styles.cardContainer}>
          {userLikes.map((value) => {
            return <LikesCard key={value.id} item={value} />
          })}
        </ul>
      </Container>
    </main>
  )
}

export default LikesPage
