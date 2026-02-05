import { useState } from 'react'
import Characters from "./components/Characters.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Characters></Characters>
    </>
  )
}

export default App
