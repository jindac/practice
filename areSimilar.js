function areSimilar(a, b) {
  var checkedIndex = {};
  var swapped = false;
  for (var i = 0; i < a.length; i++) {
    if (checkedIndex[i]) {
      continue;
    }
    if (a[i] !== b[i]) {
      if (swapped) {
        return false;
      }
      for (var j = i + 1; j < b.length; j++) {
        if (a[i] === b[j] && a[j] === b[i]) {
          checkedIndex[i] = true;
          checkedIndex[j] = true;
          swapped = true;
          break;
        }
      }
      if (!swapped) {
        return false;
      }
    }
  }
  return true;
}
