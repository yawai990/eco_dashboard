import React from 'react';
import { InputLabel, Text, Button } from '../';

const PersonalInfo = () => {
  return (
    <>
        <section>

            <div className="bg-white droop-shadow-lg tracking-wider">
            <Text title={'Personal Details'} size={26} />
            </div>

            <div className='bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'Full Name'} bold no_border no_margin px py inputValue={'Thomas Smith'} />  
            </div>

            <div className="flex justify-between gap-5">
            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'Birthdate'} bold no_border no_margin px py inputValue={'20/12/1996'} />  
            </div>
            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'nationality'} bold no_border no_margin px py capitalize inputValue={'brazil'} />  
            </div>
            </div>

            <div className="flex justify-between gap-5">
            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'Gender'} bold no_border no_margin px py capitalize inputValue={'female'} />  
            </div>
            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'skin color'} bold no_border no_margin px py capitalize inputValue={'white'} />  
            </div>
            </div>

            <div className="flex justify-between gap-5">
            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'state'} bold no_border no_margin px py capitalize inputValue={'sao paulo'} />  
            </div>
            <div className='w-[50%] bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'city'} bold no_border no_margin px py capitalize inputValue={'campinas'} />  
            </div>
            </div>
            </section>

            <section className='border-t border-stone-300 mt-4 pt-3'>
            <div className="bg-white droop-shadow-lg tracking-wider">
            <Text title={'Contact'} size={26} />
            </div>

            <div className='bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'email'} bold no_border no_margin px py inputValue={'thomassmith@234gmail.com'} />  
            </div>

            <div className='bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'Phone Number'} bold no_border no_margin px py capitalize inputValue={'132-2342-23'} />   
            </div>

            <div className='bg-stone-100 rounded mt-3 px-2'>
            <InputLabel label={'address'} bold no_border no_margin px py capitalize inputValue={'512 Sshearwood Forest Drive'} />   
            </div>

            </section>
    </>
  )
}

export default PersonalInfo