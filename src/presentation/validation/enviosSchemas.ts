import { z } from 'zod';
import { ProductTypeEnum } from '@/domain/enums/envios.enum';

export const EnviosSchema = z.object({
  productType: z.nativeEnum(ProductTypeEnum, { required_error: "El tipo de producto es requerido" }),
  street: z.string().min(3, "La calle debe tener al menos 3 caracteres").max(100),
  city: z.string().min(2, "La ciudad debe tener al menos 2 caracteres").max(50),
  state: z.string().min(2, "El estado debe tener al menos 2 caracteres").max(50),
  zipCode: z.string().min(4, "El código postal debe tener al menos 4 caracteres").max(10),
  weight: z.number({ invalid_type_error: "El peso debe ser numérico" }).positive("El peso debe ser mayor a 0"),
  height: z.number().positive("La altura debe ser mayor a 0"),
  width: z.number().positive("El ancho debe ser mayor a 0"),
  length: z.number().positive("El largo debe ser mayor a 0"),
});