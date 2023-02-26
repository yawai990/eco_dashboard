import React, { useState, useEffect } from 'react';
import { Sidebar, ProfileBar } from './components';
import { Login } from './pages';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  const [ isLogin, setIsLogin ] = useState(false);
  const navigate = useNavigate();


  useEffect(() =>{
  const data =  JSON.parse(localStorage.getItem('userInfo'));
  
  if(data && data.isAdmin) {
    setIsLogin(true)
  } 
  setIsLogin(false);
  navigate('/')
  }, [])
  // const { isLoading, isError, data, error } = useQuery('todos', api.loginUser)

  if(!isLogin) {
    return <Login setIsLogin={setIsLogin} />
  }
  return (
    <main className='max-w-screen min-h-screen flex overflow-x-hidden'>
        <Sidebar />
        <ToastContainer pauseOnHover={false} />

        <div className='w-[80%] px-4'>
        <ProfileBar />  
        <Outlet />
        </div>
    </main>
  )
}

export default Layout