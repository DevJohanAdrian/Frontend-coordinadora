import { BackDashBoard, Spinner } from '@/shared/components/customComponents'
import { EnviosForm } from '@/presentation/components/envios'
function EnviosPage() {

  return (
    <>
      <BackDashBoard
        link={'/home'}
        moduleName={'Orden de envio'}
      />
      <div className='relative'>
        {isLoading && <Spinner />}

        <div className='container flex flex-col min-h-screen'>
          <main className='container flex-1 py-6'>
            <EnviosForm/>
          </main>
        </div>
      </div>
    </>
  )
}
export default EnviosPage
