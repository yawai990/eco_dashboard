import React, { useState } from 'react';
import { InputLabel, Text, Button } from '../';
import { languages, gender } from '../data/data';
import SeleteControl from './SelectControl';
import countries from '../data/country.json';

const PersonalInfo = ({ data }) => {
  const [ selectedData, setSelectedData ] = useState({nationality : '', language : '', gender:'', birthDate:'',employmentDate:''});

  return (
    <>
        <section>

            <div className="bg-white droop-shadow-lg tracking-wider">
            <Text title={'Personal Details'} size={26} />
            </div>

            <div className='bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'Full Name'} bold no_border no_margin capitalize px py inputValue={data.name} />  
            </div>

            <div className="flex justify-between gap-5">
            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'Birthdate'} bold no_border no_margin px py inputValue={data.birthDate} />  
            </div>

            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <SeleteControl title={'Nationality'} data={countries} disabled value={countries.filter(e=> e.value === data.nationality)[0]} name='nationality' setSelectedData={setSelectedData} selectedData={selectedData} />
            </div>

            </div>

            <div className="flex justify-between gap-5">
            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'Gender'} bold no_border no_margin px py capitalize inputValue={gender.filter(l => l.value === data.gender)[0].label} />  
            </div>
           
            </div>

            <div className="flex justify-between gap-5">
            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'state'} name='state' bold no_border no_margin px py capitalize inputValue={data.state} />  
            </div>
            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'city'} name='city' bold no_border no_margin px py capitalize inputValue={data.city} />  
            </div>
            </div>
            </section>

            <section className='border-t border-stone-300 mt-4 pt-3'>
            <div className="bg-white droop-shadow-lg tracking-wider">
            <Text title={'Contact'} size={26} />
            </div>

            <div className='bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'email'} bold no_border no_margin px py inputValue={data.email} />  
            </div>

            <div className='bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'Phone Number'} bold no_border no_margin px py capitalize inputValue={data.phone} />   
            </div>

            <div className='bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'address'} bold no_border no_margin px py capitalize inputValue={data.address} />   
            </div>

            <div className='flex justify-end items-center mt-5'>
              <Button btnText={'Update Info'} btnBg={'#655DBB'} btnColor='white' />
            </div>

            </section>
    </>
  )
}

export default PersonalInfo