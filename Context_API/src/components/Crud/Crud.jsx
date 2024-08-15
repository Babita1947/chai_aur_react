import React from 'react'
import { Link } from 'react-router-dom'

function Crud() {
  return (
    <div className='w-[60%] mx-auto mt-5  flex flex-col justify-center items-center border-2'>
          <h1 className='flex justify-center items-center text-3xl font-bold underline'>Employees Managemnet(CRUD)</h1>

          <div className='w-full flex justify-around font-semibold my-7'>
            <p>Add New Employee</p>
            <Link to={"/employeeadd"}>
                <button className='bg-black text-white px-3 py-1 mx-4 rounded-md'>Add</button>
            </Link>
          </div>

          <div className='bg-slate-200 h-[1px] w-full'></div>

          <div className='w-full flex font-semibold mx-10 px-40 my-7'>Employees List :</div>

          <div className='w-full flex justify-around font-semibold  mx-3 p-6'>
            <p className=''>emp_id emp_name</p>
            <p className=' text-black px-3 py-1 mx-4 '>View Details</p>
          </div>
          
          <div className='bg-slate-200 h-[1px] w-full'></div>

          <div className='w-full flex justify-center items-center text-gray-600 py-3'>
            <p>No Employees in the system</p>
          </div>

       </div>
  )
}

export default Crud