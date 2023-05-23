import React, { useEffect, useState } from 'react';
import * as api from '../../api';
import { useParams } from 'react-router-dom';

const EditForm = () => {
     const { id } = useParams();
     const [ expenseData, setExpenseData ] = useState({});

     const getSingleExpense = async(id) =>{
          await api.SingleExpense(id)
          .then(resp => {
               if(resp.data.status){
                    setExpenseData(resp.data.expense)
               }
          })
          .catch(err => console.log(err))
     }

     useEffect(() =>{
          getSingleExpense(id)
     }, [id]);
  return (
    <div className='mt-5'>
     <form className='bg-stone-100 w-[40%] mx-auto px-3 py-2'>
          <div className='flex gap-2'>
               <label htmlFor="" className='w-[60px]'>name :</label>
               <input type="text" className='flex-1 border border-stone-400 outline-none' />
          </div>
     </form>
    </div>
  )
}

export default EditForm