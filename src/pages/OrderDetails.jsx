import React, { useState, useEffect} from 'react';
import { Button, Text } from '../components';
import { useLocation } from 'react-router-dom';
import * as api from '../api';
import { format } from 'date-fns';
import { Loading, ImageCom } from '../components';

const OrderDetails = ({ toast }) => {
  const { pathname } = useLocation();
  const [ loading, setLoading ] = useState(true);
  const [ deliver, setDeliver ] = useState(false);
  const id = pathname.split('/').slice(-1)[0];
  const [ single_order, set_single_order ] = useState({});

  const getSingle = async( orderId) =>{
    setLoading(true)
   return await api.getSingleOrder(orderId)
    .then(resp => {
      const { status, order } = resp.data;
      if(status){
        set_single_order(order)
        setLoading(false);
      }
    })
    .catch(err => console.log(err))
  };

  const handleDeliver = async (orderid) => {
    setDeliver(true)
    await api.MakeDelivered(orderid, {
      isDeliver : true
    })
     .then(resp => {
       const { status, message } = resp.data;
       if(status){
        setDeliver(false);
        toast(message)
        getSingle(id)
       }
     })
     .catch(err => console.log(err))
  }

  useEffect(()=>{
    getSingle(id)
  }, [ pathname ]);

  if(loading) {
  return <Loading />
}

  return (
    <div>
      <Text title={'Order Details'} size={22} color={'stone-700'} />
      
      <div className='w-[90%] mt-5 p-5 flex justify-around'>
      <div>
      <Line header={'Order ID :'} detail={single_order._id} />
      <Line header={'Order Item :'} detail={`${single_order.product.productName || 'product name'}(x${single_order.orderQuantity})`} />
      <Line header={'Price/Unit :'} detail={`$${single_order.product.price}`} />
      <Line header={'Total :'} detail={`$${single_order.orderQuantity * single_order.product.price}`} />

      <Line header={'Payment :'} detail={
        single_order.payment === 0 ? 'Cash On Delivery':
        single_order.payment === 1 ? 'MPU':
        single_order.payment === 2 ? 'Paypal': 'Mobile Banking'
        } />

    <Line header={'Order Date :'} detail={single_order.orderDate} />

    <div className='mt-3'>
      {single_order.isDeliver && <Line header={'Delivered At :'} detail={format(new Date(single_order.deliveredAt),'dd/MM/yy HH:mm:ss')} />}
      </div>
   
      <Button disabled={single_order.isDeliver}
              btnfun={() => handleDeliver(single_order._id)} 
              btnText={single_order.isDeliver ? 'product delivered':'make as deliver'} 
              btnBg={single_order.isDeliver ? '#eeeeee':'#54B435'} 
              btnColor={!single_order.isDeliver ? "white":'black'}  />
      
    </div>

    <div className='w-[45%] h-[45%] flex justify-center items-center border border-stone-300 rounded'>
      <ImageCom id={single_order.product.image[0].path} />
    </div>
    </div>

    <div className="mt-5">
      <Text title={'Customer Details'} size={22} color={'stone-600'} />

      <div className='w-[50%] p-5'>

      <Line header={'Email :'} detail={single_order.user.email} />
      <Line header={'Name :'} detail={single_order.user.name} />
      </div>
    </div>
    </div>
  )
};

const Line = ({ header, detail}) => {
  return <div className='mb-3 flex items-center justify-start gap-4'>
  <Text title={header} size={16} />
  <Text title={detail} />
</div>
}

export default OrderDetails