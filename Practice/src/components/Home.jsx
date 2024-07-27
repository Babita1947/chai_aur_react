import React from 'react'

const Home = () => {
    const stringArray = ["Home", 
                         "News", 
                         "Sports", 
                         "Business", 
                         "Innovation", 
                         "Culture", 
                         "Travel", 
                         "Earth", 
                         "Video", 
                         "Live"];
  return (

    <div className='w-full'>
        <div className='flex justify-center items-center gap-0 mt-3'>
            {stringArray.map((item, index) => (
                <button key={index}
                        className='font-semibold text-slate-700 hover:text-black hover:bg-slate-100  px-3 py-2'>{item}
                </button>
            ))}
        </div>
        <div className='w-full h-1 pt-4'><hr /></div>
    </div>
  )
}

export default Home