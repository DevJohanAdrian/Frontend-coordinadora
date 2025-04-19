import { useDispatch } from 'react-redux'
import { login } from '@/presentation/store/slices/authSlice'
import type { AppDispatch } from '../../store/store';
import { AuthWelcomeMessage, SignInForm, AuthFooter } from '@/presentation/components/auth'

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();  
  const handleSubmit = ({ email, password }: { email: string; password: string }) => {
    dispatch(login({ email, password }));
  }
  return (
    <div className='flex items-center justify-center px-4 bg-gray-100 min-h-dvh '>
      <div className='w-full max-w-md space-y-6'>
        <AuthWelcomeMessage field_sign_message={'Introduce tu correo electrónico y contraseña para iniciar sesión.'} />
        <SignInForm onSubmit={handleSubmit} />
        <AuthFooter
          link={'/signUp'}
          linkMessage={'¡Regístrate ahora!'}
          authMessage={'¿No tienes cuenta?'}
        />
      </div>
    </div>
  );
};
 


export default LoginPage;