import { MouseEvent } from 'react'
import { IProductItem } from './product.d'

export interface IUser {
  id: string
  name: string
  password: string
  email: string
  phone: string
  likes?: IProductItem[]
  role?: number
  createdAt?: date
  updatedAt?: date
}

export interface IDBUser {
  data: IUser
  key: string
}

export interface IFormInput {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  hasError: boolean
  valueIsValid: boolean
  valueChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  valueClickHandler: (e: MouseEvent<HTMLInputElement>) => void
  inputBlurHandler: () => void
  reset: () => void
}
