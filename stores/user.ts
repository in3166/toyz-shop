import { atom } from 'hooks/state/index'
import { IUser } from 'types/user'
import { v1 } from 'uuid'

export const initialSettingUser = { id: '', name: '', password: '', email: '', phone: '', likes: [], role: 0 }

export const currentUserState = atom<IUser>({
  key: `currentUser/${v1()}`,
  default: undefined,
})
