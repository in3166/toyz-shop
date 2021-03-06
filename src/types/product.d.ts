export interface IProductItem {
  id: string
  title: string
  url: string
  date: string
  owner: string
  price: number
}

export interface IProductAPI {
  id: string
  created_at: string
  height: number
  description: null
  alt_description: string
  urls: IUrls
  likes: number
  user: IProductUser
}

export interface IUrls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface IProductUser {
  id: string
  name: string
}
