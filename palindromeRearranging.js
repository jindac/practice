function palindromeRearranging(inputString) {
  var characterFrequencies = {};
  var oddFreqencies = 0;
  for (var i = 0; i < inputString.length; i++) {
    characterFrequencies[inputString[i]] = characterFrequencies[inputString[i]] + 1 || 1;
  };
  for (frequency in characterFrequencies) {
    if (characterFrequencies[frequency] % 2 !== 0) {
      oddFreqencies++;
    }
  };
  return oddFreqencies <= 1;
}