import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema } from '@/presentation/validation/authSchemas'
import { useNavigate } from 'react-router'
import { AuthState } from '@/presentation/types/states/AuthState'
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { Spinner } from '@/shared/components/customComponents/Spinner'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { clearState } from '@/presentation/store/slices/authSlice'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../store/store';


export const SignInForm = ({onSubmit}: {onSubmit: (credentials: { email: string; password: string }) => void}) => {
  const navigate = useNavigate()
  const { user, isError, isLoading, isAuth, error } = useSelector((state: { auth: AuthState }) => state.auth)
  const dispatch = useDispatch<AppDispatch>();
  const form = useForm({ resolver: zodResolver(signInSchema) })

  const handleSubmit = ({ email, password }: { email: string; password: string }) => {
    onSubmit({ email, password })
  }


  useEffect(() => {
    console.log('state', user)
    if (!isError && user && isAuth) {
      navigate('/home', { replace: true })
    } else if (error?.message) {
      toast(error?.message,{ description: "Contacte con su administrador.",})
      dispatch(clearState())
    }
  }, [user, isError, isAuth, error])


  return (
    <>
      <div className='border shadow rounded-xl bg-card text-card-foreground'>
        <Form {...form}>
          <form
            method='post'
            action=''
            id='profile-info-form'
            noValidate
            onSubmit={form.handleSubmit(handleSubmit)}
            className='w-full p-10 space-y-5 '>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id='email'
                        name='email'
                        placeholder='johndoe@example.com'
                        type='email'
                        autoComplete='false'
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        id='password'
                        name='password'
                        placeholder='Introduce tu contraseña.'
                        autoComplete='current-password'
                        type='password'
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            
            <div className='flex items-center justify-center'>
              <Button type='submit' className='flex-1'>
                Iniciar sesión
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {isLoading && <Spinner />}

    
    </>
  )
}
