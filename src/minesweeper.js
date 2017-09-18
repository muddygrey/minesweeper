// Create a function to format the board when it is printed to the screen
const printBoard = board => {
  console.log("Current Board:");
// loop through all the rows and print them to the screen with a pipe character separating columns
  for (var row of board) {
    console.log(row.join(' | '));
  }
};

// Create a generic game board
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);

board[0][1] = "1";
board[2][2] = "B";

printBoard(board);
