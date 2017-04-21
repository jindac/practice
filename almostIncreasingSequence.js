function almostIncreasingSequence(sequence) {
  var pivots = 0;
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i + 1] <= sequence[i]) {
      pivots++;
      if (sequence[i - 1] && sequence[i + 1] <= sequence[i - 1] ) {
        if (sequence[i + 2] <= sequence[i]) {
          return false;
        }
      }
    }
  }
  return pivots >= 2 ? false : true;
}