import React, { useState } from 'react';
import FilterCom from './FilterCom';
import * as api from '../../api';
import { toast } from 'react-toastify';

const Statement = () => {
  const [ customError, setCustomError ] = useState({ status : false, message : ''});
  const [ expenseStmt, setexpenseStmt ] = useState([]);


  function onClick() {
    const pageHTML = document.querySelector(".preview-container").outerHTML;
    const blob = new Blob([pageHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const tempEl = document.createElement("a");
    document.querySelector('.pdf_container').appendChild(tempEl);

    tempEl.href = url;
    tempEl.download = "thispage.html";
    tempEl.click();
    setTimeout(() => {
      URL.revokeObjectUrl(url);
      tempEl.parentNode.removeChild(tempEl);
    }, 2000);
  }

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
          setexpenseStmt(filterdata)

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
    <div className='mt-5 relative z-10'>

      {
        expenseStmt?.length < 1 ? 
        <FilterCom handleSubmit={handleSubmit} customError={customError} />
        :
        <main>
          <h1 className='text-center dark:text-white text-xl underline font-semibold'>Expense Advanced Statement</h1>

        <section className='pdf_container bg-white drop-shadow rounded'>
              <PDFFile expenseStmt={expenseStmt} />

          </section>
        <button onClick={() =>onClick()}>Download</button>

        </main>
      }

    </div>
  )
};

const PDFFile = ({expenseStmt}) => {
  return (
    <div className='preview-container mt-5'>
      <table className='w-full bg-white dark:bg-stone-500 dark:text-white drop-shadow rounded overflow-hidden'>
        <thead className='w-full bg-pink-600 dark:bg-stone-600 dark:text-white text-white'>
          <tr className=''>
            <th className='w-[45px] py-2.5'>#</th>
            <th className='w-[180px]'>Date</th>
            <th className='w-[300px]'>Description</th>
            <th className='w-[200px]'>Category</th>
            <th className='w-[220px]'>Name</th>
            <th className='w-[120px]'>Amount</th>
            <th className='w-[220px]'>Currency</th>
            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody className='capitalize'>
          {
            expenseStmt.map((ed,idx) =>(  
        <tr className='text-center border-b border-stone-100 hover:bg-stone-100 dark:bg-stone-500  dark:hover:bg-primary duration-200 cursor-pointer' key={ed._id}>
            <td className='py-2'>{idx+1}</td>
            <td>{ed.date}</td>
            <td>{ed.title}</td>
            <td>{ed.category}</td>
            <td>{ed.usedBy.name}</td>
            <td>{ed.expense.amount}</td>
            <td>{ed.expense.currency}</td>
          </tr>
              ))
            }
       
          
        </tbody>

        <tfoot className='bg-zinc-300'>
          <tr>
            <td colSpan={4} className='text-center font-semibold py-2'>Expense Total :</td>
            
            <td className='text-center'>{Intl.NumberFormat('en-US').format(
              expenseStmt.reduce((val,acc) =>{
                return val + acc.expense.amount
              },0)
            )}
            </td>
            <td colSpan={2}>&nbsp;</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
};


export default Statement