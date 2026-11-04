import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MSW === 'true') {
  const { network } = await import('virtual:msw')
  const { handlers } = await import('./mocks/handlers')

  network.configure({ handlers })
  await network.enable()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
