import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [a, seta] = useState('')
  const [b, setb] = useState('')
  const [total, settotal] = useState(null)

  const handleCalculate = (operator) => {
    const num1 = parseFloat(a)
    const num2 = parseFloat(b)

    if (isNaN(num1) || isNaN(num2)) {
      settotal('Please enter valid numbers')
      return
    }

    switch (operator) {
      case '+':
        settotal(num1 + num2)
        break
      case '-':
        settotal(num1 - num2)
        break
      case '*':
        settotal(num1 * num2)
        break
      case '/':
        settotal(num2 !== 0 ? num1 / num2 : 'Cannot divide by zero')
        break
      case '%':
        settotal(num1 % num2)
        break
      default:
        break
    }
  }

  return (
    <>
      <h1>Basic Calculator</h1>
      <div>
        <input
          type='number'
          value={a}
          placeholder='Number 1'
          onChange={(e) => seta(e.target.value)}
        />
        <input
          type='number'
          value={b}
          placeholder='Number 2'
          onChange={(e) => setb(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={() => handleCalculate('+')}>Add</button>
        <button onClick={() => handleCalculate('-')}>Sub</button>
        <button onClick={() => handleCalculate('*')}>Multi</button>
        <button onClick={() => handleCalculate('/')}>Div</button>
        <button onClick={() => handleCalculate('%')}>Mod</button>
      </div>

      {total !== null && <h2>Result: {total}</h2>}
    </>
  )
}

export default App