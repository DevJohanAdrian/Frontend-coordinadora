import { z } from 'zod';
import { ProductTypeEnum } from '@/domain/enums/envios.enum';

export const EnviosSchema = z.object({
  productType: z.nativeEnum(ProductTypeEnum, { required_error: "El tipo de producto es requerido" }),
  street: z.string().min(3, "La calle debe tener al menos 3 caracteres").max(100),
  city: z.string().min(2, "La ciudad es requerida").max(100),
  state: z.string().min(2, "El departamento es requerido").max(100),
  zipCode: z.string().min(4, "El código postal debe tener al menos 4 caracteres").max(10),
  weight: z
  .string()
  .min(1, "El peso es obligatorio")
  .transform((val) => Number(val))
  .pipe(
    z.number({ invalid_type_error: "El peso debe ser numérico" })
      .positive("El peso debe ser un número positivo")
      
  ),
  height: z
  .string()
  .min(1, "La altura es obligatoria")
  .transform((val) => Number(val))
  .pipe(
    z.number({ invalid_type_error: "La altura debe ser numérica" })
      .positive("La altura debe ser un número positivo")
  ),
  width: z
  .string()
  .min(1, "El ancho es obligatorio")
  .transform((val) => Number(val))
  .pipe(
    z.number({ invalid_type_error: "El ancho debe ser numérico" })
      .positive("El ancho debe ser un número positivo")
  ),
  length: z
  .string()
  .min(1, "El largo es obligatorio")
  .transform((val) => Number(val))
  .pipe(
    z.number({ invalid_type_error: "El largo debe ser numérico" })
      .positive("El largo debe ser un número positivo")
  ),
}).passthrough();

