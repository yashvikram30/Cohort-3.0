import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const incrementCount = useEffect(() => {
    setCount(count+1)
  }, [])
  
  // will run the first term
  useEffect(() => {
    setInterval(incrementCount, 1000)
  }, [])
  
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white'}}>{count}</div>
    </>
  )
}

export default App
