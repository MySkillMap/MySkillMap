<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ViewResources from './ViewResources';


//import AuthPage from './AuthPage';
=======

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PathCard from "./PathCard.tsx";
import React from "react";
>>>>>>> dev



createRoot(document.getElementById("root")!).render(
  <StrictMode>
<<<<<<< HEAD
    
    <ViewResources />
      {/* <AuthPage /> */}
   

   
  </StrictMode>,
)
=======
      <AuthPage />
   
    <br></br>

    <PathCard
      title="Learning Path"
      description="Description"
      progress={0}
      inProgress={0}
      notStarted={0}
      completed={0}
    />
    <PathCard
      title="Learning Path"
      description="Description"
      progress={0}
      inProgress={0}
      notStarted={0}
      completed={0}
    />
    <PathCard
      title="Learning Path"
      description="Description"
      progress={0}
      inProgress={0}
      notStarted={0}
      completed={0}
    />
  </StrictMode>
);
>>>>>>> dev
