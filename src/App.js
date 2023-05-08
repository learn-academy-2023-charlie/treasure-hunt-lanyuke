import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])



  const handleClick = (selectedIndex) => { 
    if (selectedIndex === 0) {
      board[0] = "💰"  
      alert(selectedIndex)
    } else if (selectedIndex === 8) {
      board[8] = "💣" 
      alert(selectedIndex)
    } else {
      board[selectedIndex] = "🌳" 
      alert(selectedIndex)
    }
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square 
      board={board}
      handleClick={handleClick}
      />
    </>
  )
}

export default App
