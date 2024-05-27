import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    setPreviousGuesses([...previousGuesses, guess]);
  }

  return (
    <div>
      <GuessResults previousGuesses={previousGuesses} answer={answer}/>
      <GuessInput handleSubmitGuess={handleSubmitGuess} previousGuesses={previousGuesses} answer={answer}/>
    </div>
  );
}

export default Game;
