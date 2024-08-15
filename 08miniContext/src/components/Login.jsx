import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {setUser} = useContext(UserContext);

    const handleSumbit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div className='w-[25%] text-white mx-auto border flex flex-col bg-slate-700 border-black rounded-xl shadow-2xl p-5'>
      <div className='w-full flex flex-col gap-3'>
          <h1 className='text-2xl font-bold mx-auto'>ChaiAurCode</h1>
          <h2 className='font-bold text-xl  mx-auto'>Enter your login credentials</h2>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-start ml-8 font-bold text-gray-200'>Username:</label>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your Username'
            className='text-black border-none rounded-md w-[80%] mx-auto p-2'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="" className='text-start ml-8 font-bold text-gray-200'>Password:</label>
            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            className='text-black border-none rounded-md w-[80%] mx-auto p-2 '/>
          </div>

          <div className='w-[80%] mx-auto'>
            <button onClick={handleSumbit} className='bg-black text-gray-200 font-bold w-full mx-auto p-1 mb-3 rounded-md'>Submit</button>
          </div>

          <div className='mb-5 mx-auto'>
            <p className='font-normal'>Not registered? <span className='text-blue-600'>Create an account</span></p>
          </div>
      </div>
    </div>
  )
}

export default Login;