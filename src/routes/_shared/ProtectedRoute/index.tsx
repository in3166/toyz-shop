import { useRecoil } from 'hooks/state'
import { FC, ReactNode } from 'react'
import { Routes, Route, NavLink, Navigate, useNavigate, Outlet } from 'react-router-dom'
import { currentUserState } from 'states/user'

interface IProtectedRoute {
  isLoggedIn: boolean
  path?: string
}

const ProtectedRoute = ({ isLoggedIn, path = '/' }: IProtectedRoute) => {
  if (isLoggedIn) {
    return <Navigate to='/' />
  }
  return <Outlet />
}

export default ProtectedRoute
