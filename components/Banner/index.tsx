import { MouseEvent } from 'react'
import Slider from 'react-slick'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { IBanner } from 'types/banners'
import { useI18n, useState } from 'hooks'
import styles from './banner.module.scss'
import { currencyFormatter } from 'src/utils/currencyFormatter'

const slideSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  autoplay: false,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: `slick-dots ${styles.dots}`,
}

const Banner = ({ banners }: { banners: IBanner[] }) => {
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

  return (
    <Slider {...slideSettings} className={styles.slider}>
      {banners?.map((value) => {
        return (
          <button
            type='button'
            key={value._id}
            onMouseMove={() => setMouseMoved(true)}
            onMouseDown={() => setMouseMoved(false)}
            onClick={(e) => handleClick(e)}
            className={(styles.link, styles.slideContent)}
            value={`/product/${value.item._id}`}
          >
            <img src={value.item.image} loading='lazy' alt='products' placeholder='' />
            <div className={styles.description}>
              <dl>
                <div className={styles.dlContent}>
                  <dt>{`${t('common:title')}`}: </dt>
                  <dd>{value.item.title}</dd>
                </div>
                <div className={styles.dlContent}>
                  <dt>{`${t('common:price')}`}: </dt>
                  <dd>{currencyFormatter(value.item.price, 'tenThousand')} 만원</dd>
                </div>
                <div className={styles.dlContent}>
                  <dt>{`${t('common:owner')}`}: </dt>
                  <dd>{value.item.owner.id}</dd>
                </div>
                <div className={styles.dlContent}>
                  <dt>{`${t('common:date')}`}: </dt>
                  <dd>{dayjs(value.item.createdAt).format('YYYY-MM-DD')}</dd>
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
