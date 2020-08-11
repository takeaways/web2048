import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboveGame from './components/AboveGame';
import Game from './components/Game';
import useLocalStorageNumber from './hook/useLocalStorageNumber';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorageNumber('bestScore', 0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  });

  return (
    <div className='container'>
      <Header score={score} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}
