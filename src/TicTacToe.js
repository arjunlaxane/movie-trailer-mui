import { Board } from './Board';

export function TicTacToe({ val }) {
  return (
    <div className="heading-container">
      <div className="tic-tac-toe-title">Gorilla 🦍💪🐒 Monkey Fight</div>
      <div className="tic-tac-toe-msg">
        One who comes out of the cage first will be a winner
      </div>
      <Board />
      <div className="restart-container"></div>
    </div>
  );
}
