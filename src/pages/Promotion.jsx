import React, { useState, useEffect} from 'react';
import { Text, Button,Loading,InputLabel } from '../components';
import * as api from '../api';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Promotion = () => {
     const [ categories, setCategories ] = useState([]);
     const [ brands , setBrands ] = useState([]);
     const [ err , setErr ] = useState(false);
     const navigate = useNavigate();

  const getAllcategory = async () =>{
     await api.getCategory()
     .then(resp =>{
       const { categories, status } = resp.data;
 
       if(status){
         setCategories(categories)
       }else{
         setCategories([])
       }
     })
     .catch(err => console.log(err))
   };

   const getAllbrands = async () =>{
     try {
          await api.getBrands()
          .then(resp => {
               const { success, brands } = resp.data;
               if(success) setBrands(brands)
               else setErr(true)
          })
          .catch(err => console.log(err))
     } catch (error) {   
          console.log(error)
     }
   }

   useEffect(() =>{
     getAllcategory();
     getAllbrands()
     },[]);

     const handleSubmit = async (e) =>{
          e.preventDefault();
          
          const elements = e.currentTarget.elements;
          const brand = elements.brands.value;
          const category = elements.category.value;
          const discount = elements.discount.value;

          await api.CreatePromotion({ 
               brand : brand.toLowerCase(), 
               category: category.toLowerCase(),
               discount,
          })
          .then(resp => { 
               toast(resp.data) 
               setTimeout(() =>{
                    navigate('/products')
               },3000)
          })
          .catch(err => console.log(err));

          elements.brands.value = 'ALL';
          elements.category.value = 'ALL';
          elements.discount.value = '';
     }

  return (
    <div>
     <ToastContainer />
     <Text title={'promotion for product'} textCase='capitalize' size={24} color={'text-head-gray'} />

     {
          (categories.length > 0 &&  brands.length > 0) &&
     <form className='w-4/12' onSubmit={handleSubmit}>
       <SelectionBox label={'brand'} name={'brands'} value={brands}  />
       <SelectionBox label={'category'} name={'category'} value={categories} />
     <InputLabel name={'discount'} label={'Discount(%)'} inputType={'number'} min={0} placeholder={'please enter number only'} />

     <Button btnType={'submit'} btnText={'submit'} btnBg={'#FB2576'} btnColor={'white'} />
     </form>
      }
    </div>
  )
};

const SelectionBox = ({ label, name, value}) => {
     return  <div className='mb-2'>
     <label htmlFor={name} className='w-full block text-lg tracking-wider font-semibold capitalize'>{label}</label>

     <select name={name} id={name} className='w-full block py-1 rounded border border-stone-400 outline-none bg-transparent capitalize focus:border-red-400'>
          <option value="ALL">all</option>
          {
               value?.map((v,idx )=>(
                  <option value={v[name] || v } key={v._id || idx}>{v[name] || v}</option>
               ))
          }
     </select>
  </div>
}

export default Promotion