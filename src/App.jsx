import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { Overview, Orders, Products, Setting, Employee,EmployeeDetail } from './pages';


const App = () => {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout />,
      children : [
        {
          path : '/',
          element : <Overview />
        },
        {
          path : '/overview',
          element : <Overview />
        },
        {
          path : '/orders',
          element : <Orders />
        },
        {
          path : '/products',
          element : <Products />
        },
        {
          path : '/employees',
          element : <Employee />
        },
        {
          path : '/employee/:id',
          element : <EmployeeDetail />
        },
        {
          path : '/settings',
          element : <Setting />
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App