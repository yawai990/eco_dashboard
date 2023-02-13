import React,{ useEffect, useState } from 'react';
import { Text, Table, Button, CalendarCom } from '../components';
import { orderColName, orderData } from '../components/data/Table';
import { TiTimes } from 'react-icons/ti';
import { format } from 'date-fns';
import * as api from '../api';
import { useQuery } from 'react-query';

const Orders = () => {
  const [ openCalendar, setOpenCalendar ] = useState(false);
  const [ data, setData ] = useState([]);
  const [ orderDate, setOrderDate ] = useState(new Date());

  const getAllOrders = async(date) =>{
    try {
      return await api.getOrders(date) 
      .then(resp=>{
        console.log(resp)
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
    getAllOrders(`${new Date(orderDate).getDate()}${new Date(orderDate).getMonth() + 1}${new Date(orderDate).getFullYear()}`)
  }, [orderDate])
 

  const handleSetOrderDate = e => {
    setOrderDate(e)
    handleCalendar()
  }
  const handleCalendar = () => setOpenCalendar(!openCalendar);

  return (
    <section className="w-full flex justify-center items-start">
       <main className='w-[95%] p-3 h-full'>
       <div className='mt-3 flex justify-between items-center'>
       <Text title={'orders'} textCase='capitalize' size={24} color={'text-head-gray'} />

          <div className='py-1 px-3 bg-primary text-white rounded-md'>
          <Button btnText={format(orderDate,'dd/MM/yyyy')} btnBg={'primary'} btnColor='white' btnfun={handleCalendar} />
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