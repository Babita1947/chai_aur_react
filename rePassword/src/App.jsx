
import { useState, useCallback, useEffect, useRef,  } from 'react'
import './App.css'

function App() {
   const [length, setLength] = useState(8);
   const [numberAllowed, setNumberAllowed] = useState(false);
   const [charAllowed, setCharAllowed] = useState(false);

   const [password, setPassword] = useState("");
   const [selected, setSelected] = useState(false);
   
   const passwordRef = useRef(null);

   const passwordGenerator = useCallback(() => {
      setSelected(false);
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(numberAllowed)
        str += "0123456789";
      if(charAllowed)
        str += "!@#%^&*-_+=[]{}~`";

      for(let i=1;i<=length;i++){
         let char = Math.floor(Math.random()*(str.length + 1));
         pass += str.charAt(char);
      }
      setPassword(pass);
   }, [length, numberAllowed, charAllowed, setPassword]);


  useEffect(() => {
     passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    //  use of passwordRef 
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setSelected(true);

  },[password]);

  return (

    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
            <h1 className='text-white text-center my-3'>Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text"
                     value={password}
                     className='w-full outline-none py-1 px-3'
                     placeholder='Password' 
                     readOnly
                     ref={passwordRef}
              />

              <button onClick = {copyPasswordToClipboard}
                      className={`outline-none ${selected===true ? "bg-blue-700" : "bg-blue-700"}  text-white px-3 py-0.5 shrink-0`}>
                        {selected === true ? "copied" : "copy"} 
              </button>

              
            </div>

            <div className='flex text-sm gap-x-2'>
               <div className='flex items-center gap-x-1'>
                <input type="range"
                       value={length} 
                       min={6}
                       max={100}
                       className='cursor-pointer'
                       onChange={(e) => {
                          setLength(e.target.value);
                       }}/>
                <label htmlFor="length">Length: {length}</label>
               </div>

               <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                         defaultChecked={numberAllowed}
                         id="charInput"
                         onChange={()=>{
                           setNumberAllowed((prev) => !prev)
                         }} />
                  <label htmlFor="numberInput">Numbers</label>
               </div>

               <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                         defaultChecked={charAllowed}
                         id="numberInput"
                         onChange={()=>{
                           setCharAllowed((prev) => !prev);
                         }} />
                  <label htmlFor="numberInput">Characters</label>
               </div>
            </div>


      </div>
    </>
  )
}

export default App
