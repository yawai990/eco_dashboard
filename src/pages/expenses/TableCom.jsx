import React from 'react';
import { useNavigate } from 'react-router-dom';

const TableCom = ({ expenseData }) => {
  const navigate = useNavigate();

  const handleEdit = (id)=>{
    navigate('/expense/editdelete/editform/'+id)
  }
  return (
    <div className='mt-5'>
      <table className='w-full bg-white drop-shadow rounded overflow-hidden'>
        <thead className='w-full bg-stone-300'>
          <tr className=''>
            <th className='w-[45px] py-2.5'>#</th>
            <th className='w-[220px]'>Name</th>
            <th className='w-[300px]'>Description</th>
            <th className='w-[180px]'>Date</th>
            <th className='w-[120px]'>Amount</th>
            <th className='w-[220px]'>Currency</th>
            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody className='capitalize'>
          {
            expenseData.map((ed,idx) =>(  
        <tr className='text-center border-b border-stone-100 hover:bg-stone-100 duration-200 cursor-pointer' onClick={() => handleEdit(ed._id)} key={ed._id}>
            <td className='py-2'>{idx+1}</td>
            <td>{ed.usedBy.name}</td>
            <td>{ed.title}</td>
            <td>{ed.date}</td>
            <td>{ed.expense.amount}</td>
            <td>{ed.expense.currency}</td>
            <td>
              <div className='flex gap-1'>
            <button onClick={() => handleEdit(ed._id)} className='w-[80px] bg-green-400 text-white inline py-0.2 rounded hover:bg-green-500'>edit</button>
            <button className='w-[80px] bg-primary text-white inline py-0.2 rounded hover:bg-red-500'>Delete</button>
              </div>
            </td>
          </tr>
              ))
            }
       
          
        </tbody>
      </table>
    </div>
  )
}

export default TableCom