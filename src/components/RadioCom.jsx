import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

const RadioCom = ({ label,name, fun,currentMode }) => {
     return <div className='flex gap-1 items-center'>
     <input type="radio" name={name} id={label} value={label} onChange={fun} checked={currentMode === label ? true:false} />
     <IoMdArrowDropright className='text-2xl text-primary' />
     <label htmlFor={label} className='cursor-pointer hover:text-primary duration-100 capitalize'>{label}</label>
     </div>
}

export default RadioCom