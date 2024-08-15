import { useState } from 'react'
import './App.css'
import Crud from './components/Crud/Crud'
import Add_employee from './components/Add_employee/Add_employee'
import Details from './components/Details/Details'
import Userdetails from './components/Userdetails/Userdetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Userdetails/>

    </>
  )
}

export default App
