import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router'

export const BackDashBoard = ({ link, moduleName } : { link: string, moduleName: string }) => {
  return (
    <div className='px-0 py-5'>
      <Link
        to={link}
        className='inline-flex items-center text-lg transition-colors text-muted-foreground hover:text-foreground'>
        <ChevronLeft className='mr-2 w-7 h-7' />
        {moduleName}
      </Link>
    </div>
  )

}


