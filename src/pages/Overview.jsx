import React,{ useState, useEffect } from 'react';
import { Text,Card, Chart, Table } from '../components';
import { columName, tableRowData } from '../components/data/Table';
import { BsHandbagFill } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { HiUserGroup,HiShoppingCart } from 'react-icons/hi';
import * as api from '../api';

const Overview = () => {
  const [ chartTitle, setChartTitle ] =useState('income');
  const [ t_order, setT_order] = useState(0);
  const [ total_sales, set_total_sales ] = useState(0);
  const [ total_revenue, set_total_revenue ] = useState(0);
  const [ incomeData, setIncomeData ] = useState([]);

  const TotalOrder = async() => {
   await api.totalOrder()
    .then(resp => {
      const { status, total_order } = resp.data;

      if(status){
        setT_order(total_order)
      }
    })
    .catch(err => err)
  };
  const revenue_and_saleQty = async() =>{
    await api.totalSalesRevenue()
    .then(resp => {
      console.log(resp)
     const { status,totalRevenue,totalSales,monthly_revenue } = resp.data;
   
     if(status){
      let r_data=[];
       //for the total revenue per month
     for (let i = 0; i < Object.keys(monthly_revenue).length; i++) {
      const revenue_by_month = monthly_revenue[Object.keys(monthly_revenue)[i]].reduce((acc,cur)=>{
        let t = cur.price * cur.quantity
        return t + acc
      },0);
     r_data.push({name : Object.keys(monthly_revenue)[i], income : revenue_by_month});
     };
      set_total_sales(totalSales)
      set_total_revenue(totalRevenue)
      setIncomeData(r_data)
     }
    })
    .catch(err => console.log(err));

  };

  useEffect(() =>{
    TotalOrder()
    revenue_and_saleQty()
  },[]);

  return (
    <section className="w-full flex justify-center items-start">
      
      <main className='w-[95%] p-1 h-full'>
      <div className='mt-3 '>
      <Text title={'overview'} textCase='capitalize' size={24} color={'text-head-gray'} />
      </div>

      <div className="w-full mt-6 flex flex-wrap justify-between items-center gap-1">
      <Card cardHeader={'Total Sales'} cardRevenue={total_sales} cardPercent={'+25'} cardIcon={<BsHandbagFill />} iconColor='#FC7300' percentColor='#38E54D' />
      <Card cardHeader={'Total Revenue'} cardRevenue={total_revenue} cardPercent={'-32'} cardIcon={<AiFillPieChart />} iconColor='#76549A' percentColor='#CC3636' />
      <Card cardHeader={'Total Visitors'} cardRevenue={24687} cardPercent={'+48'} cardIcon={<HiUserGroup />} iconColor='#38E54D' percentColor='#38E54D' />
      <Card cardHeader={'Total Orders'} cardRevenue={t_order} cardPercent={'-5'} cardIcon={<HiShoppingCart />} iconColor='#CC3636' percentColor='#CC3636' />

      </div>

      <div className="w-full mt-6 bg-white border border-stone-300 p-3 rounded">

        <div className='w-full flex justify-between items-center'>

          <div className='flex gap-3'>
            {
              ['income','expense'].map((btn, ind) => (
                <button key={`chartBtn-${ind}`} 
                onClick={() => setChartTitle(btn)}
                className={`text-xl capitalize text-head-gray ${chartTitle === btn ? 'font-semibold':'font-normal'}`}>
                  {btn}
                  </button>
              ))
            }
          </div>
          <select name="year" id="" className='border p-1 outline-none rounded-md border-head-gray font-semibold text-head-gray'>
            <option value={2021}>2023</option>
            <option value={2021}>2024</option>
          </select>
        </div>

        <div className="mt-5 capitalize">
        <Chart chartTitle={chartTitle} data={incomeData} />
        </div>
      </div>

      <div className="w-full mt-6 bg-white border border-stone-300 p-3 rounded">
      <Text title={'Popular Products'} textCase='capitalize' size={20} color={'text-head-gray'} />

      <div className='mt-3'>
          <Table colData={columName} rowData={tableRowData} />
      </div>

        </div>

      </main>
    </section>
  )
}

export default Overview