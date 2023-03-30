import './App.css';
import TicTacToe from './TicTacToe/TicTacToe';
import View from './TicTacToe/View';
import React from 'react';

function App() {
  return (
    <div className="App">
      <View />
      <TicTacToe />
    </div>
  );
}

export default App;
