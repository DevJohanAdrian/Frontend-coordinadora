import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema } from '@/presentation/validation/authSchemas'

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

export const SignUpForm = ({onSubmit}: {onSubmit: (credentials: { nombres: string; apellidos: string; email: string; password: string; confirmPassword: string }) => void}) => {
  const form = useForm({ resolver: zodResolver(signUpSchema) })
  const handleSubmit = (data: { nombres: string; apellidos: string; email: string; password: string; confirmPassword: string }) => {
    onSubmit(data)
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
              name='nombres'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>{'Nombres'}</FormLabel>
                    <FormControl>
                      <Input
                        id='nombres'
                        name='nombres'
                        placeholder={'Introduce tus nombres'}
                        type='text'
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
              name='apellidos'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>{'Apellidos'}</FormLabel>
                    <FormControl>
                      <Input
                        id='apellidos'
                        name='apellidos'
                        placeholder={'Introduce tus apellidos'}
                        type='text'
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
              name='email'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>{'Email'}</FormLabel>
                    <FormControl>
                      <Input
                        id='email'
                        name='email'
                        placeholder={'johndoe@example.com'}
                        type='email'
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
                    <FormLabel>{'Password'}</FormLabel>
                    <FormControl>
                      <Input
                        id='password'
                        name='password'
                        placeholder={'Introduce tu contraseña.'}
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>{'Confirm Password'}</FormLabel>
                    <FormControl>
                      <Input
                        id='confirmPassword'
                        name='confirmPassword'
                        placeholder={'Confirma tu contraseña.'}
                        // autoComplete="current-password"
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />

            <div className='flex items-center justify-center'>
              <Button type='submit' className='flex-1'>
                {'¡Regístrate!'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}
