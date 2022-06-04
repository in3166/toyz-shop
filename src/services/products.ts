import { axios } from 'hooks/worker'
import { IProductAPI, IProductItem } from 'types/product'

const PRODUCT_BASE_URL = 'https://api.unsplash.com'

axios.interceptors.response.use((res) => {
  if (res.data.results) {
    const value = res.data.results
    const temp = value.map((product: IProductAPI) => {
      return {
        id: product.id,
        title: product.alt_description,
        url: product.urls.small,
        date: product.created_at,
        owner: product.user.name,
        price: product.likes,
      }
    })
    res.data = temp
    return res
  }
  return []
})

const getProudcts = (page: number) =>
  axios.get<IProductItem[]>(`${PRODUCT_BASE_URL}/search/photos?per_page=10`, {
    params: {
      client_id: process.env.REACT_APP_PEXELS_KEY,
      page,
      query: 'toy',
    },
  })

export { getProudcts }
