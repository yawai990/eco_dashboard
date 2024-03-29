import React, { useState, useEffect } from 'react';
import { BsBell } from 'react-icons/bs';
import Button from './Button';
import { useQuery } from 'react-query';
import * as api from '../api';
import moment from 'moment/moment';
import { TiTimes } from 'react-icons/ti';
import Fade from 'react-reveal/Fade';
import Clock from './Clock/Clock';
import { BsFillSunFill,BsFillMoonStarsFill } from 'react-icons/bs';

const ProfileBar = ({ theme, setDarkTheme }) => {
  const [ showNoti, setShowNoti ] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const getNoti = async()=>{
   return await api.Notification()
    .then(resp => {
      const { status, notifications } = resp.data;
      if(status) {
        return notifications
      }
      else null
    })
    .catch( err => err)
  };

  const notiView = async() =>{
    await api.viewNotification()
    .then(resp =>{
      const { status, message } = resp.data;
      if(status){
        return message
      }
    })
    .catch(err => err)
  };
  const setTheme = () => {
    setDarkTheme(!theme);
    localStorage.setItem('theme',!theme)
  }
  const { isLoading, error, data } = useQuery([showNoti],() =>getNoti());

  return (
    <main className='flex justify-end mt-6 bg-white drop-shadow rounded sticky top-0 dark:bg-transparent dark:text-white'>
    <div className='w-full flex relative items-center justify-between gap-4 text-white px-2 rounded py-1'>

    {
            showNoti && 
          <div 
          className='min-w-[250px] absolute bg-white text-stone-700 dark:text-white dark:bg-stone-500 drop-shadow top-[50px] -right-20 -translate-x-1/2 px-3 py-2 rounded z-90'>
            <Fade top opposite>
            <div style={{
              rotate:'45deg'
            }} className='w-3 -top-1 left-3/4 translate-x-1 dark:bg-stone-500 h-3 rotate-45 bg-white absolute'></div>

            <button onClick={() =>{
              setShowNoti(false)
              notiView()
              }} className='ml-auto block p-0.7 hover:drop-shadow-xl rounded-full bg-white drop-shadow'><TiTimes className='text-lg text-red-400' /></button>

            {
             data ? data?.map(d => (    
              <div  key={d._id} className='w-full border-b border-slate-200 pb-2 pt-1'>
                  <p className='first-letter:uppercase text-sm text-clip'>{d.desc}</p>
                  <p className='text-[11px] text-end'>{moment(d.createdAt).fromNow()}</p>
                </div>
              )):
              <p className='first-letter:uppercase text-sm text-clip'>there is no notification</p>
            }
            </Fade>
            </div>
          }
          <Clock />

          <section className='flex items-center gap-1'>

        <button onClick={setTheme} className='w-[32px] h-[32px] p-1 text-xl bg-white text-stone-600 drop-shadow rounded-full flex justify-center items-center mr-2'>
          {
            theme ? <BsFillSunFill />:
          <BsFillMoonStarsFill />
          }
        </button>
        
        <div className='bg-white drop-shadow rounded-full p-1 relative'>
          {
            data?.length > 0 &&
          <div className='w-2 h-2 bg-red-400 rounded-full absolute top-1 right-1'></div>
          }
          <Button btnfun={() =>setShowNoti(true)} btnIcon={<BsBell />} btnColor={'black'} size={18} rectangle />
        </div>

        <div className='max-w-[140px] px-3 py-1 flex gap-1 items-center rounded text-stone-800'>
            <div className="w-8 h-8 rounded overflow-hidden">
                <img src='/profile.jpg' className='w-full h-full object-cover' />
            </div>
                <p>{userInfo.name}</p>
        </div>

        </section>
    </div>
    </main>
  )
}

export default ProfileBar