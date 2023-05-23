import React, { useState } from 'react';
import Header from '../../components/Text';
import TableCom from './TableCom';
import FilterCom from './FilterCom';
import * as api from '../../api';
import { toast } from 'react-toastify';

const EditDelete = () => {
  const [ customError, setCustomError ] = useState({ status : false, message : ''});
  const [ expenseData, setExpenseData ] = useState([]);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const elements = e.currentTarget.elements;
   
    const month = elements.month.value;
    const year = elements.year.value;
    if(!month || !year){
     alert('please fill all fields')
    }else{
      if(year.length < 4 ){
        setCustomError({ status : true, message : 'year should be greater than 1900'})
      }
     await api.FilterDate(month,year)
      .then(resp => {
        const { status, filterdata } = resp.data;
        if(status){
          setExpenseData(filterdata)

          if(filterdata.length < 1){
            toast.error('there is no data')
          }
        }
      })
      .catch(err => console.log(err))
      elements.month.value='';
      elements.year.value ='';
    }
  };

  return (
    <div className='mt-2'>
      <Header title="Expenses edit/delete" capitalize center size={22} color={'stone-800'} />

    {expenseData.length < 1 ? <FilterCom handleSubmit={handleSubmit} customError={customError} />:<TableCom expenseData={expenseData} />}

    </div>
  )
}

export default EditDelete