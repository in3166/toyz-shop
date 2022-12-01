import { useRef, Dispatch, RefObject, SetStateAction, useState } from 'react'

import { useAppSelector } from 'hooks'
import { useRecoil } from 'hooks/state'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { getProductList } from 'store/reducer/product'
import { currentUserState } from 'store/user'

import Container from 'components/_shared/Container'
import Card from 'components/_shared/Card'
import Banner from './Banner'
import { LoadingSpinner } from 'public/svgs'
import styles from './mainPage.module.scss'
import { IProductItem } from 'types/product'

const Loading = () => (
  <div className={styles.loading}>
    <LoadingSpinner />
  </div>
)
interface IScrollDetecorProps {
  setTarget: Dispatch<SetStateAction<HTMLElement | null | undefined>>
}
const ScrollDetecor = ({ setTarget }: IScrollDetecorProps) => <li ref={setTarget} className={styles.scrollTargetLi} />
interface IMainPageProps {
  products: IProductItem[]
}
const MainPage = ({ products }: IMainPageProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [productsList, setproductsList] = useState(products)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useRecoil(currentUserState)
  const setTarget = useIntersectionObserver(ref, { rootMargin: '10px', threshold: 0 }, setIsLoading, setproductsList)

  return (
    <main className={styles.main}>
      <Banner products={products} />
      <Container>
        <ul className={styles.cardContainer}>
          {productsList?.map((value) => {
            return <Card key={value.id} item={value} user={user} setUser={setUser} />
          })}
        </ul>
        {!isLoading && <ScrollDetecor setTarget={setTarget} />}
        {isLoading && <Loading />}
      </Container>
    </main>
  )
}

export default MainPage
