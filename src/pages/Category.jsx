import React, { useState } from 'react'
import { useQuery } from 'react-query';
import * as api from '../api';
import { Loading,InputLabel, Button } from '../components';

const Category = () => {
    const [ currentMode, setCurrentMode ] = useState('list')
    const { isLoading, error, data } = useQuery('repoData',async () =>
    await api.getCategory()
    .then(resp => {
        const { status , categories } = resp.data;
        if(status){
            return categories
        }else new Error('there is no category')
    })
    .catch(err => err)
  );

  const setMode = e => setCurrentMode(e.target.value)

  if(isLoading) return <Loading />
  
  return (
    <div className="w-full mt-5 rounded overflow-hidden bg-white">

        <div className='mb-4 flex gap-4'>

            <RadioCom label={'list'} fun={setMode} currentMode={currentMode} />
            <RadioCom label={'new category'} fun={setMode} currentMode={currentMode} />

        </div>

    {
        currentMode === 'list' ? <>
        <div className='grid grid-cols-3 text-center bg-blue-200 py-4'>   
                <div>Product Category</div>
                <div>Total Products</div>
                <div>Total Revenue by Category</div>
        </div>

        <section className='bg-slate-100'>
           {
               data?.map(d => (
                <div className='grid grid-cols-3 text-center py-3 border-b border-stone-200 capitalize tracking-wider' key={d._id}>   
                       <div>{d.category}</div>                 
                       <div>45</div>                 
                       <div>$4523</div>                 
                </div>  
            ))
           }
        </section>
        </>:
         currentMode === 'new category' && <form>
                <InputLabel label={'New category'} placeholder="new category" name='new_category' inputType={'text'} />
                <Button btnText='add new category' btnBg='#FB2576' btnColor={'white'} />
            </form>
    }
        
    </div>
  )
};

const RadioCom = ({ label, fun,currentMode }) =>{
    return <div className='flex gap-2'>
    <input type="radio" name='category' id={label} value={label} onChange={fun} checked={currentMode === label ? true:false} />
    <label htmlFor={label} className='capitalize'>{label}</label>
    </div>
}

export default Category