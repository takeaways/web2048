import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import AboveGame from './components/AboveGame';

function App() {
  return (
    <div className='container'>
      <Header />
      <AboveGame />
      <Game />
    </div>
  );
}

export default App;
