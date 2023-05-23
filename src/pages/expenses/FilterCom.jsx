import React from 'react';
import Select from 'react-select';

const Months = [
     { value : 1, label : 'january'},
     { value : 2, label : 'february'},
     { value : 3, label : 'march'},
     { value : 4, label : 'april'},
     { value : 5, label : 'may'},
     { value : 6, label : 'june'},
     { value : 7, label : 'july'},
     { value : 8, label : 'augest'},
     { value : 9, label : 'september'},
     { value : 10, label : 'octomber'},
     { value : 11, label : 'november'},
     { value : 12, label : 'december'},
   ];

const FilterCom = ({ handleSubmit,customError}) => {
  return (
     <div className='w-[45%] p-3 mx-auto mt-3 bg-stone-100 drop-shadow rounded'>

      <form onSubmit={handleSubmit}>
        <div className='capitalize'>
        <h5 className='font-semibold text-zinc-600 mb-2'>Month :</h5>
        <Select name='month' options={Months} defaultValue={''} />
        </div>

        <div className='capitalize mt-4'>
        <h5 className='font-semibold text-zinc-600 mb-2'>Year :</h5>
        <input type='number' name='year' minLength={4} maxLength={4} placeholder='2000' className='w-full py-1.5 block border border-stone-300 rounded outline-none px-3' />
        {
          customError.status && 
        <p className='text-xs lowercase mt-1 text-red-600'>{customError.message}</p>
        }
        </div>
        <input type="submit" className='block mt-4 mx-auto w-[40%] py-1 rounded bg-primary text-white hover:bg-red-400 cursor-pointer'/>
      </form>
      </div>
  )
}

export default FilterCom