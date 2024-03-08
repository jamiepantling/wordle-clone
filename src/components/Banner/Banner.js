import React from 'react';

function Banner({ gameResult, answer }) {
  return (
    <div className={`banner ${gameResult}`}>
      {gameResult === 'happy'
        ? `You win! The answer was ${answer}.`
        : `Sorry, the answer was ${answer}.`}
    </div>
  );
}

export default Banner;
