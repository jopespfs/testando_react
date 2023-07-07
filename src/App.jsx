import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sobrenome, setSobrenome] = useState('Figueiredo')
  // let sobrenome = 'figueiredo'
  const morfar = () => {
    setSobrenome(sobrenome.toUpperCase())
    
  }

   return (
    <>
      <h1>Jopes</h1>
      <div>{sobrenome}</div>
      <br />
      <button type='button' onClick={morfar}>Tranformar</button>
    </>
  )
}

export default App
