import React,{ useState } from 'react';
import { InputLabel, Button, Text } from '../components';
import { BsEyeSlash } from 'react-icons/bs';
import * as api from '../api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({setIsLogin}) => {
  const navigate = useNavigate();
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState('');

  const handleLogin = async (e) =>{
    e.preventDefault();
    setLoading(true)

    const elements = e.currentTarget.elements;
    const email = elements.login_email.value;
    const password = elements.login_password.value;

    await api.loginUser({ email, password})
    .then(resp => {
      setLoading(false)
      if(resp.data.userLoggedIn.user.isAdmin){
        toast.success("You're successfully logged in");

        setTimeout(()=>{

          localStorage.setItem('userInfo',JSON.stringify(resp.data.userLoggedIn));
          navigate('/')
          setIsLogin(true)
          setError('')
        },1500)
      }else{
        setIsLogin(false)
        setError({ message :'you are not authenticated for this website, please contact admin'})
      }
    })
    .catch(err => {
      const { success, message} = err.response.data;
            if(!success){
        toast.error(message)
      }
    })

    elements.login_email.value = '';
    elements.login_password.value = '';

  };
  
  return (
    <section className='w-screen h-screen flex justify-center items-center'>

      <ToastContainer />

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

        <Button disabled={loading ? true:false} btnText={loading ? 'Loading...':'log in'} btnBg={'#FB2576'} btnColor='white' />
        </form>
        </div>
    </section>
  )
}

export default Login