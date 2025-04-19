import { Route, Routes } from 'react-router'
import { lazy } from 'react'
import {NotFound} from '@/shared/components/customComponents';

const SignIn = lazy(() => import('@/presentation/pages/auth/LoginPage'));
const SignUp = lazy(() => import('@/presentation/pages/auth/RegisterPage'));

  const AppRoutes: React.FC = () => {
    return (
        <Routes>
        {/* Rutas principales */}
    
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />

     

        {/* Ruta global comodín para manejar 404 */}
        <Route path='*' element={<NotFound link={'/'} />} />
    </Routes>
    );
  };

  export default AppRoutes;