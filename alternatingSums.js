function alternatingSums(a) {
  var team1 = true;
  var result = [0, 0];
  for (var i = 0; i < a.length; i++) {
    if (team1) {
      result[0] += a[i];
    } else {
      result[1] += a[i];
    }
    team1 = !team1;
  }
  return result;
}