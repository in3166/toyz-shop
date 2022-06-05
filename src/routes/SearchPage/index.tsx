import { IDBUser } from 'types/user'
import Container from 'components/Container'
import SearchCard from './SearchCard'
import styles from './searchPage.module.scss'
import { useAppSelector } from 'hooks'
import { getSearchList, searchProduct } from 'states/product'

const SearchPage = () => {
  const data = useAppSelector(getSearchList)

  return (
    <main className={styles.main}>
      <Container>
        <ul className={styles.cardContainer}>
          {data.map((value) => {
            return <SearchCard key={value.id} item={value} />
          })}
        </ul>
      </Container>
    </main>
  )
}

export default SearchPage
