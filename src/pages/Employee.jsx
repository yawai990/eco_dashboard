import React, { useState,useEffect } from 'react';
import { Text, Table, Loading, Button } from '../components';
import { employeeColName } from '../components/data/Table';
import { useNavigate, Link } from 'react-router-dom';
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

  const employeeDetail = (id) =>navigate(`/employee/${id}`)


  return (
    <section className="w-full p-3 flex justify-center items-start">
    <main className='w-[95%] p-3 h-full'>
      <div className='mt-3'>
        <section className='flex justify-between'>
      <Text title={'employee'} textCase='capitalize' size={24} color={'text-head-gray'} />
      
      <Link to={'/employee/addnewemployee'}>
      <Button btnText={'add new employee'} btnBg={'#FB2576'} btnColor='white' />
      </Link>

      </section>
      </div>
    <div className='w-full overflow-x-scroll mt-4'> 

          <Table colData={employeeColName} rowData={employeeData} border clickFun={employeeDetail} />
        </div>

   </main>
   </section>
  )
}

export default Employee