import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Crud from './components/Crud/Crud.jsx'
import Add_employee from './components/Add_employee/Add_employee.jsx'
import Details from './components/Details/Details.jsx'
import EmployeeContextProvider from './context/EmployeeContextProvider.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Crud/>
  },
  {
    path: "/employeeadd",
    element: <Add_employee/>
  },
  {
    path: "/details",
    element: <Details/>
  },
  {
    path: "/demo",
    element: <App/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeContextProvider>
       <RouterProvider router={router}/>
    </EmployeeContextProvider>
    
  </StrictMode>,
)
