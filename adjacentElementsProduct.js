function adjacentElementsProduct(inputArray) {
  var highest = -Infinity;
  for (var i = 1; i < inputArray.length; i++) {
    if (inputArray[i - 1]) {
      var leftProduct = inputArray[i] * inputArray[i - 1];
      if (leftProduct > highest) {
        highest = leftProduct;
      }
    }
    if (inputArray[i + 1]) {
      var rightProduct = inputArray[i] * inputArray[i + 1];

      if (rightProduct > highest) {
        highest = rightProduct;
      }
    }
  }
  return highest;
}
