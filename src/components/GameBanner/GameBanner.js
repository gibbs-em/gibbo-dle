import React from "react";

function GameBanner({ result, answer, guessNumber }) {
  const className = `banner ${result}`;
  const isAWinner = result === "happy";

  return (
    <div className={className}>
      {isAWinner ? (
        <div>
          <p>
            <strong>Nicely done!</strong> you got the answer in
            <strong>
            {guessNumber === 1
              ? ` ${guessNumber} guess `
              : ` ${guessNumber} guesses `}
            </strong>
            🎉
          </p>
          <button
            onClick={() => window.location.reload(true)}
            className="button"
          >
            Play again
          </button>
        </div>
      ) : (
        <div>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong> 😭
          </p>
          <button
            onClick={() => window.location.reload(true)}
            className="button"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}

export default GameBanner;
