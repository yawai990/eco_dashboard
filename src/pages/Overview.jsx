import React,{ useState } from 'react';
import { Text,Card, Chart, Table } from '../components';
import { columName, tableRowData } from '../components/data/Table';
import { BsHandbagFill } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { HiUserGroup,HiShoppingCart } from 'react-icons/hi';

const Overview = () => {
  const [ chartTitle, setChartTitle ] =useState('income');

  return (
    <section className="w-full flex justify-center items-start">
      
      <main className='w-[95%] p-1 h-full'>
      <div className='mt-3 '>
      <Text title={'overview'} textCase='capitalize' size={24} color={'text-head-gray'} />
      </div>

      <div className="w-full mt-6 flex flex-wrap justify-between items-center gap-1">
      <Card cardHeader={'Total Sales'} cardRevenue={25415648} cardPercent={'+25'} cardIcon={<BsHandbagFill />} iconColor='#FC7300' percentColor='#38E54D' />
      <Card cardHeader={'Total Expenses'} cardRevenue={124561} cardPercent={'-32'} cardIcon={<AiFillPieChart />} iconColor='#76549A' percentColor='#CC3636' />
      <Card cardHeader={'Total Visitors'} cardRevenue={24687} cardPercent={'+48'} cardIcon={<HiUserGroup />} iconColor='#38E54D' percentColor='#38E54D' />
      <Card cardHeader={'Total Orders'} cardRevenue={11112} cardPercent={'-5'} cardIcon={<HiShoppingCart />} iconColor='#CC3636' percentColor='#CC3636' />

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
            <option value={2021}>2021</option>
            <option value={2021}>2022</option>
            <option value={2021}>2023</option>
            <option value={2021}>2024</option>
          </select>
        </div>

        <div className="mt-5">
        <Chart chartTitle={chartTitle} />
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