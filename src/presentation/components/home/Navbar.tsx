import { Button } from '@/shared/components/ui/button'
import { Link } from 'react-router'
import { Menu, LayoutDashboard  } from 'lucide-react';

 export const NavBar = () => {
  return (
    <>
      <div className='flex items-center gap-4'>
        <Button
          variant='ghost'
          size='icon'
          className='lg:hidden'
          onClick={() => {
            document.querySelector('.lg\\:flex').classList.toggle('hidden')
          }}>
          <Menu className='w-6 h-6' />
          <span className='sr-only'>Toggle navigation</span>
        </Button>
        <Link
          href='#'
          className='flex items-center gap-2 font-bold'
          prefetch={false}>
          <LayoutDashboard className='w-6 h-6' />
          <span className='sr-only'>Dashboard</span>
        </Link>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <img
            src='/placeholder.svg'
            width='32'
            height='32'
            className='rounded-full'
            alt='Avatar'
          />
          <span className='sr-only'>User menu</span>
        </Button>
      </div>
    </>
  )
}

