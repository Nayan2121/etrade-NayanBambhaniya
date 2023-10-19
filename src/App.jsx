import { useState } from 'react'
import './App.css'
import { Home } from './Pages/Home/Home'
import Account from './Pages/Account/Account'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Account/>
    </>
  )
}

export default App
