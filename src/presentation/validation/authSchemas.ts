import { z } from 'zod'

const minMaxValues = {
    minLength: (amount: number) => `Por favor ingresa al menos ${amount} caracteres.`,
    maxLength: (amount: number) => `Por favor ingresa un máximo de ${amount} caracteres.`
}

const AUTH_VALIDATIONS = {
    nombres: {
        empty: 'Por favor ingresa tus nombres.',
        ...minMaxValues
    },
    apellidos: {
        empty: 'Por favor ingresa tus apellidos',
        ...minMaxValues
    },
    email: {
        empty: 'Por favor ingresa tu correo electrónico.',
        invalid: 'Por favor ingresa un correo electrónico válido.'
    },
    password: {
        empty: 'Por favor ingresa tu contraseña.',
        ...minMaxValues
    },
    confirmPassword: {
        valid: 'Las contraseñas no coinciden.',
        empty: 'Por favor confirma tu contraseña.',
        ...minMaxValues
    },

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
    nombres: z
        .string({ required_error: AUTH_VALIDATIONS.nombres.empty })
        .min(2, { message: AUTH_VALIDATIONS.nombres.minLength(2) })
        .max(16, { message: AUTH_VALIDATIONS.nombres.maxLength(16) }),
    apellidos: z
        .string({ required_error: AUTH_VALIDATIONS.apellidos.empty })
        .min(2, { message: AUTH_VALIDATIONS.apellidos.minLength(2) })
        .max(16, { message: AUTH_VALIDATIONS.apellidos.maxLength(16) }),
    email: z
        .string({ required_error: AUTH_VALIDATIONS.email.empty })
        .email({ message: AUTH_VALIDATIONS.email.invalid }),

    password: z
        .string({ required_error: AUTH_VALIDATIONS.password.empty })
        .min(6, { message: AUTH_VALIDATIONS.password.minLength(6) })
        .max(16, { message: AUTH_VALIDATIONS.password.maxLength(16) }),

    confirmPassword: z
        .string({ required_error: AUTH_VALIDATIONS.confirmPassword.empty })
        .min(6, { message: AUTH_VALIDATIONS.confirmPassword.minLength(6) })
        .max(16, { message: AUTH_VALIDATIONS.confirmPassword.maxLength(16) })
})



