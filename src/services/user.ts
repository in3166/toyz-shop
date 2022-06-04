import { IUser } from '../types/user.d'
import { axios } from 'hooks/worker'
import { firebaseDB } from './firebase'
import { push, ref, limitToLast, get, onValue, orderByChild, query, remove, equalTo } from '@firebase/database'

const getUserLocate = ref(firebaseDB, `users/`)
const getProductLocate = ref(firebaseDB, `products/`)

export const getAllUserDataApi = async () => {
  const response = await get(getUserLocate)
  return response.val()
}

export const getUserDataApi = async (id: string) => {
  const response = await get(getUserLocate)
  const result = await response.val()
  const filter = result.filter((user: IUser) => {
    console.log(user)
    return user.id === id
  })
  console.log(filter)
  return filter
}

export const getProductDataApi = async () => {
  const response = await get(getProductLocate)
  return response.val()
}
