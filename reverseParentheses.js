function reverseParentheses(s) {
  s = s.split('');
  var result = [];
  var reverse = [];
  var inParens = false;
  var startIndexes = [];
  var stopIndex;
  for (var i = 0; i < s.length; i++) {
    if (inParens) {
      if (s[i] === ')') {
        stopIndex = i - 1;
        var start = startIndexes.pop();
        if (startIndexes.length === 0) {
          while (stopIndex > start) {
            if (s[stopIndex] !== '(' && s[stopIndex] !== ')') {
              result.push(s[stopIndex]);
              stopIndex--;
            }
          }
          inParens = false;
          continue;
        } else {
          while (stopIndex > start) {
            var temp = s[stopIndex];
            s[stopIndex] = s[start];
            s[start] = temp;
            stopIndex--;
            start++;
          }
          continue;
        }
      } else if (s[i] === '(') {
        startIndexes.push(i);
        continue;
      } else {
        continue;
      }
    }

    if (s[i] !== '(' && s[i] !== ')') {
      result.push(s[i]);
    } else if (s[i] === '(') {
      startIndexes.push(i);
      inParens = true;
    }
  }
  return result.join('');
}