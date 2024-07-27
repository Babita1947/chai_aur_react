import React from 'react'

const Box = ({item}) => {
    console.log(item);

  return (
    <div>
        <div className='w-60 px-3 mx-3 mt-5 '>
            <div className='h-50 w-60'>
              <img src={item.url} alt="Image not found" />
            </div>
            <h1 className='text-2xl font-semibold font-serif'>{item.heading}</h1>
            <p className='text-slate-800 font-serif mt-3'>{item.description} 
            </p>

            <div className='w-40 flex justify-between text-xs text-slate-700 mt-3'>
              <p>{item.datePosted}</p>
              <div className='h-3 w-[0.5px] bg-slate-700'></div>
              <p>{item.direction}</p>
            </div>
        </div>
    </div>
  )
}

export default Box