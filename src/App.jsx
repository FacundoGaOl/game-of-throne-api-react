import { useState } from 'react'
import Characters from "./components/Characters.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Characters/>
    <Footer/>
    </>
  )
}

export default App