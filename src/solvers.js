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
  var results = {};

  var solutionCounter = function (posCols, row, board ) {
    board = board || new Board({n: n});

    for (var j = 0; j < posCols.length; j++) {
      var col = posCols[j];

      if (board.rows()[row][col] !== 1) {     //if spot is not occupied already
        board.togglePiece(row, col);              // toggle (row, col) putting in a piece
    
        if (row === n - 1) {
          results[JSON.stringify(board.rows())] = 1;                       //if rounds left is 0, add result to hash
          board.togglePiece(row, col );
        } else {
          posCols.splice(_.indexOf(posCols, col), 1);   //take toggled col out of available options

          solutionCounter(posCols, row + 1, board);

          board.togglePiece(row, col ); //remove piece from board
          posCols.push(col);
          posCols.sort();

        }
      }
    }
  };
  var posCols = _.range(0, n);

  solutionCounter( posCols, 0);

  var counter = Object.keys(results).length;
  console.log(results);

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