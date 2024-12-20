import { useState } from 'react'
import './App.css'

//useCount custom hook
function useCount (){
  const [count, setCount] = useState(0);
  function increaseCount(){
    setCount(()=>count+1)
  }
  return {
    count,
    increaseCount
  }
}

function Counter(){
  const {count,increaseCount} = useCount();
  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

function App() {

  return (
    <>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </>
  )
}

export default App
