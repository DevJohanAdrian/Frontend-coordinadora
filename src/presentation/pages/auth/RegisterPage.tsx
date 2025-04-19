
import { useDispatch } from 'react-redux'
import { register } from '@/presentation/store/slices/authSlice'
import type { AppDispatch } from '../../store/store';
import { AuthWelcomeMessage, SignUpForm, AuthFooter } from '@/presentation/components/auth'
import { RegisterCredentials } from '@/domain/interfaces/User.interface';

const SignUp = () => {
    const dispatch = useDispatch<AppDispatch>();  
    const handleSubmit = (data: RegisterCredentials & { confirmPassword: string }) => {
      // Omitir confirmPassword al despachar
      const { confirmPassword, ...registerData } = data;
      dispatch(register(registerData));
    }
  return (
    <div className='flex items-center justify-center px-4 bg-gray-100 min-h-dvh dark:bg-gray-950'>
      <div className='w-full max-w-md space-y-6'>
        <AuthWelcomeMessage field_sign_message={'Crear una nueva cuenta'} />
        <SignUpForm onSubmit={handleSubmit} />
        <AuthFooter
          link={'/signIn'}
          linkMessage={'Prefiero iniciar sesion'}
          authMessage={'!Ya tienes una cuenta!'}
        />
      </div>
    </div>
  )
}

export default SignUp
