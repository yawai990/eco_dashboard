import React,{ useState } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import { Text, InputLabel, Button } from '../components';

const Settings = () => {
  const [ showPassword, setShowPassword ]  = useState({ name : '', show:false});

  return (
    <section className="w-full flex justify-center items-start">
    <main className='w-[95%] p-3 h-full bg-white drop-shadow mt-5'>

    <form>
      <div className="flex gap-5">

    <section className='w-[50%]'>
    <Text title={'Edit Profile'} textCase='capitalize' size={20} color={'text-head-gray'} />

    <div className="border border-stone-200 bg-white px-3 py-1 rounded mt-4">
    
    <div className='bg-stone-100 rounded mt-3 px-2'>
        <InputLabel label={'your name'} bold no_border no_margin px py capitalize inputValue={'thomas jhon'} />  
        </div>

        <div className='bg-stone-100 rounded mt-3 px-2'>
        <InputLabel label={'email'} bold no_border no_margin px py capitalize inputValue={'thomasjhon@gmail.com'} />  
        </div>

        <div className='bg-stone-100 rounded mt-3 px-2'>
        <InputLabel label={'address'} bold no_border no_margin px py capitalize inputValue={'2264 Royal Ln.Mewsa'} />  
        </div>

    </div>
   </section>

   <section className='w-[50%]'>
    <Text title={'Change Password'} textCase='capitalize' size={20} color={'text-head-gray'} />

    <div className="border border-stone-200 bg-white px-3 py-1 rounded mt-4">

    <div className='bg-stone-100 rounded mt-3 px-2 flex items-center'>
        <InputLabel label={'Current Password'} name='cur_password' bold no_border no_margin px py capitalize inputType={'password'} inputValue={'325423'} />  
        <Button btnType={'button'} btnIcon={<BsEyeSlash />} btnBg='white' rounded rectangle size={24}/>
        </div>

        <div className='bg-stone-100 rounded mt-3 px-2 flex items-center'>
        <InputLabel label={'new Password'} name='cur_password' bold no_border no_margin px py capitalize inputType={'password'} inputValue={'325423'} />  
        <Button btnType={'button'} btnIcon={<BsEyeSlash />} btnBg='white' rounded rectangle size={24}/>
        </div>

        <div className='bg-stone-100 rounded mt-3 px-2 flex items-center'>
        <InputLabel label={'confirm Password'} name='cur_password' bold no_border no_margin px py capitalize inputType={'password'} inputValue={'325423'} />  
        <Button btnType={'button'} btnIcon={<BsEyeSlash />} btnBg='white' rounded rectangle size={24}/>
        </div>

        </div>
   </section>

      </div>

      <Button btnText={'save'} btnBg='#FB2576' btnColor='white' />
      </form>
   </main>
   </section>
  )
}

export default Settings