import React,{ useState, useEffect } from 'react';

const Card = ({ cardHeader, cardRevenue, cardIcon, cardPercent, iconColor, percentColor }) => {

  return (
    <main className='w-[240px] max-w-[350px] bg-white border border-stone-300 p-3 rounded-md dark:bg-stone-500 dark:text-stone-100'>
      <div className='flex justify-between items-center'>

        <p className='text-gray text-lg font-semibold dark:text-white'>{cardHeader}</p>
        <div style={{color : iconColor}} className={`text-2xl`}>
          {cardIcon}
        </div>
        {/* <p style={{ color : percentColor}} className={`text-green-500 font-semibold`}>{cardPercent}%</p> */}
      </div>
      
      <p className="revenue font-semibold text-[1.9rem] tracking-wider my-3">
        {cardHeader === 'Total Revenue' ? `$${Intl.NumberFormat('en-us').format(cardRevenue)}`:Intl.NumberFormat('en-us').format(cardRevenue)}
        </p>
      
    </main>
  )
}

export default Card