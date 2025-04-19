import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { AuthState } from '@/presentation/types/states/AuthState'

export const ProtectedRoutes = ({ children, redirectTo }: { children: React.ReactNode, redirectTo: string }) => {
  // Accediendo al estado de autenticación
  const { user, isError, isLoading, isAuth, error } = useSelector((state: { auth: AuthState }) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null && isAuth) {
      navigate(redirectTo, { replace: true })
    }
  }, [navigate, user])

  return children
}


