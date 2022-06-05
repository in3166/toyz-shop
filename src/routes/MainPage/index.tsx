import { useRef, useState } from 'react'

import { IProductItem } from 'types/product'
import { useAppSelector } from 'hooks'
import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'
import { getProductList } from 'states/product'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'

import Card from './Card'
import Banner from './Banner'
import Container from 'components/Container'
import { LoadingSpinner } from 'assets/svgs'
import styles from './mainPage.module.scss'
import { currentPageState } from 'states/page'

const MainPage = (): JSX.Element => {
  const productList: IProductItem[] = useAppSelector(getProductList)
  const [isLoading, setIsLoading] = useState(false)

  const [user] = useRecoil(currentUserState)
  const [currentPage, setCurrentPage] = useRecoil(currentPageState)

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
            return <Card key={value.id} item={value} likes={user?.data?.likes} />
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
