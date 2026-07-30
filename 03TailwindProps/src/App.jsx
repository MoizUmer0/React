import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/cards'

function App() {
  
let myobj={
  username:"Moiz",
  age:21

}
let newarray=[1,2,3]
  return (
      <>
      <h1 className='bg-green-400 text-balck p-4 rounded-xl text-center mb-4'>Tail wind</h1>
      <Card username="Chair or code"/>
      <Card username="Moiz umer"/>
      </>
  );
  
}
  


export default App
