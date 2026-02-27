import { RouterProvider } from 'react-router-dom'
import { router } from './providers/router/router'
import { StoreProvider } from './providers/store/StoreProvider'

function App() {

  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  )
}

export default App
