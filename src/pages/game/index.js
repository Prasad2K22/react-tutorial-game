import React, { useState } from 'react';
import './Game.css';

const Square = ({ value, func }) => {
  // const [value, setValue] = useState(null);
  return (
    <button className="square" onClick={func}>
      {value}
    </button>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Board = ({ squares, funcHandle }) => {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [xIsNxt, setXIsNxt] = useState(true);

  const renderSquare = (i) => (
    <Square key={i} value={squares[i]} func={() => funcHandle(i)} />
  );

  return (
    <div>
      {/* <h2 className="status">{status}</h2> */}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  const [history, setHistory] = useState([[...Array(9).fill(null)]]);
  const [xIsNxt, setXIsNxt] = useState(true);
  const current = history[history.length - 1];

  const winner = calculateWinner(current);
  console.log(history);

  const handleClick = (i) => {
    if (winner || current[i]) return null;
    const Arr = [...current];
    Arr[i] = xIsNxt ? 'X' : 'O';
    setXIsNxt(!xIsNxt);
    setHistory([...history, Arr]);
  };

  const move = history.map((step, move) => {
    const desc = move ? `Go to Move # ${move}` : 'Go to Game Start';
    const jumpTo = (move) => {
      const his = history.slice(0, move + 1);
      console.log(move);
      setHistory(his);
      setXIsNxt(move % 2 === 0);
    };
    return (
      <li key={move} onClick={() => jumpTo(move)}>
        {desc}
      </li>
    );
  });

  const status = winner
    ? `Winner : ${winner}`
    : `Next Player : ${xIsNxt ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="board-game">
        <Board squares={current} xIsNxt={xIsNxt} funcHandle={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{move}</ol>
        <input
          onClick={(eve) => console.log(eve.target, eve)}
          minLength={0}
          maxLength={20}
        />
      </div>
    </div>
  );
};
export default Game;
