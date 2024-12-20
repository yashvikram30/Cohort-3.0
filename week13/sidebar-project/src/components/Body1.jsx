/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { userContext } from "../userContext"

const Body1 = () => {
  const {toggle,setToggle} = useContext(userContext);
  return (
      <div className="bg-red-400 w-full h-screen flex flex-col">
        <div className="bg-gray-700 h-28"></div>
        <div className="bg-slate-100 h-screen flex gap-5 px-10 z-0">

          <div className="bg-white w-3/12 h-3/6 relative z-20 bottom-8 border border-gray-300 shadow-md shadow-gray-300 rounded-xl"></div>

          <div className="bg-slate-100 w-6/12 flex flex-col gap-8 my-6">
          <p className="text-sm">Monday, 14 October</p>
          <p className="text-2xl font-bold">Good Morning, Yash!</p>
          <div className="bg-white h-3/5 border border-gray-300 shadow-md shadow-gray-300 rounded-xl"></div>
          </div>

          <div className="bg-white w-4/12 h-2/5 border border-gray-300 shadow-md shadow-gray-300 rounded-xl relative top-36"></div>
        </div>
      </div>
   
  )
}

export default Body1
