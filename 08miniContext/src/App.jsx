import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider>
      <div className='w-full h-dvh flex flex-col mx-auto items-center justify-center bg-slate-900'>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
