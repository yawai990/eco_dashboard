import React,{ useState, useEffect } from 'react';
import { Button, Text, InputLabel } from '../components';
import { TiArrowBack } from 'react-icons/ti';
import { AiFillQuestionCircle } from 'react-icons/ai';
import Select from 'react-select';
import * as api from '../api';
import countries from '../components/data/country.json';
import { languages, gender } from '../components/data/data';
import { uploadImageCloudFromEmploye } from './utils/utils';

const Addnewemployee = () => {
  const [ staffImg, setStaffImg ] = useState('');
  const [ preview, setPreview ] = useState('');
  const [ selectedData, setSelectedData ] = useState({country : '', language : '', gender:''});

  // const handleSubmit = async(e)=>{
  //   e.preventDefault();
    
  //   const elements = e.target.elements;

  //   const name = elements.employee_name.value;
  //   const photo = elements.photo;
  //   try {
  //     await uploadImageCloudFromEmploye(photo.files[0])
  //     .then(async (resp) => {
  //       if(resp.status === 200 && resp.statusText === 'OK'){
  //         // await api
  //         // call add new employee router
  //       }
  //     })
  //     .catch(err => console.log(err))
      
  //   } catch (error) {
      
  //   }
  //  const objectUrl = URL.createObjectURL(photo.files[0])
  //  setPreview(objectUrl)
  // setPreview(photo.files[0])
  // }

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

    <form className='mt-3 bg-[#fff] p-4 drop-shadow rounded'>

      <div className='flex gap-2'>

       <main className='w-[50%]'>

          <InputLabel inputType={'text'} name='employee_name' size={15} label={'Name/Sirname'} />

          <section className='w-full'>

            <main className='flex'>

          <div className='w-[40%] flex justify-center items-center'>
           <img src={preview || '/profile.jpg'} className='block w-[160px] h-[160px] max-h-[180px] border-4 border-slate-400 object-cover rounded-full' />
          </div>

          <div className='w-[60%]'>
          <InputLabel inputType={'text'} size={15} label={'birth day'} />

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
            ['salary','position','staff ID','city'].map((d,idx)=> <InputLabel
             inputType={d==='salary' ? 'number':'text'} 
             size={15} 
             label={d}
             key={`${d}-${idx}`}
             />)
          }

          </section>

       </main>

       <main className='w-[50%]'>

        {
          ['address','phone number','mail address'].map((d,idx) => <InputLabel inputType={'text'} size={15} label={d} key={`${d}-${idx}`} />)
        }


      <SeleteControl title={'Nationality'} data={countries} name='country' setSelectedData={setSelectedData} selectedData={selectedData} />

      {
          ['employment date','department','phone','state'].map((d,idx) => <InputLabel inputType={'text'} size={15} label={d} key={`${d}-${idx}`} />)
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