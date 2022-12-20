import { IProductItem } from 'types/product'
import Loading from 'components/_shared/Loding'
import Container from 'components/_shared/Container'
import ProductItem from 'components/ProductList/ProductItem'
import styles from './productList.module.scss'
import { useUserLikes } from 'hooks/useUserLikes'
import { Dispatch, useEffect } from 'react'

interface IMainPageProps {
  products: IProductItem[]
  isLoading?: boolean
  setProducts?: Dispatch<IProductItem[]>
}
const ProductList = ({ products, isLoading, setProducts }: IMainPageProps) => {
  const { likes, setLikes, user } = useUserLikes()
  useEffect(() => {
    if (setProducts) {
      if (!products || products?.length < 1) {
        setProducts(likes)
      } else {
        setProducts(products)
      }
    }
  }, [likes, products, setProducts])
  // TODO: Rerender 확인
  // console.log(products)
  return (
    <Container width='lg'>
      {!isLoading && products?.length < 1 && <div>No Items.</div>}
      <ul className={styles.cardContainer}>
        {products?.map((value) => {
          return <ProductItem key={value._id} product={value} user={user} likes={likes} setLikes={setLikes} />
        })}
      </ul>
      {isLoading && <Loading />}
    </Container>
  )
}

export default ProductList
