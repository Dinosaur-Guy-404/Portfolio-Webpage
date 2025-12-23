import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = checkWinner(board);

  function handleClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Tic Tac Toe
      </Typography>

      <Typography variant="h6" gutterBottom>
        {winner
          ? `Winner: ${winner}`
          : `Turn: ${isXTurn ? "X" : "O"}`}
      </Typography>

      {/* 3x3 Board */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: 1,
          justifyContent: "center",
          margin: "20px auto",
        }}
      >
        {board.map((value, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => handleClick(index)}
            sx={{
              width: 60,
              height: 60,
              fontSize: 24,
              minWidth: 0,
            }}
          >
            {value}
          </Button>
        ))}
      </Box>

      <Button variant="contained" onClick={resetGame}>
        Reset
      </Button>
    </Box>
  );
}

function checkWinner(board) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}
