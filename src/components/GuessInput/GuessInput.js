import React from "react";
import GameBanner from "../GameBanner/GameBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";


function GuessInput({handleSubmitGuess, previousGuesses, answer}) {
  const [guess, setGuess] = React.useState('');
  const [gameOver, setGameOver] = React.useState(false)
  const [result, setResult] = React.useState('')
  const [guessNumber, setGuessNumber] = React.useState(1)
  
  const handleGameOver = (guess, answer) => {
    const nextResult = guess === answer ? 'happy' : 'sad'
    setResult(nextResult)
    setGuessNumber(previousGuesses.length + 1)
    if (previousGuesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true)
    }
    if (nextResult === 'happy') {
      setGameOver(true)
    }
  }

  const handleSubmit = (guess, answer) => {
    handleSubmitGuess(guess)
    setGuess('')
    handleGameOver(guess, answer)
  };


  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(guess, answer)
      }}>
        <label htmlFor="guess-input">Enter your guess:</label>
        <input
          id="guess-input"
          name="guess-input"
          type="text"
          value={guess}
          disabled={gameOver}
          pattern="[A-Za-z]{5}"
          title="Your guess should contain 5 letters"
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
        />
      </form>
      {gameOver &&
        <GameBanner result={result} guessNumber={guessNumber} answer={answer}/>
      }
    </div>
  );
}

export default GuessInput;
