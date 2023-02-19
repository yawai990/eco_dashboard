import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { TiTimes } from 'react-icons/ti';

const Table = ({ colData, rowData, border, clickFun }) => {

  return (
    <table className={`w-full ${border && 'border border-stone-200'}`}>
      <thead className='w-full bg-[#D2DAFF] text-head-gray'>
        <tr>
          {
            colData?.map(col => (
              <th key={col.id} className={`${col.name === '#' && 'max-w-[10px]'} min-w-[100px] py-2 capitalize text-center font-semibold`}>{col.name}</th>
            ))
          }
        </tr>
      </thead> 

      <tbody>
          {
            rowData.length > 0 ? rowData?.map((row,idx) =>{
              const rowKey = Object.keys(row);
            
            return  <tr key={row._id || idx } className='capitalize text-center text-[#2B4865] font-semibold border-b border-stone-200 hover:bg-stone-100 cursor-pointer'
            onClick={() => clickFun(row._id)}
            >
              <td>{idx+1}</td>
              {
                rowKey?.map((key,ind)=>(
                  <td key={`tablerow-${ind}`} className={`mb-2 py-2`}>
                    
                    {
                      key === 'image' ? <img src={`https://res.cloudinary.com/dtcws1ecu/image/upload/v1675567949/${row[key].image}`} alt="" className='w-12 h-12 object-cover block mx-auto' />:
                      <span className={`inline-block text-gray 
                      ${ (key !== "quantity" && key === 'delivered' && row[key] === 0 )? 
                      'text-red-400 text-2xl':row[key] === 1 ? 
                      'text-green-400 text-2xl':(key !== "quantity" && row[key] === 2) && 'text-red-400 text-2xl'}
                      ${(key !== "quantity" && key === 'isPaid') && (!row[key] ? 'inline-block text-center text-2xl text-red-400': 
                      'inline-block text-center text-2xl text-green-400')}
                      `}>

                       { key === 'price' ? 
                       `$ ${row[key]}`:
                       key === 'isPaid' || key === 'delivered' ? 
                      (!row[key] ? <TiTimes />:<FcCheckmark />):
                      key === 'user'  ?
                       row[key].name : 
                       key === 'payment' ? row[key] === 0 ? "MPU" : row[key] === 1 ? 'COD':"M-Banking":
                       row[key] 
                       
                       }
      
                      </span>
                    }
                  </td>
                ))
              }
              </tr>
        }) :<tr>
          <td colSpan={10}>
          there is not data
          </td>
          </tr>
          }
      </tbody>

    </table>
  )
}

export default Table