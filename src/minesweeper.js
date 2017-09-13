// Declare a constant for a blank line of the game board
const blankLine = "  |   |  ";
// Declare a constant for a sample line of the game board where a user has 'guessed' by selecting the first square
const guessLine = "1 |   |  ";
// Declare a constant for a sample line of the game board where a bomb/mine is revealed
const bombLine = "  | B |  ";

// Print the blank line to the console for testing and demonstrating a sample empty game board
console.log("This is what an empty game board would look like:");
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

// Print the simulated game board to the console
console.log("This is what a game board with a guess and a bomb on it might look like:");
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);
