import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { IDBUser, IUser } from 'types/user'
import { IProductItem } from 'types/product'
import { db } from './firebase'

const userRef = collection(db, 'user')

export const getAllUserDataDB = () => {
  return getDocs(userRef).then((res): IDBUser[] => {
    const users = res.docs
      .map((docs) => ({ data: docs.data() as IUser, key: docs.id }))
      .filter((user) => user.data.role === 0)
    return users
  })
}

export const getUserDataDB = (id: string) => {
  return getDocs(userRef).then((res) => {
    const users = res.docs
      .map((docs) => ({ data: docs.data() as IUser, key: docs.id }))
      .filter((user) => user.data.id === id)
    return users
  })
}

export const addUserDB = async (newUser: IUser) => {
  return addDoc(userRef, newUser)
}

export const updateUserDBLikes = async (id: string, likes: IProductItem[]) => {
  const docRef = doc(db, 'user', id)
  return updateDoc(docRef, { likes })
}
