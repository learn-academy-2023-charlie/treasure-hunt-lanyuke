import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"

const App = () => {
  const [board, setBoard] = useState(Array(9).fill('?'))
  const [exitIndex, setExitIndex] = useState(Math.floor(Math.random() * 9))
  const [zombiIndex, setZombiIndex] = useState(Math.floor(Math.random() * 9))
  const [guessesLeft, setGuessesLeft] = useState(5)
  const [gameOver, setGameOver] = useState(false)

  const handleClick = (selectedIndex) => { 
    if (gameOver) {
      alert('Game is over! Please click "Rewind the Time" to restart the game.')
      return
    }
    const newBoard = [...board]
    if (selectedIndex === exitIndex) {
      newBoard[selectedIndex] = '🚪'
      setBoard(newBoard)
      setGameOver(true)
      alert('You Escape!')
      return 
    } else if (selectedIndex === zombiIndex) {
      newBoard[selectedIndex] = '🧟'
      setBoard(newBoard);
      setGameOver(true);
      alert('Zombie found you! You died!');
      return
    } else {
      newBoard[selectedIndex] = '🪦';
      setBoard(newBoard)
      alert('You feel something is not right...')
      setGuessesLeft(guessesLeft - 1);
      if (guessesLeft === 1) {
        newBoard[selectedIndex] = '🧟'
        setBoard(newBoard);
        setGameOver(true);
        alert('Zombie found you! You died!');
      return
      }
    }
  }

  const handleRestart = () => {
    setBoard(Array(9).fill('?'));
    setExitIndex(Math.floor(Math.random() * 9));
    setZombiIndex(Math.floor(Math.random() * 9));
    setGuessesLeft(5);
    setGameOver(false);
  }

  return (
    <>
      <h1>Find the Exit!</h1>
      <div className="board">
        <Square 
          board={board}
          handleClick={handleClick}
        />
      </div>
      <p>Zombie will definitely find you in {guessesLeft} steps!</p>
      {gameOver && (
      <button onClick={handleRestart}>
          Rewind the Time
      </button>
      )}
    </>
  )
}


export default App
