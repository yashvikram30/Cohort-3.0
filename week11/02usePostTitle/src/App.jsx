import { useState } from 'react'
import { useFetch, usePostTitle } from './hooks/useFetch.jsx'
import './App.css'

function App() {

  const [currentTodo, setCurrentTodo] = useState(1)
  const {finalData , loading} = useFetch('https://jsonplaceholder.typicode.com/todos/'+currentTodo)

  if(loading){
    return (
      <>
      Loading...
      </>
    )
  }
  return (
    <>
    <button onClick={()=>setCurrentTodo(1)}>1</button>
    <button onClick={()=>setCurrentTodo(2)}>2</button>
    <button onClick={()=>setCurrentTodo(3)}>3</button>
    <br/> <br/> <br/>
    {JSON.stringify(finalData)}
    </>
  )
}

export default App
