"use strict";

// Create a function to format the board when it is printed to the screen
var printBoard = function printBoard(board) {
  console.log("Current Board:");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = board[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var row = _step.value;

      console.log(row.join(' | '));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log("Generated using a for...in loop");
  // console.log(board[0].join(' | '));
  // console.log(board[1].join(' | '));
  // console.log(board[2].join(' | '));
};

// Create a generic game board
var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

printBoard(board);

board[0][1] = "1";
board[2][2] = "B";

printBoard(board);