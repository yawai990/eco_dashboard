import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { Overview, Orders, Products,ProductEdit, Setting, Employee,EmployeeDetail,OrderDetails,Category } from './pages';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { toast } from 'react-toastify'

const queryClient = new QueryClient()

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
          path : '/category',
          element : <Category />
        },
        {
          path : '/products/:id',
          element : <ProductEdit />
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
          path : '/order/:id',
          element : <OrderDetails toast={toast} />
        },
        {
          path : '/settings',
          element : <Setting />
        },
      ]
    }
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App