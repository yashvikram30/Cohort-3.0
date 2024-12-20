// using contextapis
import React, { useState, createContext, useContext } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CountContext = createContext();

function CountContextProvider({children}){
  const [count, setCount] = useState(0)
 
  return <CountContext.Provider value={{count,setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {count,setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Increase() {
  const {count,setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

function App() {
  return <div>
    <Parent />
  </div>
}

export default App
