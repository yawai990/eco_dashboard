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
              <th key={col.id} className={`${col.name === '#' && 'max-w-[8px]'} min-w-[100px] py-2 capitalize text-center font-semibold`}>{col.name}</th>
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
              <td className='max-w-[10px]'>{idx+1}</td>
              {
                rowKey?.map((key,ind)=>(
                  key !== '_id' &&
                   <td key={`tablerow-${ind}`} className={`mb-2 py-2`}>
                    
                    {
                      key === 'image' ? <img 
                      src={`${row[key][0].path !== undefined ? 
                        'https://res.cloudinary.com/dtcws1ecu/image/upload/v1675567949/' + row[key][0].path 
                        :
                        'https://res.cloudinary.com/dtcws1ecu/image/upload/v1678608221/ecommerV2/employee' + row.image}`}
                       alt="" 
                       className={`w-12 h-12 object-cover block mx-auto ${row[key][0].path === undefined && 'rounded-full object-cover'}`} />
                       :
                      <span className={`inline-block text-gray 
                      ${(key !== "quantity" && key === 'isPaid') && (!row[key] ? 'inline-block text-center text-2xl text-red-400': 
                      'inline-block text-center text-2xl text-green-400')}
                      ${ key === 'delivered' ? (rowKey[key] ? 'text-green-400 text-2xl':'text-red-400 text-2xl'):'text-gray'}
                      `}>   

                       { key === 'price' ? 
                       `$ ${row[key]}`:
                       key === 'isPaid' ? 
                      (!row[key] ? <TiTimes />:<FcCheckmark />):
                      key === 'delivered' ? 
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