import { Link } from 'react-router'
export const AuthFooter = ({ link, linkMessage, authMessage }: { link: string, linkMessage: string, authMessage: string }) => {
  return (
    <div className='text-sm text-center text-gray-500 '>
      <p>
        {authMessage}

        <Link
          to={link}
          className='font-medium text-gray-900 underline underline-offset-4 hover:text-gray-700 '>
          {'  '}
          {linkMessage}
        </Link>
      </p>
    </div>
  )
}
