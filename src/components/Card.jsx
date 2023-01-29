import React,{ useEffect } from 'react';

const Card = ({ cardHeader, cardRevenue, cardIcon, cardPercent, iconColor, percentColor }) => {


  return (
    <main className='w-[250px] max-w-[350px] bg-white border border-stone-300 p-3 rounded-md'>
      <div className='flex justify-between items-center'>

        <div style={{color : iconColor}} className={`text-2xl`}>
          {cardIcon}
        </div>

        <p style={{ color : percentColor}} className={`text-green-500 font-semibold`}>{cardPercent}%</p>
      </div>
      
      <p className="revenue font-semibold text-2xl tracking-wider my-3">{Intl.NumberFormat('en-us').format(cardRevenue)}</p>
      <p className='text-gray text-lg font-semibold'>{cardHeader}</p>
    </main>
  )
}

export default Card