import { Navigate } from 'react-router-dom'
import { IDBUser } from 'types/user'

interface IProtectedRoute {
  children: JSX.Element
  required: boolean
  user: IDBUser
}

const ProtectedRoute = ({ children, required, user }: IProtectedRoute) => {
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
