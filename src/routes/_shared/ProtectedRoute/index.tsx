import { useRecoil } from 'hooks/state'
import { Navigate, useLocation } from 'react-router-dom'
import { currentUserState } from 'states/user'
import { IProductUser } from 'types/product'
import { IDBUser, IUser } from 'types/user'

interface IProtectedRoute {
  children: JSX.Element
  required: boolean
  user: IDBUser
}

const ProtectedRoute = ({ children, required, user }: IProtectedRoute) => {
  const location = useLocation()
  if (!user) return null

  if (required) {
    if (user && user?.data?.id !== '') {
      return children
    }

    return <Navigate to='/signin' replace />
  }

  if (!user || user?.data?.id === '') {
    return children
  }

  return <Navigate to='/' replace />
}

export default ProtectedRoute
