import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TheContextProvider } from './context/TheContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <TheContextProvider>
    <App />
  </TheContextProvider>
  // </StrictMode>,
)
