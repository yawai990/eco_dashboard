import React,{ useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { TiArrowBack } from 'react-icons/ti';
import {  Button, Loading } from '../components';
import * as api from '../api';

const ProductEdit = () => {
  const [ item ,setItem ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

 const singleId = pathname.split('/').slice(-1)[0];

 const getItem = async (id) => {
  await api.getSingleProduct(id)
  .then(resp =>{
    const { product, status } = resp.data;

    if(status){
      setLoading(false)
      setItem(product)
    }
  })
  .catch(err => console.log(err))
 };

 useEffect(() =>{
  getItem(singleId)
 }, [])


  const handleUpdateSumbit = async(e) =>{
    e.preventDefault();

    const elements = e.currentTarget.elements;
    
    const productName = elements.p_name.value;
    const productBrand = elements.p_brand.value;
    const productPrice = elements.p_price.value;
    const productStock = elements.p_stock.value;
    const discount = elements.p_discount.value;

    const updateData = { 
      productName,
      productBrand, 
      productPrice:Number(productPrice), 
      productStock:Number(productStock) ,
      discount : Number(discount)
    };  
    //call the api 
    await api.updateSingleProduct(singleId,updateData)
    .then(resp => {
      const { status,message } = resp.data;

      if(status){
        toast(message)
        navigate('/products')
      }
    })
    .catch(err => console.log(err));

    //navigate to the all product page
  }

    if(loading) {
      return <Loading />
    }
  return (
    <div className="w-full h-full relative">

     <button 
          onClick={() => history.back()}
          className='bg-primary w-10 h-10 flex justify-center items-center text-4xl text-stone-100 rounded-full'>
            <TiArrowBack />
            </button>

        <ToastContainer position="bottom-right" />

    <form onSubmit={handleUpdateSumbit} className='w-full mt-5 bg-stone-100 rounded'>

      <div className="flex justify-around p-2 rounded">
        <div className='w-2/6 h-[350px] p-2'>
          <ImageCom link={item.image[0].path} />
        </div>

        <div className='w-3/6'>
        <FormControl name={'p_name'} 
        labelName='Product Name' 
        value={item.productName} 
        type='text'
        onChange={e => setItem({...item, productName : e.target.value})} />


        <FormControl name={'p_brand'} 
        labelName='Product brand' 
        value={item.brand} type='text' 
        onChange={e => setItem({...item, brand : e.target.value})} />



        <div className="flex justify-between gap-1">

        <main>
        <FormControl name={'p_price'} 
        labelName='Product price($)' 
        value={item.price} 
        type='number' 
        onChange={e => setItem({...item, price : e.target.value})} />
   
      <FormControl name={'p_discount'} 
            labelName='Promotion(%)' 
            value={(item.discount ? item.discount:'')} 
            type='number' 
            onChange={e => setItem({...item, discount : e.target.value})} />
      
           </main>

        <FormControl
         name={'p_stock'} 
         labelName='Product stock' 
         type='number' 
         value={item.stock}
         onChange={e => setItem({...item, stock : e.target.value})} />
        </div>

        <Button btnType={'submit'} btnColor={'white'} btnBg={'#FB2576'} btnText={'Edit'} />

        </div>
      </div>

     
    </form>

    </div>
  )
};

const ImageCom = ({link}) => {
  
 const imageUrl = 'https://res.cloudinary.com/dtcws1ecu/image/upload/v1675503460'
  return <img src={`${imageUrl}/${link}`} alt="" className='w-full h-full min-h-[220px] object-cover' />
};

const FormControl = ({ name, labelName, value, type, onChange}) => {

   return <div className='mb-2'>
    <label htmlFor={name} className='block capitalize font-semibold mb-1'>{labelName}</label>

    <input name={name} 
    id={name} 
    type={type} 
    value={value && value} 
    className='w-full capitalize tracking-wider outline-none focus:outline-none bg-transparent border border-slate-400 p-1 rounded' 
    onChange={e => onChange(e)} />
   </div>
}

export default ProductEdit