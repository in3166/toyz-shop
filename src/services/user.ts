import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { IDBUser, IUser } from 'types/user'
import { IProductItem } from 'types/product'
import { db } from './firebase'

const userRef = collection(db, 'user')

export const getAllUserDataDB = async () => {
  getDocs(userRef).then((res) => {
    const users = res.docs.map((docs) => ({ data: docs.data(), id: docs.id }))
    return users
  })
}

export const getUserDataDB = (id: string) => {
  return getDocs(userRef).then((res) => {
    const users = res.docs.map((docs) => ({ data: docs.data(), key: docs.id })).filter((user) => user.data.id === id)
    return users as IDBUser[]
  })
}

export const addUserDB = async (newUser: IUser) => {
  return addDoc(userRef, newUser)
}

export const updateUserDBLikes = async (id: string, likes: IProductItem[]) => {
  const docRef = doc(db, 'user', id)
  return updateDoc(docRef, { likes })
}
