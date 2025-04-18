
export const AuthWelcomeMessage = ({ field_sign_message }: { field_sign_message: string }) => {
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold'>Bienvenido de nuevo</h1>
      <p className='text-gray-500 dark:text-gray-400'>
        {field_sign_message}
      </p>
    </div>
  )
}
  
