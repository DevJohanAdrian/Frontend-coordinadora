
import { useDispatch } from 'react-redux'
import { register } from '@/presentation/store/slices/authSlice'
import type { AppDispatch } from '../../store/store';
import { AuthWelcomeMessage, SignUpForm, AuthFooter } from '@/presentation/components/auth'
import { RegisterCredentials } from '@/domain/interfaces/User.interface';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AuthState } from '@/presentation/types/states/AuthState'
import { Spinner } from '@/shared/components/customComponents'
import { clearState } from '@/presentation/store/slices/authSlice'
import { useNavigate } from 'react-router'
import { toast } from "sonner"  



const RegisterPage = () => {
    const dispatch = useDispatch<AppDispatch>();  
    const navigate = useNavigate()

    const { user, isError, isLoading, isAuth, error } = useSelector((state: { auth: AuthState }) => state.auth)
    const handleSubmit = (data: RegisterCredentials & { confirmPassword: string }) => {
      // Omitir confirmPassword al despachar
      const { confirmPassword, ...registerData } = data;
      dispatch(register(registerData));
    }

    useEffect(() => {
      console.log('state', user)
      if (!isError && user && isAuth) {
        navigate('/home', { replace: true })
        toast(`Se ha registrado correctamente ${user.nombres} ${user.apellidos}`)
      } else if (error?.message) {
        toast(error?.message, { description: "Contacte con su administrador si el error persiste.",})
        dispatch(clearState())
      }
    }, [user, isError, isAuth, error])


    
  return (
    <div className='flex items-center justify-center px-4 bg-gray-100 min-h-dvh dark:bg-gray-950'>
      <div className='w-full max-w-md space-y-6'>
        {isLoading && <Spinner />}
        <AuthWelcomeMessage field_sign_message={'Crear una nueva cuenta'} />
        <SignUpForm onSubmit={handleSubmit} />
        <AuthFooter
          link={'/iniciar-sesion'}
          linkMessage={'Prefiero iniciar sesion'}
          authMessage={'!Ya tienes una cuenta!'}
        />
      </div>
    </div>
  )
}

export default RegisterPage
