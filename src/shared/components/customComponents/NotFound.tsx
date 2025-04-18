import { useNavigate } from 'react-router'
import { Button } from '../ui/button'

export const NotFound = ({ link }: { link: string }) => {
  const navigate = useNavigate()
  const goback = () => {
    //navigate(-1) // go back
    navigate(link)
  }
  return (
    <main className='flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 '>
      <div className='flex flex-col items-center justify-center h-[100dvh] bg-gray-100'>
        <div className='max-w-md space-y-4 text-center'>
          <h1 className='font-bold tracking-tighter text-gray-900 text-8xl '>
            404
          </h1>
          <h2 className='text-4xl font-bold text-gray-900 '>
            Oops! Page not found.
          </h2>
          <p className='text-gray-500'>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Button onClick={goback}>Go back</Button>
        </div>
      </div>
    </main>
  )
}
