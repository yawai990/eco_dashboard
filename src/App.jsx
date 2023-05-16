import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { Overview, Orders, Products,ProductEdit,ExpenseStatement, AddExpenseForm, ExpenseEditDelete, Promotion,Setting, Expense, Employee,EmployeeDetail,OrderDetails,Category, Addnewemployee } from './pages';
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
          path : '/products/promotion',
          element : <Promotion />
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
          path : '/employee/addnewemployee',
          element : <Addnewemployee />
        },
        {
          path : '/order/:id',
          element : <OrderDetails toast={toast} />
        },
        {
          path : '/expense',
          element : <Expense />
        },
        {
          path : '/expense/expenses',
          element : <AddExpenseForm />
        },
        {
          path : '/expense/statement',
          element : <ExpenseStatement />
        },
        {
          path : '/expense/editdelete',
          element : <ExpenseEditDelete />
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