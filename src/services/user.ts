import { IDBUser, IUser } from 'types/user'
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

const userRef = collection(db, 'user')

// const getUserLocate = ref(firebaseDB, `users/`)
// const getProductLocate = ref(firebaseDB, `products/`)
// const q = query(collection(db, 'cities'), where('capital', '==', true))

export const getAllUserDataApi = async () => {
  getDocs(userRef).then((res) => {
    console.log(res.docs)
    const users = res.docs.map((docs) => ({ data: docs.data(), id: docs.id }))
  })
}

export const getUserDataApi = (id: string) => {
  console.log(id)
  return getDocs(userRef).then((res) => {
    const users = res.docs.map((docs) => ({ data: docs.data(), key: docs.id })).filter((user) => user.data.id === id)
    return users as IDBUser[]
  })
}

export const addUserApi = async (newUser: IUser) => {
  return addDoc(userRef, newUser).then((res) => {
    console.log('new user:L ', res)
  })
}

export const updateUserLikes = async (id: string, likes: string[]) => {
  const docRef = doc(db, 'user', id)
  return updateDoc(docRef, { likes })
}
