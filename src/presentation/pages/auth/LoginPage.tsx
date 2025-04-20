import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/presentation/store/slices/authSlice'
import type { AppDispatch } from '../../store/store';
import { AuthWelcomeMessage, SignInForm, AuthFooter } from '@/presentation/components/auth'
import { AuthState } from '@/presentation/types/states/AuthState'
import { toast } from "sonner"
import { clearState } from '@/presentation/store/slices/authSlice'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { Spinner } from '@/shared/components/customComponents'

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const navigate = useNavigate()
  const { user, isError, isLoading, isAuth, error } = useSelector((state: { auth: AuthState }) => state.auth)
 
  const handleSubmit = ({ email, password }: { email: string; password: string }) => {
    dispatch(login({ email, password }));
  }

  useEffect(() => {
    if (!isError && user && isAuth) {
      navigate('/home', { replace: true })
      toast(`Bienvenido de nuevo ${user.nombres} ${user.apellidos}`, {description: "Ha iniciado sesión correctamente.",})
    } else if (error?.message) {
      toast(error?.message,{ description: "Contacte con su administrador si el error persiste.",})
      dispatch(clearState())
    }
  }, [user, isError, isAuth, error])

  return (
    <div className='flex items-center justify-center px-4 bg-gray-100 min-h-dvh '>
      <div className='w-full max-w-md space-y-6'>
         {isLoading && <Spinner />}
        <AuthWelcomeMessage field_sign_message={'Introduce tu correo electrónico y contraseña para iniciar sesión.'} />
        <SignInForm onSubmit={handleSubmit} />
        <AuthFooter
          link={'/crear-cuenta'}
          linkMessage={'¡Regístrate ahora!'}
          authMessage={'¿No tienes cuenta?'}
        />
      </div>
    </div>
  );
};
 


export default LoginPage;