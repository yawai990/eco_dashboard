import React from 'react';
import NavLink from '../../components/NavLink';
import { MdPlayArrow } from 'react-icons/md';

const Expense = () => {
  return (
    <div className="w-full mt-5 rounded overflow-hidden bg-transparent dark:bg-stone-700">

    {
      ['expenses','editdelete','statement'].map((l,i) => <div className='w-[230px] h-[35px] flex items-center' key={`${l}-${i}`}>
      <div>
        <MdPlayArrow className='dark:text-white' />
      </div>
      <NavLink key={i} text={`expense/${l}`}  nomb py_0 title={`${l === 'expenses' ? `new ${l}`:`expenses ${l}`}`} size={'text-sm'} nohover />
      </div>
      )

    }
    </div>
  )
}

export default Expense