import React, { useState } from 'react';
import './App.css'


const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = ()=>{
    setCount(count + 1)
  }

  const handleDecrement = ()=>{
    setCount(count - 1);
  }
  return (


    <div className='App'>
      <h1>COUNTER</h1>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default App
