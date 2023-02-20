import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as api from '../api';
import { Loading } from '../components';

const OrderDetails = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/').slice(-1)[0];

  const getSingle = async( orderId) =>{
   return await api.getSingleOrder(orderId)
    .then(resp => resp.data)
    .catch(err => console.log(err))
  }

  const { isLoading, error, data } = useQuery('orderdetails',() =>getSingle(id));

  if(isLoading) <Loading />

  return (
    <div>OrderDetails</div>
  )
}

export default OrderDetails