import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

const RadioCom = ({ label,name, fun,currentMode }) => {
     return <div className={`flex items-center justify-center py-1 px-2 hover:bg-stone-200 duration-200 rounded  ${ currentMode === label && 'bg-stone-200 text-zinc-800'}`}>
     <input type="radio" className='hidden' name={name} id={label} value={label} onChange={fun} checked={currentMode === label ? true:false} />
     <label htmlFor={label} className='cursor-pointer capitalize'>{label}</label>
     </div>
}

export default RadioCom