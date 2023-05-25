import React, { useState } from 'react'
import { useQuery } from 'react-query';
import * as api from '../api';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Loading,InputLabel, Button, Text } from '../components';
import { toast } from 'react-toastify';
import RadioCom from '../components/RadioCom';

const Category = () => {
    const [ currentMode, setCurrentMode ] = useState('list');
    const [ newCat, setNewCat ] = useState([]);
    const [ Error , setError ] = useState(false);
    const [ products , setProducts ] = useState([]);
    const [ deleteMessage, setDeleteMessage ] = useState('');
    const [ setCat, set_new_cat ] = useState('');
    const { isLoading, error, data } = useQuery([deleteMessage,setCat],async () =>
    await api.getCategory()
    .then(resp => {
        const { status , categories, products } = resp.data;
        
        if(status){
            setProducts(products)
            setDeleteMessage('')
            set_new_cat('')
            return categories
        }else new Error('there is no category')
    })
    .catch(err => err)
  );

  const setMode = e => setCurrentMode(e.target.value);

  const handleSubmit = e =>{
    e.preventDefault();
    const elements = e.currentTarget.elements;

    const newCategory = elements.new_category.value;

    if(newCategory){
        if(newCat.length < 1 ){
            setNewCat([{ category : newCategory}]);
            setError(false)
        }else{
            setNewCat([...newCat, { category : newCategory} ]);
            setError(false)
        }
    }else{
        setError(true)
    }
    elements.new_category.value = '';
  };

  const handleRemoveCat = (e) => {
   
   const cat =  newCat.filter(cat => cat.category !== e);

   setNewCat(cat)
  };

  const SaveCategory =async () =>{
    await api.addCategory(newCat)
    .then(resp => {
        const { message , status } = resp.data;
        if(status){
            setCurrentMode('list')
            set_new_cat(message)
            toast(message)
            setNewCat([]);
        }
    })
    .catch(err => console.log(err));
  };

  const handleDeleteCategory = async(id)=>{
    await api.deleteCategory(id)
    .then(resp=>{
        const { status, message } = resp.data;
        if(status){
            toast(message)
            setDeleteMessage(message)
        }
    })
    .catch(err => console.log(err))
  };

   if(isLoading) return <Loading />
  
  return (
    <div className="w-full mt-5 rounded overflow-hidden bg-white dark:bg-stone-500">

        <div className='mb-4 flex gap-4 dark:text-white'>

            <RadioCom label={'list'} name={'category'} fun={setMode} currentMode={currentMode} />
            <RadioCom label={'new category'} name={'category'} fun={setMode} currentMode={currentMode} />

        </div>

    {
        currentMode === 'list' ? <>
        <div className='grid grid-cols-4 text-center bg-blue-200 py-4'>   
                <div>Product Category</div>
                <div>Total Products</div>
                <div>Total Revenue by Category</div>
                <div></div>
        </div>

        <section className='bg-slate-100 dark:bg-transparent dark:text-white'>
           {
               data.length > 0 ? data?.map(d => (
                <div className='grid grid-cols-4 text-center py-3 border-b border-stone-200 capitalize tracking-wider hover:dark:bg-zinc-700' key={d._id}>   
                       <div>{d.category}</div>                 
                       <div>{products.filter(p => p.category === d.category ? p:null).length}</div>                 
                       <div>${Intl.NumberFormat('en-US').format(
                        products.filter(p => p.category === d.category ? p:null).reduce((acc,curVal) =>{
                            return acc + (curVal.price * curVal.sales)
                          },0)
                        )}</div>        
                       <div>
                       <button onClick={() => handleDeleteCategory(d._id)}>
                          <AiFillCloseCircle className='text-primary text-3xl' />
                        </button>
                        </div>         
                </div>  
            ))
            :
            <div className='py-2'>There is no category</div>
           }
        </section>
        </>:
         currentMode === 'new category' && <main className='flex gap-3'>
                <form onSubmit={handleSubmit} className='min-w-[400px] px-4 dark:text-white'>
                        <InputLabel 
                        label={'New category'} 
                        placeholder="new category" 
                        name='new_category' 
                        inputType={'text'} />
                        {
                            Error && <p className='text-red-500 text-sm mb-3'>Please write category name</p>
                        }
                        <Button 
                        btnText='add new category' 
                        btnBg='#FB2576' 
                        btnColor={'white'} />
                    </form>

                    <section>   
                            <Text title={'New Categories List'} size={18} />

                            <main className='min-w-[280px] bg-slate-100 dark:bg-stone-400 mt-2 rounded mb-3'>
                                <div className='py-1 text-center'>
                                <Text title={'Category Name'} />
                                </div>
                                {
                                    newCat?.map((cat,idx)=>(
                                        <div key={`new_cat-${idx}`} className='animate py-2 px-3 mb-2 border-b border-slate-400 pl-2 lowercase flex justify-between'>
                                            <p>{cat.category}</p>
                                            <button onClick={() => handleRemoveCat(cat.category)}>
                                                <AiFillCloseCircle className='text-primary text-3xl' />
                                            </button>
                                            </div>
                                    ))
                                }
                            </main>

                            <Button 
                            btnfun={SaveCategory}
                                btnText='Save category' 
                                btnBg='#FB2576' 
                                btnColor={'white'} />
                    </section>
        </main>
    }
        
    </div>
  )
};

export default Category