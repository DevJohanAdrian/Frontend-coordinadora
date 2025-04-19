import { Button } from '@/shared/components/ui/button';
import {

  Home,
  LogOut,

  PackagePlus,
} from 'lucide-react';
import { Link } from 'react-router'

export const SideBar = ({onLogOut}: {onLogOut: () => void}) => {
  return (
    <>
      <Link
        to={'/home'}
        className='flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
        prefetch={false}>
        <Home className='w-5 h-5' />
        {'home'}
      </Link>


      <Link
        to={'envios'}
        className='flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
        prefetch={false}>
        <PackagePlus className='w-5 h-5' />
        {'Envios'}
      </Link>

      <Button variant='quickAccess'
       
        className='flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
       >
        <LogOut className='w-5 h-5' />
        {'logout'}
      </Button>
    </>
  )
}




