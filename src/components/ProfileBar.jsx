import React from 'react';
import { BsBell } from 'react-icons/bs';
import Button from './Button';

const ProfileBar = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <main className='flex justify-end mt-6'>
    <div className='flex items-center gap-4 text-white px-2 rounded py-1'>
        
        <div className='bg-white drop-shadow rounded-full p-1 relative'>
          <div className='w-2 h-2 bg-red-400 rounded-full absolute top-1 right-1'></div>
          <Button btnIcon={<BsBell />} btnColor={'black'} size={18} rectangle />
        </div>

        <div className='max-w-[140px] px-3 py-1 flex gap-1 items-center bg-primary rounded'>
            <div className="w-8 h-8 rounded overflow-hidden">
                <img src='/profile.jpg' className='w-full h-full object-cover' />
            </div>
                <p>{userInfo.name}</p>
        </div>
    </div>
    </main>
  )
}

export default ProfileBar