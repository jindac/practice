function isLucky(n) {
  var charArray = n.toString().split('');
  var left = charArray.slice(0, charArray.length / 2).reduce((acc, val) => {
    return acc + JSON.parse(val);
  }, 0);
  var right = charArray.slice(charArray.length / 2).reduce((acc, val) => {
    return acc + JSON.parse(val);
  }, 0);
  return left === right;
}