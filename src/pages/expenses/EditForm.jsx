import React, { useEffect, useState } from 'react';
import * as api from '../../api';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditForm = () => {
     const [ loading , setLoading ] = useState(true);
     const { id } = useParams();
     const location = useLocation();
     const navigate = useNavigate();
     const [ expenseData, setExpenseData ] = useState({});
     
     const getSingleExpense = async(id) =>{
          setLoading(true)
          await api.SingleExpense(id)
          .then(resp => {
               if(resp.data.status){
                    setExpenseData(resp.data.expense)
                    setLoading(!resp.data.status)
               }
          })
          .catch(err => console.log(err))
     };

     const handleSubmit = async e =>{
          e.preventDefault();

          //call api 
          await api.UpdateExpense(expenseData._id, expenseData)
          .then(resp => {
               toast(resp.data);

               navigate('/expense')
          })
          .catch(err => console.log(err));
     };

     useEffect(() =>{
          getSingleExpense(id)
     }, [id]);

     if(loading){
          return <h1>Loading...</h1>
     }
  return (
    <div className='mt-5'>

     <form onSubmit={handleSubmit} className='bg-stone-100 lg:w-[40%] md:w-[60%] sm:w-[90%] w-full mx-auto px-3 py-2'>
          <EditFormControl label={'title'} value={expenseData.title} 
          onChange={(e) => setExpenseData({ ...expenseData,title:e.target.value})} />

          <EditFormControl label={'category'} value={expenseData.category} 
          onChange={(e) => setExpenseData({ ...expenseData,category:e.target.value})} />

          <EditFormControl label={'amount'} 
           type={'number'} 
           value={expenseData.expense.amount}
           onChange={(e) => setExpenseData({ ...expenseData,expense : {
               ...expenseData.expense,
               [e.target.name] : e.target.value
           }})} />

     <EditFormControl label={'date'} value={expenseData.date} 
          onChange={(e) => setExpenseData({ ...expenseData,date:e.target.value})} />

     <div className="flex items-center justify-center gap-1 mt-4">
     <input type="button" 
     value={'back'}
     onClick={() => navigate('/expense/editdelete')} className='bg-primary min-w-[80px] text-white py-0.5 capitalize rounded hover:drop-shadow-lg cursor-pointer' />
     <input type="submit" 
     className='bg-primary min-w-[80px] text-white py-0.5 rounded hover:drop-shadow-lg cursor-pointer' />
       </div>
     </form>
    </div>
  )
};

const EditFormControl = ({label, type, value, onChange,placeholder}) =>{
     return  <div className='flex gap-2 mt-3 capitalize'>
     <label htmlFor={label} className='w-[80px]'>{label} :</label>
     <input type={type || 'text'} name={label} 
        onChange={e => onChange(e)}
        placeholder={placeholder}
      value={value || ''} className='flex-1 p-1 rounded focus:drop-shadow focus:border-primary border border-stone-400 outline-none' />
</div>
}

export default EditForm