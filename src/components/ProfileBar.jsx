import React from 'react';
import { BsBell } from 'react-icons/bs';
import Button from './Button';

const ProfileBar = () => {
  return (
    <main className='flex justify-end mt-6'>
    <div className='flex items-center gap-4 bg-primary text-white px-2 rounded py-1'>
        
        <div>
          <Button btnIcon={<BsBell />} btnBg='white' btnColor={'black'} size={26} rectangle />
        </div>

        <div className='flex gap-2 items-center'>
            <div className="w-10 h-10 rounded overflow-hidden">
                <img src='/profile.jpg' className='w-full h-full object-cover' />
            </div>
                <p>Thomas Jhon</p>
        </div>
    </div>
    </main>
  )
}

export default ProfileBar