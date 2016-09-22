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
  var solutionCount = undefined; //fixme
  //roundsLeft = n  <-- n total addPiece function calls
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
                //if no conflicts, return solution

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
