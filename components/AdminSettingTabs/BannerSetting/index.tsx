import { useState } from 'react'
import { useQuery } from 'react-query'

import { IBanner } from 'types/banners'
import { BASE_URL } from 'src/fixtures'
import { Loading } from 'components/_shared'
import ProductTable from './ProductTable'
import BannerList from './BannerList'
import styles from './bannerSetting.module.scss'

const BannerSetting = ({ selected }: { selected: boolean }) => {
  const [banners, setBanners] = useState<IBanner[]>([])
  const { isLoading, data: products } = useQuery(
    ['getAllProductsData'],
    () =>
      fetch(`${BASE_URL}/api/products?page=1&status=1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (response) => {
          const result = await response.json()
          return result.products
        })
        .catch((err) => {
          console.log('err:', err)
        }),
    {
      enabled: selected,
      staleTime: 6 * 50 * 1000,
      useErrorBoundary: true,
    }
  )

  if (isLoading) return <Loading />

  return (
    <div className={styles.bannerWrapper}>
      <BannerList banners={banners} setBanners={setBanners} />
      <ProductTable products={products} setBanners={setBanners} />
    </div>
  )
}

export default BannerSetting
