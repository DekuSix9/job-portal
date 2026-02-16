import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,Navigate,RouterProvider,} from "react-router-dom";
import Main from './layout/Main';
import Home from './pages/Home';
import SaveContext from './layout/SaveContext';
import JobDetails from './pages/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
     {
      path:'/jobDetails/:id',
      element:<JobDetails></JobDetails>,
      loader:async()=>{
      const res=await fetch('/jobs.json');
        return res.json();
      }
     }
    
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SaveContext>
 <RouterProvider router={router} />
    </SaveContext>
  </StrictMode>,
)
