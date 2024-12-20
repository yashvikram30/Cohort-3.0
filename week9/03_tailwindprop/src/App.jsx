import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-purple-400 rounded-xl'>Hi there, I am trying to use TailWind for the first time hihiihi</h1>

    <Card username="yash" location="Bengal, India" description="tailwind is fun"/>
    <Card username="ayush" location="UP, India" description="i am using react"/>
    </>
  )
}

export default App
