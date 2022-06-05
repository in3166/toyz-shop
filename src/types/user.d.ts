export interface IUser {
  id: string
  role: number
  phone: string
  likes: string[]
}

export interface IDBUser {
  data: IUser
  key: string
}
