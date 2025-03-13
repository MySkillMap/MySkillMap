import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthPage from './AuthPage';

//import App from './App.tsx'
//import PathCard from './PathCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthPage />
   
    <br></br>
   

  </StrictMode>,
)
