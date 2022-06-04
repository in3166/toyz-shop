import { atom } from 'hooks/state/index'

interface IUser {
  id: string
  name: string
  phone: string
  address: string
}
const initailUser = {
  id: '',
  name: '',
  phone: '',
  address: '',
  role: 0,
}
export const currentUserState = atom<IUser>({
  key: 'currentUser',
  default: initailUser,
})
