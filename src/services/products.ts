import { axios } from 'hooks/worker'

const PRODUCT_BASE_URL = 'https://api.unsplash.com'

const getInitialProudcts = () => {
  axios
    .get(`${PRODUCT_BASE_URL}/search/photos?per_page=50`, {
      params: {
        client_id: process.env.REACT_APP_PEXELS_KEY,
        page: 2,
        query: 'toy',
      },
    })
    .then((res) => {
      console.log(res)
    })
}

export { getInitialProudcts }
