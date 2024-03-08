import React from 'react';

function Key({ letter, status }) {
  return (
    <div className={`key ${status}`}>{letter.toUpperCase()}</div>
  );
}

export default Key;
