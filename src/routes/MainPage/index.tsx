import { MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { axios } from 'hooks/worker'
import styles from './mainPage.module.scss'
import Container from 'components/Container'
import Card from './Card'

const MainPage = (): JSX.Element => {
  const [images, setImages] = useState([])
  console.log(process.env.REACT_APP_PEXELS_KEY)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: `slick-dots ${styles.dots}`,
    // variableWidth: true,
  }

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/search/photos?per_page=10', {
        // headers: {
        //   Authorization: process.env.REACT_APP_PEXELS_KEY ?? '',
        // },
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
        <Slider {...settings} className={styles.slider}>
          {images.length > 0 &&
            images.map((value: { id: string; urls: { small: string }; alt_description: string }) => {
              return (
                <div key={value.id} className={styles.slideContent}>
                  <img src={value.urls.small} loading='lazy' alt='products' placeholder='' />
                  <div className={styles.description}>
                    <dl>
                      <div>
                        <dt>Title: </dt>
                        <dd>{value.alt_description}</dd>
                      </div>
                      <div>
                        <dt>Price: </dt>
                        <dd>{Math.random()}</dd>
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
            return <Card key={value.id} id={value.id} url={value.urls.small} description={value.alt_description} />
          })}
        </ul>
      </Container>
    </main>
  )
}

export default MainPage
