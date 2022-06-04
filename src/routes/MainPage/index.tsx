import { MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { axios } from 'hooks/worker'
import styles from './mainPage.module.scss'
import Container from 'components/Container'
import Card from './Card'
import { useAppSelector } from 'hooks'
import { getBannerList } from 'states/banner'
import { IProductItem } from 'types/product'
import dayjs from 'dayjs'
import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'

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

const MainPage = (): JSX.Element => {
  const [images, setImages] = useState([])
  const bannerList: IProductItem[] = useAppSelector(getBannerList)
  const [user] = useRecoil(currentUserState)
  console.log(user)
  useEffect(() => {
    axios
      .get('https://api.unsplash.com/search/photos?per_page=10', {
        params: {
          client_id: process.env.REACT_APP_PEXELS_KEY,
          page: 2,
          query: 'toy',
          // ...params,
        },
      })
      .then((res) => {
        console.log(res)
        setImages(res.data.results)
      })
  }, [])

  return (
    <main className={styles.main}>
      <div>
        <Slider {...slideSettings} className={styles.slider}>
          {images.length > 0 &&
            bannerList.map((value) => {
              return (
                <div key={value.id} className={styles.slideContent}>
                  <img src={value.url} loading='lazy' alt='products' placeholder='' />
                  <div className={styles.description}>
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
                  </div>
                </div>
              )
            })}
        </Slider>
      </div>
      <Container>
        <ul className={styles.cards}>
          {images.map((value: { id: string; urls: { small: string }; alt_description: string }) => {
            return (
              <Card
                key={value.id}
                id={value.id}
                url={value.urls.small}
                description={value.alt_description}
                likes={user.likes}
              />
            )
          })}
        </ul>
      </Container>
    </main>
  )
}

export default MainPage
