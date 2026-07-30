import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setcounter] =useState(15)
  
 const addvalue = ()=>{
   if(counter<20){
     counter = counter+1 
    setcounter(counter)
   }
 }
 const subvalue =()=>{
    if(counter>0){
        counter =counter-1
        setcounter(counter)
    }
 }

  return (
    <>
      <h1>Chai or React </h1>
      <h2>Counter value: {counter}</h2>
      <button 
      onClick={addvalue}
      >add value</button>
      <br />
      <button onClick={subvalue}
      >remove value</button>
    </>
  )
}

export default App
