import { IUser } from 'types/user'

export interface ICommentItem {
  _id: string
  text: string
  product: string
  user: IUser
  createdAt: date
  updatedAt?: date
}
