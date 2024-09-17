import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crousels1 from './components/Crousels1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Crousels1/>
    </>
  )
}

export default App
