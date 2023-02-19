import React,{ useEffect, useState } from 'react';
import { Text, Table, Button, CalendarCom } from '../components';
import { orderColName, orderData } from '../components/data/Table';
import { TiTimes } from 'react-icons/ti';
import { format } from 'date-fns';
import * as api from '../api';

const Orders = () => {
  const [ openCalendar, setOpenCalendar ] = useState(false);
  const [ data, setData ] = useState([]);
  const [ orderDate, setOrderDate ] = useState('all');

  const getAllOrders = async(orderdate) =>{
    let order_date = 'all';
    
    if(orderdate && orderdate !== 'all'){
      const date = new Date(orderdate);
      const day = date.getDate() < 9 ? `0${date.getDate()}`:date.getDate();
      const month = date.getMonth()+1 < 9 ? `0${date.getMonth()+1}`:date.getMonth()+1;
      const year = date.getFullYear();
  
     order_date = `${day}-${month}-${year}`;
    };
    try {
      await api.getOrders(order_date) 
     .then(resp=>{
       if(resp.status === 200){
         setData(resp.data)
       }
     })
     .catch(err => err)
   } catch (error) {
       return error
   }

  };

  useEffect(()=>{
    if(orderDate !== 'all') getAllOrders(orderDate);
    else getAllOrders()
      
  }, [orderDate]);
 

  const handleSetOrderDate = e => {
    setOrderDate(e)
    handleCalendar()
  }
  const handleCalendar = () => setOpenCalendar(!openCalendar);
  const handleallOrder =() => setOrderDate('all');

  return (
    <section className="w-full flex justify-center items-start">
       <main className='w-[95%] p-3 h-full'>
       <div className='mt-3 flex justify-between items-center'>
       <Text title={'orders'} textCase='capitalize' size={24} color={'text-head-gray'} />

          <div className='flex gap-2'> 
          <div className='py-1 px-3 bg-primary text-white rounded-md'>
          <Button btnText={'all orders'} btnBg={'primary'} btnColor='white' btnfun={handleallOrder} />
          </div>
          <div className='py-1 px-3 bg-primary text-white rounded-md'>
          <Button btnText={orderDate !== 'all' ? format(orderDate,'dd/MM/yyyy') : 'all orders'} btnBg={'primary'} btnColor='white' btnfun={handleCalendar} />
          </div>
          </div>

      </div>

      <div className='max-w-full overflow-x-scroll mt-4'>
        <Table colData={orderColName} rowData={data} border />
      </div>
      </main>

      {
        openCalendar &&
      <div className="calendar w-full h-full bg-[rgba(23,23,23,0.5)] absolute top-0 left-0">

        <div className='h-[10%] px-8 text-[36px] flex justify-end items-center'>
          <Button btnText={<TiTimes />} btnColor={'white'} btnBg={'#FB2576'} rectangle rounded shadow btnfun={handleCalendar} />
        </div>

        <div className='w-[70%] mx-auto bg-white'>
        <CalendarCom date={orderDate} handleSetOrderDate={handleSetOrderDate} />
        </div>
      </div>
      }
      </section>
  )
}

export default Orders