import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/ui/form'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { EnviosSchema } from '@/presentation/validation/enviosSchemas'
import { useNavigate } from 'react-router'
import { ColombianCities, ProductTypeEnum, ProductTypeList, StatusEnum } from '@/domain/enums/envios.enum'
import { LabeledSeparator } from '@/shared/components/customComponents'
import { Shipment } from '@/domain/entities/Shipment'


export const EnviosForm = ({onSubmitCreate}: {onSubmitCreate: (data: Shipment) => void}) => {
  const navigate = useNavigate()
 
  const form = useForm({
    resolver: zodResolver(EnviosSchema),
    defaultValues: {
      productType: ProductTypeEnum.PAQUETES,
      street: '',
      city: '',
      state: '',
      zipCode: '',
      weight: '',
      height: '',
      width: '',
      length: '',
      status: StatusEnum.EN_ESPERA,
    }
  })



  const submitForm = (data: any) => {
    const shipment: Shipment = {
      ...data,
      status: StatusEnum.EN_ESPERA, // or whatever logic you want
    };
    onSubmitCreate(shipment);
  };

  return (
    <Card className='w-full '>
      <CardHeader>
        <CardTitle>{'Crear una nueva orden de envío '}</CardTitle>
        <CardDescription>{'Informacion del envio'}</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <Form {...form}>
          <form
            method='post'
            action=''
            id='envio-info-form'
            noValidate
            onSubmit={form.handleSubmit(submitForm)}
            className='flex flex-col flex-wrap gap-5'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>

              <div className='space-y-2  md:col-span-2'>
                <FormField
                  control={form.control}
                  name='productType'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Producto*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value ?? ProductTypeEnum.PAQUETES}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={"Seleccione tipo de producto"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ProductTypeList.map((status, index) => (
                            <SelectItem key={index} value={status.value}>
                              {status.value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>


            </div>
            <div className='w-full'>
            <LabeledSeparator label="Información del envío"  align="start" className="max-w-full"/>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='space-y-2'>
              <FormField
                  control={form.control}
                  name='city'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ciudad*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value ?? ProductTypeEnum.PAQUETES}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={"Seleccione una ciudad"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ColombianCities.map((city, index) => (
                            <SelectItem key={index} value={city.city}>
                              {city.city} ({city.department})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='state'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='state'>Departamento*</FormLabel>
                        <FormControl>
                          <Input
                            id='state'
                            type='text'
                            name='state'
                            maxLength="100"
                            autoComplete='off'
                            placeholder='Ingrese el departamento'
                            {...field}
                            value={field.value ?? ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='zipCode'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='zipCode'>Código postal*</FormLabel>
                        <FormControl>
                          <Input
                            id='zipCode'
                            type='text'
                            name='zipCode'
                            maxLength="100"
                            autoComplete='off'
                            placeholder='Ingrese el código postal'
                            {...field}
                            value={field.value ?? ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='street'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='street'>Dirección*</FormLabel>
                        <FormControl>
                          <Input
                            id='street'
                            type='text'
                            name='street'
                            maxLength="100"
                            autoComplete='off'
                            placeholder='Ingrese la dirección'
                            {...field}
                            value={field.value ?? ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
            </div>
            <LabeledSeparator label="Detalles de envío"  align="start" />

            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='weight'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='weight'>Peso en kg*</FormLabel>
                        <FormControl>
                          <Input
                            id='weight'
                            type='number'
                            placeholder='Minimo un 1 kg'
                            name='weight'
                            autoComplete='off'
                            {...field}
                            value={field.value ?? ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='length'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='length'>Dimensión en cm*</FormLabel>
                        <FormControl>
                          <Input
                            id='length'
                            type='number'
                            placeholder='Largo'
                            name='length'
                            autoComplete='off'
                            {...field}
                            value={field.value ?? ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='height'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='height'>Altura en cm*</FormLabel>
                        <FormControl>
                          <Input
                            id='height'
                            type='number'
                            placeholder='Altura'
                            name='height'
                            autoComplete='off'
                            {...field}
                            value={field.value ?? ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='width'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='width'>Ancho en cm*</FormLabel>
                        <FormControl>
                          <Input
                            id='width'
                            type='number'
                            placeholder='Ancho'
                            name='width'
                            autoComplete='off'
                            {...field}
                            value={field.value ?? ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
             
            </div>

            <div className='flex flex-wrap items-center justify-between gap-3 mt-5 md:justify-normal'>
              <Button type='button' variant='secondary' onClick={() => {
                  navigate('/home', { replace: true })
                }}>
                Cancelar
              </Button>
              <Button type='submit' >
                Guardar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
