import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ status, letter }) {
  const className = status ? `cell ${status}` : 'cell'
  return <span className={className}>{letter}</span>;
}

function GuessGrid({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((number) => (
        <Cell
          key={number}
          letter={result ? result[number].letter : undefined}
          status={result ? result[number].status : undefined}
        />
      ))}
    </p>
  );
}

export default GuessGrid;
