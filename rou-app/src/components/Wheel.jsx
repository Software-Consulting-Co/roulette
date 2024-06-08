
import React from 'react'

import { Roulette, useRoulette } from 'react-hook-roulette';

const items = [
  { name: 'label1' },
  { name: 'label2' },
  { name: 'label3' },
  { name: 'label4' },
  { name: 'label5' },
  { name: 'label6' },
];

export default ({ name }) => {
  const { roulette, onStart, onStop, result } = useRoulette({ items });
  return (
    <div className="mt-2 vstack items-center">
      <Roulette roulette={roulette} />
      <div className="hstack">
        <button type="button" onClick={onStart}>
          Start
        </button>
        <button type="button" onClick={onStop}>
          Stop
        </button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
};