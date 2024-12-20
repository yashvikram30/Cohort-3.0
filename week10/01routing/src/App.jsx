// routing and using layouts, very important concepts
import { useState  } from 'react'
import { BrowserRouter, Routes,  Route, Link , useNavigate, Outlet} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Landing/>}/>
          <Route path='class11'  element={<Class11/>}/>
          <Route path='class12'  element={<Class12/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

function Layout(){
  return (
    <div style={{backgroundColor: "yellow", height:"100vh"}}>
      <div style={{height:"10vh"}}><Header/></div>
      
      <div style={{height:"80vh" , backgroundColor:"pink"}}>
        <Outlet/>
      </div>
      
      <div style={{height:"10vh"}}>footer</div>
    </div>
  )
  
}

function Header(){
  return(
    <div>
      <Link to="/">Home</Link>
      |
      <Link to="class11">Class 11</Link>
      |
      <Link to="class12">Class 12</Link>
    </div>
  )
  
}

function Landing(){
  return(
    <div>
    Welcome to allen
    </div>
  )
  
}

function Class11(){
  return (
    <div>
      Hello, you are on class 11th page!
    </div>
  )
}

function Class12(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }
  return(
  <div>
    Hello, you are on class 12th page!
    <button onClick={redirectUser}>Go back to HomePage</button>
  </div>
  )
}

export default App
