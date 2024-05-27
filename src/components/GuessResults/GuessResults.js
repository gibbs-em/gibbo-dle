import React from "react";

import GuessGrid from "../GuessGrid/GuessGrid";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";


function GuessResults({ previousGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <GuessGrid key={number} value={previousGuesses[number]} answer={answer}/>
      ))}
    </div>
  );
}

export default GuessResults;
