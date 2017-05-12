function arrayMaximalAdjacentDifference(inputArray) {
  var max = -Infinity;
  for (var i = 1; i < inputArray.length; i++) {
    var currentDifference = Math.abs(inputArray[i] - inputArray[i - 1]);
    if (currentDifference > max) {
      max = currentDifference;
    }
  }
  return max;
}