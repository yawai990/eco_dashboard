import React,{ useState } from 'react';
import { Button, Text, InputLabel } from '../components';
import { TiArrowBack } from 'react-icons/ti';
import { AiFillQuestionCircle } from 'react-icons/ai';
import FileBase64 from 'react-file-base64';

const Addnewemployee = () => {
  const [ staffImg, setStaffImg ] = useState('');

  return (
    <section className="w-full p-3 flex justify-center items-start">

    <main className='w-[95%] p-3 h-full'>
      <div className='mt-3 flex justify-between'>

        <div className='flex items-center gap-3'>
        <Text title={'add staff'} textCase='capitalize' size={24} color={'text-head-gray'} />
        <div><AiFillQuestionCircle className='text-slate-600 text-lg' /></div>
        </div>

      <button 
      onClick={() => history.back()}
      className='bg-primary w-10 h-10 flex justify-center items-center text-4xl text-stone-100 rounded-full'>
        <TiArrowBack />
        </button>
    </div>

    <form className='mt-3 bg-[#fff] p-4 drop-shadow rounded'>

      <div className='flex gap-2'>

       <main className='w-[50%]'>

          <InputLabel inputType={'text'} size={15} label={'Name/Sirname'} />

          <section className='w-full flex'>

          <div className='w-[40%] flex justify-center items-center'>
           <img src={staffImg || '/profile.jpg'} className='block w-[80%] h-[80%] max-h-[180px] object-cover rounded' />
          </div>

          <div className='w-[60%]'>
          <InputLabel inputType={'text'} size={15} label={'birth day'} />

          <div className='flex gap-1'>
          <InputLabel inputType={'text'} size={15} label={'language'} />
          <InputLabel inputType={'text'} size={15} label={'gender'} />
          </div>

          <div>
            <Text title={'staff image'} capitalize />
          <FileBase64 name='img' type='file' multiple={ false } onDone={e=>setStaffImg(e.base64)}  />
          </div>

          </div>

          </section>

       </main>

       <main className='w-[50%]'>

       <InputLabel inputType={'text'} size={15} label={'address'} />
       <InputLabel inputType={'text'} size={15} label={'phone number'} />
       
       <div className="w-full flex gap-1 justify-between">
       <InputLabel inputType={'text'} size={15} label={'mail address'} />
       <InputLabel inputType={'text'} size={15} label={'nationality'} />
       </div>

       </main>
       </div>

        <div className='flex justify-end mr-20 mt-10'>
       <Button btnText={'save information'} btnBg={'#655DBB'} btnColor='white' />
        </div>
    </form>

   </main>
   </section>
  )
}

export default Addnewemployee