import React, { useState } from 'react';
import { Text, Button, ProductCard, AddForm, Pagination } from '../components';

const Products = () => {
  const [ showForm, setShowForm ] = useState(false);

  const handleForm =() => setShowForm(!showForm);

  return (
    <section className="w-full max-w-[calc(100%-17%)] min-h-[60vh p-3 flex justify-center items-start">
      {
        showForm && <AddForm handleForm={handleForm} />
      }
    <main className='w-[95%] p-3 h-full'>

    <div>

    <div className='mt-3 flex justify-between itemss-center'>

    <Text title={'products'} textCase='capitalize' size={24} color={'text-head-gray'} />

    <div className='bg-primary py-1 px-3 rounded-md shadow-sm text-white'>
      <Button btnText={'add products'} btnfun={handleForm} />
    </div>
    </div>

    <main className='mt-6'>
       
        <div className='grid grid-cols-4 auto-cols-min gap-3 p-2 bg-white border border-stone-200 drop-shadow-sm'>
          <ProductCard 
          cardHeader='Sneaker'
          cardPrice={430} 
          cardImg='https://res.cloudinary.com/dtcws1ecu/image/upload/v1669132792/cld-sample-5.jpg'  />

          <ProductCard 
          cardHeader='Pet'
          cardPrice={1032} 
          cardImg='https://res.cloudinary.com/dtcws1ecu/image/upload/v1674487110/q2e4jfkunzfy4mdi73if.png'  />


        </div>

        <div className='w-full py-3 flex justify-end items-center'>
        <Pagination />
        </div>
    </main>

   </div>

   </main>
   </section>
  )
}

export default Products