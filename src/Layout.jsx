import React, { useState, useEffect } from 'react';
import { Sidebar, ProfileBar } from './components';
import { Login } from './pages';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  const [ isLogin, setIsLogin ] = useState(false);
  const navigate = useNavigate();
  const [ darkTheme, setDarkTheme ] = useState(false);


  useEffect(() =>{
  const data =  JSON.parse(localStorage.getItem('userInfo'));

 setDarkTheme(JSON.parse(localStorage.getItem('theme')));
  
  if(data && data.isAdmin) {
    setIsLogin(true)
  } 
  setIsLogin(false);
  navigate('/')
  }, []);

  if(!isLogin) {
    return <Login setIsLogin={setIsLogin} />
  }
  return (
    <section className={`${darkTheme ? 'dark':''}`}>

    <main className={`max-w-screen min-h-screen flex overflow-x-hidden dark:bg-neutral-700 duration-500`}>

        <Sidebar />
        <ToastContainer pauseOnHover={false} />

        <div className='w-[80%]'>
        <ProfileBar theme={darkTheme} setDarkTheme={setDarkTheme} />  
        <div className="w-full px-4 ">
        <Outlet />
        </div>
        </div>

    </main>
    </section>
  )
}

export default Layout