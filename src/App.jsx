import { useState } from 'react'
import './App.css'
import { Home } from './Pages/Home/Home'
import ShopWithSidebar from './Pages/Shop/Shop with sidebar/ShopWithSidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    
    <ShopWithSidebar/>

    </>
  )
}

export default App
