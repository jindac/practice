function shapeArea(n) {
  return n === 1 ? 1 : shapeArea(n - 1) + (n - 1) * 4;
}