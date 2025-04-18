import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema } from '@/presentation/validation/authSchemas'
import { Link, useNavigate } from 'react-router'
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

export const SignInForm = ({onSubmit}: {onSubmit: (credentials: { email: string; password: string }) => void}) => {
  const navigate = useNavigate()
  const { user, isError, isLoading, isAuth } = useSelector((state: { auth: AuthState }) => state.auth)
  const form = useForm({ resolver: zodResolver(signInSchema) })

  const handleSubmit = ({ email, password }: { email: string; password: string }) => {
    onSubmit({ email, password })
  }


  useEffect(() => {
    console.log('state', user)
    if (!isError && user && isAuth) {
      navigate('/home', { replace: true })
    } else {
      toast('Error al iniciar sesión',{ description: "Contacte con su administrador.",})
    }
  }, [user, isError, isAuth])

  const checkState = () => {
    console.log('newSate', user)
  }
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
                        placeholder='m@example.com'
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
                        placeholder='Enter your password'
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
                Sign in
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {isLoading && <Spinner />}

      <div>
        <button onClick={checkState}>revisar state</button>
      </div>
    </>
  )
}
