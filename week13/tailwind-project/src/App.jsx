/* eslint-disable no-unused-vars */
import './App.css'
import { useState } from 'react';
import Sidebar from './Components/Sidebar';
function App() {
  // const [age, setAge] = useState("");
  // function buttonColor(){
  //   if(age=="") return "w-full bg-gray-400 mt-10 text-white font-bold rounded-md h-9";
  //   else return "w-full bg-green-700 mt-10 text-white font-bold rounded-md h-9";
  // }
  return(
    <>
      <Sidebar/>
      {/* <div className='min-h-screen min-w-full bg-blue-900 flex flex-col justify-around items-center'>
        <div className='flex flex-col h-96 text-center'>
          <div className='text-2xl'><span className='text-blue-300'>Webinar</span><span className='text-white'>.gg</span></div>
          <div className='text-white text-3xl font-bold mt-14'>Verify Your Age</div>
          <div className='text-white text-sm mt-10'>Please confirm your birth year. This data will not be stored.</div>
          <input type="text" placeholder='Your birth year' className='rounded-lg h-10 bg-blue-500 border border-white text-sm mt-5 px-5 py-3 text-white' value = {age} onChange={(e)=>setAge(e.target.value)}/>
          <button className={buttonColor()}>Continue</button>
        </div>
        
      </div> */}
    </>
  )
}

export default App
