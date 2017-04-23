function sortByHeight(a) {
  var heights = [...a];
  heights.sort((a, b) => {
    if (a === -1) {
      return -1;
    } else if (b === -1) {
      return 1;
    } else if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = heights.pop();
    }
  }
  return a;
}