import { NavBar, SideBar } from '@/presentation/components/home'
import { Suspense } from 'react'
import { Spinner } from '@/shared/components/customComponents'
import { Outlet } from 'react-router'
// import type { AppDispatch } from '../../store/store';
// import { useDispatch } from 'react-redux'
// import { logout } from '@/presentation/store/slices/authSlice'



const HomePage = () => {
  // const dispatch = useDispatch();

  // const logOut = () => {
  //   dispatch(logout());
  // }
  return (
    <div className='flex flex-col w-full h-screen'>
      <header className='flex items-center justify-between px-4 py-3 shadow-sm bg-primary text-primary-foreground md:px-6'>
        <NavBar />
      </header>
      <div className='flex flex-1'>
        <div className='flex-col hidden p-4 shadow-sm lg:flex bg-background'>
          <nav className='flex flex-col gap-2'>
            <SideBar  />
          </nav>
        </div>
        <div className='flex-1 p-4 overflow-auto md:p-6'>
          {/* <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'> */}
          <main className='flex flex-col flex-1'>
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
          </main>
          {/* </div> */}
          <div className='mt-4'>{/* graficos */}</div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
