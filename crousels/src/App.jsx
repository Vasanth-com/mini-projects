import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crousels1 from './components/Crousels1'
import Crousels2 from './components/Crousels2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Crousels1/> */}
     <Crousels2/>
    </>
  )
}

export default App
