import { useRef, useState } from 'react'
import styles from './mainPage.module.scss'
import Container from 'components/Container'
import Card from './Card'
import { useAppSelector } from 'hooks'
import { IProductItem } from 'types/product'

import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'
import { getproductList } from 'states/product'
import Banner from './Banner'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { LoadingSpinner } from 'assets/svgs'

const MainPage = (): JSX.Element => {
  const productList: IProductItem[] = useAppSelector(getproductList)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const [user] = useRecoil(currentUserState)

  const ref = useRef<HTMLDivElement | null>(null)
  const setTarget = useIntersectionObserver(
    ref,
    { rootMargin: '10px', threshold: 0 },
    setIsLoading,
    currentPage,
    setCurrentPage
  )

  return (
    <main className={styles.main}>
      <Banner />
      <Container>
        <ul className={styles.cardContainer}>
          {productList.map((value) => {
            return <Card key={value.id} item={value} likes={user.likes} />
          })}
          {!isLoading && <li ref={setTarget} className={styles.scrollTargetLi} />}
        </ul>
        {isLoading && (
          <div className={styles.loading}>
            <LoadingSpinner />
          </div>
        )}
      </Container>
    </main>
  )
}

export default MainPage
