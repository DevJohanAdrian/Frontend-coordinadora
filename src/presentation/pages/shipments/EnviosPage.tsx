import { BackDashBoard, Spinner } from '@/shared/components/customComponents'
import { EnviosForm } from '@/presentation/components/shipments'
import { Shipment } from '@/domain/entities/Shipment'
import { ShipmentApiRepository } from '@/infrastructure/repositories/ShipmentApiRepository'
import { CreateShipmentUseCase } from '@/application/usecases/shipments/CreateShipmentUseCase'
import {useState} from 'react'
import { toast } from 'sonner'

function EnviosPage() {
  const shipmentRepo = new ShipmentApiRepository();
  const createShipmentUseCase = new CreateShipmentUseCase(shipmentRepo);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitCreate = async (data: Shipment) => {
    setIsLoading(true);
    try {
      await createShipmentUseCase.execute(data);
      toast('Orden de envio creada correctamente.');
    } catch (error: any) {
      toast(error.message, { description: "Contacte con su administrador si el error persiste.",});
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <BackDashBoard
        link={'/home'}
        moduleName={'Orden de envio'}
      />
      <div className='relative'>
        {isLoading && <Spinner />}

          <main className='flex justify-center items-center min-h-[60vh] w-full'>
            <EnviosForm onSubmitCreate={handleSubmitCreate} />
          </main>
        </div>

    </>
  )
}
export default EnviosPage
