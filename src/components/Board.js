import { useState } from "react";
import Square from "./Square";

const squares = new Array(9).fill(null);

function Board() {
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const handleSquareSelect = (index) => {
    squares[index] = xTurn ? "X" : "O";
    calculateWinner(squares);
    setXTurn(!xTurn);
  };
  const calculateWinner = (squares) => {
    let winner = 'No winner yet';
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    winningCombinations.forEach(combination => {
      if (squares[combination[0]] !== null &&
          squares[combination[0]] === squares[combination[1]] && 
          squares[combination[0]] === squares[combination[2]]) {
        winner = `${squares[combination[0]]} Wins!`;
        setIsGameOver(true);
        setWinner(winner);
        return;
      }
    });
  };

  const items = squares.map((s, index) => {
    return (
      <div className="square-wrapper" key={index}>
        <Square
          index={index}
          value={s}
          isGameOver={isGameOver}
          clickHandler={handleSquareSelect}
        ></Square>
      </div>
    );
  });

  return (
    <>
      <div className="wrapper">{items}</div>
      {isGameOver && <p>{winner}</p>}
      {!isGameOver && <p>It's {xTurn ? "X" : "O"} turn</p>}
      
    </>
  );
}

export default Board;
