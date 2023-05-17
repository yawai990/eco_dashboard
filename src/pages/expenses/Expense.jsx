import React from 'react';
import NavLink from '../../components/NavLink';
import { MdPlayArrow } from 'react-icons/md';

const Expense = () => {
  return (
    <div className="w-full mt-5 rounded overflow-hidden bg-white">

    {
      ['expenses','editdelete','statement'].map((l,i) => <div className='w-[230px] h-[35px] flex items-center' key={`${l}-${i}`}>
      <div>
        <MdPlayArrow />
      </div>
      <NavLink key={i} text={`expense/${l}`}  nomb py_0 title={`expense ${l}`} size={'text-sm'} nohover />
      </div>
      )

    }
    </div>
  )
}

export default Expense