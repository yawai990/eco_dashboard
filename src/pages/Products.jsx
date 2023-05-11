import React, { useState, useEffect } from 'react';
import { Text, Button, ProductCard, AddForm, Pagination, Loading } from '../components';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from '../api';

const Products = () => {
  const [ showForm, setShowForm ] = useState(false);
  const [ productAdd, setProductAdd ] = useState(false);
  const [ products, setProducts ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPagi, setTotalPagi ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ categories, setCategories ] = useState([]);
  const navigate =useNavigate();

  const ToastNoti = noti =>toast(noti);

  const getAllProducts =async (pageNum) => {
    setIsLoading(true)
    await api.getProducts(pageNum)
    .then(resp => {
      if(resp.status === 200 ){
        setProducts(resp.data.products)
        setCurrentPage(resp.data.pageNum)
        setTotalPagi(resp.data.pagination)
        setIsLoading(false)
      }
    })
    .catch(err => err)
  };

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

  
  useEffect(() =>{getAllcategory()},[]);
  //call the getAllProducts fun when the user add new item
  useEffect(() =>{
    getAllProducts(currentPage)
  },[currentPage,productAdd])

  const deleteProduct = async (id, token)=>{
    setIsLoading(true)
    await api.deleteProduct(id, token)
    .then(resp => {
      getAllProducts(currentPage)
      setIsLoading(false)
      ToastNoti('one product deleted')
    })
    .catch(err => console.log(err))
  };

  const handleForm =() => setShowForm(!showForm);
  const handlePromo = () => navigate('/products/promotion');

  if(isLoading){
    return <Loading />
  }
  
  return (
    <section className="w-full min-h-[60vh p-3 flex justify-center items-start">

        <div>
            <ToastContainer />
        </div>

      {
        showForm && <AddForm handleForm={handleForm} ToastNoti={ToastNoti} categories={categories} setProductAdd={setProductAdd} />
      }
    <main className='w-[95%] p-3 h-full'>

    <div>

    <div className='mt-3 flex justify-between itemss-center'>

    <Text title={'products'} textCase='capitalize' size={24} color={'text-head-gray'} />

    <div className='flex items-center gap-1'>
      {
        [
          { text : 'promotions', fun : handlePromo},
          { text : 'add product', fun : handleForm}
      ].map((b,idx)=>(
        <div key={`btn-${idx}`} className='bg-primary py-1 px-3 rounded-md shadow-sm text-white'>
        <Button btnText={b.text} btnfun={b.fun} />
      </div>
      ))
      }

    </div>

    </div>

    <main className='mt-6'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-cols-min gap-3 p-2 bg-white border border-stone-100 drop-shadow-sm'>
      {
        !(isLoading && isError) && products?.map(product => <ProductCard 
          key={product._id}
          cardId = {product._id}
          cardHeader={product.productName}
          cardStock={product.stock}
          cardPrice={product.price}
          review={product.reviews}
          cardImg={product.image[0].path || '/profile.jpg'} 
          cardDeleteFun = {deleteProduct}
          cardRating={product.rating}
          productID={product._id}
          cardDiscount = {(product.discount && product.discount > 0) ? product.discount:''}
          /> ) 
      }
       
        </div>

        <div className='w-full py-3 flex justify-end items-center'>
        <Pagination 
        current={!(isLoading && isError) && Number(currentPage)} 
        total={!(isLoading && isError) && totalPagi}
        pagiFun ={getAllProducts}
         />
        </div>
    </main>

   </div>

   </main>
   </section>
  )
}

export default Products