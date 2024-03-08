import React, { useState, useEffect } from 'react';
import Key from '../Key/Key';
import { checkGuess } from '../../game-helpers';

function Keyboard({ guesses, answer }) {
  const firstRow = 'QWERTYUIOP'.split('');
  const secondRow = 'ASDFGHJKL'.split('');
  const thirdRow = 'ZXCVBNM'.split('');
  const rows = [firstRow, secondRow, thirdRow];

  const [letterStatuses, setLetterStatuses] = useState({});

  useEffect(() => {
    const newLetterStatuses = {};
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    alphabet.forEach((letter) => {
      newLetterStatuses[letter] = 'unguessed';
    });
    guesses.forEach((guess) => {
      const result = checkGuess(guess.guess, answer);
      result.forEach(({ letter, status }) => {
        newLetterStatuses[letter] = status;
      });
    });
    setLetterStatuses(newLetterStatuses);
  }, [guesses, answer]); // Dependencies array ensures this effect runs only when `guesses` or `answer` changes.

  return (
    <div className="keyboard">
      {rows.map((row, index) => (
        <div key={`row-${index}`} className="keyboard-row">
          {row.map((letter) => (
            <Key
              key={letter}
              letter={letter}
              status={letterStatuses[letter]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
