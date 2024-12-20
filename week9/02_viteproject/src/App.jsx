import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = ()=>{
    if(count<20){
      setCount(count+1);
    }
    
  }

  const decreaseCount = ()=>{
    if(count>0){
      setCount(count-1);
    }
    
  }

  return (
    <>
    <h1>Chai and Code</h1>
    <button onClick={increaseCount}>Add count: {count}</button> <br />
    <button onClick={increaseCount}>Add count2: {count}</button><br />
    <button onClick={decreaseCount}>Remove count: {count}</button>
    </>
  )
}

export default App;
