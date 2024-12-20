import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LightBulb />
    </>
  )
}

function LightBulb(){

  const [bulbOn, setBulbOn] = useState(true)
  return(
    <>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </>
  )
}

function BulbState({bulbOn}){
  return(
    <>
    {bulbOn ? <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDi758_Tod-lDZFh0iXzjyAUCNkx1MsA32QA&s' alt="bulb on"/>
    : 
    <img src='https://cdn-icons-png.flaticon.com/256/32/32299.png' alt="bulb off"/>}
    </>
  )
}

function ToggleBulbState({bulbOn,setBulbOn}){
  return(
    <div>
      <button onClick={()=>{setBulbOn(!bulbOn)}}> Toggle me</button>
    </div>
  )
}


export default App
