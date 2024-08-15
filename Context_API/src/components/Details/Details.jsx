import React from 'react'
import Add_employee from '../Add_employee/Add_employee'
function Details() {
  

  return (

     <div className='w-full flex justify-around font-semibold my-7'>
        <div className='w-[60%] flex border justify-between p-4'>
            <p>UserId UserName</p>
            <div className='flex'>
                <button className='bg-black text-white px-3 py-1 mx-4 rounded-md'>View</button>
                <button className='bg-red-600 text-white px-3 py-1 mx-4 rounded-md'>Delete</button>
            </div>
        </div>
     </div>

  )
}

export default Details

{/* <div className='w-full flex justify-around font-semibold my-7'>
            <p>Add New Employee</p>
            <button className='bg-black text-white px-3 py-1 mx-4 rounded-md'>View</button>
            <button className='bg-red-600 text-white px-3 py-1 mx-4 rounded-md'>Delete</button>
</div> */}

{/* <div className='flex gap-4 border p-4'>
        
</div> */}