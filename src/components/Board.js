import { useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const handleSquareSelect = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    squares[index] = xTurn ? "X" : "O";
    setSquares(squares);
    setXTurn(!xTurn);
  };

  const handleRestartGame = () => {
    setSquares(new Array(9).fill(null));
    setXTurn(true);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xTurn ? "X" : "O"}`;
  }

  return (
    <>
      <h2>Tic Tac Toe</h2>
      <div className="wrapper">
        {squares.map((s, index) => {
          return (
            <div className="square-wrapper" key={index}>
              <Square
                index={index}
                value={s}
                clickHandler={handleSquareSelect}
              ></Square>
            </div>
          );
        })}
      </div>
      <p>{status}</p>
      {winner && (
        <button className="restart" onClick={handleRestartGame}>
          Restart Game
        </button>
      )}
    </>
  );
}

export default Board;

const calculateWinner = (squares) => {
  let winner;
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningCombinations.forEach((combination) => {
    const [a, b, c] = combination;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[combination[0]];
    }
  });
  return winner;
};
