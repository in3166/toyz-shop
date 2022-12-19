import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { useRecoil } from 'hooks/state'
// import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { currentUserState } from 'stores/user'
import { IProductItem } from 'types/product'
import Loading from 'components/_shared/Loding'
import Container from 'components/_shared/Container'
import ProductItem from 'components/ProductList/ProductItem'
import styles from './productList.module.scss'

interface IMainPageProps {
  products: IProductItem[]
}
const ProductList = ({ products }: IMainPageProps) => {
  // const ref = useRef<HTMLDivElement | null>(null)
  const [productsList, setproductsList] = useState(products)
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // const setTarget = useIntersectionObserver(ref, { rootMargin: '10px', threshold: 0 }, setIsLoading, setproductsList)
  const router = useRouter()

  const { data: session } = useSession()
  const [user, setUser] = useRecoil(currentUserState)

  useEffect(() => {
    const { query } = router
    if (query?.text) setSearchText(query?.text?.toString())
    if (!user && session?.user) setUser(session.user)
  }, [router, session, setUser, user])

  useEffect(() => {
    setIsLoading(true)
    if (searchText !== '')
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/search?text=${searchText}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'max-age=31536000',
        },
      }).then(async (response) => {
        const data = await response.json()
        if (data.success) {
          setproductsList(data.product)
        }
        setIsLoading(false)
      })
    else setIsLoading(false)
  }, [searchText])

  return (
    <Container width='lg'>
      {productsList?.length < 1 && <div>No Items.</div>}
      {!isLoading && (
        <ul className={styles.cardContainer}>
          {productsList?.map((value) => {
            return <ProductItem key={value._id} product={value} user={user} setUser={setUser} />
          })}
        </ul>
      )}
      {/* {!isLoading && <ScrollDetecor setTarget={setTarget} />} */}
      {isLoading && <Loading />}
    </Container>
  )
}

export default ProductList
