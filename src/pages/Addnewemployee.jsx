import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Text, InputLabel } from '../components';
import { TiArrowBack } from 'react-icons/ti';
import { AiFillQuestionCircle } from 'react-icons/ai';
import Select from 'react-select';
import * as api from '../api';
import countries from '../components/data/country.json';
import { languages, gender } from '../components/data/data';
import { uploadImageCloudFromEmploye } from './utils/utils';
import DatePicker from 'react-date-picker';
import { toast } from 'react-toastify';


const Addnewemployee = () => {
  const [ staffImg, setStaffImg ] = useState('');
  const [ preview, setPreview ] = useState('');
  const navigate = useNavigate();
  const [ selectedData, setSelectedData ] = useState({nationality : '', language : '', gender:'', birthDate:'',employmentDate:''});
 
  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    const elements = e.target.elements;

    const name = elements.employee_name.value;
    const address =elements.address.value;
    const position =elements.position.value;
    const staffID =elements.staffID.value;
    const city =elements.city.value;
    const phone =elements.phoneNumber.value;
    const email =elements.email.value;
    const state =elements.state.value;
    const dept =elements.department.value;
    const salary =elements.salary.value;
    const photo = elements.photo;

    const staffData = {...selectedData,name,address,salary,rank : position,HRCode : staffID,city,phone,email,state, dept}
    try {
      await uploadImageCloudFromEmploye(photo.files[0])
      .then(async (resp) => {
        if(resp.status === 200 && resp.statusText === 'OK'){
          await api.addNewEmployee({...staffData,image:`/${resp.data.public_id.split('/').slice(-1)}.${resp.data.format}`})
          .then(resp => {
            console.log(resp)
            const { status , message } = resp.data
            if(status){
              toast(message);
              setPreview('')
              setPreview('')
              navigate('/employees')
            }
          })
          .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
      
    } catch (error) {
      toast(error)
    }
  //  const objectUrl = URL.createObjectURL(photo.files[0])
  //  setPreview(objectUrl)
  //  setPreview(photo.files[0])
  }

  useEffect(() => {
    if (!staffImg) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(staffImg)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [staffImg]);

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setStaffImg(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setStaffImg(e.target.files[0])
};


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

    <form className='mt-3 bg-[#fff] p-4 drop-shadow rounded' onSubmit={handleSubmit}>

      <div className='flex gap-2'>

       <main className='w-[50%]'>

          <InputLabel inputType={'text'} name='employee_name' size={15} label={'Name/Sirname'} />

          <section className='w-full'>

            <main className='flex'>

          <div className='w-[40%] flex justify-center items-center'>
           <img src={preview || '/profile.jpg'} className='block w-[160px] h-[160px] max-h-[180px] border-4 border-slate-400 object-cover rounded-full' />
          </div>

          <div className='w-[60%]'>
          
          <div className=''>
          <div className='mb-2'>
          <Text title={'Birth Day'} />
          </div>
          <DatePicker className='w-full' onChange={e=>setSelectedData({...selectedData,birthDate:e})} format='dd-MM-y' name='birthDate' value={selectedData.birthDate} />
        </div>

          <SeleteControl title={'language'} data={languages} name='language' setSelectedData={setSelectedData} selectedData={selectedData} />

         <SeleteControl title={'Gender'} data={gender} name='gender' setSelectedData={setSelectedData} selectedData={selectedData} />
    
          <div className='mb-2'>
            <Text title={'staff image'} capitalize />
          {/* <FileBase64 name='img' type='file' multiple={ false } onDone={e=>setStaffImg(e.base64)}  /> */}
          <div className='border p-1 mt-2 border-neutral-400 rounded overflow-hidden'>
          <input name='photo' type={'file'} multiple={false} onChange={onSelectFile} />
          </div>
          </div>

          </div>

          </main>

          {
            ['salary','position','staffID'].map((d,idx)=> <InputLabel
             inputType={d === 'salary' ? 'number':'text'} 
             size={15} 
             label={d}
             name={d}
             key={`${d}-${idx}`}
             />)
          }

          </section>

       </main>

       <main className='w-[50%]'>

        {
          ['address','phoneNumber','email'].map((d,idx) => <InputLabel inputType={ d === 'phone number' ? 'number':'text'} name={d} size={15} label={d} key={`${d}-${idx}`} />)
        }

        <div className='my-2'>
      <SeleteControl title={'Nationality'} data={countries} name='nationality' setSelectedData={setSelectedData} selectedData={selectedData} />
        </div> 

        <div className='my-2'>
          <div className='mb-2'>
          <Text title={'Employment Date'} />
          </div>
          <DatePicker className='w-full' onChange={e=>setSelectedData({...selectedData,employmentDate:e})} format='dd-MM-y' value={selectedData.employmentDate} />
        </div>

      {
          ['department','state', 'city'].map((d,idx) => <InputLabel name={d} inputType={'text'} size={15} label={d} key={`${d}-${idx}`} />)
        }

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

const SeleteControl = ({ title, data,selectedData,name, setSelectedData })=>{
      return <div className='mt-2'>
      <Text title={title} />
      <div className='mt-2'>
    <Select options={data} 
    onChange={e=>setSelectedData({...selectedData, [name]:e.value})} 
    theme={(theme) => ({
      ...theme,
      borderRadius: 5,
      colors: {
        ...theme.colors,
        primary25: '#FB2576',
        primary: '#FB2576',
      },
    })} />
    </div>
    </div>
}

export default Addnewemployee