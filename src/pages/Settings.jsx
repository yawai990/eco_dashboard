import React,{ useState, useEffect } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import { Text, InputLabel, Button, Loading } from '../components';
import * as api from '../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const [ new_pass_match, set_new_pass_match ]  = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ userInfo, setUserInfo ] = useState({});
  const [ showPassword, setShowPassword ] = useState({ curPassword : false, new_password : false, confirm_password : false});;

  const handleUpdateUser = async (e) =>{
    e.preventDefault();

    const elements = e.currentTarget.elements;

    const name = elements.name.value;
    const email = elements.email.value;
    const address = elements.address.value;
    const confirm_password = elements.confirm_password.value;
    const new_password = elements.new_password.value;
   if(new_password !== confirm_password){
    set_new_pass_match(true)
   }else{
    //run api
    await api.updateUser(userInfo._id,{name,email,address,new_password})
    .then(resp => {
      const { success, message } = resp.data;
      if(success){
        toast(message)
        setShowPassword({ 
          curPassword : false,
          new_password : false,
          confirm_password : false
        });

        setTimeout(() => {
            navigate('/overview')
        }, 1500);
      }
    })
    .catch(err => console.log(err))
    set_new_pass_match(false)
   }
  }
  const User = async (id) => {
    setLoading(true)
    await api.getUser(id)
    .then(resp => {
      setUserInfo(resp.data[0])
      setLoading(false)
    })
    .catch(err => console.log(err));
  };

  useEffect(() => {
    const userInfo =  JSON.parse(localStorage.getItem('userInfo'));

    User(userInfo.user._id)
  }, []);


  if(loading){
    return <Loading />
  }
  return (
    <section className="w-full flex justify-center items-start">
    <main className='w-[95%] p-3 h-full bg-white drop-shadow mt-5 z-0'>

    <form onSubmit={handleUpdateUser}>
      <div className="flex gap-5">

    <section className='w-[50%]'>
    <Text title={'Edit Profile'} textCase='capitalize' size={20} color={'text-head-gray'} />

    <div className="border border-stone-200 bg-white px-3 py-1 rounded mt-4">

      {
        ['name','email','address'].map((c,i)=>(
        <div key={`${c}-${i}`} className='bg-stone-100 rounded mt-3 px-2'>
        <InputLabel label={c} name={c} bold no_border no_margin px py capitalize inputValue={userInfo[c] || ''} />  
        </div>
        ))
      }

    </div>
   </section>

   <section className='w-[50%]'>
    <Text title={'Change Password'} textCase='capitalize' size={20} color={'text-head-gray'} />

    <div className="border border-stone-200 bg-white px-3 py-1 rounded mt-4">

      {/* <PasswordFormControl showPasswordFun={() => setShowPassword({...showPassword,curPassword : !showPassword.curPassword})} labelName={'Current Password'} name={'cur_password'} type={showPassword.curPassword} value={'3224'} /> */}
      <PasswordFormControl showPasswordFun={() => setShowPassword({...showPassword,new_password : !showPassword.new_password})} labelName={'new Password'} name={'new_password'} type={showPassword.new_password} value={''} />
      { new_pass_match && <span className='text-red-600 text-[13px]'>Password should be match</span> } 

      <PasswordFormControl showPasswordFun={() => setShowPassword({...showPassword,confirm_password : !showPassword.confirm_password})} labelName={'confirm Password'} name={'confirm_password'} type={showPassword.confirm_password} value={''} />
      { new_pass_match && <span className='text-red-600 text-[13px]'>Password should be match</span> } 

        </div>
   </section>

      </div>

      <div className='mt-4'>
      <Button btnText={'save'} btnBg='#FB2576' btnColor='white' />
      </div>

      </form>
   </main>
   </section>
  )
};

const PasswordFormControl = ({ labelName, name, type, value, btnType, showPasswordFun }) =>{
  return <div className='bg-stone-100 rounded mt-3 px-2 flex items-center'>
  <InputLabel required label={labelName} name={name} bold no_border no_margin px py inputType={type ? 'type':'password'} inputValue={value} />  
  <Button btnfun={showPasswordFun} btnType={btnType || 'button'} btnIcon={type ? <AiFillEye />:<BsEyeSlash />} btnBg='white' rounded rectangle size={24}/>
  </div>
}

export default Settings