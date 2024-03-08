import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guessNumber, guesses, answer }) {
  let result = [];

  if (guesses.length > 0 && guessNumber >= 0) {
    result = checkGuess(guesses[guessNumber].guess, answer);
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={`cell ${result[num] ? result[num].status : ''}`}
          key={crypto.randomUUID()}
        >
          {guesses && guessNumber >= 0
            ? guesses[guessNumber].guess[num]
            : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
