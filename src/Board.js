import Button from '@mui/material/Button';
import { useState } from 'react';
import { GameBox } from './GameBox';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

//here I replaced X and O by '🦍' : '🐒'
const initial_Board = [null, null, null, null, null, null, null, null, null];

export function Board() {
  const [board, setBoard] = useState(initial_Board);

  const [isXTurn, setIsXTurn] = useState(true);

  const decideWinner = board => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // console.log(lines.length);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log(lines[i], a, b, c);
        console.log(board);
        console.log('Winner is', board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);
  console.log('cool', winner);
  const handleClick = index => {
    console.log(index);
    //Allow updating an untouch boxes, null means untouch
    // if (board[index] === null) {
    // if (!board[index]) {
    //if no winner && if its untouch then update
    if (!winner && !board[index]) {
      const boardCopy = [...board];
      // boardCopy[index] = 'X';
      boardCopy[index] = isXTurn ? '🦍' : '🐒';
      setIsXTurn(!isXTurn);
      //changing turn---null to animal
      setBoard(boardCopy);
    }
  };

  const restart = () => {
    setBoard(initial_Board);
    setIsXTurn(true);
  };

  const { width, height } = useWindowSize();

  return (
    <div className="main-container">
      {winner ? (
        <Confetti width={width} height={height} gravity={0.1} wind={0.02} />
      ) : null}
      <div className="board">
        {/* <GameBox />
            <GameBox />
            <GameBox />
            <GameBox />
            <GameBox />
            <GameBox />
            <GameBox />
            <GameBox />
            <GameBox /> */}

        {board.map((val, index) => (
          <GameBox
            key={index}
            val={val}
            onPlayerClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div>
        {winner ? (
          <h1>
            Winner of the match is :<span className="output"> {winner}</span>
          </h1>
        ) : null}

        <Button onClick={restart} varient="outlines" color="inherit">
          Restart
        </Button>
      </div>
    </div>
  );
}
