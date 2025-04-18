import { Suspense } from 'react'
import { BrowserRouter } from 'react-router'
import { Spinner } from '@/shared/components/customComponents'
import { Toaster } from '@/shared/components/ui/sonner'
import AppRoutes from '@/presentation/routes'






const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spinner />}>
                <AppRoutes />
                <Toaster />
            </Suspense>
        </BrowserRouter>

    )
}

export default App
