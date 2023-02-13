import React,{ useState } from 'react';
import { InputLabel, Button, Text } from '../components';
import { BsEyeSlash } from 'react-icons/bs';
import * as api from '../api';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsLogin}) => {
  const navigate = useNavigate();
  const [ error, setError ] = useState('');

  const handleLogin = async (e) =>{
    e.preventDefault();

    const elements = e.currentTarget.elements;
    const email = elements.login_email.value;
    const password = elements.login_password.value;

    await api.loginUser({ email, password})
    .then(resp => {
      if(resp.data.userLoggedIn.isAdmin){
        navigate('/')
        localStorage.setItem('userInfo',JSON.stringify(resp.data.userLoggedIn));
        setIsLogin(true)
        setError('')
      }else{
        setIsLogin(false)
        setError({ message :'you are not authenticated for this website, please contact admin'})
      }
    })
    .catch(err => alert( err.message + ',Please Try again Later'))

    elements.login_email.value = '';
    elements.login_password.value = '';

  }
  return (
    <section className='w-screen h-screen flex justify-center items-center'>

                <div className='w-[380px] bg-white rounded border border-stone-300 p-3 drop-shadow-sm'>
        <Text title={'log in'} center size={27} textCase='capitalize' />

        <form onSubmit={handleLogin}>

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