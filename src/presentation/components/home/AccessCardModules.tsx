import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/shared/components/ui/card'
import { Link } from 'react-router'
import {
  ArrowRight,
  Newspaper,
  CalendarCheck2,
  Package,
  PackagePlus,
  Building2,
  Warehouse,
  ShoppingCart ,
  ArrowLeftRight,

} from 'lucide-react'
const CardModule = () => {
  return (
    <>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 '>
        <Card className='relative overflow-hidden transition-all group hover:shadow-lg hover:-translate-y-1'>
          <CardHeader className='p-6'>
            <div className='flex items-center gap-4'>
              <PackagePlus className='w-8 h-8 text-zinc-800' />
              <div>
                <CardTitle className='text-xl'>{'Envios'}</CardTitle>
                <CardDescription>{'Creacion y gestion de ordenes de envios'}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className='px-6 pb-6'>
            <Link
              to={'crear-envio'}
              className='flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
              prefetch={false}>
              {'Acceder'} <ArrowLeftRight className='w-4 h-4 ml-2' />
            </Link>
           
          </CardContent>
        </Card>

       
      </div>
 
    </>
  )
}

export default CardModule
