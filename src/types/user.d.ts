import { IProductItem } from './product.d'

export interface IUser {
  id: string
  name: string
  role: number
  phone: string
  likes: IProductItem[]
}

export interface IDBUser {
  data: IUser
  key: string
}
