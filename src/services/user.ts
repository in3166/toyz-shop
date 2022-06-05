import { IDBUser, IUser } from 'types/user'
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from './firebase'
import { IProductItem } from 'types/product'

const userRef = collection(db, 'user')

// const getUserLocate = ref(firebaseDB, `users/`)
// const getProductLocate = ref(firebaseDB, `products/`)
// const q = query(collection(db, 'cities'), where('capital', '==', true))

export const getAllUserDataDB = async () => {
  getDocs(userRef).then((res) => {
    console.log(res.docs)
    const users = res.docs.map((docs) => ({ data: docs.data(), id: docs.id }))
  })
}

export const getUserDataDB = (id: string) => {
  console.log(id)
  return getDocs(userRef).then((res) => {
    const users = res.docs.map((docs) => ({ data: docs.data(), key: docs.id })).filter((user) => user.data.id === id)
    return users as IDBUser[]
  })
}

export const addUserDB = async (newUser: IUser) => {
  return addDoc(userRef, newUser).then((res) => {
    console.log('new user:L ', res)
  })
}

export const updateUserDBLikes = async (id: string, likes: IProductItem[]) => {
  const docRef = doc(db, 'user', id)
  return updateDoc(docRef, { likes })
}
