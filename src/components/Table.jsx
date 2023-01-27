import React from 'react'

const Table = ({ colData, rowData, border, clickFun }) => {
  return (
    <table className={`w-full ${border && 'border border-stone-200'}`}>
      <thead className='w-full bg-[#D2DAFF] text-head-gray'>
        <tr>
          {
            colData?.map(col => (
              <th key={col.id} className={`${col.name === '#' && 'max-w-[10px]'} min-w-[130px] py-2 capitalize text-center font-semibold`}>{col.name}</th>
            ))
          }
        </tr>
      </thead> 

      <tbody>
          {
            rowData?.map(row =>{
              const rowKey = Object.keys(row);

            return  <tr key={row.id} className='capitalize text-center text-[#2B4865] font-semibold border-b border-stone-200 hover:bg-stone-100 cursor-pointer'
            onClick={() => clickFun(row.id)}
            >
              {
                rowKey?.map((key,ind)=>(
                  <td key={`tablerow-${ind}`} className={`mb-2 py-2`}>
                    {
                      key === 'photo' ? <img src={row[key]} alt="" className='w-12 h-12 object-cover block mx-auto' />:
                      <span className={`${key === 'status' ? row[key] === 'pending' ? 
                      'text-orange-400':row[key] === 'complete' ? 
                      'text-green-400':row[key] === 'cancel' && 'text-red-400' :'text-gray' }`}>

                       { key === 'price' ? `$ ${row[key]}`:row[key] }
                      </span>
                    }
                  </td>
                ))
              }
              </tr>
})
          }
      </tbody>

    </table>
  )
}

export default Table