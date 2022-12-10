import { IUser } from 'types/user'

export interface IReseponseUsers extends Response {
  success: boolean
  users: IUser[]
}

export interface IReseponseUser extends Response {
  data?: { success: boolean; user: IUser }
}
