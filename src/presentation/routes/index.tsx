import { Route, Routes } from 'react-router'
import { lazy } from 'react'
import {NotFound, ProtectedRoutes} from '@/shared/components/customComponents';
import HomePage from '@/presentation/pages/home/HomePage';

const SignIn = lazy(() => import('@/presentation/pages/auth/LoginPage'));
const SignUp = lazy(() => import('@/presentation/pages/auth/RegisterPage'));
const Access = lazy(() => import('@/presentation/components/home/AccessCardModules'))
const Envios = lazy(() => import('@/presentation/pages/envios/Envios.page'));

  const AppRoutes: React.FC = () => {
    return (
        <Routes>
        {/* Rutas principales */}
    
        <Route path='/iniciar-sesion' element={<SignIn />} />
        <Route path='/crear-cuenta' element={<SignUp />} />

            {/* Ruta padre con subrutas */}
            <Route
          path='/home'
          element={
            <ProtectedRoutes redirectTo='/iniciar-sesion'>
              <HomePage />
            </ProtectedRoutes>
            
          }>
          <Route index element={<Access />} />
          <Route path='crear-envio' element={<Envios />} />
           {/*<Route path='notes' element={<Notes />} />
          <Route path='settings' element={<Settings />} />
          <Route path='events' element={<Events />} />
          <Route path='products' element={<Products />} />
          */}
          {/* Ruta comodín para manejar 404 en /home */}
          <Route path='*' element={<NotFound link={'/home'} />} />
        </Route>

        {/* Ruta global comodín para manejar 404 */}
        
        <Route path='*' element={<NotFound link={'/iniciar-sesion'} />} />
    </Routes>
    );
  };

  export default AppRoutes;