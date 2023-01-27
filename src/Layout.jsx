import React from 'react';
import { Sidebar } from './components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='w-screen min-h-screen flex overflow-x-hidden'>
        <Sidebar />
        <Outlet />
    </main>
  )
}

export default Layout