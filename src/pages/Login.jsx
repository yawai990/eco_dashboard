import React from 'react';
import { InputLabel, Button, Text } from '../components';
import { BsEyeSlash } from 'react-icons/bs';

const Login = () => {
  return (
    <section className='w-screen h-screen flex justify-center items-center'>

            <div className='w-[380px] bg-white rounded border border-stone-300 p-3 drop-shadow-sm'>
        <Text title={'log in'} center size={27} textCase='capitalize' />

        <form>

        <div className='bg-stone-100 rounded mt-3 px-2'>
        <InputLabel label={'email'} name='login_email' bold no_border no_margin px py />  
     
        </div>

        <div className='bg-stone-100 rounded my-3 px-2 flex items-center'>
        <InputLabel label={'Password'} name='login_password' bold no_border no_margin px py capitalize inputType={'password'} />  
        <Button btnType={'button'} btnIcon={<BsEyeSlash />} btnBg='white' rounded rectangle size={24}/>
        </div>

        <Button btnText={'log in'} btnBg={'#FB2576'} btnColor='white' />
        </form>
        </div>
    </section>
  )
}

export default Login