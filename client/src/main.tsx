import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ViewResources from './ViewResources';


//import AuthPage from './AuthPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <ViewResources />
      {/* <AuthPage /> */}
   

   
  </StrictMode>,
)
