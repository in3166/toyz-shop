import { Dispatch, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useUserLikes } from 'hooks'
import { IProductItem } from 'types/product'
import { Container, Loading } from 'components/_shared'
import ProductItem from 'components/ProductList/ProductItem'
import styles from './productList.module.scss'

interface IMainPageProps {
  products: IProductItem[]
  isLoading?: boolean
  setProducts?: Dispatch<IProductItem[]>
}
const ProductList = ({ products, isLoading, setProducts }: IMainPageProps) => {
  const { likes, user, handleClickLike } = useUserLikes()
  const router = useRouter()

  useEffect(() => {
    if (setProducts) {
      if (router.asPath === '/likes') {
        setProducts(likes)
      }
    }
  }, [likes, router.asPath, setProducts])
  // TODO: Rerender 확인
  // console.log(products)
  return (
    <Container width='lg'>
      {!isLoading && products?.length < 1 && <div>No Items.</div>}
      <ul className={styles.cardContainer}>
        {products?.map((value) => {
          return (
            <ProductItem key={value._id} product={value} user={user} likes={likes} handleClickLike={handleClickLike} />
          )
        })}
      </ul>
      {isLoading && <Loading />}
    </Container>
  )
}

export default ProductList
