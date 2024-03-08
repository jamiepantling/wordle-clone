import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import TextInput from '../TextInput/TextInput';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessList from '../GuessList/GuessList';
import Banner from '../Banner';
import Keyboard from '../Keyboard/Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setguesses] = React.useState([]);

  let guessesLeft = NUM_OF_GUESSES_ALLOWED - guesses.length;
  let gameOver = false;
  if (
    guessesLeft === 0 ||
    guesses[guesses.length - 1]?.guess === answer
  ) {
    gameOver = true;
  }
  let gameResult = '';
  if (gameOver)
    gameResult =
      guessesLeft === 0 &&
      guesses[guesses.length - 1]?.guess !== answer
        ? 'sad'
        : 'happy';

  return (
    <>
      <GuessList
        guesses={guesses}
        answer={answer}
        guessesLeft={guessesLeft}
        gameOver={gameOver}
      />
      <TextInput
        guesses={guesses}
        setguesses={setguesses}
        gameOver={gameOver}
      />
      <Keyboard guesses={guesses} answer={answer} />
      {gameOver && <Banner gameResult={gameResult} answer={answer} />}
    </>
  );
}

export default Game;
