import { useAppSelector } from 'hooks'
import { getSearchList } from 'states/product'

import Container from 'components/Container'
import SearchCard from './SearchCard'
import styles from './searchPage.module.scss'

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
