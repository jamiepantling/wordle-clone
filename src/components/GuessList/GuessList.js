import React from 'react';
import '../../constants';
import Guess from '../Guess/Guess';
import { range } from '../../utils';

function GuessList({ guesses, answer, guessesLeft, gameOver }) {
  return (
    <div className="guess-results">
      {guesses.length > 0 &&
        range(guesses.length).map((guessNumber) => {
          return (
            <Guess
              guessNumber={guessNumber}
              guesses={guesses}
              key={guesses[guessNumber].id}
              answer={answer}
            />
          );
        })}
      {range(guessesLeft).map((num) => {
        return <Guess guesses={guesses} key={num} />;
      })}
    </div>
  );
}

export default GuessList;
