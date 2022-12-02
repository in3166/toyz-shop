import { useRef, useState } from 'react'

import { useRecoil } from 'hooks/state'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { currentUserState } from 'stores/user'

import Container from 'components/_shared/Container'
import Card from 'components/_shared/Card'
import styles from './productList.module.scss'
import { IProductItem } from 'types/product'
import Loading from 'components/_shared/Loding'
import ScrollDetecor from 'components/_shared/ScrollDetecor'

interface IMainPageProps {
  products: IProductItem[]
}
const ProductList = ({ products }: IMainPageProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [productsList, setproductsList] = useState(products)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useRecoil(currentUserState)

  const setTarget = useIntersectionObserver(ref, { rootMargin: '10px', threshold: 0 }, setIsLoading, setproductsList)

  return (
    <main className={styles.main}>
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

export default ProductList
