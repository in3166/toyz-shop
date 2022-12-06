import Link from 'next/link'
import Slider from 'react-slick'
import dayjs from 'dayjs'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { IProductItem } from 'types/product'
import { useAppSelector, useI18n, useState } from 'hooks'
import { useRouter } from 'next/router'
import { getBannerList } from 'stores/reducer/banner'
import styles from './banner.module.scss'
import { MouseEvent } from 'react'

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
  const [mouseMoved, setMouseMoved] = useState(false)
  // console.log(r)
  const router = useRouter()
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const path = e.currentTarget.value
    if (!mouseMoved) {
      router.push(path)
    }
  }

  const bannerList: IProductItem[] = useAppSelector(getBannerList)
  return (
    <Slider {...slideSettings} className={styles.slider}>
      {products?.length > 0 &&
        products.map((value) => {
          return (
            <button
              type='button'
              key={value._id}
              onMouseMove={() => setMouseMoved(true)}
              onMouseDown={() => setMouseMoved(false)}
              onClick={(e) => handleClick(e)}
              className={(styles.link, styles.slideContent)}
              value={`/product/${value._id}`}
            >
              <img src={value.image} loading='lazy' alt='products' placeholder='' />
              <div className={styles.description}>
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
                    <dd>{value.name}</dd>
                  </div>
                  <div className={styles.dlContent}>
                    <dt>{`${t('common:date')}`}: </dt>
                    <dd>{dayjs(value.createdAt).format('YYYY-MM-DD')}</dd>
                  </div>
                </dl>
              </div>
            </button>
          )
        })}
    </Slider>
  )
}

export default Banner
