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
import { useEffect, useState } from 'react'
import { ProductTypeEnum, StatusEnum } from '@/domain/enums/envios.enum'

export const EnviosForm = () => {
  const navigate = useNavigate()
  const [id, setId]= useState()
 
  
  const form = useForm({
    resolver: zodResolver(EnviosSchema),
    defaultValues: {
      productType: null,
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



  const submitForm = (data) => {
    onSubmitCreateEdit(data);
  };

  const handleDelete = (id) => {
    onDelete(id)
  }
  return (
    <Card>
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
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='name'>{t('name')}*</FormLabel>
                        <FormControl>
                          <Input
                            id='name'
                            type='text'
                            name='name'
                            maxLength='80'
                            autoComplete='off'
                            placeholder={t('enter_product_name_placeholder')}
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
                  name='sku'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='sku'>{t('sku')}*</FormLabel>
                        <FormControl>
                          <Input
                            id='sku'
                            type='text'
                            name='sku'
                            maxLength="16"
                            autoComplete='off'
                            placeholder={t(
                              'enter_unique_product_code_placeholder'
                            )}
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

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='category'
                  render={({ field }) => {

                    return (
                      <FormItem>
                        <FormLabel htmlFor='category'>{t('category')}*</FormLabel>
                        <Select
                        //   onValueChange={field.onChange}
                          onValueChange={code => {
                            // Buscar el objeto completo por el `code`


                            if (dataCategory?.data.length > 0){
                              const selectedCategory= dataCategory.data.find(
                                item => item.code === code
                              )
                              if (selectedCategory) {
                                field.onChange(selectedCategory) // Asignar el objeto completo
                              }
                            }
                          
                          }}
                          value={field.value?.code}>
                          <FormControl id='category'>
                            <SelectTrigger>
                              <SelectValue placeholder={t('select_category')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {dataCategory?.data.map((item, index) => (
                              <SelectItem value={item.code} key={index}>
                                {item.description}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='provider'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='provider'>{t('provider')}*</FormLabel>
                        <Select
                                  onValueChange={code => {
                                    if (dataProviders?.data.length > 0){
                                      // Buscar el objeto completo por el `code`
                                    const selectedProvider= dataProviders.data.find(
                                      item => item.code === code
                                    )
                                    if (selectedProvider) {
                                      field.onChange(selectedProvider) // Asignar el objeto completo
                                    }
                                    }
                                    
                                  }}
                                  value={field.value?.code}>
                          <FormControl id='provider'>
                            <SelectTrigger>
                              <SelectValue placeholder={t('select_provider')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {dataProviders?.data.map((item, index) => (
                              <SelectItem value={item.code} key={index}>
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>

              <div className='space-x-2'>
                <FormField
                  control={form.control}
                  name='status'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='status'>{t('status')}*</FormLabel>
                        <Select
                                   onValueChange={code => {
                                    if (datastatus?.data.length > 0){
                                       // Buscar el objeto completo por el `code`
                                    const selectedStatus = datastatus.data.find(
                                      item => item.code === code
                                    )
                                    if (selectedStatus) {
                                      field.onChange(selectedStatus) // Asignar el objeto completo
                                    }
                                    }
                                   
                                  }}
                                  value={field.value?.code}>
                          <FormControl id='status'>
                            <SelectTrigger>
                              <SelectValue placeholder={t('select_status')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {datastatus?.data.map((item, index) => (
                              <SelectItem value={item.code} key={index}>
                                {item.description}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
            </div>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              <div className='space-y-2'>
                <FormField
                  control={form.control}
                  name='price'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='price'>{t('price')}*</FormLabel>
                        <FormControl>
                          <Input
                            id='price'
                            type='number'
                            placeholder='0.00'
                            name='price'
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
                  name='cost'
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor='price'>{t('cost')}*</FormLabel>
                        <FormControl>
                          <Input
                            id='cost'
                            type='number'
                            placeholder='0.00'
                            name='cost'
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

            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => {
                  return (
                    <FormItem className='flex flex-col flex-auto col-span-2'>
                      <FormLabel htmlFor='description'>
                        {t('description')}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id='description'
                          placeholder={t(
                            'detailed_product_description_placeholder'
                          )}
                          className='resize-none'
                          autoComplete='off'
                          maxLength={2000}
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
              <div className='flex gap-2'>
                <div className='flex-1'>
                  <FormField
                    className='flex-initial'
                    control={form.control}
                    name='barcode'
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel htmlFor='barcode'>
                            {t('barcode')}
                          </FormLabel>
                          <FormControl>
                            <Input
                              id='barcode'
                              type='text'
                              name='barcode'
                              autoComplete='off'
                              placeholder={t(
                                'generate_barcode_automatically_placeholder'
                              )}
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
                  <Button
                    className='mt-8'
                    type='button'
                    variant='outline'
                    onClick={generateBarcode}>
                    <LuBarcode className='w-4 h-4 mr-2' />
                    {t('generate')}
                  </Button>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-between gap-3 mt-5 md:justify-normal'>
              <Button
                type='button'
                variant='secondary'
                onClick={() => {
                  navigate('/home', { replace: true })
                }}>
                {t('cancel')}
              </Button>
              {id && (
                  <Button
                    type='button'
                    variant='destructive'
                    onClick={() => {
                      handleDelete(id)
                    }}>
                    {t('delete')}
                  </Button>
                )}
              <Button type='submit' variant='info'>
                {t('save')}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
