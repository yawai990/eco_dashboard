import React, { useState } from 'react';
import { Button, Text } from '../components';
import { TiArrowBack } from 'react-icons/ti';
import { BsPencil } from 'react-icons/bs';
import { InputLabel } from '../components';
import { PersonalInfo, Document, AdditionalData, Workdata } from '../components/employee';

const EmployeeDetail = () => {
  const [personCurInfo , setpersonCurInfo ] = useState(0);

  const handlePersonInfo = idx => setpersonCurInfo(idx);

   return (
    <section className="w-full p-3 flex justify-center items-start">

    <main className='w-[95%] p-3 h-full'>
      <div className='mt-3 flex justify-between'>
      <Text title={'employee details'} textCase='capitalize' size={24} color={'text-head-gray'} />
      <button 
      onClick={() => history.back()}
      className='bg-primary w-10 h-10 flex justify-center items-center text-4xl text-stone-100 rounded-full'>
        <TiArrowBack />
        </button>
    </div>

    <section className='flex flex-col md:flex-row gap-4 mt-4 '>
      <main className='w-full md:w-[25%]'>

        <div className='w-[60%] md:w-full p-2 relative'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawbu2JrjklDXztzp3XKgvUu3C-9pvV6jdCQ&usqp=CAU" alt="employee_image" className='w-full h-full object-contain rounded-md' />

          <div className='w-8 h-8 bg-white drop-shadow-md text-black absolute top-0 right-0 flex justify-center items-center rounded-full'>
          <button>
            <BsPencil />
          </button>
          </div>
        </div>

        <Text title={'Thomas Smith'} center />

        <div className='flex justify-center items-center my-2'>

          <div className='bg-blue-400 rounded-xl px-3 capitalize tracking-wider'>
          <Text title={'employee'} center size={14} />
          </div>

        </div>

          <section className='px-3'>

          <div className='bg-stone-100 rounded mt-3 px-2'>
        <InputLabel label={'staff ID'} bold no_border no_margin px py capitalize inputValue={'HR-0067'} />  
        </div>

          <div className='bg-stone-100 rounded mt-3 px-2'>
        <InputLabel label={'rank'} bold no_border no_margin px py capitalize inputValue={'manager'} />  
        </div>

          <div className='bg-stone-100 rounded mt-3 px-2'>
        <InputLabel label={'department'} bold no_border no_margin px py capitalize inputValue={'Sale & Marketting'} />  
        </div>

          <div className='bg-stone-100 rounded mt-3 px-2'>
        <InputLabel label={'department'} bold no_border no_margin px py capitalize inputValue={'Sale & Marketting'} />  
        </div>

          <div className='bg-stone-100 rounded mt-3 px-2'>
        <InputLabel label={'admission date'} bold no_border no_margin px py capitalize inputValue={'20-10-2013'} />  
        </div>

          </section>

        
            
      </main>

      <main className='lg:w-[75%] px-5'>

          <div className='flex items-center gap-3 mb-5' >
            <Button btnText={'Personal and contact data'} borderBottom={personCurInfo === 0} rectangle bold btnfun={() =>handlePersonInfo(0)} />
            <Button btnText={'documents'} borderBottom={personCurInfo === 1} bold btnfun={() =>handlePersonInfo(1)} />
            <Button btnText={'work data'} borderBottom={personCurInfo === 2} bold btnfun={() =>handlePersonInfo(2)} />
            <Button btnText={'additional data'} borderBottom={personCurInfo === 3} bold btnfun={() =>handlePersonInfo(3)} />
          </div>

          {personCurInfo === 0 && <PersonalInfo />}
          {personCurInfo === 1 && <Document />}
          {personCurInfo === 2 && <Workdata />}
          {personCurInfo === 3 && <AdditionalData />}
  

      </main>


    </section>

   </main>
   </section>
  )
}

export default EmployeeDetail