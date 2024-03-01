import { useState } from 'react'
import './App.css'
import Jumbotron from './jumbotron'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Jumbotron/>
    </>
  )
}

export default App
