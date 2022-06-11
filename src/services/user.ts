import { addDoc, collection, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
import { IDBUser, IUser } from 'types/user'
import { IProductItem } from 'types/product'
import { db } from './firebase'

const userRef = collection(db, 'user')

export const getAllUserDataDB = async () => {
  return getDocs(userRef).then((res): IDBUser[] => {
    const users = res.docs
      .map((docs) => ({ data: docs.data() as IUser, key: docs.id }))
      .filter((user) => user.data.role === 0)
    return users
  })
}

export const getUserDataDB = async (id: string) => {
  return getDocs(userRef).then((res) => {
    const users = res.docs
      .map((docs) => ({ data: docs.data() as IUser, key: docs.id }))
      .filter((user) => user.data.id === id)
    return users
  })
}

export const addUserDB = async (newUser: IUser) => {
  return getAllUserDataDB()
    .then((res) => {
      const index = res.findIndex((user) => user.data.id === newUser.id)
      if (index !== -1) throw new Error('ID 중복')
      return addDoc(userRef, newUser)
    })
    .catch((err) => {
      throw err
    })
}

export const removeUserDB = async (id: string) => {
  return deleteDoc(doc(userRef, id))
}

export const updateUserDBInfo = async (id: string, key: string, pw: string, name: string, phone: string) => {
  return getUserDataDB(id)
    .then((res) => {
      console.log('res: ', res)
      if (res?.length < 1) throw new Error('No user!')
      if (res[0]?.data?.pw !== pw) throw new Error('Password is not correct!')
      const docRef = doc(db, 'user', key)
      return updateDoc(docRef, { name, phone })
    })
    .catch((err) => {
      throw err
    })
}

export const updateUserDBLikes = async (key: string, likes: IProductItem[]) => {
  const docRef = doc(db, 'user', key)
  return updateDoc(docRef, { likes })
}
