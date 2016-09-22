/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var matrix = new Board({n: n});

  for (var i = 0; i < n; i++) {
    matrix.togglePiece(i, i);
  }

  return matrix.rows();


  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  debugger;
  var counter = 0;

  var solutionCounter = function (roundsLeft, posRows, posCols, board) {
    board = board || new Board({n: n});
    for (var row = 0; row < posRows.length; row++) {
      for (var col = 0; col < posCols; col++) {

        if (board.rows()[row][col] !== 1) {     //if spot is not occupied already
          board.togglePiece(row, col);              // toggle (row, col)
          if (board.hasAnyRooksConflicts()) {   //if conflicts
            board.togglePiece(row, col);            // toggle back
          } else {
            if (roundsLeft === 0) {
              counter ++;                       //if rounds left is 0 and no conflicts, INCREMENT COUNTER
              // board = new Board({n: n});
            } else {
              solutionCounter(roundsLeft - 1, board);
              board = new Board({n: n});
            }
          }
        }
      }
    }
  };
  var posCols = _.range(0, n - 1);
  var posRows = _.range(0, n - 1);

  solutionCounter(n - 1, posRows, posCols);
  //roundsLeft = n  <-- n total addPiece function calls
  //solutionCount = 0
  //Create n^2 boards, each with a different starting position
  //iterate through all possible starting points (nested loops for rows / cols)
    //place a rook at each starting point
      //Recursively call addPiece(nextMove, roundsLeft) function for each possible next move (n^2 - num of curr pieces)
        //subtract 1 from roundsLeft 
        //which creates a new board with prior piece in same place
        //and a rook on a new spot
          // check for any conflicts
            //if there are conflicts, STOP! Don't go any deeper, don't return anything
            //else, recursively call addPiece function
              //keep going for (n = size) number of recursive calls
                //if no conflicts, add 1 to solutionCount

  console.log('Number of solutions for ' + n + ' rooks:', counter);
  return counter;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
