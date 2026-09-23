import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [a,seta]=useState(" ")
  const [b,setb] = useState(" ")
  const [total,settotal] = useState(" ")
  return (
    <>
    <h1>basic calculator</h1>
    <div>
      <input type='number' value={a} placeholder='number1' onChange={(e) => seta(e.target.value)}/>
      <button onClick={seta}>enter</button>
      <input type='number' value={b} placeholder='number2' onChange={(e) => setb(e.target.value)}/>   
      <button onClick={setb}>enter</button>
    </div>
    <div> <button onClick={settotal}>add</button>
      <button onClick={settotal}>sub</button>
      <button onClick={settotal}>multi</button>
      <button onClick={settotal}>div</button>
      <button onClick={settotal}>mod</button></div>
      
    </>

  )
}

export default App
