import { atom } from 'hooks/state/index'
import { IDBUser } from 'types/user'

export const initialSettingUser = { data: { id: '', name: '', likes: [], phone: '', role: 0, pw: '' }, key: '' }

const initialUser = undefined

export const currentUserState = atom<IDBUser>({
  key: 'currentUser',
  default: initialUser,
})
