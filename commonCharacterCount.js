function commonCharacterCount(s1, s2) {
  var characters = {};
  var common = 0;
  for (var i = 0; i < s2.length; i++) {
    characters[s2[i]] ? characters[s2[i]]++ : characters[s2[i]] = 1;
  }
  for (var j = 0; j < s1.length; j++) {
    if (characters[s1[j]] > 0) {
      common++;
      characters[s1[j]]--;
    }
  }
  return common;
}
