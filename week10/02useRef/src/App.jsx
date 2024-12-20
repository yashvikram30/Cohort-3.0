import { useState,useRef } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time,setTime] = useState(1)
  const intervalRef = useRef(null);

  function startClock(){
    timer = setInterval(()=>{
      setCount(count+1)
    },1000)
    timer
  }

  function stopClock(){

  }

  return (
    <>
    {count}
    <br/>
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
    </>
  )
}

export default App
