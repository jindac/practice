function isIPv4Address(inputString) {
  var stringArray = inputString.split('.');
  if (stringArray.length !== 4) {
    return false;
  }
  for (var i = 0; i < stringArray.length; i++) {
    var number = Number(stringArray[i]);
    if (stringArray[i].length === 0) {
      return false;
    } else if (!number && number !== 0) {
      return false;
    } else if (number > 255 || number < 0) {
      return false;
    }
  }
  return true;
}