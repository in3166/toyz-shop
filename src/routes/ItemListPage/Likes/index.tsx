import { useAppSelector } from 'hooks'
import { getProductList } from 'states/product'
import { IDBUser } from 'types/user'
import styles from './likesPage.module.scss'

interface ILikesPageProps {
  user: IDBUser
}
const LikesPage = ({ user }: ILikesPageProps) => {
  const { data, key } = user
  const userLikes = data?.likes
  console.log(userLikes)

  const items = useAppSelector(getProductList)
  console.log(items)

  return <div>1</div>
}

export default LikesPage
