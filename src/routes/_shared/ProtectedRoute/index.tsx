import { useRecoil } from 'hooks/state'
import { Navigate, useLocation } from 'react-router-dom'
import { currentUserState } from 'states/user'

interface IProtectedRoute {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const location = useLocation()
  const [user] = useRecoil(currentUserState)
  if (user?.id === '') {
    return children
  }

  return <Navigate to='/' replace state={{ from: location }} />
}

export default ProtectedRoute
