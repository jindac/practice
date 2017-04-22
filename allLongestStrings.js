function allLongestStrings(inputArray) {
  var strings = {};
  var longest = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (longest <= inputArray[i].length) {
      strings[inputArray[i].length] ? strings[inputArray[i].length].push(inputArray[i]) : strings[inputArray[i].length] = [inputArray[i]];
      if (longest < inputArray[i].length) {
        longest = inputArray[i].length;
      }
    }
  }
  return strings[longest];
}
