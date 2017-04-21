function matrixElementsSum(matrix) {
  var cost = 0;
  var haunted = {};
  for (var floor = 0; floor < matrix.length; floor++) {
    for (var room = 0; room < matrix[floor].length; room++) {
      if (matrix[floor][room] !== 0 && !haunted[room]) {
        cost += matrix[floor][room];
      } else {
        haunted[room] = true;
      }
    }
  }
  return cost;
}