import Link from 'next/link'
import Slider from 'react-slick'
import dayjs from 'dayjs'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { IProductItem } from 'types/product'
import { useAppSelector, useI18n } from 'hooks'
import { getBannerList } from 'stores/reducer/banner'
import styles from './banner.module.scss'

const slideSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: `slick-dots ${styles.dots}`,
}

const Banner = ({ products }: { products: IProductItem[] }) => {
  const t = useI18n()
  const bannerList: IProductItem[] = useAppSelector(getBannerList)
  return (
    <Slider {...slideSettings} className={styles.slider}>
      {products.length > 0 &&
        products.map((value) => {
          return (
            <div key={value.id} className={styles.slideContent}>
              <img src={value.image} loading='lazy' alt='products' placeholder='' />
              <Link className={styles.description} href={`/item/${value.id}`}>
                <dl>
                  <div className={styles.dlContent}>
                    <dt>{`${t('common:title')}`}: </dt>
                    <dd>{value.name}</dd>
                  </div>
                  <div className={styles.dlContent}>
                    <dt>{`${t('common:price')}`}: </dt>
                    <dd>{value.price} 만원</dd>
                  </div>
                  <div className={styles.dlContent}>
                    <dt>{`${t('common:owner')}`}: </dt>
                    <dd>{value.owner}</dd>
                  </div>
                  <div className={styles.dlContent}>
                    <dt>{`${t('common:date')}`}: </dt>
                    <dd>{dayjs(value.createdAt).format('YYYY-MM-DD')}</dd>
                  </div>
                </dl>
              </Link>
            </div>
          )
        })}
    </Slider>
  )
}

export default Banner
