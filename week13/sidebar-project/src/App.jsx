import { UserContextProvider } from './userContext'
import Body1 from './components/Body1'
import Sidebar1 from './components/Sidebar1'
import './index.css'

function App() {

  return (
    <>
      <UserContextProvider>
        <div className='flex'>
          <Sidebar1/>
          <Body1/>  
        </div> 
      </UserContextProvider>
    </>
  )
}

export default App
