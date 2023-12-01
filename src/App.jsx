import { useState } from 'react'
import './App.css'

function App() {
  const [gameState, setGameState] = useState("menu")

  return (
    <>
      <h1>Quiz App</h1>
      <MainMenu></MainMenu>
    </>
  )
}

export default App
