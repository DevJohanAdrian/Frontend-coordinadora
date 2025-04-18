import { z } from 'zod'

const minMaxValues = {
    minLength: (amount: number) => `You must enter at least ${amount} characters.`,
    maxLength: (amount: number) => `You must enter a maximum of ${amount} characters.`
}

const AUTH_VALIDATIONS = {
    firstName: {
        empty: 'Por favor ingresa tu nombre.',
        ...minMaxValues
    },
    lastName: {
        empty: 'Por favor ingresa tu apellido',
        ...minMaxValues
    },
    email: {
        empty: 'You must enter your email.',
        invalid: 'Invalid email address.'
    },
    password: {
        empty: 'You must enter your password.',
        ...minMaxValues
    },
    confirmPassword: {
        valid: 'Las contraseñas no coinciden.',
        empty: 'Por favor ingresa tu contraseña.',
        ...minMaxValues
    }
}



export const signInSchema = z.object({
    email: z
        .string({ required_error: AUTH_VALIDATIONS.email.empty })
        .email({ message: AUTH_VALIDATIONS.email.invalid }),

    password: z
        .string({ required_error: AUTH_VALIDATIONS.password.empty })
        .min(6, { message: AUTH_VALIDATIONS.password.minLength(6) })
        .max(16, { message: AUTH_VALIDATIONS.password.maxLength(16) })
})

export const signUpSchema = z.object({
    email: z
        .string({ required_error: AUTH_VALIDATIONS.email.empty })
        .email({ message: AUTH_VALIDATIONS.email.invalid }),

    password: z
        .string({ required_error: AUTH_VALIDATIONS.password.empty })
        .min(6, { message: AUTH_VALIDATIONS.password.minLength(6) })
        .max(16, { message: AUTH_VALIDATIONS.password.maxLength(16) })
})



