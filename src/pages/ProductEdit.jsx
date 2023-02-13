import React,{ useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Text, Button, ProductCard, AddForm, Pagination, Loading } from '../components';
import * as api from '../api';

const ProductEdit = () => {
  const [ item ,setItem ] = useState({});
 const { pathname } = useLocation();

 const singleId = pathname.split('/').slice(-1)[0];

 const getItem = async (id) => {
  await api.getSingleProduct(id)
  .then(resp =>{
    const { product, status } = resp.data;

    if(status){
      setItem(product)
    }
  })
  .catch(err => console.log(err))
 };

 useEffect(() => {
  if(singleId){
    getItem(singleId)
  }
 }, []);

  return (
    <form className='w-full mt-5 bg-stone-100'>

      <div className="flex justify-around p-2 rounded">
        <div className='w-2/6 h-[350px] p-2'>
          <ImageCom link={item.image[0].path} />
        </div>

        <div className='w-3/6'>
        <FormControl id={'p_name'} labelName='Product Name' value={item.productName} />
        <FormControl id={'p_brand'} labelName='Product brand' value={item.brand} />

        <div className="flex justify-between gap-1">
        <FormControl id={'p_price'} labelName='Product price($)' value={item.price} />
        <FormControl id={'p_stock'} labelName='Product stock' value={item.stock} />
        </div>

        <Button btnColor={'white'} btnBg={'#FB2576'} btnText={'Edit'} />

        </div>
      </div>

     
    </form>
  )
};

const ImageCom = ({link}) => {
  
 const imageUrl = 'https://res.cloudinary.com/dtcws1ecu/image/upload/v1675503460'
  return <img src={`${imageUrl}/${link}`} alt="" className='w-full h-full min-h-[220px] object-cover' />
};

const FormControl = ({ id, labelName, value}) => {
   return <div className='mb-2'>
    <label htmlFor={id} className='block capitalize font-semibold mb-1'>{labelName}</label>
    <input value={value} className='w-full capitalize tracking-wider outline-none focus:outline-none bg-transparent border border-slate-400 p-1 rounded' onChange={{}} />
   </div>
}

export default ProductEdit