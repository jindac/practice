function addBorder(picture) {
  for (var i = 0; i < picture.length; i ++) {
    picture[i] = '*' + picture[i] + '*';
  }
  var borderLength = picture[0].length;
  var border = [''];
  for (var j = borderLength; j > 0; j--) {
    border[0] += '*';
  }
  return border.concat(picture).concat(border);
}