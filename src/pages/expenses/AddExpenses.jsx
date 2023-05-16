import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import { BsThreeDots } from 'react-icons/bs';
import format from 'date-fns/format';
import * as api from '../../api';
import { Fade } from 'react-reveal';

const currency = [
  {_id:1,name:"US$"},
  {_id:2,name:"MMK"},
  {_id:3,name:"Yen"}
];

const AddExpenses = () => {
  const [ showCalendar, setShowCalendar ] = useState(false);
  const [ datevalue, setdateValue ] = useState(null);
  const [ employees, setEmployees ]  = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ insertData, setInsertData ] = useState([]);
  //for animation
  const [ showData, setShowData ] = useState(false);
  
  const getUser = async() =>{
    setLoading(true);
    await api.AllEmployee()
    .then(resp =>{
     const { status, employees } = resp.data;
     if(status){
      setEmployees(employees);
     }
     setLoading(!status)
    })
    .catch(err => console.log(err));
  };
  useEffect(() =>{
    getUser();
  },[]);

  const handleExpenseSubmit = async(e) =>{
    e.preventDefault();
    const elements = e.currentTarget.elements;
    
    const name = elements.name.value;
    const amount = elements.amount.value;
    const currency = elements.currency.value;
    const date = elements.date.value;
    const category = elements.category.value;
    const title = elements.title.value;
 
    if(!name || !amount || !currency || !date || !category || !title){
      setError(true)
    }else{
      setInsertData([...insertData, { id:Date.now(), title, expense : { amount, currency }, useBy : name, category, date }])
      setError(false);

    elements.amount.value = '';
    elements.category.value = ''; 
    elements.title.value = '';
   
    }
  };

  const insertDataDelete = (id) =>setInsertData(insertData.filter(d => d.id !== id));

  const SaveToDB = async() =>{
    console.log('api will be here with the insertData value')
  }

  if(loading){
    return <h1>Loading...</h1>
  };
  return (
    <main className='w-[90%] py-3 mt-3 mx-auto border border-stone-300 rounded bg-indigo-100'>
      <h1 className='text-center text-lg font-semibold tracking-wider underline'>Expense Advanced Settlement</h1>

    <form onSubmit={handleExpenseSubmit}>
      <section className='w-[95%] flex sm:flex-wrap lg:flex-nowrap justify-between gap-2 mx-auto mt-10'>

        <div className='w-[50%]'>

        <SelectControl name={'name'} arr={employees} />
        <FormControl label={'amount'} name={'amount'} type={'number'} />
        <SelectControl  name={'currency'}  arr={currency} />

        </div>

        <div className='w-[50%]'>
        <DateControl showCalendar={showCalendar} setShowCalendar={setShowCalendar} datevalue={datevalue} setdateValue={setdateValue} />
       <FormControl label={'category'} name={'category'} />
       <FormControl label={'title'} name={'title'} />
        </div>

      </section>
      { error && <p className='w-[95%] mx-auto text-xs text-primary'>** Please Fill All Fields ** </p>}

         <button className='w-[320px] mx-auto block mt-5 rounded hover:bg-primary hover:text-white duration-200 border border-primary'>Add</button>
         </form>

        {
          insertData.length > 0 &&
      
          <div className='w-[95%] mx-auto mt-3'>

            <table className='w-full rounded bg-white overflow-hidden'>
              <thead>
              <tr className='w-full bg-zinc-400 text-white uppercase h-[40px]'>
            {
              ['title','usedby','category','amount'].map((t,idx) =>(
              <th key={`${t}-${idx}`}>{t}</th>
              ))
            }
            <th>&nbsp;</th>
            </tr>
              </thead>

              <tbody>
              {
                insertData.map(data =>(
                  <tr className='text-center h-[38px] capitalize border-b border-stone-400' key={data.id}>
                    <Fade top> 
                    <td>{data.title}</td>
                    <td>{
                      employees.filter(e => e._id !== data.useBy)[0].name
                      }</td>
                    <td>{data.category}</td>
                    <td>{data.expense.amount}</td>
                    <td>
                      <button onClick={()=>insertDataDelete(data.id)} className='bg-red-400 text-white rounded hover:bg-red-500 duration-200 px-1 py-0.5'>delete</button>
                    </td>
                  </Fade>
                  </tr>
                ))
              }
              </tbody>
            </table>

            <button onClick={SaveToDB} className='p-1 bg-blue-500 hover:bg-blue-600 duration-100 hover:drop-shadow-xl rounded text-stone-200 mt-4 block'>save</button>
          </div>
        }
    </main>
  )
};

const SelectControl = ({name, arr}) =>{
  return  <div className='capitalize mb-3'>
  <label htmlFor={name} className='w-[80px] inline-flex justify-between items-center mr-4'>
    <span>{name}</span>
    <span>:</span>
  </label>
  <select name={name} id={name} className='min-w-[320px] capitalize outline-none border border-zinc-400 bg-transparent py-0.3 px-2 rounded'>

    {
      arr?.map(em =>(
        <option value={em._id || em.name} key={em._id || em.name}>{em.name}</option>
      ))
    }
  </select>
  </div>
}
const FormControl = ({ label, type, name}) =>{
  return  <div className='capitalize mb-3'>
  <label htmlFor={name} className='w-[80px] inline-flex justify-between items-center mr-4'>
  <span>{label}</span>
    <span>:</span>
  </label>
  <input type={type || 'text'} name={name} id={name} className='min-w-[320px] outline-none border border-zinc-400 bg-transparent py-0.3 px-2 rounded' />
</div>
};

const DateControl =({ datevalue,setdateValue, showCalendar,setShowCalendar }) =>{
  return  <div className='relative flex items-centers mb-3'>
  <label htmlFor="date" className='w-[80px] mr-4 inline-flex justify-between items-center'>
    <span>Date</span>
    <span>:</span>
  </label>
  <input type="text" name={'date'} id='date'
   value={ datevalue !== null ? format(datevalue,'dd-MM-yyyy'):''}
   readOnly
    onFocus={() => setShowCalendar(true)}
    className='min-w-[320px] outline-none border border-zinc-400 bg-transparent py-0.3 px-2 rounded' />

  <div className='bg-indigo-300 relative inline-flex justify-center items-center'>
  <input type="checkbox" className='absolute w-full h-full cursor-pointer' onChange={() => setShowCalendar(!showCalendar)} />
  <BsThreeDots className='text-2xl text-white' />
  { showCalendar && 
  <div className='absolute top-7 right-0 z-10'>
  <Calendar calendarType="US" 
  onChange={e => {
    setShowCalendar(false)
    setdateValue(e)
    }} /> 
  </div>
  }

  </div>
</div>
}

export default AddExpenses