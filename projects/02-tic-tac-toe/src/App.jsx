import { useState } from "react";
import "./App.css";

const TURN = {
  X: "x",
  O: "o",
};

const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};

export function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board)
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return <Square key={index} index={index}></Square>;
        })}
      </section>
    </main>
  );
}
