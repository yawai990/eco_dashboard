import React, { useState,useEffect } from 'react';
import { Text, Table, Loading } from '../components';
import { employeeColName, employeeData } from '../components/data/Table';
import { useNavigate } from 'react-router-dom';
import * as api from '../api';

const Employee = () => {
  const navigate =useNavigate();
  const [ employeeData, setEmployeeData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const getEmployee = async () =>{
    setIsLoading(true)
    await api.AllEmployee()
    .then(resp => {
      const { status , employees  } = resp.data;
      if(status){
        setIsLoading(false)
        setEmployeeData(employees)
      }
    })
    .catch(err => err)
  }

  useEffect(() =>{
    getEmployee()
  },[]);

  if(isLoading){
    return <Loading />
  }

  const employeeDetail = id => navigate(`/employee/${id}`);
  return (
    <section className="w-full p-3 flex justify-center items-start">
    <main className='w-[95%] p-3 h-full'>
      <div className='mt-3 '>
      <Text title={'employee'} textCase='capitalize' size={24} color={'text-head-gray'} />
    </div>

    <div className='w-full overflow-x-scroll mt-4'> 

          <Table colData={employeeColName} rowData={employeeData} border clickFun={employeeDetail} />
        </div>

   </main>
   </section>
  )
}

export default Employee