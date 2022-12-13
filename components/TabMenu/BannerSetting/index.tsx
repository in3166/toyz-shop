import { useState } from 'react'
import { useQuery } from 'react-query'

import { IBanner } from 'types/banners'
import ProductTable from './ProductTable'
import BannerList from './BannerList'
import styles from './bannerSetting.module.scss'

const BannerSetting = () => {
  const [banners, setBanners] = useState<IBanner[]>([])
  const { isLoading, data: products } = useQuery(
    ['getAllProductsData'],
    () =>
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
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
      // error , success false 로직 추가
      enabled: true,
      staleTime: 6 * 50 * 1000,
      useErrorBoundary: true,
    }
  )

  return (
    <div className={styles.bannerWrapper}>
      <BannerList banners={banners} setBanners={setBanners} />
      <ProductTable products={products} setBanners={setBanners} />
    </div>
  )
}

export default BannerSetting
