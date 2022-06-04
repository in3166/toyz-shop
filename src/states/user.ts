import { atom } from 'hooks/state/index'

interface IUser {
  id: string
  name: string
  phone: string
  likes: string[]
  role: number
}

const initialUser = {
  id: '',
  name: '',
  phone: '',
  likes: [],
  role: 0,
}

export const currentUserState = atom<IUser>({
  key: 'currentUser',
  default: initialUser,
})
