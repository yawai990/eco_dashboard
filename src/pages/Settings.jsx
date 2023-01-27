import React from 'react';
import { Text } from '../components';

const Settings = () => {
  return (
    <section className="w-full p-3 flex justify-center items-start">
    <main className='w-[95%] p-3 h-full'>
    <div className='mt-3 '>
    <Text title={'settings'} textCase='capitalize' size={24} color={'text-head-gray'} />
   </div>
   </main>
   </section>
  )
}

export default Settings