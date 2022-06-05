import Slider from 'react-slick'
import dayjs from 'dayjs'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { IProductItem } from 'types/product'
import { useAppSelector } from 'hooks'
import { getBannerList } from 'states/banner'
import styles from './banner.module.scss'
import { Link } from 'react-router-dom'

const slideSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: `slick-dots ${styles.dots}`,
}

const Banner = () => {
  const bannerList: IProductItem[] = useAppSelector(getBannerList)

  return (
    <Slider {...slideSettings} className={styles.slider}>
      {bannerList.length > 0 &&
        bannerList.map((value) => {
          return (
            <div key={value.id} className={styles.slideContent}>
              <img src={value.url} loading='lazy' alt='products' placeholder='' />
              <Link className={styles.description} to={`/item/${value.id}`} state={value}>
                <dl>
                  <div className={styles.dlContent}>
                    <dt>Title: </dt>
                    <dd>{value.title}</dd>
                  </div>
                  <div className={styles.dlContent}>
                    <dt>Price: </dt>
                    <dd>{value.price} 만원</dd>
                  </div>
                  <div className={styles.dlContent}>
                    <dt>Owner: </dt>
                    <dd>{value.owner}</dd>
                  </div>
                  <div className={styles.dlContent}>
                    <dt>Date: </dt>
                    <dd>{dayjs(value.date).format('YYYY-MM-DD')}</dd>
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
