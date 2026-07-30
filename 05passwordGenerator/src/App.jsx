import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length,setlength] = useState(8);
  const [number,setnumber] =useState(false);
  const [character,setcharacter] =useState(false);
  const [password,setpassword] = useState("")
  const passwordRef = useRef(null)
  const passwordGenerator =useCallback(()=>{
      let pass=""
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(number) str+="0123456789"
      if(character) str+="!@#$%^&*()+?:"

      for(let i=1;i<=length;i++){
        let char=Math.floor(Math.random() *str.length+1)
        pass += str.charAt(char)

        
      }
      setpassword(pass)
  },[length,number,character,setpassword])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white '>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button  onClick={copyToClipBoard}
          className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
             min={8}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setlength(e.target.value)}} 
            />
            <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={number}
            id='numberInput'
            onChange={(e)=>{setnumber((prev) => !prev)}}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={character}
            id='numberInput'
            onChange={(e)=>{setcharacter((prev) => !prev)}}
            />
            <label>character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
