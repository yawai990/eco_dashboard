import React, { useState } from 'react';
import { Sidebar, ProfileBar } from './components';
import { Login } from './pages';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [ isLogin, setIsLogin ] = useState(true);

  if(!isLogin) {
    return <Login />
  }
  return (
    <main className='max-w-screen min-h-screen flex overflow-x-hidden'>
        <Sidebar />

        <div className='w-full px-4'>
        <ProfileBar />  
        <Outlet />
        </div>
    </main>
  )
}

export default Layout